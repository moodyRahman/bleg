<script lang="ts">
    export let lang: string
    export let text: string
</script>

<pre class={lang}><code>{text}</code></pre>

<style>
    code {
        background-color: #2f3d57;
    }
</style>