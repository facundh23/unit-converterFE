export const convertUnits = (value: number, conversionType: string): number => {
  switch (conversionType) {
    case "KmToMiles":
      return value * 0.621371;
    case "milesToKm":
      return value / 0.621371;
    case "feetToMetters":
      return value * 0.3048;
    case "mettersToFeets":
      return value / 0.3048;
    case "cmToInches":
      return value * 0.393701;
    case "inchesToCm":
      return value / 0.393701;

    default:
      return 0;
  }
};
