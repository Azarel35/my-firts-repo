const breakfast = { 
    'sopa de fideos': 30.00,
    'chilaquiles': 45.50,
    'jugo': 20.00
}

const lunch = {
    'pollo a la plancha': 42.00,
    'camarones al coco': 54.00,
    'filete asado': 21.00,
    'coco drink': 13.00
} 

const dinner = {
    'ensalada frutas': 33.00,
    'sopa de tortilla': 29.00,
    'naranjada': 15.00,
    'pay de queso': 27.00
}

alert('Bienvenido a Restaurant Bottega')

alert(`Buenos días, este es nuestro menu:${Object.keys(breakfast)}`)
const menuBreakfast = prompt('Que le gustaria ordenar?')
if (menuBreakfast == 'chilaquiles') {
    alert('Acompañados de crema y queso mmm.. le encantaran')
} 

else  if (menuBreakfast == 'jugo') {
    alert('Buena eleccion, es un jugo recien hecho!')
}


else  if (menuBreakfast == 'sopa de fideos') {
    alert('Delicioso y calientito' ) 
}

else { alert('No tenemos ese platillo en el menu')}


alert(`Este es su total a apagar:${Object.values(breakfast).reduce((a, b) => a + b, 0)}`);

alert(`Buenas tardes, este es nuestro menu:${Object.keys(lunch)}`)
const menuLunch = prompt('Que le gustaria ordenar?')

if (menuLunch == 'pollo a la plancha') {
    alert('Este platillo está acompañado de verduras al vapor y arroz')
} 

else if (menuLunch == 'camarones al coco') {
    alert('Deliciosos camarones empanizados rellenos de philadelphia')
} 

else if (menuLunch == 'filete asado') {
    alert('Acompañado de salsa mexicana y guacamole')
} 

else if (menuLunch == 'coco drink') {
    alert('Riquisima bebida a base de agua de coco y ron')
} 
else { alert('No tenemos ese platillo en el menu')}


alert(`Este es su total a apagar:${Object.values(lunch).reduce((a, b) => a + b, 0)}`);

alert(`Buenas noches, este es nuestro menu:${Object.keys(dinner)}`)
const menuDinner = prompt('Que le gustaria ordenar?')

if (menuDinner == 'ensalada frutas') {
    alert('Deliciosa con nuestro aderezo de frutos rojos')
} 
else if (menuDinner == 'sopa de tortilla') {
    alert('La especialidad de la casa')
} 

else if (menuDinner == 'naranjada') {
    alert('Rica y refrescante')
} 

else if (menuDinner == 'pay de queso') {
    alert('Un delicioso postre parta finalizar la noche')
} 

else { alert('No tenemos ese platillo en el menu')}

alert(`Este es su total a apagar:${Object.values(dinner).reduce((a, b) => a + b, 0)}`);

alert('Gracias por su visita');

