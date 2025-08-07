import emailjs from '@emailjs/browser';

const Contacto = async (pedido, idPedido) => {

    const resumen = pedido.productos.map(item =>
    `Producto: ${item.categoria} ${item.sabor || ""}, Cantidad: ${item.cantidad}, $/u: ${item.precio}, Total: $${item.precio * item.cantidad}`
    ).join("\n");

    const message = `
                        Nombre: ${pedido.comprador.NombreCompleto}
                        Teléfono: ${pedido.comprador.telefono}
                        Correo: ${pedido.comprador.correo}
                        -------------------------
                        Resumen del pedido:
                        ${resumen}
                        -------------------------
                        Total a abonar: $${pedido.totalAbonar}
                        ID de pedido: ${idPedido}
                        `;
    try {
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
                user_name: pedido.comprador.NombreCompleto,
                user_email: pedido.comprador.correo,
                message: message,
            },
            import.meta.env.VITE_PUBLIC_KEY
        );
        console.log("Correo enviado correctamente");
    } catch (error) {
        console.error("Error al enviar correo", error);
    }

}

export default Contacto;