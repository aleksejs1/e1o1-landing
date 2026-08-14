<script lang="ts">
	import { getContent } from '$lib/content';
	import LegalPage from '$lib/design/LegalPage.svelte';

	const content = $derived(getContent());
</script>

<LegalPage legal={content.terms} />
