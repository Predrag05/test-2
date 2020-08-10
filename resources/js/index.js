let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
console.log(dinos)
/////////////////////////////////////////
// let Scipionyx = {
//     id: 0,
//     name: 'Scipionyx',
//     img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
//     cena: 221
// }

// let Becklespinax = {
//     id: 1,
//     name: 'Becklespinax',
//     img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
//     cena: 275}

// let Sciurumimus = {
//     id: 2,
//     name: 'Sciurumimus',
//     img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
//     cena: 341
// }
// let Hypsilophodon = {
//     id: 3,
//     name: 'Hypsilophodon',
//     img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
//     cena: 189
// }
// let Dacentrurus = {
//     id: 4,
//     name: 'Dacentrurus',
//     img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
//     cena: 315
// }
// let Iguanodon = {
//     id: 5,
//     name: 'Iguanodon',
//     img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
//     cena: 374
// }
// let Asylosaurus = {
//     id: 6,
//     name: 'Asylosaurus',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
//     cena: 301
// }
// let Efraasia = {
//     id: 7,
//     name: 'Efraasia',
//     img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
//     cena: 199
// }
// let Cryptosaurus = {
//     id: 8,
//     name: 'Cryptosaurus',
//     img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
//     cena: 218
// }

// let dinosauros = [Scipionyx,Becklespinax,Sciurumimus,Hypsilophodon,Dacentrurus,Iguanodon,Asylosaurus,Efraasia,Cryptosaurus]
// console.log(dinosauros)




const divItem = document.querySelector('.item')
const forma = document.querySelector('#forma')
const napomena = document.querySelector('.textarea-field')
const osoba = document.querySelector('#kupac')
const izborDinosaurusa = document.querySelector('#select-dino')
let nizPoruceno = []
dinos.forEach((e) => {
    let odabir = document.createElement('option')
    odabir.value = e.name.toLocaleLowerCase()
    odabir.textContent = e.name + ' - ' + e.cena + 'Dinara po komadu'
    izborDinosaurusa.append(odabir)
})
forma.addEventListener('submit', (e) => {
    e.preventDefault()
    if((osoba.value.trim().length) > 3 && izborDinosaurusa.value !== ''){
        console.log(osoba.value,izborDinosaurusa.value,napomena.value)}
    else{
        console.log('Pogresan unos')}
        nizPoruceno.push(osoba.value,izborDinosaurusa.value,napomena.value)
})