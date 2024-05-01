// class가 search인 요소 검색
const searchEl = document.querySelector('.search'); 
// search의 input 요소 찾기
const searchInputEl = searchEl.querySelector('input');

// search라는 class를 가진 div 요소를 클릭하면 핸들러 실행
searchEl.addEventListener('click', function() {
  // search의 input 요소에 focus
  searchInputEl.focus();
});

// search input에 focus가 되면 핸들러 실행
searchInputEl.addEventListener('focus', function() {
  // 특정 요소의 클래스 정보를 가지고 있는 객체에 클래스 추가
  searchEl.classList.add('focused');
  // seatchInputEl에 html 속성을 지정
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// search input이 blur 되면 핸들러 실행
searchInputEl.addEventListener('blur', function() {
  // focused 클래스 제거
  searchEl.classList.remove('focused');
  // 빈 문자 할당
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// _.throttle(함수, 시간)
// 화면이 스크롤될 때 실행되는 함수의 개수를 throttle이라는 메소드를 이용해 일정 시간에 한 번씩만 실행되도록 제한
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');

// 반복 처리
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 첫 번째 index가 0이기 때문에 1 더해줌
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,  // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10,  // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // } 
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;  // 반대 값 반환

  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  // .toFixed()를 통해 반환된 문자 데이터를
  // parseFloat()를 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,  // 선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간
    {  // 옵션
      y: size,
      repeat: -1, // -1 : 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,  // 반복을 자연스럽게
      delay: random(0, delay),
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8  // 뷰포트의 0.8 부분(시작:0 끝:1)에 걸리면 어떤 내용이 실행됨
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());  // Scene() : ScrollMagic을 통해 특정 요소를 감시하는 옵션을 지정 
});

const thisYear = document.querySelector('.this-year');
// 요소가 가지고 있는 글자 내용을 알아내거나 값 지정 가능
thisYear.textContent = new Date().getFullYear();  // 올해