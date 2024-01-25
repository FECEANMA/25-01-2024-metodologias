'use strict'
/*
let fruits = ['apple','limon','orange','grapes'];

//fruta dulce

let [fruit1, fruit2, fruit3, fruit4] = fruits

alert(`Las frutas dulces son: ${fruit1},${fruit4}`);

//fruta acida

alert(`Las frutas acidas son: ${fruit2},${fruit3}`);

//mas frutas
*/

let fruits = ['apple','limon','orange','grapes'];

let [sweetfruit, acidfruit, ...restofruits] = fruits

alert(sweetfruit); //apple
alert(acidfruit); //limon
alert(restofruits) //orange,grapes
