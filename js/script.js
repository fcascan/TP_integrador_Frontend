function calcular_total(){
    //Variables:
    var categ = document.getElementById("categoria");    
    var categoria = categ.options[categ.selectedIndex].value;
    var cantidad = document.getElementById("cantidad").value;
    var campo = document.getElementById("campo_total_a_pagar");
    var descuento = 1;
    var precio_a_pagar = 0;
    const valor_ticket = 200;

    //Elijo el descuento acorde a la categoria seleccionada:
    switch (categoria) {
        case "Estudiante":
            descuento = 0.2;    //80% off
            break;
        case "Trainee":
            descuento = 0.5;    //50% off
            break;
        case "Junior":
            descuento = 0.85;   //15% off
            break;
        default:
            descuento = 1;  //Sin descuento o falló
            break;
    }
    //Calculo el precio:
    precio_a_pagar = cantidad * valor_ticket * descuento;

    //Actualizo el parrafo con el monto total a pagar:
    campo.innerHTML = "Total a Pagar: $" + precio_a_pagar;
}

function limpiar_form(){
    //Variables:    
    var campo_total = document.getElementById("campo_total_a_pagar");

    //Reseteo el formulario y sus campos:
    document.getElementById("form_compra").reset();

    //Vacio el parrafo del total a pagar: 
    campo_total.innerHTML = "Total a Pagar: $";    
}

