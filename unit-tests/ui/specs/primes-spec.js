var sut = require('../src/primes.js');
describe("when evaluating if a given number is a prime", function(){
describe("when the number is a prime", function(){
it("should return 'true'", function(){
expect(sut.isPrime(7)).toBe(true);
});
});
});
