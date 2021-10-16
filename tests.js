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
    it('should be defined as a function', function() {
        expect(typeof isEven).toBe('function');
    })
    it('should return a boolean for any number', function() {
        expect(typeof isEven()).toBe("boolean");
    })
    it('should return true when executed with 2', function() {
        expect(isEven(2)).toBe(true);
    })
    it('should return true when executed with -4', function() {
        expect(isEven(-4)).toBe(true);
    })
    it('should return false when executed with 3', function() {
        expect(isEven(3)).toBe(false);
    })
    it('should return false when executed with banana', function() {
        expect(isEven('banana')).toBe(false);
    })
    it('should return false when executed with 8', function() {
        expect(isEven('8')).toBe(true);
    })
    it('should return false when executed with infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    })
    it('should return false when executed with boolean', function() {
        expect(isEven('true')).toBe(false);
    })
    it('should return false when executed without an arguement', function() {
        expect(isEven()).toBe(false);
    })
})


//isVowel
describe('isVowel',function() {
    it('should be defined as a function', function() {
        expect(typeof isVowel).toBe('function');
    })
    it('should return a boolean for any vowel', function() {
        expect(typeof isVowel()).toBe('boolean');
    })
    it('should return true when executed with isVowel "a" ', function() {
        expect(isVowel('a')).toBe('true');
    })

})