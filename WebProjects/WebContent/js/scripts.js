var __jquery = jQuery.noConflict();

function loadContent(view) {
	var url = "views/" + view + ".html";
	__jquery(".content").load(url, function(response, status, xhr) {
		__jquery(".fondpuzzle div").click(function() {
			var enlace = __jquery(this); 
			enlace.animate({
				opacity: 1
			}, 1500 );
			enlace.addClass("active");
			
			var n = __jquery(".fondpuzzle div.active").length;
			if (5 === n) {
				__jquery(".exito").show();
			}
		});
		if (status == "error") {
			var msg = "Sorry but there was an error: ";
			__jquery("#error").html(msg + xhr.status + " " + xhr.statusText);
		}
	});
}

__jquery(document).ready(function() {
	__jquery("nav a").click(function() {
		var url = __jquery(this).attr("href").replace("#","");;
		loadContent(url);
	});
});