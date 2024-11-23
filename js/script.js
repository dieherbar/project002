function saludar() {
    alert("hola que tal")
}
function preguntarEdad() {
    let texto;
    let vip;
    let edad = prompt("Your age please: ", 0);
    edad = Number(edad);
    edad = parseInt(edad);

    if (isNaN(edad)) {
        alert("this is not a number");
        return;
    }
    vip = Boolean(edad % 2);
        if (edad < 18) {
            texto = "Too young";
        }else if (edad > 18 && vip) {
            texto = "Allowed to the VIP";
        } else {
            texto = "You can enter";
        }
        document.getElementById("resultado").innerHTML = texto;
        console.log(texto);
        console.log(edad);
    }
/*
var altura = 0;
var edad = 0;
altura = parseFloat(prompt("Ingrese la altura"));
edad = parseInt(prompt("Ingrese la edad"));
if (altura > 1.30 && edad > 14) {
    console.log("Cumple con los requisitos");
} else{
    console.log("No cumple con los requisitos");

*/