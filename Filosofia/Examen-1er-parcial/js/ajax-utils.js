(function (global) {

	var ajaxUtils = {};
	
	function inicializar () {
		if(window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}else if(window.ActiveXObject){
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}else{
			return (null);
		}
	}

	ajaxUtils.realizarPeticionGet = function (requestUrl, respuestaDeManejo, isJson){
		var peticion = inicializar();

		peticion.onreadystatechange = function () {
			administradorDeManejo(peticion, respuestaDeManejo, isJson);
		};

		peticion.open("GET", requestUrl, true);
		peticion.send(null);
	}

	function administradorDeManejo(peticion, respuestaDeManejo, isJson){
		if((peticion.readyState == 4)&&(peticion.status == 200)){
			if(isJson == undefined){
				isJson = true;
			}if(isJson){
				respuestaDeManejo(JSON.parse(peticion.responseText));
			}else{
				respuestaDeManejo(peticion.responseText);
			}
		}
	}

	global.$ajaxUtils = ajaxUtils;

})(window);