
import { heroes } from "./data/heroes"


const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id === id)
}

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(2)
//         resolve(heroe)
//     }, 2000)
// })

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe)
// })

const getHereoByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id)
            if(heroe){
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el heroe')
            }
        }, 2000)
    })
}

getHereoByIdAsync(2)
    .then(console.log)
    .catch( err => console.log(err))