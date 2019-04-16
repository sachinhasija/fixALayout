window.onload = runScript;
function runScript() {
  let inputs = document.querySelectorAll("input");
  function changeValue() {
    const postfix = this.dataset.range || "";
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + postfix
    );
  }

  eventListeners();
  function eventListeners() {
    inputs.forEach(function(input) {
      if (input.name === "paddingLeft" || input.name === "paddingRight")
        input.addEventListener("change", changeValue);
      else {
        input.addEventListener("change", changeValue);
        input.addEventListener("mousemove", changeValue);
      }
    });
  }
}
