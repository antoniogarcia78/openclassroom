// Recomendaciones
// 1. Use descriptive names throughout your code:
// amount > amt

// 2. Spell it out
// annualRevenue > annualRev.

// 3. Follow a common naming convention: camelCase
// numberOfCats


// En ES6 usamos let para declarar variables. Antiguamnete se usaba var
// La difernecia entre ambas es el ambito donde la variable existe y puede ser usada

// Declarar variable
let numberOfCats;
// Inicializar variable
numberOfCats = 2;
// Declaracion e Inicializacion
let numberOfCats = 2;
// modificar (en cualquier momento)
numberOfCats = 10;

// Operadores aritmeticos
let totalCDs = 67;
let totalVinyls = 34;

// Suma
let totalMusic = totalCDs + totalVinyls;
console.log(totalMusic);
totalCDs += 2; // equivale a totalCDs = totalCDs + 2

// Incremento 
totalVinyls++; // equivale a totalVinlys = totalVinlys + 1


// Resta
let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;

cookiesInJar -= 2; // otra forma de restar

// Decremento
cookiesInJar--;

// Multiplicacion y Division
let costPerProduct = 20;
let numberOfProducts = 2;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;

// Constantes: son como variables pero una vez inicializadas no se puede modificar
const hoursPerDay=24;