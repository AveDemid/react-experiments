export const shorten = (text = "", maxLength = 140) => {
  const cleanText = text.replace(/\\r\\n/g, "\n");

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  const ellip = " ...";

  const oneTooLarge = cleanText.substr(0, 141);
  if (/\W$/.test(oneTooLarge)) {
    return oneTooLarge.substr(0, 140) + ellip;
  }

  let i = oneTooLarge.length;
  while (--i) {
    if (/\W/.test(oneTooLarge[i])) {
      return oneTooLarge.substr(0, i) + ellip;
    }
  }

  return oneTooLarge.substr(0, 140) + ellip;
};
