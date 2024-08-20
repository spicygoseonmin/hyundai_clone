window.addEventListener("load", function () {
  AOS.init();
  // 비디오 항목 체크한다. (video태그로 파악)
  // 모든 비디오 태그를 변수에 저장
  let videos = this.document.querySelectorAll(".swVisual video");
  let videoTimeArr = [];

  videos.forEach((video, index) => {
    videoTimeArr[index] = Math.ceil(video.duration);
    console.log(videoTimeArr);
  });

  let videoIndex = 0;
  let videoTimer;

  const swVisual = new Swiper(".swVisual", {
    loop: true,
    on: {
      slideChange: function () {
        // 현재 재생 중인 비디오를 멈춤
        videos[videoIndex].pause();

        // 비디오 인덱스 업데이트
        videoIndex = swVisual.realIndex;

        // 비디오 타이머와 진행 바를 초기화
        videoReset();

        // 새로운 슬라이드의 비디오를 재생
        videos[videoIndex].play();
      },
      reachEnd: function () {
        // 슬라이드가 끝까지 도달했을 때 첫 번째 슬라이드로 이동
        // setTimeout 함수는 코드 실행에 지연을 주기 위해 사용되며, 여기서는 17000밀리초(즉 17초) 
        // 후에 슬라이드를 첫 번째 슬라이드로 이동시키고, 
        // 비디오를 초기화한 후 재생하는 동작이 이루어집니다.
        setTimeout(() => {
          swVisual.slideTo(0);
          videos[videoIndex].pause();
          videoIndex = 0;
          videoReset();
          videos[videoIndex].play();
        }, 17000);
      },
    },
  });

  function videoReset() {
    let bars = this.document.querySelectorAll(".bar");
    let barScaleW = 0;
    
    bars.forEach(function (bar) {
      bar.style.width = `${barScaleW}%`;
    });

    let activeBar = bars[videoIndex];
    clearInterval(videoTimer);
    let videoTime = videoTimeArr[videoIndex];

    videoTimer = setInterval(() => {
      barScaleW++;
      activeBar.style.width = `${barScaleW}%`;
      if (barScaleW >= 100) {
        swVisual.slideNext();
        clearInterval(videoTimer);
        videoReset();
      }
    }, videoTime * 10);
  }

  videoReset();

  const visualControlLi = this.document.querySelectorAll(".visual-control > li");
  visualControlLi.forEach(function (item, index) {
    item.addEventListener("click", function () {
      // 현재 재생 중인 비디오를 멈춤
      videos[videoIndex].pause();

      // 슬라이드 클릭으로 이동할 인덱스 업데이트
      videoIndex = index;

      // 슬라이드를 클릭한 인덱스로 이동
      swVisual.slideTo(videoIndex);

      // 슬라이드 이동이 완료된 후 비디오 재생
      swVisual.once('slideChangeTransitionEnd', function () {
        videoReset();
        videos[videoIndex].play();
      });
    });
  });

  // business스와이퍼
  const swBusiness = new Swiper(".swBusiness", {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
