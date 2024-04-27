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