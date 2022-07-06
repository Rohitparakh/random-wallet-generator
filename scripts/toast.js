function toast(text, position) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  x.innerHTML = text;
  x.className = "";
  switch (position) {
    case "bottom":
      x.classList.add("snackbarBottom");
      break;
    case "top":
      x.classList.add("snackbarTop");
      break;
    case "center":
      x.classList.add("snackbarCenter");
      break;
    default:
      x.classList.add("snackbarCenter");
      break;
  }
  // Add the "show" class to DIV
  x.classList.add("show");

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
