// Array de notas
const studentGrades = [100, 50, 65, 70, 85, 96, 45];

// Función para convertir notas numéricas a letras
const gradeMap = (nota) => {
    if (nota >= 90 && nota <= 100) {
        return 'A';
    } else if (nota >= 80 && nota < 90) {
        return 'B';
    } else if (nota >= 70 && nota < 80) {
        return 'C';
    } else if (nota >= 60 && nota < 70) {
        return 'D';
    } else {
        return 'F';
    }
};

// Transformar las notas a letras
const parsed = studentGrades.map(gradeMap);

// Contar cuántos estudiantes pasaron (D o mejor)
const passed = parsed.reduce((count, nota) => {
    return nota !== 'F' ? count + 1 : count;
}, 0);

// Contar cuántos estudiantes fallaron (F)
const failed = parsed.reduce((count, nota) => {
    return nota === 'F' ? count + 1 : count;
}, 0);

// Imprimir resultados
console.log(`Parsed: ${parsed}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);