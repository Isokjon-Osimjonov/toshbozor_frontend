export const formatInputValue = (input) => {
  const numbersOnly = input.replace(/[^\d]/g, "");

  let parts = [
    numbersOnly.slice(0, 3),
    numbersOnly.slice(3, 5),
    numbersOnly.slice(5, 8),
    numbersOnly.slice(8, 10),
    numbersOnly.slice(10, 12),
  ];

  parts = parts.filter((part) => part);

  return "+" + parts.join(" ");
};
