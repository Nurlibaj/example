// Get the modal
var modal = document.getElementById("myModal");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var one = document.getElementById("one");
var two = document.getElementById("two");
var btn = document.getElementById("open");
var alert = document.getElementById("end");
var sub = document.getElementById("sub");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}
sub.onclick=function () {
	alert.style.display="block";
}

span.onclick = function() {
  modal.style.display = "none";
  alert.style.display="none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
     alert.style.display="none";
  }
}

next.onclick=function() {
	one.style.display="none";
	two.style.display="block";
	document.getElementById('status').style.width = '100%';
	document.getElementById("status").innerHTML="100%";
}
prev.onclick=function() {
	one.style.display="block";
	two.style.display="none";
	document.getElementById('status').style.width = '50%';
	document.getElementById("status").innerHTML="50%";
	 alert.style.display="none";
}