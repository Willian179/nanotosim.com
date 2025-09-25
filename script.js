
// Auto-scroll carousels
function autoScroll(containerSelector, speed=2) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  let scrollAmount = 0;
  setInterval(() => {
    container.scrollLeft += speed;
    scrollAmount += speed;
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
      scrollAmount = 0;
    }
  }, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  autoScroll(".carousel-track", 2);
  autoScroll(".review-carousel", 1);
});
