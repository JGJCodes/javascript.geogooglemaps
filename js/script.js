

function obtener(){navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);}


function mostrar(posicion){

	var longitud=document.getElementById('longitud');
	var latitud=document.getElementById('latitud');
	var exactitud=document.getElementById('exactitud');
	
	var datos='';
	
	datos = posicion.coords.latitude;
	latitud.innerHTML = datos;
	
	datos = posicion.coords.longitude;
	longitud.innerHTML = datos;
	
	datos = posicion.coords.accuracy;
	exactitud.innerHTML = datos;
	
	
	//Crear el elemento mapa con mis coordenadas
	var miscoordenadas = { lat: posicion.coords.latitude, lng: posicion.coords.longitude};
	
	var mapa = new google.maps.Map(document.getElementById('mapa'), {
		zoom: 20,
		center: miscoordenadas
	});

	var markermap = new google.maps.Marker({
		position: miscoordenadas,
		map: mapa
	});	
	
}


function gestionarErrores(error){

alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+

'a internet y habilite la opción permitir compartir ubicación física');

}

 
google.maps.event.addDomListener(window, 'load', obtener);
window.addEventListener('load', obtener, false);