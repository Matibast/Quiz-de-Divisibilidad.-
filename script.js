let jugador = "";
let puntos = 0;
let aciertos = 0;
let errores = 0;
let preguntaActual = 0;
let racha = 0;
let nivel = "facil";

const TOTAL_PREGUNTAS = 16;

const preguntas = [

{
tipo:"facil",
pregunta:"¿Qué significa MCD?",
respuesta:[
  "maximo comun divisor","máximo común divisor"
]
},

{
tipo:"facil",
pregunta:"¿Qué significa mcm?",
respuesta:[
  "minimo comun multiplo","mínimo común múltiplo"
]
},

{
tipo:"facil",
pregunta:"¿Qué es un número primo?",
respuesta:[
"numero mayor que 1 que tiene exactamente dos divisores",
"tiene dos divisores",
"solo divisible por 1 y por si mismo"
]
},

{
tipo:"intermedio",
pregunta:"¿Cuál es la relación entre el MCD y el mcm de dos números?",
respuesta:[
"mcd por mcm igual a a por b",
"mcd(a,b) x mcm(a,b)=a x b"
]
},

{
tipo:"dificil",
pregunta:"¿Cómo se descompone 27144 en factores primos?\nUsa ^ para las potencias.",
respuesta:[
"2^3 3^2 13 29",
"2^3x3^2x13x29",
"2^3*3^2*13*29"
]
},

{
tipo:"facil",
pregunta:"¿Qué es el mínimo común múltiplo (mcm)?",
respuesta:[
"menor numero positivo que es multiplo de todos los numeros dados",
"el menor multiplo comun",
"menor numero positivo multiplo"
]
},

{
tipo:"facil",
pregunta:"¿Qué indica el último resto no nulo en el algoritmo de Euclides?",
respuesta:[
"mcd",
"maximo comun divisor"
]
},

{
tipo:"facil",
pregunta:"¿Cuándo termina el algoritmo de Euclides?",
respuesta:[
"cuando el resto es 0",
"resto cero",
"cuando da 0"
]
},

{
tipo:"facil",
pregunta:"¿Qué es un número compuesto?",
respuesta:[
"tiene mas de dos divisores",
"numero con mas de dos divisores",
"mas de dos divisores"
]
},

{
tipo:"facil",
pregunta:"¿Qué son dos números coprimos?",
respuesta:[
"su unico divisor comun es 1",
"divisor comun 1",
"coprimos"
]
},

{
tipo:"intermedio",
pregunta:"Si el MCD de dos números es 1, ¿cómo se llaman esos números?",
respuesta:[
"coprimos"
]
},

{
tipo:"intermedio",
pregunta:"Según el ejemplo, ¿cuál es el MCD de 414 y 120?",
respuesta:[
"6"
]
},

{
tipo:"intermedio",
pregunta:"¿Cuál es el mcm de 414 y 120?",
respuesta:[
"8280"
]
},

{
tipo:"intermedio",
pregunta:"¿Qué operación se utiliza para hallar el mcm si ya conocemos el MCD?",
respuesta:[
"multiplicar los numeros y dividir entre el mcd",
"producto dividido entre mcd",
"multiplicar y dividir por mcd"
]
},

{
tipo:"intermedio",
pregunta:"¿Qué significa DPFP?",
respuesta:[
"descomposicion en producto de factores primos"
]
},

{
tipo:"intermedio",
pregunta:"¿Qué afirma el Teorema Fundamental de la Aritmética?",
respuesta:[
"todo numero compuesto puede descomponerse en factores primos de forma unica",
"descomposicion unica",
"factores primos unica"
]
},

{
tipo:"dificil",
pregunta:"¿Por qué la descomposición en factores primos es única?",
respuesta:[
"porque tiene una unica descomposicion",
"descomposicion unica",
"unica sin importar el orden"
]
},

{
tipo:"dificil",
pregunta:"¿El número 1 es primo?",
respuesta:[
"no"
]
},

{
tipo:"dificil",
pregunta:"¿El número 2 es primo o compuesto?",
respuesta:[
"primo"
]
},

{
tipo:"dificil",
pregunta:"¿Qué tienen en común todos los números primos?",
respuesta:[
"solo divisibles por 1 y ellos mismos",
"dos divisores",
"1 y ellos mismos"
]
},

{
tipo:"vf",
pregunta:"Verdadero o Falso: Un número compuesto tiene exactamente dos divisores.",
respuesta:[
"falso"
]
},

{
tipo:"vf",
pregunta:"Verdadero o Falso: El algoritmo de Euclides termina cuando el resto es 0.",
respuesta:[
"verdadero"
]
},

{
tipo:"vf",
pregunta:"Verdadero o Falso: Dos números coprimos tienen MCD igual a 1.",
respuesta:[
"verdadero"
]
},

{
tipo:"vf",
pregunta:"Verdadero o Falso: Todos los números mayores que 1 son primos.",
respuesta:[
"falso"
]
},

{
tipo:"vf",
pregunta:"Verdadero o Falso: El mcm siempre es menor que el MCD.",
respuesta:[
"falso"
]
},

{
tipo:"multiple",
pregunta:"¿Cuál de los siguientes es un número primo? A)15 B)21 C)17 D)27",
respuesta:[
"c",
"17"
]
},

{
tipo:"multiple",
pregunta:"¿Cuál de estos números es compuesto? A)13 B)19 C)25 D)31",
respuesta:[
"c",
"25"
]
},

{
tipo:"multiple",
pregunta:"Si dos números son coprimos, su MCD es: A)0 B)1 C)2 D)Depende",
respuesta:[
"b",
"1"
]
},

{
tipo:"multiple",
pregunta:"¿Qué representa el último resto no nulo en el algoritmo de Euclides? A)mcm B)cociente C)MCD D)dividendo",
respuesta:[
"c",
"mcd"
]
},

{
tipo:"multiple",
pregunta:"¿Qué número NO es primo? A)11 B)23 C)29 D)27",
respuesta:[
"d",
"27"
]
}

];

