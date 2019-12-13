let idade=0;
let maior = 0;
let menor = 0;
let cont = 0;
let soma = 0;

do{
	idade = prompt('Informe a idade ');
	if (idade != 'fim') {

		if (idade >= 18) {
			maior = maior + 1;
		}

		if (idade < 18) {
			menor = menor + 1;
		}

		


	}



}while (idade != 'fim');

alert('quantidade de adultos: '+maior);
alert('quantidade de menores: '+menor);