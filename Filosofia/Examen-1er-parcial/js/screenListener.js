(function (global){

	var screenListener = {};

	screenListener.getSize = function (){
		var size = window.innerWidth;
		return size;
	}

	global.$screenListener = screenListener;

})(window);