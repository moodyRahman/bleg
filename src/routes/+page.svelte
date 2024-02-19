
<script lang="ts">
    	export let data;

        const posts = data.data
</script>
<pre>

    {JSON.stringify(posts, null, 2)}
    
</pre>
{#each posts as post}
    <a href={post.slug}>
        {post.title}  <br>
    </a>
{/each}

