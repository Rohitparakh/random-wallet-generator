function copy(text, alert = false) {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
      if (alert == true) {
        toast("Copy Successful: " + text);
      }
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
      if (alert == true) {
        toast("Copy Failed: " + text);
      }
    }
  );
}
