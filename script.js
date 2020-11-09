/* Metod console.log() vivodit informasiyu v brauzere */

console.log(1)

// Tipi dannix 

console.log('Bekzod') /* String - strokoviy tip dannix */
console.log(25) /* chislovoy tip dannix */
console.log(true) /* Boolean TRUE logichesky tip dannix */ 
console.log(false) /* Boolean FALse */ 
//  PEREMENNIE 
var name = 'Bekzod'
console.log(name)

var age = 25
console.log(age)

var emp 
console.log(emp)

// STROKOVIY OPERATOR 
console.log('ya ' + name + '! Mne ' + age + 'let.') /* KONKATENASIYA */
var myInfo = 'ya ' + name + '! Mne ' + age + 'let.'
console.log(myInfo + ' Uxu!!!')

//  ARIFMETIKA 

console.log(6 + 3)
console.log(6 - 3)
console.log(6 * 3)
console.log(9 / 3)
console.log(10 % 3) /* delenie S ostatkoy */ 

// ARIFMETIKA I KONKATENASIYA 

console.log('6 + 3 = ' + (6 + 3));
console.log('6 - 3 = ' + (6 - 3));
console.log('6 * 3 = ' + 6 * 3);
console.log('6 / 3 = ' + 6 / 3);


// // Okna brauzera 
// var setName = prompt('Vvedite svoe imya')
// alert('HEllo ' + setName + '!')

var name = +prompt ('Vvedite imya')
var age = +prompt ('VVedite vozrast')
var primer = +prompt ('Reshite primer 7 + 3')
var primer = +prompt ('Reshite primer 20 - 10')
var primer = +prompt ('Reshite primer 7 * 7')
var primer = +prompt ('Reshite primer 30 / 2')
var primer = +prompt ('Reshite primer 10 % 3')
var Otkroyte console dlya prosmotra = +prompt ('')
console.log(name, age, primer, primer, primer, primer, primer, Otkroyte console dlya prosmotra)
