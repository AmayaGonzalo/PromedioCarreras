let vuelta1 = document.getElementById("dato1.value");
let vuelta2 = document.getElementById("dato2.value");
let vuelta3 = document.getElementById("dato3.value");
let vuelta4 = document.getElementById("dato4.value");
let btnPrimera = document.getElementById("btnPrimera");
let btnSegunda = document.getElementById("btnSegunda");
let btnTercera = document.getElementById("btnTercera");
let btnCuarta = document.getElementById("btnCuarta");
let btnCalcular = document.getElementById("btnCalcular");

btnPrimera.addEventListener("click", () => {
  console.log("La primera vuelta fue de: ", dato1.value);
});

btnSegunda.addEventListener("click", () => {
  console.log("La segunda vuelta fue de: ", dato2.value);
});

btnTercera.addEventListener("click", () => {
  console.log("La tercer vuelta fue de: ", dato3.value);
});

btnCuarta.addEventListener("click", () => {
  //let cuartaVuelta: number = Number(dato4.value);
  console.log("La cuarta vuelta fue de: ", dato4.value);
});

btnCalcular.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);
  let totalVueltas: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  let promVueltas: number = totalVueltas / 4;
  console.log("El tiempo total es de: ", totalVueltas);
  console.log("EL promedio de todas las vueltas es de: ", promVueltas);
});
