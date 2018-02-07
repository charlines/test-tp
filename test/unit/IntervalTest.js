describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});


describe("Interval - includes", function(){
    testedInterval = new Interval(10, 20);

    [
        new Interval(11,16),
        new Interval(17,18),
        new Interval(11,17)

    ].forEach(function (interval) {
        it("should include " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(9,12),
        new Interval(7,13),
        new Interval(7,21)

    ].forEach(function (interval) {
        it("should not include " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});

describe("Interval - Union", function(){

    testedInterval = new Interval(10,20);

    it("Should return [10,20] and [30,40] when [10,20] unions [30,40]", function(){
        var result = testedInterval.union(new Interval(30,40))
        expect(result).toEqual([new Interval(10,20), new Interval(30,40)])
    });

    var testCasesOverlapping = [
        {
            interv : new Interval(6,14),
            res : new Interval(6,20)
        },
        {
            interv : new Interval(8,12),
            res : new Interval(8,20)
        }
    ];

    testCasesOverlapping.forEach(function(testCase){
        it("Should return " + testCase.res.toString() + " when " + testedInterval.toString() + " unions " + testCase.interv.toString(), function(){
            var result = testedInterval.union(testCase.interv);
            expect(result).toEqual(testCase.res);
        });
    });
});


