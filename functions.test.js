const {returnTwo, greeting, add, multiply, divide, subtract } = require('./functions.js')
const { add, mult, div, sub } = require ('./functions.js')
test('Should return 2', ()=>{
    expect(returnTwo(2)).toEqual(2)
})

test('Should return greeting object', () =>{
    expect(greeting('Hello', 'James')).toEqual({name: 'James'})

    expect(greeting('Jill')).toEqual({name: 'Jill'})
})
describe('Math Shit', () =>  {

test('Should return the sum of add', ()=>{
    expect(add(1,2)).toEqual(3)

    expect(add(5,9)).toEqual(14)
}),
test('Should return the sum of multiply', ()=>{
    expect(multiply(4,2)).toEqual(8)

    expect(multiply(7,7)).toEqual(49)
}),
test('Should return the sum of divide', ()=>{
    expect(divide(8,2)).toEqual(4)

    expect(divide(10,2)).toEqual(5)
}),
test('Should return the sum of subtract', ()=>{
    expect(subtract(9,6)).toEqual(3)

    expect(subtract(11,9)).toEqual(2)
    })

})
