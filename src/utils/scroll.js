export function scroll (currentY, targetY) {
  let needScrollTop = targetY - currentY;
  let _currentY = currentY;
  setTimeout(() => {
    const dist = Math.ceil(needScrollTop / 10);
    _currentY += dist;
    window.scrollTo(0, currentY);
    if (needScrollTop > 10 || needScrollTop < -10) {
      scroll(_currentY, targetY);
    } else {
      window.scrollTo(0, targetY);
    }
  }, 1);
}
