var kseta_header = `
  <!-- KSETA 헤더 시작 -->
  <header class="kseta-header">
    <!-- 상단 인증 영역 -->
    <div class="kseta-header__top">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="kseta-header__auth">
              <a href="#" class="kseta-header__auth-link">회원가입</a>
              <a href="#" class="kseta-header__auth-link">로그인</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- 메인 헤더 영역 -->
    <div class="kseta-header__main">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
              <!-- 로고 영역 -->
              <h1 class="kseta-header__logo-wrap">
                <a href="/" class="kseta-header__logo-link">
                  <img src="/assets/img/kseta_rogo.png" alt="KSETA 로고" class="kseta-header__logo">
                </a>
              </h1>
  
              <!-- 네비게이션 영역 -->
              <nav class="kseta-header__nav">
                <!-- 모바일 토글 버튼 -->
                <button class="kseta-header__toggler d-lg-none" type="button">
                  <i class="fas fa-bars"></i>
                </button>
  
                <!-- 메인 메뉴 -->
                <ul class="kseta-header__menu">
                  <li class="kseta-header__menu-item">
                    <a href="#" class="kseta-header__menu-link">협회소개</a>
                    <ul class="kseta-header__submenu">
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">인사말</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">조직도</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">오시는 길</a>
                      </li>
                    </ul>
                  </li>
                  <li class="kseta-header__menu-item">
                    <a href="#" class="kseta-header__menu-link">융합교육</a>
                    <ul class="kseta-header__submenu">
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">사업목표</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">추진사업</a>
                      </li>
                    </ul>
                  </li>
                  <li class="kseta-header__menu-item">
                    <a href="#" class="kseta-header__menu-link">자격검정</a>
                    <ul class="kseta-header__submenu">
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">빅데이터 전문가</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">인공지능 마스터</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">자격증 발급</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">시험접수</a>
                      </li>
                    </ul>
                  </li>
                  <li class="kseta-header__menu-item">
                    <a href="#" class="kseta-header__menu-link">기타사업</a>
                    <ul class="kseta-header__submenu">
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">취업지원</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">IT융합교육</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">학술연구</a>
                      </li>
                    </ul>
                  </li>
                  <li class="kseta-header__menu-item">
                    <a href="#" class="kseta-header__menu-link">고객센터</a>
                    <ul class="kseta-header__submenu">
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">공지사항</a>
                      </li>
                      <li class="kseta-header__submenu-item">
                        <a href="#" class="kseta-header__submenu-link">1:1문의</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
`;
//     `
// <div class="container">
//     <div class="row">
//         <div class="col d-flex justify-content-between align-items-center">
//             <a  href="/"><h1><img  class="responsive-logo"  src="/assets/img/kseta_rogo.png" /></h1></a>
//             <nav class="d-flex gdic_nav">
//                 <ul class="d-flex f_s3">
//                     <li class="nav_list1">
//                         <a href="m1_1_planning.html" class="main_link">협회소개</a>
//                         <ul class="sub_menu f_s1">
//                             <li><a href="m1_1_planning.html">인사말</a></li>
//                             <li><a href="m1_1_planning.html">조직도</a></li>
//                             <li><a href="m1_1_planning.html">오시는 길</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav_list2">
//                         <a href="m2_1_vision.html" class="main_link">융합교육</a>
//                         <ul class="sub_menu f_s1">
//                             <li><a href="m2_1_vision.html">사업목표</a></li>
//                             <li><a href="m2_2_benefit.html">추진사업</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav_list3">
//                         <a href="m3_1_sale01.html" class="main_link">자격검정</a>
//                         <ul class="sub_menu f_s1">
//                             <li><a href="m3_1_sale01.html">빅데이터 전문가</a></li>
//                             <li><a href="m3_1_sale01.html">인공지능 마스터</a></li>
//                             <li><a href="m3_1_sale01.html">자격증 발급</a></li>
//                             <li><a href="m3_1_sale01.html">시험접수</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav_list4">
//                         <a href="m4_1_notice.html" class="main_link">기타사업</a>
//                         <ul class="sub_menu f_s1">
//                             <li><a href="m4_1_notice.html">취업지원</a></li>
//                             <li><a href="m4_1_notice.html">IT융합교육</a></li>
//                             <li><a href="m4_1_notice.html">학술연구</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav_list4">
//                         <a href="m4_1_notice.html" class="main_link">고객센터</a>
//                         <ul class="sub_menu f_s1">
//                             <li><a href="m4_1_notice.html">공지사항</a></li>
//                             <li><a href="m4_1_notice.html">1:1문의</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//                 <ul class="d-flex">
//                      <li class="nav_auth">
//                         <a href="#" class="auth_link">회원가입</a>
//                     </li>
//                     <li class="nav_auth">
//                         <a href="#" class="auth_link ">로그인</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     </div>
// </div>
// <div class="menu_more_bg"></div>`;

