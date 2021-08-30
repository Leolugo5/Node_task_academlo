console.log("hello world!");
console.log("---------------------->")
// Módulo de fylesystem o fs
const fs = require("fs/promises"); //import fs from "fs"
const path = require("path");
// C:\Users\leolu\OneDrive\Documents\GitHub\Academlo\Node\Prueba 1\requirements.txt
const requirementsPath = path.resolve("requirements.txt");


// // |||| CALLS BAC Método para leer un archivo
// fs.readFile(requirementsPath, "utf8", (error, data) => {
//     if(!error) {//si no hay errores al momento de leer el archivo 
//         console.log(data);
//         return fs.writeFile(requirementsPath, "esto es lo queremos escribir en el documento, hello leonardo!!!", (error) => {
//             if(error) {
//                 console.log("No se ha podido escribir en el archivo")
//             }
//         })
//     }
//     // si hay errores regresaremos este resultado
//     return console.log(error);
// });



//||| PROMESAS Y ASYNC/AWAIT 
fs.readFile(requirementsPath, "utf8")
.then(data => console.log(data))
.catch(error => console.log(error));


(async () => {
    try {
        const data = await fs.readFile(requirementsPath, "utf8")
    console.log(data)
    } catch(error) {
        console.log(error)
    }
})