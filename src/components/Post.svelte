<script>
    
    // importaciones
    import { diary } from "../stores/stores"

    //variables
    export let dream;
    export let index;

    const deleteDream = (id) => {
        console.log(id)
        diary.delete(id);
    }

</script>

<div class="card">
    <!-- {dream = {...dream, id: index +}} -->
    <section>
        <img src={dream.img} alt="preview"/>
    </section>
    <div>
        <h2>{dream.title}</h2>
        <p>{dream.desc}</p>
        <div>
            <button on:click={deleteDream(dream.id = index)}> Eliminar! </button>
        </div>
    </div>
</div>

<style>
    .card 
    {
        width: 25%;
        padding: 10px;
        margin: 20px auto;
        background: white;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
    }

        .card section
        {
            width: 100%;
            overflow: hidden;
        }

            .card section img
            {
                width: 100%;
                height: 250px;
                transition: .5s all ease;
            }

                .card section:hover img
                {
                    filter: saturate(0%);
                    transform: scale(1.5);
                }

            .card div h2
            {
                font-size: 30px;
                color: var(--c-powder);
            }

            .card div p
            {
                font-size: 18px;
                color: rgba(0, 0, 0, 0.8);
            }

            .card div button
            {
                border: 0;
                outline: 0;
                padding: 10px;
                border-radius: 5px;
                background: var(--c-tangerine);
                cursor: pointer;
                color: white;
                font-weight: bold;
                font-size: 16px;
                transition: .5s all ease;
            }

                .card div button:hover
                {
                    background: var(--c-tan);
                }
</style>