var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsById('myImg');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class



var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}