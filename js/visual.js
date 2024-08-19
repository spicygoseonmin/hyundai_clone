window.addEventListener("load", function () {
    // AOS.init()
  // 비디오 항목 체크한다. (video태그로 파악)
  // 모든 비디오 태그를 변수에 저장
  let videos = this.document.querySelectorAll(".swVisual video");
  // console.log(videos);
  // 비디오 시간 체크
  // 비디오의 재생 시간을 보관할 배열을 생성
  let videoTimeArr = [];
  console.log(videoTimeArr);
  // 비디오 재생 시간을 배열에 저장하는 반복문
  videos.forEach((video, index) => {
    // console.log(video ,index);
    // console.log(videos);
    // console.log(videos[0]);
    // console.log(videos[0].duration);
    // console.log(videos[1].duration);
    // console.log(videos[2].duration);
    // console.log(videos[3].duration);
    // console.log(videos[4].duration);

    // Math.ceil()비디오 재생 시간을 올림하여 가장 가까운 정수로 변환
    videoTimeArr[index] = Math.ceil(video.duration);
  });
  console.log(videoTimeArr);
  //   첫번째 비디오 자동 실행
  let videoIndex = 0;
  videos[videoIndex].play();
  // visual slide
  // swiper슬라이드 초기화
  const swVisual = new Swiper(".swVisual", {
    loop: true,
  });
  // 슬라이드 변경 이벤트시 처리
  swVisual.on("slideChange", function () {
    // console.log("슬라이드 교체");
    // 진행중인 비디오 멈춤
    videos[videoIndex].pause();
    // 다음 화면에 보이는 swiper슬라이드 번호
    // console.log(swVisual.activeIndex);
    // console.log(swVisual.realIndex);
    videoIndex = swVisual.realIndex;
    // console.log(videoIndex);
    videos[videoIndex].play();
    videoReset();
  });
  // 비디오 영상이 플레이가 끝나면 다음 슬라이드로 이동
  // 늘어나는 흰색 bar
  let bars = this.document.querySelectorAll(".bar");
  // console.log(bars);
  // 늘어나는 길이를 위한 값(최대 100)
  let barScaleW = 0;
  // 타이머를 생성한다.
  let videoTimer;
  // 비디오 타이머를 설정하고 초기화하는 함수 videoReset를 정의하고 호출
  videoReset();
  function videoReset() {
    // 처음에는 0%로 만들기
    barScaleW = 0;
    // 최초에 bar를 초기화 한다.
    bars.forEach(function (bar) {
      // console.log(bar);
      bar.style.width = `${barScaleW}%`;
    });
    // 활성화될 bar 클래스 선택
    let activeBar = bars[videoIndex];
    // console.log(activeBar);
    // 일단 타이머를 청소한다.
    // setTimeout : 1번 실행 clearTimeout()
    // setInterval : 시간마다 연속 실행 clearInterval()
    clearInterval(videoTimer);
    let videoTime = videoTimeArr[videoIndex];
    console.log(videoTime);

    videoTimer = setInterval(() => {
      barScaleW++;
      // console.log(barScaleW);
      activeBar.style.width = `${barScaleW}%`;
      // console.log(barScaleW);
      // 바의 길이가 100% 이상이 되면 실행
      if (barScaleW >= 100) {
        clearInterval(videoTimer);
        videoReset();
        swVisual.slideNext();
      }
    }, videoTime * 10);
  }
  //visual-control >li
  const visualControlLi = this.document.querySelectorAll(".visual-control> li");
  visualControlLi.forEach(function (item, index) {
    // console.log(item, index)
    item.addEventListener("click", function () {
      videoIndex = index;
      swVisual.slideTo(videoIndex);
    });
  });








  //business 스와이퍼
  const swBusiness = new Swiper (".swBusiness",{
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })

});
