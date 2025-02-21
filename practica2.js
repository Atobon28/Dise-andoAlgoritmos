// Un analista de datos tiene un array de números datos que representan las ventas de una empresa durante un año. El analista quiere encontrar el mes con las mayores ventas. Devuelve el índice del mes con las mayores ventas (0 para enero, 1 para febrero, etc.).

array = [100, 150, 200, 180, 250, 220, 300, 280, 350, 320, 400, 380]

//ver cual es el más alto

const valorMaximo = Math.max(...array)
console.log(valorMaximo)

//contar en donde está ese número

const listaDeMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const mesConMayorVenta = array.indexOf(valorMaximo)
console.log(mesConMayorVenta)

const mes = listaDeMeses[mesConMayorVenta]
console.log(mes)

//imprimirlo 


//Otro ejercicio

//Un matemático está trabajando con una lista de números y quiere elevar cada número al cuadrado. Se te da un array numeros y debes devolver un nuevo array donde cada número esté elevado al cuadrado.

const lista = [1, 2, 3, 4, 5]

const listaAlCuadrado = lista.map(numero => numero ** 2)

console.log(listaAlCuadrado)


//OTRO

//Un detective está investigando un caso. Tiene un array de números pistas donde cada número representa una pista. El detective cree que el culpable es la persona cuyo número de identificación aparece más veces en las pistas. Encuentra el número de identificación del culpable.

const pistas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1]

//contar cuantas veces aparece cada número

const contador = {


}

pistas.forEach(numero => {
    if (contador[numero]) {
        contador[numero]++
    } else {
        contador[numero] = 1
    }
})

console.log(contador)

//mirar cual se repite más

let culpable = null;
let maxRepeticiones = 0;

for (const [numero, repeticiones] of Object.entries(contador)) {
    if (repeticiones > maxRepeticiones) {
        maxRepeticiones = repeticiones;
        culpable = numero;
    }
}

console.log('culpable' + culpable)

const objetoEjemplo = {
    nombre: 'Juan',
    edad: 25
}

console.log(Object.keys(objetoEjemplo))
console.log(Object.values(objetoEjemplo))

//Un traductor necesita crear un programa que traduzca palabras de un idioma a otro. Se le dan dos arrays de cadenas idioma1 e idioma2 donde idioma1[i] es la palabra en el primer idioma e idioma2[i] es su traducción en el segundo idioma. Se le da una palabra en el primer idioma y debe devolver su traducción en el segundo idioma. Si la palabra no está en el primer idioma, devuelve 'No encontrado'.

const traductor ={
    idioma1: ["hola", "mundo", "javascript"],
    idioma2: ["hello", "world", "javascript"],
    palabra: "zapato"
}

function traducePlease(tra){
    //buscar en que diccionario la palabra que me dieron
    const indexPalabraEnEldic1 = tra.idioma1.indexOf(tra.palabra)
    const indexPalabraEnEldic2 = tra.idioma2.indexOf(tra.palabra)

    if (indexPalabraEnEldic1 === -1 && indexPalabraEnEldic2 === -1) {
        return 'No encontrado'
    } else if (indexPalabraEnEldic1 !== -1) {
        return tra.idioma2[indexPalabraEnEldic1]
    } else {
        return tra.idioma1[indexPalabraEnEldic2]
    }
    //buscar la palabra en el otro idioma
    //devolverla
}

console.log(traducePlease(traductor))