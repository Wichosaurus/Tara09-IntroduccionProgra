const enemigos = [
    { name: 'EnemyA', distance: 15, prioridad: 2 },
    { name: 'EnemyB', distance: 20, prioridad: 2 },
];

function encontrarObjetivo(enemigos) {

    let objetivo = enemigos[0];

    for (let i = 1; i < enemigos.length; i++) {
        if (enemigos[i].prioridad > objetivo.prioridad) {
            objetivo = enemigos[i];
        } else if (enemigos[i].prioridad === objetivo.prioridad) {
            if (enemigos[i].distance < objetivo.distance) {
                objetivo = enemigos[i];
            }
        }   
    }
    return objetivo.name;
}

console.log("El enemigo a atacar es: " + encontrarObjetivo(enemigos));
