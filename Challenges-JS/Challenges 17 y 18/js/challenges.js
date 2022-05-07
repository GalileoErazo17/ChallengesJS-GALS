/* El usuario ingresa un DNI.Comprobar que sea válido, es decir,
 que tenga 7 u 8 dígitos y que no sea todos ceros */

 // let dni = prompt("Inserte su dni por favor.");
 // 
 // if (
 //   (0000000 != dni && dni <= 9999999 && dni.length == 7) ||
 //   (00000000 != dni && dni <= 99999999 && dni.length == 8)
 // ) {
 //   alert("Su DNI es: " + dni);
 // } else {
 //   alert("Su DNI no es válido.");
 // }

 /* Piedra, papel o tijeras */

 let options = ["piedra", "papel", "tijeras"];


function botMove(){
    const random = Math.round(Math.random()*2.05)
    return options[random]
}

function user (player){
    let bot = botMove();

    switch(true){
        case player==bot:
        alert(`El bot jugó ${bot}. Empate`);
        break;
        case player=='piedra' && bot=='papel':
        alert(`El bot jugó ${bot}.` + ' Gana bot');
        break;
        case player=='piedra' && bot=='tijera':
        alert(`El bot jugó ${bot}.`+' A casa bot');
        break;
        case player=='papel' && bot=='piedra':
        alert(`El bot jugó ${bot}.`+' A casa bot');
        break;
        case player=='papel' && bot=='tijeras':
        alert(`El bot jugó ${bot}.`+' Gana bot');
        break;
        case player=='tijera' && bot=='piedra':
        alert(`El bot jugó ${bot}.`+' Gana bot');
        break;
        case player=='tijera' && bot=='papel':
        alert(`El bot jugó ${bot}.`+' A casa bot');
        break;
    }
}

