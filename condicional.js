// Algoritmo 1: Liquidación de comisión por ventas
function calcularComision() {
    let nombre = prompt("Nombre del vendedor:");
    let ventas = parseFloat(prompt("Ventas del mes:"));
    let antiguedad = parseInt(prompt("Años de antigüedad:"));
    let porcentaje = 0;
    
    if (ventas >= 8000000 && antiguedad >= 2) {
        porcentaje = 0.10;
    } else if (ventas >= 3000000) {
        porcentaje = 0.05;
    }
    
    let comision = ventas * porcentaje;
    alert("Vendedor: " + nombre + "\nComisión: $" + comision);
}

// Algoritmo 2: Cálculo de tarifa de alojamiento
function calcularAlojamiento() {
    let tipo = prompt("Habitación (estándar, ejecutiva, suite):").toLowerCase();
    let temporada = prompt("Temporada (alta, baja):").toLowerCase();
    let noches = parseInt(prompt("Número de noches:"));
    
    let tarifa = tipo === "estándar" ? 150000 : (tipo === "ejecutiva" ? 250000 : 400000);
    
    if (temporada === "alta") {
        tarifa *= 1.20;
    }
    
    let total = tarifa * noches;
    
    if (noches >= 5) {
        total *= 0.90;
    }
    
    alert("Total a pagar: $" + total);
}

// Algoritmo 3: Evaluación de desempeño académico
function evaluarDesempeno() {
    let n1 = parseFloat(prompt("Nota 1:"));
    let n2 = parseFloat(prompt("Nota 2:"));
    let n3 = parseFloat(prompt("Nota 3:"));
    let asistencia = parseFloat(prompt("Asistencia %:"));
    
    let promedio = (n1 + n2 + n3) / 3;
    let resultado = "Aprobado";
    
    if (asistencia < 80) {
        resultado = "No aprobado por asistencia";
    } else if (promedio < 60) {
        resultado = "No aprobado por rendimiento";
    }
    
    alert("Promedio: " + promedio.toFixed(2) + "\nEstado: " + resultado);
}