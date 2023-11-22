const fs = require("fs");
const csv = require("csv-parser");



const inputFilePath = "./files/file.csv";
const outputFilePath = "./files/file.json";

const results = [];

fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on("data", (data) => {
    results.push(data); // Almacena cada fila del CSV en el array 'results'
  })
  .on("end", () => {
    // Convierte el array de resultados a formato JSON
    const jsonData = JSON.stringify(results, null, 2);

    // Escribe los datos JSON en un archivo de salida
    fs.writeFileSync(outputFilePath, jsonData);

    console.log("¡Conversión de CSV a JSON completada!");

    console.log("wenas!");
  });
