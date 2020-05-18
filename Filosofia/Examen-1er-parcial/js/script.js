document.addEventListener("DOMContentLoaded", function (event){
	function qs (nombre) {
		return document.querySelector(nombre);
	}

	// carga de los tiles
	$ajaxUtils.realizarPeticionGet("snippets/home-tiles.html", function (peticion) {
		qs("#main-content").innerHTML = peticion;

		// tile1 content
		qs("#tile1").onclick = tile1Click;

		// tile2 content
		qs("#tile2").onclick = tile2Click;

		//tile3 content
		qs("#tile3").onclick = tile3Click;

	}, false);

	// til1 function 
	function tile1Click (event){
		console.log("not yet set");
	}

	// tile 2 function
	function tile2Click (event) {
		$ajaxUtils.realizarPeticionGet("snippets/tile2-content.html",
		function(peticion){
				qs("#tile2_target").innerHTML = peticion;
				qs("#common_target_lg").innerHTML = peticion;
				qs("#t2-md-target").innerHTML = peticion;
		}
		,false);
	}

	// tile 3 function
	function tile3Click (event) {
		$ajaxUtils.realizarPeticionGet("snippets/tile3-content.html",
		function(peticion){
				qs("#tile3_target").innerHTML = peticion;
				qs("#common_target_lg").innerHTML = peticion;
				qs("#tile3_target_md").innerHTML = peticion;
		}
		,false);
	}
});