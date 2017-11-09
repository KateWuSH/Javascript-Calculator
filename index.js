function numShow() {
    var num = document.getElementsByTagName('button')[1].getAttribute("data-num");
    document.getElementById("viewer").innerHTML = num;
    console.log(num);
}