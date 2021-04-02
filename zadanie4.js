// let rr
// function liczPoleKola(r){
//    if(r===null){ rr = document.getElementById("pole").valueAsNumber;
//     let pi = 3.141592653589793
//     let pole = pi *rr*rr
//     console.log(pole) 
//     let newElement = document.createElement('li')
//     let tekst = document.createTextNode(pole)
//     let nowaWartosc =document.getElementById('nowa')
//     nowaWartosc.appendChild(newElement).appendChild(tekst)
//     }   
//     else{
//         let pi = 3.141592653589793
//         let pole = pi *r*r
//         console.log(pole) 
//         let newElement = document.createElement('li')
//         let tekst = document.createTextNode(pole)
//         let nowaWartosc =document.getElementById('nowa')
//         nowaWartosc.appendChild(newElement).appendChild(tekst)
//     }
// }



let rr
let r
// if(rr="")
// {

// }
// else{
    function liczPoleKola(r){
    let pi = 3.141592653589793
    let pole = pi*r*r
    console.log(pole) 
    let newElement = document.createElement('li')
    let tekst = document.createTextNode(pole)
    let nowaWartosc =document.getElementById('nowa')
    nowaWartosc.appendChild(newElement).appendChild(tekst)
    }

liczPoleKola(5)
liczPoleKola(3)
liczPoleKola(15)
function liczPoleKola1(rr)
{
 rr = document.getElementById("pole").valueAsNumber;
 let pi = 3.141592653589793
 let pole = pi*rr*rr
 console.log(pole) 
 let newElement = document.createElement('li')
 let tekst = document.createTextNode(pole)
 let nowaWartosc =document.getElementById('nowa')
 nowaWartosc.appendChild(newElement).appendChild(tekst)
}
// zostawiam komentarze nie przez niedbałosc lecz po to by zobaczyć sciezke jaką się kierowałem
