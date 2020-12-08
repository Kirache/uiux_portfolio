var shown = false;

function readMore() {
	var btn = document.getElementById("chapter-button");
	var btnText = btn.innerHTML;

	if (btnText.localeCompare("Show Less") == 0){
		$(".more-chapters").hide();
		btn.innerHTML = "Show More";
	}

	if (btnText.localeCompare("Show More") == 0){
		$(".more-chapters").show();
		btn.innerHTML = "Show Less";
	}
}

function commentMore() {
	var btn = document.getElementById("comment-button");
	var btnText = btn.innerHTML;

	if (btnText.localeCompare("Show Less") == 0){
		$(".single-comment-more").css("display", "none");;
		btn.innerHTML = "Show More";
	}

	if (btnText.localeCompare("Show More") == 0){
		$(".single-comment-more").css("display", "flex");
		btn.innerHTML = "Show Less";
	}
}

function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
	shown = false;
  } else {
    x.style.display = "block";
	shown = true;
  }
}

$(window).resize(function() {
	if (shown == true) {
		if ($(window).width() > 800){
			shown = false;
			document.getElementById("links").style.display = "None";
		}
	}
});
