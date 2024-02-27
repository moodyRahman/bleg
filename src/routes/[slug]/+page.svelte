<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown'
    import Paragraph from '$lib/markdown/Paragraph.svelte';
	import Image from '$lib/markdown/Image.svelte';
	import BlockQuote from '$lib/markdown/BlockQuote.svelte';
	import Code from '$lib/markdown/Code.svelte';
	import CodeSpan from '$lib/markdown/CodeSpan.svelte';
    
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
    <SvelteMarkdown source={post?.content} 
    renderers={{
        paragraph: Paragraph,
        image: Image,
        blockquote: BlockQuote,
        code: Code,
        codespan: CodeSpan
    }} />
</p>




<style>

    h3 {
        margin: 0;
    }

    small {
        margin-top: 2%;
        font-size: 1rem;
    }

    p {
        margin-top: 40px;
    }

</style>