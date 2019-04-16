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
  inputs.forEach(input => input.addEventListener("change", changeValue));
  inputs.forEach(input => input.addEventListener("mousemove", changeValue));
}
