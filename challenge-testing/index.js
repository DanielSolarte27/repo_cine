class CarritoCompra {
    // Aquí va tu codigo:
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto1) {
        this.productos.push(producto1);
    }

    calcularTotal() {
        let total = 0;
        for (let producto of this.productos) {
            total += producto.precio;
        }
        return total;
    }

    aplicarDescuento(porcentaje){

        const total = this.calcularTotal(); //*30
        const totalDescuento = total * (porcentaje / 100);
        return totalDescuento;
    }
}

module.exports = CarritoCompra;