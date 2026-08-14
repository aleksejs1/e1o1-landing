<script lang="ts">
	import { themeState, toggleTheme } from '$lib/theme.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<button
	type="button"
	class="btn btn-secondary btn-icon"
	onclick={toggleTheme}
	aria-label={themeState.theme === 'dark' ? m.theme_switch_to_light() : m.theme_switch_to_dark()}
>
	{themeState.theme === 'dark' ? '☀' : '☾'}
</button>
