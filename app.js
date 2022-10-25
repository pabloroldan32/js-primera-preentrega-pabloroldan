//simulador interactivo

//calcular interes en las cuotas
alert("Monto total $59000")

let ingresarTarjeta = prompt("Ingresar tarjeta: Visa, Mastercard, Amex");
let cantidadCuotas= prompt("Ingresar cantidad de cuotas: 3, 6, 9, 12");

while((ingresarTarjeta=="")||(cantidadCuotas=="")){
		alert("Ingrese los datos correctos, intente nuevamente");
		break;

	}




if ((ingresarTarjeta =="visa") || (ingresarTarjeta=="VISA")) {
	function interesVisa(calcular){
	switch (calcular){
		case "3":
		return 59000/3;
		case "6":
		return (59000*1.10) / 6;
		case "9":
		return (59000*1.15)/ 9;
		case"12":
		return (59000* 1.20)/ 12;
		default:
		return "Intente de nuevo"; 
	} 
}
alert(interesVisa (cantidadCuotas, "calcular"));

}


else if ((ingresarTarjeta=="mastercard") || (ingresarTarjeta== "MASTERCARD")){
	function interesMaster(calcular1){
		switch (calcular1){
			case "3":
			return 59000/3;
			case "6":
			return (59000*1.20) / 6;
			case "9":
			return (59000*1.40)/ 9;
			case"12":
			return (59000* 1.50)/ 12;
			default:
			return "Intente de nuevo"; 
		}
	}
alert(interesMaster (cantidadCuotas, "calcular1"));

}



		
else if ((ingresarTarjeta=="amex") || (ingresarTarjeta=="AMEX")) {
		function interesAmex(calcular2){
			switch (calcular2){
				case "3":
				return 59000/3;
				case "6":
				return (59000*1.50) / 6;
				case "9":
				return (59000*1.65)/ 9;
				case"12":
				return (59000* 1.70)/ 12;
				default:
				return "Intente de nuevo";
			}

		}
alert(interesAmex(cantidadCuotas,"calcular2"))

}

else{
	alert("Intente otra vez");
}



