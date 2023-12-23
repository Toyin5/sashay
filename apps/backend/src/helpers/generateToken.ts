export const generateToken = (): string => {
  const digits = "0123456789";
  let uniqueNumber = "";

  while (uniqueNumber.length < 6) {
    const randomDigit = digits.charAt(
      Math.floor(Math.random() * digits.length)
    );

    if (!uniqueNumber.includes(randomDigit)) {
      uniqueNumber += randomDigit;
    }
  }

  return uniqueNumber;
};