let preguntasPartida = [];

function cambiarPantalla(id){

document
.querySelectorAll(".pantalla")
.forEach(p=>p.classList.remove("activa"));

document
.getElementById(id)
.classList.add("activa");

}

function iniciarJuego(){

jugador =
document.getElementById("nombre").value.trim();

if(jugador===""){
alert("Escribe tu nombre");
return;
}

puntos=0;
aciertos=0;
errores=0;
racha=0;
preguntaActual=0;

preguntasPartida =
[...preguntas]
.sort(()=>Math.random()-0.5)
.slice(0,TOTAL_PREGUNTAS);

cambiarPantalla("quiz");

mostrarPregunta();

}

function mostrarPregunta(){

if(preguntaActual>=preguntasPartida.length){
finalizar();
return;
}

let p = preguntasPartida[preguntaActual];

document.getElementById("pregunta")
.textContent = p.pregunta;

document.getElementById("contador")
.textContent =
`Pregunta ${preguntaActual+1}/${preguntasPartida.length}`;

let progreso =
((preguntaActual)/preguntasPartida.length)*100;

document.getElementById("progreso")
.style.width = progreso+"%";

let contenedor =
document.getElementById("respuestas");

contenedor.innerHTML = "";

let input =
document.createElement("input");

input.className="respuestaTexto";

input.placeholder="Escribe tu respuesta";

contenedor.appendChild(input);

let boton =
document.createElement("button");

boton.textContent="Responder";

boton.onclick=()=>{

let respuesta =
input.value
.toLowerCase()
.trim();

let correcto =
p.respuesta.some(r =>
respuesta.includes(
r.toLowerCase()
)
);

if(correcto){

aciertos++;
racha++;

if(p.tipo==="facil"){
puntos+=10;
}

if(p.tipo==="intermedio"){
puntos+=15;
}

if(p.tipo==="dificil"){
puntos+=45;
}

if(p.tipo==="vf"){
puntos+=20;
}

if(p.tipo==="multiple"){
puntos+=35;
}

alert("✅ Correcto");

}else{

errores++;
racha=0;

alert("❌ Incorrecto");

}

document
.getElementById("puntos")
.textContent=puntos;

preguntaActual++;

mostrarPregunta();

};

contenedor.appendChild(boton);

}

function finalizar(){

let precision =
aciertos+errores===0
?0
:Math.round(
(aciertos/(aciertos+errores))*100
);

document
.getElementById("nombreFinal")
.textContent=
"Jugador: "+jugador;

document
.getElementById("puntajeFinal")
.textContent=
"Puntos: "+puntos;

document
.getElementById("aciertosFinal")
.textContent=
"Aciertos: "+aciertos;

document
.getElementById("erroresFinal")
.textContent=
"Errores: "+errores;

document
.getElementById("precisionFinal")
.textContent=
"Precisión: "+precision+"%";

guardarRanking();

cambiarPantalla("resultado");

}

function guardarRanking(){

let ranking =
JSON.parse(
localStorage.getItem("ranking")
) || [];

ranking.push({
nombre:jugador,
puntos:puntos
});

ranking.sort(
(a,b)=>b.puntos-a.puntos
);

localStorage.setItem(
"ranking",
JSON.stringify(ranking)
);

}

function mostrarRanking(){

let ranking =
JSON.parse(
localStorage.getItem("ranking")
) || [];

let tabla =
document.getElementById(
"tablaRanking"
);

tabla.innerHTML="";

ranking.forEach((j,i)=>{

tabla.innerHTML += "<tr>" +
"<td>" + (i+1) + "</td>" +
"<td>" + j.nombre + "</td>" +
"<td>" + j.puntos + "</td>" +
"</tr>";

});

cambiarPantalla("ranking");

}

function volverInicio(){

cambiarPantalla("inicio");

}