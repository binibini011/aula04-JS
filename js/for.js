let numeroFor = 0;
// sorteando 10 números
for(let i = 0; i <= 9; i++){
numeroFor = parseInt(Math.random()*101);
console.log(numeroFor);
}
console.log('-----------------------------');
console.log('-----------------------------');

// fazer uma contagem entre 0 e 20

for (let i = 0; i <=20; i++){
console.log(i);

}

console.log('-------------------------------');
console.log('-------------------------------');

// fazer uma contagem entre 0 e 100 pulando de 5 em 5
for (let i = 0; i <=100; i+=5){
    console.log(i);
}

console.log('-------------------------------');
console.log('-------------------------------');

// Fazer uma contagem regressiva entre 20 e 0
for( let i = 20; i>=0; i--){
    console.log(i);
}

console.log('-------------------------------');
console.log('-------------------------------');

// Sortear um numero entre 0 e 10 - Exibir na tela:
//  o numero sorteado check
//  tabuada desse numero  no formato:
//  numeroSorteado * 0 = result
//  numeroSorteado * 1 =result
//  ~~~~~~~~~~~~~~~~~~~~
//  numeroSorteado * 10 =result
//  obrigatorio usar for
let numeroTab = parseInt(Math.random()*11);
for(let i = 0; i <= 10; i++){
    console.log(`${numeroTab}x ${i} = ${numeroTab*i}`)
    }
