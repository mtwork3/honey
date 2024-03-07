'use strict';


window.addEventListener('scroll', () => {
  const logo = document.querySelector('.logo');
  const logoTop = logo.offsetTop;
  if(window.scrollY + 500 > logoTop) {
    logo.classList.add('fade');
  }
});

new Splide( '.splide',{
  classes: {
    pagination: "splide__pagination your-class-pagination",
    page: "splide__pagination__page your-class-page",
  },
  width: '100%',
  fixedWidth: '66.6%',
  gap: '8.5%',
  padding: '1%', //左右の余白。前後のスライド表示
  arrows: false, //矢印なし
  drag: true,
  type: 'loop', //一枚目の左に最後のスライド
  rewind: true,
  rewindByDrag: true,
  focus: 'center',

} ).mount();
