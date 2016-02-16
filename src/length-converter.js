function LengthConverter() {
    LENGTH_CONVERSION_MAP = {
        "km": 1,
        "m": 1000,
        "cm": 100000,
        "mm": 1e-6,
        "mile": 0.621371,
        "yard": 1093.61,
        "foot": 3280.84,
        "inch": 39370.1,
        "nautical mile": 0.539957
    };

    this.getUnitValue = function(unit) {
        return LENGTH_CONVERSION_MAP[unit];
    };

    this.getLengthOfMeasurement = function() {
        return Object.keys(LENGTH_CONVERSION_MAP);
    };

}

LengthConverter.prototype.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

LengthConverter.prototype.convert = function(number, baseUnit) {
    var resultsHash = {};
    if (this.getUnitValue(baseUnit) && this.isNumber(number)) {
        var unitsOfMeasurement = this.getLengthOfMeasurement();
        for(var i = 0; i < unitsOfMeasurement.length; i++) {
            var unit = unitsOfMeasurement[i];
            resultsHash[unit] = this.getUnitValue(unit) * number / this.getUnitValue(baseUnit);
        }
    }
    return resultsHash;
};
