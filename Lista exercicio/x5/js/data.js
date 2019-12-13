let data;
let dd;
let mm;
let aa;

data = prompt('Informe a data AA/MM/AAAA: ');

	if (data.length==10) {

		dd =data.slice(0,2);
		mm =data.slice(3,5);
		aa =data.slice(6,10);
	}

document.write('Dia :',dd);
document.write('Mes :',mm);
document.write('Ano :',aa);