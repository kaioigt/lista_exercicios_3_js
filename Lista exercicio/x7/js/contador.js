let nome;
let contadorCompleto;
let contador1;
let contador2;

nome = prompt('Informe o nome completo');

contadorCompleto = nome.length; 

contador1 = nome.split(" ").length;
contador2 = (contadorCompleto - contador1) + 1;

alert('total de caracteres  ' + contadorCompleto);
alert('total de caracteres  ' + contador2);
