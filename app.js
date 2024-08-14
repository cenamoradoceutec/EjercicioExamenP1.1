function calcular() {
    const producto1 = parseFloat(document.getElementById('producto1').value);
    const producto2 = parseFloat(document.getElementById('producto2').value);
    const producto3 = parseFloat(document.getElementById('producto3').value);
    const producto4 = parseFloat(document.getElementById('producto4').value);
    const producto5 = parseFloat(document.getElementById('producto5').value);

    // Validación de campos vacíos o no numéricos
    if (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4) || isNaN(producto5)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos deben ser números y no deben estar vacíos',
        });
        return;
    }

    const subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
    let descuento = 0;
    let descuentoLabel = "Descuento 0%";

    if (subtotal >= 1000 && subtotal < 5000) {
        descuento = 0.10;
        descuentoLabel = "Descuento 10%";
    } else if (subtotal >= 5000 && subtotal < 9000) {
        descuento = 0.20;
        descuentoLabel = "Descuento 20%";
    } else if (subtotal >= 9000 && subtotal < 13000) {
        descuento = 0.30;
        descuentoLabel = "Descuento 30%";
    } else if (subtotal >= 13000) {
        descuento = 0.40;
        descuentoLabel = "Descuento 40%";
    }

    const montoDescuento = subtotal * descuento;
    const total = subtotal - montoDescuento;

    document.getElementById('subtotal').value = "L" + subtotal.toFixed(2);
    document.getElementById('descuento').value = "L" + montoDescuento.toFixed(2);
    document.querySelector("label[for='descuento']").textContent = descuentoLabel;
    document.getElementById('total').value = "L" + total.toFixed(2);
}

function limpiar() {
    document.getElementById('descuentoForm').reset();
    document.getElementById('subtotal').value = "";
    document.getElementById('descuento').value = "";
    document.querySelector("label[for='descuento']").textContent = "Descuento 0%";
    document.getElementById('total').value = "";
}
