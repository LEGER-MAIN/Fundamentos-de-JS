// Operadores en js (Intermedio)

// Comparación

/*
    Los operadores de comparación comparan dos expresiones y devuelven un valor
    Boolean que representa la relación de sus valores (true o false)
*/

x == b; // Igualdad
x != b; // Desigualdad
x === b; // Identidad (estríctamente igual)
x !== b; // No identidad (estríctamente desigual)
x > b; // Mayor que
x >= b; // Mayor o igual que
x < b; // Menor que
x <= b; // Menor o igual que

// Lógicos

/*
    Los operadores lógicos nos devuelven un resultado a partir de que se cumpla (o no)
    una condición, su resultado es booleano, y sus operandos son valores lógicos
    o asimilables a ellos
*/

let valor = true;
let valor2 = true;

let resultado = valor && valor2; // Operador AND (si las dos condiciones se cumplen es true)

let resultado2 = valor || valor2; // Operador OR (si cualquiera de las dos se cumple es true)

let resultado3 = !valor; // Operador NOT (es true cambia a false, es false cambia a true)