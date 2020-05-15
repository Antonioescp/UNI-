document.addEventListener("DOMContentLoaded", function (event){
	function qs (nombre) {
		return document.querySelector(nombre);
	}

	// carga de los tiles
	$ajaxUtils.realizarPeticionGet("snippets/home-tiles.html", function (peticion) {
		qs("#main-content").innerHTML = peticion;

		// tile2 content
		qs("#tile2").onclick = tile2Click;
		qs("#tile2").blur = tile2Blur;

		//tile3 content
		qs("#tile3").onclick = tile3Click;
		qs("#tile2").blur = tile3Blur;

	}, false);

	function tile2Click (event) {
		$ajaxUtils.realizarPeticionGet("snippets/tile2-content.html",
		function(peticion){
				qs("#tile2_target").innerHTML = peticion;
				qs("#tile2").onclick = tile2Blur;
		}
		,false);
	}

	function tile2Blur (event){
		qs("#tile2_target").innerHTML = "";
		qs("#tile2").onclick = tile2Click;
	}

	function tile3Click (event) {
		$ajaxUtils.realizarPeticionGet("snippets/tile3-content.html",
		function(peticion){
				qs("#tile3_target").innerHTML = peticion;
				qs("#tile3").onclick = tile3Blur;
		}
		,false);
	}

	function tile3Blur (event){
		qs("#tile3_target").innerHTML = "";
		qs("#tile3").onclick = tile3Click;
	}
});