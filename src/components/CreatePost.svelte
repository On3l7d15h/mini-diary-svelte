<script>
    import { diary } from "../stores/stores.js"

    $: dream = {id: null, title: "", desc: "", img: ""}

    const addDream = () => {
        diary.add(dream);
        dream = {id: null, title: "", desc: "", img: ""}
    }

</script>

<div class="create-post">
    <form on:submit|preventDefault={addDream}>
        <label>
            titulo del Recuerdo:
            <input type="text" bind:value={dream.title}/>
        </label>
        <label>
            Descripción del Recuerdo:
            <input type="text" bind:value={dream.desc}/>
        </label>
        <label>
            Link de imágen:
            <input type="text" bind:value={dream.img}/>
        </label>
        <button>Subir!</button>
    </form>
</div>

<style>

    .create-post
    {
        width: 20%;
        background: var(--c-tan);
        padding: 10px;
        height: 91.3vh;   
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }

        .create-post form
        {
            padding: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .3);
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            background: white;
        }

            .create-post form label
            {
                margin: 10px auto;
                font-size: 18px;
                text-align: center;
                font-weight: bold;
                color: var(--c-tangerine);
            }

                .create-post form label input
                {
                    border-radius: 5px;
                    outline: 0;
                    border: 2px solid var(--c-tangerine);
                    margin: 5px auto;
                    background: transparent;
                    color: var(--c-tangerine);
                }

                .create-post form button
                {
                    outline: 0;
                    font-weight: bold;
                    border: 0;
                    color: white;
                    cursor: pointer;
                    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .3);
                    background: var(--c-tangerine);
                    transition: .5s all ease;
                }

                    .create-post form button:hover
                    {
                        background: var(--c-teal);
                    }

</style>