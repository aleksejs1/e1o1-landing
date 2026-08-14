<script lang="ts">
	import { getLegalContent } from '$lib/content';
	import LegalPage from '$lib/design/LegalPage.svelte';

	const legal = $derived(getLegalContent());
</script>

<LegalPage legal={legal.privacyPolicy} />
