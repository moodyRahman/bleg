<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown'
    import Paragraph from '$lib/markdown/Paragraph.svelte';
    
    export let data;

    const post = data.posts?.find((x) => x.slug === data.slug)
    const date = new Date(post?.createdAt!)

</script>

<h3>
    {post?.title}
</h3>
<small>
    published: {date.toString()}
</small>

<p>
    <SvelteMarkdown source={post?.content} renderers={{paragraph: Paragraph}} />
</p>




<style>

    h3 {
        margin: 0;
    }
    
    small {
        margin-top: 2%;
        font-size: 1rem;
    }

</style>