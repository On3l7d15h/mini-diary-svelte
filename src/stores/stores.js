import { writable } from "svelte/store"

export let title = writable("Mini Diario!");

export let d = [
    {id: null, 
    title: "La Mejor Navidad", 
    desc: "El 24 de Diciembre fue la mejor navidad que tuve en toda mi vida! Realmente una de las mejores fiestas!", 
    img: "https://i.picsum.photos/id/186/2048/1275.jpg?hmac=s7zZ_JZGEdO6Z5osibrSaE9roarIGV7aTEKJXacZi_U"}
];

// funciones

const functions = () => {
    const { subscribe, set, update } = writable([...d]);

    return {
        subscribe,
        local: (data) => {
            set(data)
        },
        add: (data) => {
            if(data.title !== "" && data.title !== null){
                if(data.desc !== "" && data.desc !== null){
                    if(data.img !== "" && data.img !== null){
                        update((dt) => dt = [...dt, data]);
                        Swal.fire({
                            title: "Mini Diary v1.0",
                            text: "Guardado con éxito!",
                            icon: "success"
                        })
                    } else {
                        Swal.fire({
                            title: "Mini Diary v1.0",
                            text: "Uups! Campos Vacíos!",
                            icon: "error"
                        })
                    }
                } else {
                    Swal.fire({
                        title: "Mini Diary v1.0",
                        text: "Uups! Campos Vacíos!",
                        icon: "error"
                    })
                }
            } else {
                Swal.fire({
                    title: "Mini Diary v1.0",
                    text: "Uups! Campos Vacíos!",
                    icon: "error"
                })
            }
        },
        delete: (id) => {
            update((dt) => dt = dt.filter((d) => d.id !== id))
            Swal.fire({
                title: "Mini Diary v1.0",
                text: "Eliminado con éxito!",
                icon: "success"
            })
        }
    }
}

export const diary = functions();