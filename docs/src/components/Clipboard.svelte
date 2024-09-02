<script>
    import { onMount } from "svelte";
    export let resultUrl;

    let textarea;

    onMount(() => {
        textarea.select();
        document.execCommand("copy");
    })
</script>


<textarea bind:value={resultUrl} bind:this={textarea}></textarea>
