function toggleMode() {
  const html = document.documentElement;
  if (html.classList.contains("light")) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }

  //or

  //html.classList.toogle('light')
}
