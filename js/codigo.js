let img1 = document.getElementById("img01")
let img2 = document.getElementById("img02")
let img3 = document.getElementById("img03")


function reiniciar(){    
    img1.src = "img/wild-animals.png"
    img2.src = "img/wild-animals.png"
    img3.src = "img/wild-animals.png"
    document.getElementById("input2").value = ""
    document.getElementById("name").innerHTML = ""
    document.getElementById("input3").value = ""
    document.getElementById("numLetras").innerHTML = ""
}

function buscar(){
    let num1 = parseFloat(document.getElementById("input2").value)
    switch (num1){
        case 1:
            img2.src = "img/toucan.png"
            document.getElementById("name").innerHTML = "Tucán"
            break
        case 2:
            img2.src = "img/cat.png"
            document.getElementById("name").innerHTML = "Gato"
            break
        case 3:
            img2.src = "img/fox.png"
            document.getElementById("name").innerHTML = "Zorro"
            break
        case 4:
            img2.src = "img/koala.png"
            document.getElementById("name").innerHTML = "Koala"
            break
        case 5:
            img2.src = "img/squirrel.png"
            document.getElementById("name").innerHTML = "Ardilla"
            break
        case 6:
            img2.src = "img/whale.png"
            document.getElementById("name").innerHTML = "Ballena"
        break
        default:
            img2.src = "img/wild-animals.png"
            document.getElementById("name").innerHTML = "Ingrese un número del 1 al 6"
            break
    }
}

function contar(){
    let num2 = parseFloat(document.getElementById("input3").value)
    var nombre
    switch (num2){
        case 1:
            img3.src = "img/toucan.png"
            nombre = "tucan"
            document.getElementById("numLetras").innerHTML = "Su nombre tiene "+nombre.length+" letras"
            break
        case 2:
            img3.src = "img/cat.png"
            nombre = "gato"
            document.getElementById("numLetras").innerHTML = "Su nombre tiene "+nombre.length+" letras"
            break
        case 3:
            img3.src = "img/fox.png"
            nombre = "zorro"
            document.getElementById("numLetras").innerHTML = "Su nombre tiene "+nombre.length+" letras"
            break
        case 4:
            img3.src = "img/koala.png"
            nombre = "koala"
            document.getElementById("numLetras").innerHTML = "Su nombre tiene "+nombre.length+" letras"
            break
        case 5:
            img3.src = "img/squirrel.png"
            nombre = "ardilla"
            document.getElementById("numLetras").innerHTML = "Su nombre tiene "+nombre.length+" letras"
            break
        case 6:
            img3.src = "img/whale.png"
            nombre = "ballena"
            document.getElementById("numLetras").innerHTML = "Su nombre tiene "+nombre.length+" letras"
            break
        default:
            img3.src = "img/wild-animals.png"
            document.getElementById("numLetras").innerHTML = "Ingrese un número del 1 al 6"
            break
    }
}