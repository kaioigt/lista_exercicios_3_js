let nota = 0;
let cont = 0;
let soma = 0;

do{
	nota = prompt('Informe a nota ');
	if (nota != 'fim') {

		
		soma = soma + Number(nota);
		cont++;


	}



}while (nota != 'fim');
console.log (soma);
console.log (cont);

let media = soma/cont;

alert(media);







