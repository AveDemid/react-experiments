export const getTempByScale = (temp: number, scale: string) => {
  if (scale === "C") {
    return Math.floor(temp - 273.15);
  }

  if (scale === "F") {
    return Math.floor(((temp - 273.15) * 9) / 5 + 32);
  }
};
