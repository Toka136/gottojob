function myFunction() {
    var x = document.getElementById("flex-header");
    var b=document.getElementById("big");
    if (x.style.display === "none") {
    x.style.display = "block";
    // b.style.height='800px'
    } else {
    x.style.display = "none";
    }
}