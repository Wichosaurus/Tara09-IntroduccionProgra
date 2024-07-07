const enemigos = [
    { name: 'EnemyA', distance: 30, prioridad: 2, velocidad: 10 },
    { name: 'EnemyB', distance: 30, prioridad: 2, velocidad: 20 },
];

function encontrarObjetivo(enemigos) {

    let objetivo = enemigos[0];

    for (let i = 1; i < enemigos.length; i++) {
        if (enemigos[i].prioridad > objetivo.prioridad) {
            objetivo = enemigos[i];
        } else if (enemigos[i].prioridad === objetivo.prioridad) {
            if (enemigos[i].distance < objetivo.distance) {
                objetivo = enemigos[i];
            } else if (enemigos[i].distance === objetivo.distance) {
                if (enemigos[i].velocidad > objetivo.velocidad) {
                    objetivo = enemigos[i];
                }
            }
        }
    }
    
    return objetivo.name;
}

console.log("El enemigo a atacar es: " + encontrarObjetivo(enemigos));
