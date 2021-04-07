function myFunction() {
    let a = document.getElementById("money").value;
    let f = document.getElementById("from").value;
    let t  = document.getElementById("to").value;
    demo1 = a * t / f;
    document.getElementById("result").innerHTML = demo1;
}
