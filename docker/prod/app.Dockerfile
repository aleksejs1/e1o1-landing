# Prod image — fully static site, no backend. Multi-stage: Node builds the
# SvelteKit static output (adapter-static, every route prerendered), then a
# minimal caddy:2-alpine runtime serves only the built files plus the
# Caddyfile. Zero Node/build tooling in the final image.

FROM node:26-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM caddy:2-alpine
COPY docker/prod/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/build /srv

# Runs as a fixed non-root user, not root — a real reduction in blast
# radius if this container is ever compromised. 10001 is an arbitrary,
# non-system UID/GID, chosen only to avoid colliding with anything else in
# the base image (same convention as the main app's own prod Dockerfile).
# setcap grants the caddy binary CAP_NET_BIND_SERVICE so it can still bind
# a privileged port (e.g. an operator setting PORT=80) despite not running
# as root — libcap2 (which provides setcap) is already present in this base
# image, confirmed directly rather than assumed. /config/caddy and
# /data/caddy (Caddy's own state dirs — irrelevant here since auto_https is
# off and this site has no TLS state to persist, but harmless to leave
# correctly owned) are already world-writable in the base image; /srv is
# chowned explicitly since COPY --from defaults to root:root.
RUN addgroup -g 10001 app \
    && adduser -D -u 10001 -G app app \
    && setcap 'cap_net_bind_service=+ep' /usr/bin/caddy \
    && chown -R app:app /srv
USER app

# wget is BusyBox's own, already present in every Alpine image — no extra
# package needed. Shell-form CMD (no []) runs through /bin/sh -c, which
# expands $PORT from the container's actual runtime environment — verified
# for real: a naive hardcoded :8080 here silently reported "unhealthy"
# forever against a container started with PORT=9090, since nothing was
# listening on 8080. ${PORT:-8080} matches the Caddyfile's own default.
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null "http://127.0.0.1:${PORT:-8080}/" || exit 1
