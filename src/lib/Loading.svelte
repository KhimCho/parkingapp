<script lang=ts>
    import { loading } from "./loading";
    import { ProgressRadial } from "@skeletonlabs/skeleton";
</script>

{#if $loading}
<ProgressRadial/>
{/if}