export function lazyLoadImg (containerClass) {
  let containers = document.getElementsByClassName(containerClass); // 获取需要进行图片懒加载的区域
  let seeHeight = document.documentElement.clientHeight;// 获取可视区域高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取已经滑动区域的高度

  let lazyImg = [];
  Array.prototype.forEach.call(containers, (container) => {
    let containerImgs = container.getElementsByTagName('img');
    Array.prototype.forEach.call(containerImgs, (img) => {
      if (img.getAttribute('data-src')) {
        lazyImg.push(img);
      }
    });
  });
  for (let img of lazyImg) {
    if (!img.src && img.offsetTop < seeHeight + scrollTop - 10) {
      img.src = img.getAttribute('data-src');
    }
  }
}
