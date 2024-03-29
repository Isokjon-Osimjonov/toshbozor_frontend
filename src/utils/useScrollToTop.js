export const scrollToTop = (top) => {
  window.scrollTo({
    top: top ? top : 0,
    behavior: "smooth",
  });
};
