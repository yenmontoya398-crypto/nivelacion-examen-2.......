// Algoritmo 4: Registro de ventas de una jornada
function registrarVentas() {
    let cantidad = parseInt(prompt("Cantidad de ventas:"));
    let total = 0;
    let mayores200k = 0;
    let mayor = 0;
    
    for (let i = 1; i <= cantidad; i++) {
        let v = parseFloat(prompt("Valor venta " + i + ":"));
        total += v;
        if (v > 200000) {
            mayores200k++;
        }
        if (i === 1 || v > mayor) {
            mayor = v;
        }
    }
    
    alert("Total: $" + total + "\nMayores a $200k: " + mayores200k + "\nVenta mayor: $" + mayor);
}

// Algoritmo 5: Registro y análisis de temperaturas
function analizarTemperaturas() {
    let dias = parseInt(prompt("Cantidad de días:"));
    let suma = 0;
    let max = 0;
    let min = 0;
    let calurosos = 0;
    
    for (let i = 1; i <= dias; i++) {
        let t = parseFloat(prompt("Temperatura día " + i + ":"));
        suma += t;
        if (i === 1) {
            max = t;
            min = t;
        } else {
            if (t > max) max = t;
            if (t < min) min = t;
        }
        if (t > 30) {
            calurosos++;
        }
    }
    
    alert("Promedio: " + (suma / dias).toFixed(2) + "°C\nMáxima: " + max + "°C\nDías >30°C: " + calurosos);
}

// Algoritmo 6: Registro de números y estadísticas
function analizarNumeros() {
    let totalNums = parseInt(prompt("¿Cuántos números?:"));
    let suma = 0;
    let pos = 0;
    let neg = 0;
    let ceros = 0;
    let mayor = 0;
    
    for (let i = 1; i <= totalNums; i++) {
        let n = parseInt(prompt("Número " + i + ":"));
        suma += n;
        if (n > 0) {
            pos++;
        } else if (n < 0) {
            neg++;
        } else {
            ceros++;
        }
        if (i === 1 || n > mayor) {
            mayor = n;
        }
    }
    
    alert("Suma: " + suma + "\nPositivos: " + pos + "\nNegativos: " + neg + "\nMayor: " + mayor);
}