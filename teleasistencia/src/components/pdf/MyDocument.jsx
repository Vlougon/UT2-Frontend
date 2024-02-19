import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for the document
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        padding: 20,
        fontSize: 12,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        border: '1px solid #CCCCCC',
        borderRadius: 8,
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        marginBottom: 10,
        padding: 8,
        border: '1px solid #B0B0B0',
        borderRadius: 4,
        width: '100%', // Ajusta el ancho según tus necesidades
        margin: '0 auto', // Centra el elemento
    },
    select: {
        marginBottom: 10,
        padding: 8,
        border: '1px solid #B0B0B0',
        borderRadius: 4,
        width: '100%', // Ajusta el ancho según tus necesidades
        margin: '0 auto', // Centra el elemento
    },
    pageNumber: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        fontSize: 10,
    },
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.label}>Nombre Completo:</Text>
                {/* Render your input field for Full Name here */}
                <Text style={styles.input}>John Doe</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Email:</Text>
                {/* Render your input field for Email here */}
                <Text style={styles.input}>john.doe@example.com</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Rol:</Text>
                {/* Render your select field for Role here */}
                <Text style={styles.select}>Asistente</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Contraseña:</Text>
                {/* Render your input field for Password here */}
                <Text style={styles.input}>********</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Confirmar Contraseña:</Text>
                {/* Render your input field for Confirm Password here */}
                <Text style={styles.input}>********</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Número de Teléfono:</Text>
                {/* Render your input field for Phone Number here */}
                <Text style={styles.input}>123-456-7890</Text>
            </View>
            {/* Additional sections for other fields can be added here */}
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} />
        </Page>
    </Document>
);

export default MyDocument;
