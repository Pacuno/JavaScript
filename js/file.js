/*console.log("Hello Worl")
alert("Hola Mundo")
document.write("Hola")

let n = parseFloat(prompt("Digete un numero"))
document.write("El numero es: "+n)*/

const procesar= ()=> {
    let base = document.getElementById("txtBase").value
    let altura = document.getElementById("txtAltura").value
    let area = parseFloat(base)*parseFloat(altura)
    let perimetro = parseFloat(base)*2+parseFloat(altura)*2

    console.log("El perimetro es: "+perimetro+" El area es: "+area)

    document.getElementById("respuesta").innerHTML="El perimetro es: "+perimetro+" y el area es: "+area
}
