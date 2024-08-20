window.addEventListener("load", function () {
  //   메뉴기능  //
  const nav = this.document.querySelector(".nav");
  const btMenu = this.document.querySelector(".bt-menu");
  const navClose = this.document.querySelector(".nav-close");
  btMenu.addEventListener("click", function () {
    nav.classList.add("nav-active");
  });
  navClose.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
  //   nav영역에 마우스가 벗어나면 nav-active 비활성화한다.
  nav.addEventListener("mouseleave", () => {
    nav.classList.remove("nav-active");
  });
  // 언어 펼침 기능
  const langageLi = this.document.querySelector(".language li");
  const language = this.document.querySelector(".language");
  const langBox = this.document.querySelector(".language-box");
  langBox.addEventListener("click", function () {
    langBox.classList.toggle("language-box-active");
  });
  // langageLi에 transition기능
  setTimeout(function () {
    langageLi.style.transition = "all 0.2s";
  }, 500);
  // 스크롤 기능
  let scy = 0;
  let scActive = 50;
  scy = this.window.document.documentElement.scrollTop;
  // console.log(scy);
  let header = this.document.querySelector(".header");
  let logoW = this.document.querySelector(".logo-w");
  let logoG = this.document.querySelector(".logo-g");
  // 새로고침
  if (scy > scActive) {
    header.classList.add("header-active");
    logoW.style.display = "none";
    logoG.style.display = "block";
  }
  // scroll됐을때
  this.window.addEventListener("scroll", function () {
    scy = this.window.document.documentElement.scrollTop;
    if (scy > scActive) {
      header.classList.add("header-active");
      logoW.style.display = "none";
      logoG.style.display = "block";
    } else {
      header.classList.remove("header-active");
      logoW.style.display = "block";
      logoG.style.display = "none";
    }
  });
  // hover됐을때
  header.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
    logoW.style.display = "none";
    logoG.style.display = "block";
  });
  header.addEventListener("mouseleave", function () {
    if(scy < scActive){
 header.classList.remove("header-active");
    logoW.style.display = "block";
    logoG.style.display = "none";
    }
   
  });
  
});
