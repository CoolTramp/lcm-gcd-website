export function smoothInnerHTML(element, text, speed) {
  let count = 0;
  function animation() {
    if (count <= text.length) {
      count += speed;
      element.innerHTML = text.slice(0, count);
      requestAnimationFrame(animation);
    } else {
      return null;
    }
  }
  animation();
}
