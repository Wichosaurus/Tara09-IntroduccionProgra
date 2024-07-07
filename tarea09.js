const enemigos = [
    { name: 'EnemyA', distance: 10 },
    { name: 'EnemyB', distance: 20 },
];

function encontrarCercano(enemigos) {
    let enemigoCercano = enemigos[0];
    for (let i = 1; i < enemigos.length; i++) {
        if (enemigos[i].distance < enemigoCercano.distance) {
            enemigoCercano = enemigos[i];
        }
    }
    return enemigoCercano.name;
}

console.log("El enemigo más cercano es: " + encontrarCercano(enemigos));