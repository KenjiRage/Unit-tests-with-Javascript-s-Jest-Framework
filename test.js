// importamos la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza la primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //Importamos la funciones desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // Se usa la función
    const dollars = fromEuroToDollar(3.5)

    // Si un euro son 1.206 dolares, entonces 3.5 euros serian (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // Esto es la comparación
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
