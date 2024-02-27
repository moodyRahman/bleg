<script lang="ts">
    export let raw: string
</script>
  
<code>{raw.replace(/`/g, '')}</code>

<style>
    code {
        background-color: #2f3d57;
        color: white;
    }
</style>