calc = document.getElementById("btnCalcularIMC");
peso = document.getElementById("inputPeso");
estatura = document.getElementById("inputEstatura");
imc = document.getElementById("resIMC");
nivelimc = document.getElementById("resNivel");
selectMedida = document.getElementById("selectMedidas");

function calcularIMCenKG(peso,estatura){
	return (peso / (estatura * estatura));
}

function calcularIMCenLB(peso,estatura){
	return (peso / (estatura * estatura))*703;
}

calc.onclick = function(){
		if(peso.value!="" && estatura.value!=""){
			
			if(selectMedida.value=="kg"){
				imcx = calcularIMCenKG(peso.value,estatura.value);
			}
			if(selectMedida.value=="lb"){
				imcx = calcularIMCenLB(peso.value,estatura.value);
			}
			
			imc.innerHTML = imcx;
			
			if(imcx<18.5){ nivelimc.innerHTML = "Peso inferior al normal"; }
			if(imcx>=18.5 && imcx<=24.9){ nivelimc.innerHTML = "Peso normal"; }
			if (imcx>=25 && imcx<=29.9){ nivelimc.innerHTML = "Sobrepeso"; }
			if(imcx>30){ nivelimc.innerHTML = "Obesidad"; }
			

			

		}else{
			alert("Debes ingresar peso y estatura.")
		}

	};
    
	
