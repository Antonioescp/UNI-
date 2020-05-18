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

	// general tiles function 

	// reseter
	window.addEventListener("resize", function(event){
		if($screenListener.getSize() >= 992){
			qs("#tile2").onclick = tile2Click;
			qs("#tile3").onclick = tile3Click;
		}else if(($screenListener.getSize() >= 768) && ($screenListener.getSize() < 992)){
			qs("#tile2").onclick = tile2Click;
			qs("#tile3").onclick = tile3Click;
		}
	});

	// til1 function 
	function tile1Click (event){
		console.log("not yet set");
	}

	// tile 2 function
	function tile2Click (event) {
		$ajaxUtils.realizarPeticionGet("snippets/tile2-content.html",
		function(peticion){

			// large
			if($screenListener.getSize() >= 992){
				qs("#common_target_lg").innerHTML = peticion;
			}
			// medium
			else if(($screenListener.getSize() < 992) && ($screenListener.getSize() >= 768)) {
				qs("#t2-md-target").innerHTML = peticion;
				qs("#tile2").onclick = tile2Blur;
			}
			//small
			else{
				qs("#tile2_target").innerHTML = peticion;
				qs("#tile2").onclick = tile2Blur;
			}
				
		}
		,false);
	}

	function tile2Blur (event){
		// Medium
		if(($screenListener.getSize() >= 768) && ($screenListener.getSize() < 992)){
			qs("#t2-md-target").innerHTML = "";
		}
		qs("#tile2_target").innerHTML = "";
		qs("#tile2").onclick = tile2Click;
	}

	// tile 3 function
	function tile3Click (event) {
		$ajaxUtils.realizarPeticionGet("snippets/tile3-content.html",
		function(peticion){
			// large
			if($screenListener.getSize() >= 992){
				qs("#common_target_lg").innerHTML = peticion;
			}
			// medium
			else if(($screenListener.getSize() < 992) && ($screenListener.getSize() >= 768)) {
				qs("#tile3_target_md").innerHTML = peticion;
				qs("#tile3").onclick = tile3Blur;
			}
			//small
			else{
				qs("#tile3_target").innerHTML = peticion;
				qs("#tile3").onclick = tile3Blur;
			}
		}
		,false);
	}

	function tile3Blur (event) {

		// Medium
		if(($screenListener.getSize() >= 768) && ($screenListener.getSize() < 992)){
			qs("#tile3_target_md").innerHTML = "";
		}
		// small
		qs("#tile3_target").innerHTML = "";
		qs("#tile3").onclick = tile3Click;
	}
});