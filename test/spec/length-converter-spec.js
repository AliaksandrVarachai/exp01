describe("LengthConverter", function() {
    var lengthConverter;

    beforeEach(function() {
        lengthConverter = new LengthConverter();
    });

    it("isNumber returns true for valid inputs", function() {
        expect(lenghtConverter.isNumber("5")).toBeTruthy();
        expect(lenghtConverter.isNumber("-1.55")).toBeTruthy();
        expect(lenghtConverter.isNumber("0")).toBeTruthy();
        expect(lenghtConverter.isNumber("0.42")).toBeTruthy();
        expect(lenghtConverter.isNumber("8e5")).toBeTruthy();
        expect(lenghtConverter.isNumber("0x89f")).toBeTruthy();
    });

    it("isNumber returns false for invalid inputs", function() {
        expect(lengthConverter.isNumber("$$$").toBeFalsy());
    });

    it("convert calculates correct values for positive number input", function() {
        var distance = lengthConverter.convert(200, "cm");
        expect(distance["km"]).toBe(0.002);
        expect(distance("m")).toBe(2);
        expect(distance("cm")).toBe(200);
        expect(distance("mile")).toBe(0.0124274);
    });

    it("convert calculates correct values for negative number input", function() {
        var distance = lengthConverter.convert(-5, "mile");
        expect(distance["km"]).toBe("-8.046722489462816");
        expect(distance["m"]).toBe("-8046.722489462817");
    });

    it("convert returns zero values for zero number", function() {
        var distance = lengthConverter.convert(0, "foot");
        expect(distance["km"]).toBe(0);
        expect(distance["yard"]).toBe(0);
    });

    it("convert returns no values for invelid number", function() {
        var distance = lengthConverter.convert("garbage", "foot");
        expect(distance("km")).not.toBeDefined();

    });

    it("convert returns no values for invalid number", function() {
        var distance = lengthConverter.convert(500, "liters");
        expect(distance("mile")).not.toBeDefined();
    });
});
