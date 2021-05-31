function limpiarFormulario(){
document.getElementById("miForm").reset();
}

 var calculo= function(n1){
	var numero1 =parseFloat(document.getElementById("numero1").value);
var j = numero1/5280;
return"la equivalencia es:" +j+"mi";
}

var cal= function (n1){
var x= parseFloat(document.getElementById("numero1").value);
var x2= x*x
var resultado= (4*x2)+ (-2*x)
return "el resultado es:" + resultado;
}


