import { useContext } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink,  } from '@react-pdf/renderer';
import logo from '../../assets/logo.jpg';
import { CarritoContext } from '../../context/CarritoContext';

const styles = StyleSheet.create({
  page: {
    padding: 56.69,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottom: '1px solid #000',
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1px solid #ccc',
    paddingVertical: 5,
  },
  colDescripcion: {
    width: '40%',
  },
  colCantidad: {
    width: '20%',
    textAlign: 'center',
  },
  colPrecio: {
    width: '20%',
    textAlign: 'center',
  },
  colTotal: {
    width: '20%',
    textAlign: 'center',
  },
  totalFinal: {
    marginTop: 20,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 56.69,
    right: 56.69,
    borderTop: '1px solid #000',
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 10,
    color: '#555',
  }
});


const PdfFactura = ({ carrito, precioTotal, pedidoId }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.logo} src={logo} />
        <Text style={styles.header}>Resumen de tu pedido - {pedidoId}</Text>

      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.colDescripcion}>Descripción</Text>
        <Text style={styles.colCantidad}>Cantidad</Text>
        <Text style={styles.colPrecio}>$/u</Text>
        <Text style={styles.colTotal}>Total</Text>
      </View>


      {carrito.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <Text style={styles.colDescripcion}>{item.categoria} {item.sabor || ""}</Text>
          <Text style={styles.colCantidad}>{item.cantidad}</Text>
          <Text style={styles.colPrecio}>${item.precio}</Text>
          <Text style={styles.colTotal}>${item.precio * item.cantidad}</Text>
        </View>
      ))}

      <Text style={styles.totalFinal}>Total a pagar: ${precioTotal()}</Text>

      <Text style={styles.footer}>Bombin sabores con estilo - © 2024</Text>
    </Page>
  </Document>
);

const DescargarPDF = ({ pedidoId }) => {
  const { carrito, precioTotal } = useContext(CarritoContext);

  return (
    <PDFDownloadLink
      document={<PdfFactura carrito={carrito} precioTotal={precioTotal} pedidoId={pedidoId}/>}
      fileName={`Pedido_bombin_${pedidoId}.pdf`}
    >
      {({ loading }) =>
        loading ? 'Generando PDF...' : <button> Descargar pedido en PDF </button>
      }{}
    </PDFDownloadLink>
  );
};

export {PdfFactura, DescargarPDF}
