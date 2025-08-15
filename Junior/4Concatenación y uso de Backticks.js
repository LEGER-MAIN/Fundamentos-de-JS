// Concatenación

saludo = "¡Hola pedro!, ";
pregunta = "¿Cómo estas?";

frase = saludo + pregunta; // Concatenación sencilla

// Cuando se concatena un string con un número el intérprete de JavaScript (JavaScript Engine) 
// convierte todo lo que le sigue desde ese punto a string
numero1 = 48;
numero2 = 34;

suma =  numero1 + numero2 + ""; 


// Otra forma de concatenar es con el método concat()
frase = saludo.concat(pregunta); // Concatenando con el método concat()


// Otra forma de concatenar es el símbolo de dolar ($) entre backticks (``)
frase = `${saludo}${pregunta} soy Jefferson 
Leger`; // Los backticks omiten los saltos de líneas con (Enter) 

// Para escribir codigo html en js hay que usar backticks
document.write(`<h1>Titulo</h1>`);


// Template string

// Si vas a usar comillas dobles ("") en tu string, usa comillas simples ('') para contenerlas
frase = 'Hola me gusta la "casa"';

// Si vas a usar comillas simples ('') en tu string, usa comillas dobles ("") para contenerlas
frase = "Hola me gusta la 'casa'";

// Lo mismo si quieres usar backticks
frase = "Hola me gusta la `casa`";