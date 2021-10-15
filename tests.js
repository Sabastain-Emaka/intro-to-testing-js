// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


// write a test for a function named 'sayHello'

describe('sayHello', function() {
    it('should be define as a function', function() {
        expect(typeof sayHello).toBe('function');
    })

    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    })
    it('should return a greeting for the input', function() {
        expect(sayHello('Jevi')).toBe('string');
    })
})

// write a test for a function named 'isFive'
describe('isFive', function() {
    it('should be defined as a function', function() {
        expect(typeof isFive).toBe('function');
    })
    it('should return a boolean', function() {
        expect(typeof isFive(5)).toBe('boolean');
        expect(typeof isFive(1)).toBe('boolean');
    })
    it('should return true for the input', function() {
        expect(isFive('5')).toBe(true);
    })
    it('should return true when passes 5', function () {
    expect(isFive('5')).toBe(true);
    })


})


//isEven
describe('isEven',function() {
    it('')
})
