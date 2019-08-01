
 function checkNumber (num) {
 	if (num<0 || num!==num) {
 		return false;
 	} 
	else return true;
}	

var exponent = function exponentiation (basis, power) {
	if (power === 0) {
		basis = 1;
		return basis;
	}
	if (power === 1) {
		return exp;
	} 
	else {
		exp = exp * basis;
		power = power - 1;
		return exponentiation(basis, power);
	}
}
var number = +prompt ('Введите число для возведения в степень');
checkNumber (number) ? number = number : alert (' Можно ввести только цифры больше нуля!');
var power = +prompt ('Введите степень в которую надо возвести число');
checkNumber (power) ? power = power : alert (' Можно ввести только цифры больше нуля!');

console.log (number, power);
var exp = number;
alert('результат = ' + exponent(number, power) );

/*do {
	var hight = +prompt ('Введите высоту вершины прямоугольного треугольника');
	if (hight<=0 || hight!==hight) {
		alert(' Можно ввести только цифры!');
	}
	else {
		alert (calcHight (hight));	
		break;
	}
} while (hight>0);*/