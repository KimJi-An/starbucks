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