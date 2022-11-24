const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;
while( carros[i]){
    console.log(carros[i]);
    i++;
}

//*Si se quiere parar el ciclo breack

let j = 0;
while( carros[j]){
    if(carros[j] == 'Mazda') break;
    console.log(carros[j]);
    j++;
}

//*termina esa iteracion y va a la siguiente iteracion

let x = 0;
while( carros[x]){
    if(carros[x] == 'Mazda'){
        x++ 
        continue
    } 
    console.log(carros[x]);
    x++;
}