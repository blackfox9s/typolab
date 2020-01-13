export default function resize() {
  const standard = {
    width: 720,
    fontSize: 24,
  };
  const docEl = document.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  const reCalc = () => {
    const cWidth = docEl.clientWidth;
    if (!cWidth) return;
    if (cWidth < standard.width) {
      const size = parseInt(standard.fontSize * (cWidth / standard.width), 10);
      docEl.style.fontSize = `${size < 12 ? 12 : size}px`;
    } else {
      docEl.style.fontSize = `${standard.fontSize}px`;
    }
  };

  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, reCalc, false);
  document.addEventListener('DOMContentLoaded', reCalc, false);
}
