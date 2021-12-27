<script>
    import { title }  from "../stores/stores.js";

    const info = () => {
        Swal.fire({
            title: "Mini Diary v1.0",
            text: "Primera versión de la Aplicación, desarrollada por On3l7d15h © CopyRight con Svelte!",
            icon: "success"
        })
    }
</script>

<div class="nav">
    <span>{$title}</span>
    <section>
        <button on:click={info}>info of the App!</button>
    </section>
</div>

<style>
    /* your styles go here */
    .nav 
    {
        max-width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
    }

        .nav span 
        {
            border-radius: 5px;
            font-weight: bold;
            padding: 10px;
            background: var(--c-tangerine);
            color: white;
        }

        .nav section
        {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

            .nav section button
            {
                outline: 0;
                border: 2px solid white;
                color: white;
                font-size: 16px;
                padding: 5px;
                font-weight: bold;
                border-radius: 5px;
                cursor: pointer;
                background: var(--c-teal);
                transition: .6s all ease;
            } 

            .nav section button:hover
            {
                background: var(--c-powder);
            }
</style>

