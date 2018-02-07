
Util.factorial = function(n) {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

//test

describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 4,
            factorial : 24
        },
        {
            n : 5,
            factorial : 120
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});




describe('Arrangement' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 2,
        r: 2,
        value: 2
    },
    {
        n: 3,
        r: 1,
        value: 3
    },
    {
        n: 4,
        r: 4,
        value: 24
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.arrangement(testCase.n, testCase.r);
            expect(result).toEqual(testCase.value);
        })
    });

    it("should raise an exception when r > n", function(){
        var f = function(){
            Util.arrangement(1,2);
        }
        expect(f).toThrow('Unable to compute arrangement for (n-r) < 0');
    });


    it("should raise an exception when r is not an integer", function(){
        var f = function(){
            Util.arrangement(1,'test');
        }
        expect(f).toThrow('Unable to compute arrangement of non integer values');
    }) 
});


describe('Combination' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 4,
        r: 2,
        value: 6
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.combination(testCase.n, testCase.r);
            expect(result).toEqual(testCase.value);
        })
    });
});