
<script lang="ts">
    	export let data;
</script>


{#each data.data as x}
    <a href={x.slug}>
        here is a link to {x.title}  <br>
    </a>
{/each}

