<script>
    // importaciones
    import Post from "./Post.svelte"
    import { diary } from "../stores/stores"
</script>

<div class="posts">
    <h1> Todas tus informaciones! </h1>
    <!-- minidiario! -->
    <section>
        {#if ($diary.length > 0)}
            {#each $diary as dream, index}
                <Post {dream} {index}/>
            {/each}
        {:else}
            <br />
            <h3> No hay ningún recuerdo! </h3>    
        {/if}
    </section>
</div>

<style>
    /* No tirarle a Jeimy Mucho, que la tenemos Halta! */
    *
    {
        margin: 0;
        padding: 0;
    }

    .posts
    {
        width: 90%;
        background: var(--c-powder);
        text-align: center;
        padding: 10px;
        color: white;
        height: 91.3vh;
    }   

        .posts h1 
        {
            font-size: 40px;
            margin: 10px auto;
        }

        .posts section
        {
            padding: 10px;
            width: 95%;
            height: 80vh;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            overflow: scroll;
            overflow-x: hidden;
        }

            .posts section::-webkit-scrollbar
            {
                background: rgba(0, 0, 0, .3);
                border-radius: 5px;
            }

            .posts section::-webkit-scrollbar-thumb
            {
                background: var(--c-teal);
                border-radius: 5px;
                border: 2px solid rgba(0, 0, 0, .3); 
            }
</style>