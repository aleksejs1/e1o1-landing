#!/usr/bin/env bash
# Builds and (re)deploys the landing page as a single, fixed-name container
# — replaces whatever was already running under that name, so a redeploy
# never requires looking up a container ID/name by hand. Run from anywhere;
# it cd's to the repo root itself.
#
# Usage: docker/prod/deploy.sh
# Override any of these via env vars, e.g. HOST_PORT=9000 docker/prod/deploy.sh
set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-e1o1-landing}"
CONTAINER_NAME="${CONTAINER_NAME:-e1o1-landing}"
HOST_PORT="${HOST_PORT:-8204}"

cd "$(dirname "$0")/../.."

echo "Building $IMAGE_NAME..."
docker build -f docker/prod/app.Dockerfile -t "$IMAGE_NAME" .

echo "Removing any existing $CONTAINER_NAME container..."
docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true

echo "Starting $CONTAINER_NAME on host port $HOST_PORT..."
docker run -d \
	--name "$CONTAINER_NAME" \
	--restart unless-stopped \
	-p "${HOST_PORT}:8080" \
	"$IMAGE_NAME"

echo "Deployed: container '$CONTAINER_NAME', http://localhost:${HOST_PORT}"
