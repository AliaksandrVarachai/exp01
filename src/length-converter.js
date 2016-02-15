function LengthConverter() {
    LENGTH_CONVERSION_MAP = {
        "km": 1,
        "m": 1000,
        "cm": 10000,
        "mm": 1e-6,
        "mile": 0.621371,
        "yard": 1093.61,
        "foot": 3280.84,
        "inch": 39370.1,
        "nautical mile": 0.539957
    };

    this.getUnitValues = function(unit) {
        return LENGTH_CONVERSION_MAP[unit];
    }
}

LengthConverter.prototype.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

LengthConverter.prototype.convert = function(number, baseUnit) {
    var resultHash = {};
    if (this.getUnitValue(baseUnit) && this.isNumber(number)) {

    }

    return resultHash;
};
