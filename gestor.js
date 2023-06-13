let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
console.log(datosMemoria)

let contenedor=document.getElementById("contenedor")

datosMemoria.forEach(function(reserva){
    let fila=document.createElement("div")
    fila.classList.add("row","my-5")
    let columna=document.createElement("div")
    columna.classList.add("col-4")
    let columna2=document.createElement("div")
    columna2.classList.add("col-8")
})