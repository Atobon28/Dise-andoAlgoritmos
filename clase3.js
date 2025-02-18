const miObjeto = {
    "attr1" : 1,
    "attr2" : "spring"
}

const objeto2 = miObjeto
miObjeto.attr2 = "kevin"
console.log (miObjeto)
console.log (objeto2)

const objeto3 = {...miObjeto}
objeto3.attr3 = "unNuevo atributo"
console.log (objeto3)
console.log (miObjeto)

const objetoDeep = JSON.parse (JSON.stringify (miObjeto))
