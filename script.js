function changePosition() {
    var button = document.getElementById("myButton");
    button.style.position = "absolute";
    button.style.top = Math.random() * 500 + "px";
    button.style.left = Math.random() * 500 + "px";
}