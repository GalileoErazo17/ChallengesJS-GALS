/* Crear un algoritmo por el cual se simule el lanzamiento de dos dados

alert("Presione 'Aceptar' para tirar los dados");
alert("Los dados están en el aire");
alert("Los dados están acomodándose");


let random = Math.round(Math.random()*6)
if(random == 0){
    console.log("Se te cayó este dado. Volve a tirar!");
} else {
console.log("El primer dado te dió un: ", random);
}

let random2 = Math.round(Math.random()*6)
if(random2 == 0){
    console.log("Se te cayó este dado. Volve a tirar!");
} else {
    console.log("El segundo dado te dió un: ", random2);
}

*/


/* Pedirle números al usuario hasta que el usuario aprete el botón de cancelar.
-Verificar que lo ingresado por el usuario sea un número válido (avisar por alert si no lo es).
-Al apretar cancelar, se deben mostrar todos los números juntos. 

EJEMPLO:
1. Me pide un número
2. Ingreso un 15
3. Me pide otro número
4. Ingreso la palabra Diego
5. Me dice que no es un número válido
6. Ingreso un 23
7. Me pide otro número
8. Apreto cancelar
9. En consola se muestra '1523'
10. No me pide más números */

let arraynum = [];
let num = 0;
    do{
        num = Number(prompt("Escriba un numero. Para salir, escriba '0', presione 'cancelar' o 'aceptar'"));
        if (num>=0){
            if (num!=0) {
                arraynum.push(num);
                num = null;
            }
        } else {
            alert("No es un numero valido");
        }

    }while(num!=0);
    console.log(arraynum.join(''));

alert("Hasta pronto");