const fs = require('fs');
let saludo = "Hallo " + " नमस्कार";
console.log("Escribe Su Nombre (ingrese 'salir' para terminar)");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var dato = d.toString().trim();
    console.log(`hallo`);
    var dato = d.toString().trim();
    console.log(`नमस्कार`);
    if (dato == 'salir') {
        return process.stdin.destroy();
    }
    else {
        console.log("No ingresaste un número válido");
    }
    var base = parseInt(dato);
    
            fs.writeFile(
                `nombre.txt`,
                saludo,
                (err) => {
                    if (err)
                        throw err;
                    console.log(`nombre ${ base } creada.`);
                }
            );
        
    
});

    