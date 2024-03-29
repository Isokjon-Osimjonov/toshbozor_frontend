const toggleNoScroll = (state) => {
  const body = document.querySelector("body");
  if (state) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
};

export default toggleNoScroll;
