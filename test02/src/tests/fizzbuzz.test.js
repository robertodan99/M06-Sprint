 
  const fizzBuzz = require('../fizzbuzz')
describe('FizzBuzz', () => {
  it('Debería devolver 1 cuando se le pase 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('Debería devolver "fizz" cuando se le pase 3', () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it('Debería devolver "buzz" cuando se le pase 5', () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it('Debería devolver "fizzbuzz" cuando se le pase 15', () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

  it('Debería devolver "fizz" cuando se le pase un número divisible por 3', () => {
    expect(fizzBuzz(9)).toBe("fizz");
  });

  it('Debería devolver "buzz" cuando se le pase un número divisible por 5', () => {
    expect(fizzBuzz(10)).toBe("buzz");
  });

  it('Debería devolver "fizzbuzz" cuando se le pase un número divisible por 15', () => {
    expect(fizzBuzz(30)).toBe("fizzbuzz");
  });

  it('Debería devolver el propio número si no es múltiplo de 3 ni de 5', () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});

  
