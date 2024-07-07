while (true) {
    let name1 = prompt("Ingrese el nombre del primer enemigo:");
    if (name1 === null) break; 
    let distance1 = parseFloat(prompt("Ingrese la distancia del primer enemigo:"));
    if (distance1 === null || distance1 < 0) break; 

    let name2 = prompt("Ingrese el nombre del segundo enemigo:");
    if (name2 === null) break;
    let distance2 = parseFloat(prompt("Ingrese la distancia del segundo enemigo:"));
    if (distance2 === null || distance2 < 0) break;

    let enemigoCercano;
    if (distance1 < distance2) {
        enemigoCercano = name1;
    } else if (distance2 < distance1) {
        enemigoCercano = name2;
    } else {
        enemigoCercano = name1; 
    }

    console.log("El enemigo más cercano es: " + enemigoCercano  );
}