var kseta_footer = `
<section class="kseta-logo-section">
    <div class="kseta_intro-title">
        <h2 class="kseta_intro-title__main">파트너 및 기관</h2>
    </div>
    <div class="kseta-logo-container">
        <div class="kseta-logo-slider">
            <div class="kseta-logo-track">
                <div class="kseta-logo-item"><img src="/assets/img/logo/KCCI.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/KIU.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/MOEL.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/PNU.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/showtech.png"></div>
                
                 <div class="kseta-logo-item"><img src="/assets/img/logo/KCCI.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/KIU.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/MOEL.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/PNU.png"></div>
                <div class="kseta-logo-item"><img src="/assets/img/logo/showtech.png"></div>
            </div>
    </div>
</section>

<footer class="kseta-footer">
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__grid">
                <div>
                    <h3 class="footer__title">(사)한국융합인재교육협회</h3>
                    <p>
                        부산광역시 사상구 주례로 27번길 34<br>
                        TEL : 070-7701-7735<br>
                        E-mail : kseta@kseta.or.kr
                    </p>
                </div>
                <div>
                    <h3 class="footer__title">협회소개</h3>
                    <ul class="footer__links">
                        <li><a href="#" class="footer__link">인사말</a></li>
                        <li><a href="#" class="footer__link">연혁</a></li>
                        <li><a href="#" class="footer__link">조직도</a></li>
                        <li><a href="#" class="footer__link">오시는 길</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer__title">정보마당</h3>
                    <ul class="footer__links">
                        <li><a href="#" class="footer__link">공지사항</a></li>
                        <li><a href="#" class="footer__link">보도자료</a></li>
                        <li><a href="#" class="footer__link">정책정보</a></li>
                        <li><a href="#" class="footer__link">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer__title">관련사이트</h3>
                    <ul class="footer__links">
                        <li><a href="#" class="footer__link">관련부처</a></li>
                        <li><a href="#" class="footer__link">유관기관</a></li>
                        <li><a href="#" class="footer__link">자격증 확인</a></li>
                        <li><a href="#" class="footer__link">교육이력 확인</a></li>
                    </ul>
                </div>
            </div>
            <!-- 하단 바 -->
            <div class="kseta-footer__bottom">
                <p>&copy; 2024 KSETA. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
</footer>
`;

$(function () {
    // 데스크톱 메뉴 호버 이벤트
    $(document).on("mouseover", ".kseta-header__menu-item", function () {
        if (window.innerWidth >= 992) {  // 데스크톱에서만 호버 효과 적용
            $(this).find('.kseta-header__submenu').css({
                'display': 'block',
                'opacity': '1',
                'visibility': 'visible'
            });
        }
    });

    $(document).on("mouseout", ".kseta-header__menu-item", function () {
        if (window.innerWidth >= 992) {  // 데스크톱에서만 호버 효과 적용
            $(this).find('.kseta-header__submenu').css({
                'display': 'none',
                'opacity': '0',
                'visibility': 'hidden'
            });
        }
    });

    // 모바일 토글 버튼 클릭 이벤트
    $('.kseta-header__toggler').on('click', function () {
        $(this).find('i').toggleClass('fa-bars fa-times');
        $('.kseta-header__menu').toggleClass('kseta-header__menu--active');
    });

    // 모바일 서브메뉴 토글
    $('.kseta-header__menu-link').on('click', function (e) {
        if (window.innerWidth < 992) {  // 모바일에서만 적용
            const $submenu = $(this).siblings('.kseta-header__submenu');
            if ($submenu.length) {
                e.preventDefault();
                $('.kseta-header__submenu').not($submenu).slideUp(); // 다른 서브메뉴 닫기
                $('.kseta-header__menu-link').not($(this)).removeClass('active');
                $submenu.slideToggle();
                $(this).toggleClass('active');
            }
        }
    });


    // 리사이즈 이벤트 처리
    $(window).on('resize', function () {
        if (window.innerWidth >= 992) {
            $('.kseta-header__menu').removeClass('kseta-header__menu--active');
            $('.kseta-header__submenu').removeAttr('style');
        }
    });
});
// $(function () {
//     $(document).on("mouseover", ".gdic_nav", function () {
//         $('#gdic_header').addClass('sub_show');
//         $('.gdic_nav .sub_menu').addClass('show');
//     });
//
//     $(document).on("mouseout", ".gdic_nav", function () {
//         $('#gdic_header').removeClass('sub_show');
//         $('.gdic_nav .sub_menu').removeClass('show');
//     });
// })

function board_show() {
    $('.border_more_area').show();
    $('.border_list_area').hide();
}

function board_hide() {
    $('.border_more_area').hide();
    $('.border_list_area').show();
}

function footer_slide_on() {
    $('.footer_slide_box').slick({
        slide: 'li',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, 	//무한 반복 옵션
        slidesToShow: 3,		// 한 화면에 보여질 컨텐츠 개수
        speed: 350,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
        dots: false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true,			// 자동 스크롤 사용 여부
        autoplaySpeed: 5000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        draggable: true, 	//드래그 가능 여부
    })
}