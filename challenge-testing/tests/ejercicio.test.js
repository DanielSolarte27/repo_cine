const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
    const carrito = new CarritoCompra();
    const producto1 = {nombre: "Producto1", precio: 10};
    const producto2 = {nombre: "Producto2", precio: 20};
    it("CarritoCompra es una clase", () => {
        expect(typeof CarritoCompra).toBe("function");
    })
    it("CarritoCompra inicia con la propiedad como array vacio", () => {
        expect(Array.isArray(carrito.productos)).toBe(true);
        expect(carrito.productos).toHaveLength(0);
    });

    it("agregarProducto agrega productos al carrito", () => {
        carrito.agregarProducto(producto1)
        expect(carrito.productos).toHaveLength(1);
        expect(carrito.productos[0]).toEqual(producto1);

        carrito.agregarProducto(producto2)
        expect(carrito.productos).toHaveLength(2);
        expect(carrito.productos[1]).toEqual(producto2);
    });

    it("calcularTotal calcula el total de la compra", () => {
        expect(carrito.calcularTotal()).toBe(30);
    })

    it("aplicarDescuento aplica el descuento definido", () => {
        expect(carrito.aplicarDescuento(50)).toBe(15);
    })
})