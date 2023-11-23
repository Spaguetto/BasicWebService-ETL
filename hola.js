const fs = require("fs");
const jsontoxml = require("jsontoxml");

const jsonInputFilePath = "./files/file.json"; //RUta de entrada
const jsonOutputFilePath = "./files/file.xml"; //Ruta de Salida

fs.readFile(jsonInputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo JSON:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data); //Parsea el documento
    const xmlData = jsontoxml(jsonData); // Convierte el JSON a XML

    fs.writeFileSync(jsonOutputFilePath, xmlData); // Guarda el archivo XML

    console.log("¡Conversión de JSON a XML completada!");
  } catch (error) {
    console.log(
      "Wenas hubo un error ese profe es malo convirtiendo JSON a XML",
    );
  }
});
