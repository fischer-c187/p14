function isValidDate(date: string) {
  const dateRegex = /^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(\d{4})$/;
  return dateRegex.test(date);
}

export default isValidDate;
