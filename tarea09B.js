const enemigos = [
    { name: 'EnemyX', distance: 10 },
    { name: 'EnemyY', distance: 10 },
];

function encontrarCercano(enemigos) {
    let enemigoCercano = enemigos[0];
    for (let i = 1; i < enemigos.length; i++) {
        // Solo actualizamos si encontramos una distancia menor, 
        // lo que significa que si las distancias son iguales,
        // enemigoCercano no cambiará y se mantendrá el primero.
        if (enemigos[i].distance < enemigoCercano.distance) {
            enemigoCercano = enemigos[i];
        }
    }
    return enemigoCercano.name;
}

console.log("El enemigo más cercano es: " + encontrarCercano(enemigos));
