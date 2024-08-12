window.addEventListener("load", function(){
    const nav = this.document.querySelector(".nav")
    const btMenu = this.document.querySelector(".bt-menu");
    const navClose = this.document.querySelector(".nav-close");
    btMenu.addEventListener("click", function(){
        nav.classList.add("nav-active");
    })
    navClose.addEventListener("click", function(){
        nav.classList.remove("nav-active");
    });
    nav.addEventListener("mouseleave", function(){
        this.classList.remove("nav-active", )
    })



    // 언어 active 기능
    const languageLi= this.document.querySelector(".language li");
    const language = this.document.querySelector(".language");
    const langBox = this.document.querySelector(".language-box")
    langBox.addEventListener("click", function(){
        this.classList.toggle("language-box-active");
    });
    // language에 transiton 기능 추가
    this.setTimeout(function(){
        languageLi.style.transition = "all 0.2s"
    }, 500);
})