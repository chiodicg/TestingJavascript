describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);
      expect(result).toEqual('37.8');
      expect(convertFahrenheitToCelsius(50)).toEqual('10.0');
    });
    it("Celsius to Fahrenheit", function() {
      expect(convertCelsiusToFahrenheit(30)).toEqual('86.0');
    });
  });

  describe("Weights", function() {
    it("Pounds to Kilos", function() {
      expect(convertPoundsToKilos(10)).toEqual('4.5');
    });
  });

  describe("Volumes", function() {
    it("Litres to Gallons", function() {
      expect(convertLitresToGallons(305)).toEqual('67.1');
    });
  });

  describe("Distances", function() {
    it("Miles to Kilometers", function() {
      expect(convertMilesToKm(72)).toEqual('115.8');
    });
  });
});
