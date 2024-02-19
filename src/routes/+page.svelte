
<script lang="ts">
    	export let data;

        const posts = data.data

        const generateDateString = (timestamp: string) => {
            const z = new Date(timestamp)

            return z.toLocaleString()

        }
</script>

{#each posts as post}
<div class="post">
    <a href={post.slug}>
        {post.title}
    </a>
    <small>
        {generateDateString(post.createdAt)}
    </small>
    <small>
        {#each post.tags as tag}
            <span>
                {tag}
            </span>
        {/each}
    </small>
    </div>
{/each}


<style>
    .post {
        margin-bottom: 1rem;
        width: fit-content;
        padding: 1rem;
    }

    small {
        font-size: 1rem;
        display:block;
    }

    small > span {
        padding-left: .2rem;
        padding-right: .2rem;
        margin-left: .3rem;
        margin-right: .3rem;


        width: fit-content;

        background-color: #34425c;
        color: #cdcdc2;
    }

</style>