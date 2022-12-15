//array Pizzas
//-6 objetos
//-objeto con: 
//           id: 1,2,3
//         nombre
//       ingredientes: lista (subarray)
//     precio
//
//Al array:
//-console.log id IMPARES
//-true o false, pizza <600
//-console.log pizzas con su precio
//-console.log de ingredientes cada pizza, 
//una por una a partir de iteracion


const pizzas=[
    {
        id: 1,
        nombre: "muzza",
        precio:500,
        ingredientes: ["muzarella", "tomate", "aceitunas"],

    },
    //los corchetes y SIN CLASS son una forma mas abreviada y simple.
    {
        id: 2,
        nombre: "pizza de cebolla",
        precio:400,
        ingredientes: ["cebolla", "tomate", "queso cremoso"],

    },
    {
        id: 3,
        nombre: "4 quesos",
        precio:700,
        ingredientes: ["muzarella", "queso cremoso", "roqueford", "queso cabra"],

    },
    {
        id: 4,
        nombre: "napolitana",
        precio:600,
        ingredientes: ["muzarella", "tomate", "aceitunas", "anchoas"],

    },
    {
        id: 5,
        nombre: "especial",
        precio:950,
        ingredientes: ["muzarella", "tomate", "aceitunas", "paleta", "champiñones"],

    },
    {
        id: 6,
        nombre: "anana-pizza",
        precio:800,
        ingredientes: ["muzarella", "tomate", "anana"],

    },
]


//console.log(pizzas)


//❤️INCISO A❤️

/*opcion 1, muy abreviada
pizzas.forEach (pizza => {
    if (pizza.id % 2 !== 0){
        console.log(`la ${pizza.nombre} tiene un id impar`);
    }
});
*/

/*opcion 2, con const, mas completa y entendible
const pizzasImpares=pizzas.filter (pizza => pizza.id % 2 !== 0);
pizzasImpares.forEach (pizza => console.log(`la ${pizza.nombre} tiene un id impar`));
*/


//❤️INCISO B❤️
const precioMenor600= (pizza)=> pizza.precio<600;
if(pizzas.some(precioMenor600)){
    console.log("Hay pizzas menores a $600");
} else{
    console.log("No hya pizzas menores a $600")
}

