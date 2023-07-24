$(document).ready(function(){
    //////////////////////////  메인슬라이드 ////////////////////////// 
    var swiper1 = new Swiper(".swiper1", {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
    });

    // 슬라이드 영역에 마우스 오버하면 슬라이드 멈추고, 슬라이드 영역에서 마우스 아웃하면
    // 다시 슬라이드 자동 실행

    $('.swiper1').mouseenter(function(){
      swiper1.autoplay.stop();
    });
    $('.swiper1').mouseleave(function(){
      swiper1.autoplay.start();
    });

    // store slider
    var swiper2 = new Swiper(".swiper2", {
      slidesPerView: 2.5, //두개 반만 보임
      spaceBetween: 40,
      freeMode: true
    });

    // new slider
    var swiper3 = new Swiper(".swiper3", {
      slidesPerView: 2.5, //두개 반만 보임
      spaceBetween: 40,
      freeMode: true
    });
    


    //////////////////////////  greensock 플러그인 ////////////////////////// 

    ////////////////////////// banner ////////////////////////// 
    // 스크롤 이벤트에 따른 투명도 애니메이션 banner첫번째(.trend)
    gsap.timeline({
      scrollTrigger:{
      trigger:'.trend',
      pin:true,
      start:"top top",
      // end:"bottom top",
      scrub:1
    }
    }).to('.trend .banner_img1', {duration:3,opacity:0}) /* 첫번째 이미지 사라지게 해주세요 */

    gsap.timeline({
      scrollTrigger:{
      trigger:'.trend',
      // pin:true,
      start:"top top",
      end:"bottom top",
      scrub:1,
    }
    }).to('.trend .banner_img2', {duration:3,opacity:1}) /* 두번째 이미지 */



    ////////////////////////// content ////////////////////////// 

    gsap.timeline({
      scrollTrigger:{
      trigger:'.content',
      pin:'.content',
      start:"top top",
      end:"+=3000",
      scrub:1,
      }
    })
      .to('.content .banner_img1', {duration:6})
      .to('.content .banner_img1', {duration:5, opacity:0})
      .to('.content .banner_img2', {duration:8, opacity:1})
      .to('.content .banner_img2', {duration:6, scale:0})
      .to('.content .banner_img3', {duration:5, top:'10%'})
      .to('.content .banner_img3', {duration:5, top:'-4vh'})
      .to('.content .banner_img4', {duration:4, top:'45%'})
      .to('.content .banner_img4', {duration:7})



    ////////////////////////// recipe ////////////////////////// 

      // gsap.timeline({
      //   scrollTrigger:{
      //   trigger:'.recipe',
      //   pin:true,
      //   start:"30px top",
      //   end:"+=1000",
      //   scrub:1
      //   }
      // })
      // .to('.recipe .banner_img2', {duration:0, scale:1.2}) // 초기값
      // .to('.recipe .banner_img2', {duration:5, scale:1})
      // .to('.recipe .ani_img', {duration:30, top:"-140%"})

      // gsap.timeline({
      //   scrollTrigger:{
      //   trigger:'.recipe',
      //   start:"center center",
      //   end:"+=3000",
      //   scrub:1
      //   }
      // })
      // .to('.recipe .banner_img2', {duration:70, top:"150%", delay:15})

      ////////////////////////// ScrollTrigger ////////////////////////// 
      ScrollTrigger.matchMedia({

        ////// pc //////
        "(min-width:1024px)":function(){

          gsap.timeline({
            scrollTrigger:{
            trigger:'.recipe',
            pin:true,
            start:"30px top",
            end:"+=1000",
            scrub:1
            }
          })
          .to('.recipe .banner_img2', {duration:0, scale:1.2}) // 초기값
          .to('.recipe .banner_img2', {duration:5, scale:1})
          .to('.recipe .ani_img', {duration:30, top:"-140%"})
    
          gsap.timeline({
            scrollTrigger:{
            trigger:'.recipe',
            start:"center center",
            end:"+=3000",
            scrub:1
            }
          })
          .to('.recipe .banner_img2', {duration:70, top:"150%", delay:15})
          
        },

        ////// 태블릿 //////
        "(min-width:768px) and (max-width:1023px)":function(){
          
          gsap.timeline({
            scrollTrigger:{
            trigger:'.recipe',
            // pin:true,
            start:"30px top",
            end:"+=2000",
            scrub:1
            }
          })
          .to('.recipe .banner_img2', {duration:0, scale:1.2}) // 초기값
          .to('.recipe .banner_img2', {duration:5, scale:1})
          .to('.recipe .banner_img2', {duration:30})
          // .to('.recipe .ani_img', {duration:30, top:"-200vw"})

          gsap.timeline({
            scrollTrigger:{
            trigger:'.recipe',
            start:"center center",
            end:"+=3000",
            scrub:1
            }
          })
          .to('.recipe .banner_img2', {duration:70, top:"70vw", delay:10})

          gsap.timeline({
            scrollTrigger:{
            trigger:'.recipe',
            pin:true,
            start:"center center",
            end:"+=1500",
            scrub:1
            }
          })
          .to('.recipe .banner_img0', {duration:10})
          .to('.recipe .banner_img0', {duration:30, top:"-200vw"})

          gsap.timeline({
            scrollTrigger:{
            trigger:'.recipe',
            // pin:true,
            start:"center center",
            end:"+=1500",
            scrub:1
            }
          })
          .to('.recipe .banner_img3', {duration:10})
          .to('.recipe .banner_img3', {duration:30, top:"-170vw"});

          gsap.timeline({
            scrollTrigger:{
            trigger:'.recipe',
            // pin:true,
            start:"center center",
            end:"+=1500",
            scrub:1
            }
          })
          .to('.recipe .banner_img4', {duration:10})
          .to('.recipe .banner_img4', {duration:30, top:"-170vw"})

        },

        //모바일
        // "(min-width:360px)":function(){

        // }

      });



      //////////////////////////  팝업 갤러리 ////////////////////////// 

      $('.archive_photo ul li').click(function(e){
        e.preventDefault();/* 누르면 위로 올라가는거 해결 */
        // 클릭한 li의 인덱스 번호를 가져와서 변수에 저장
        var idx=$(this).index()+1;
        $('.container').empty();
        $('.container').append('<img src="img/pop_'+idx+'.jpg">');
        $('.popup').fadeIn();
        $('html,body').css('overflow-y','hidden')
      });

      // 팝업 갤러리 안 닫기버튼
      $('.popup .close_btn').click(function(e){
        e.preventDefault();
        // container영역 비우기
        $('.container').empty();
        $('.popup').hide();
        $('html,body').css('overflow-y','auto')
      })

      // 팝업 갤러리 아무데나 클릭해도 팝업창 닫기
      $(document).mouseup(function(e){
        e.preventDefault();
        let popup=$('.popup');
        if(!popup.is(e.target) && popup.has(e.target).length===0){
          // container영역 비우기
          $('.container').empty();
          $('.popup').hide();
          $('html,body').css('overflow-y','auto')
        }
      })



      //////////////////////////  햄버거 메뉴 클릭하면 span 애니메이션 ////////////////////////// 
      let sw=false;
      $('.ham_menu').click(function(){
        if(sw==false) {
          sw=true;
          $(this).addClass('active');
          $('.menu_area').animate({right:0});
        }else{
          sw=false;
          $(this).removeClass('active');
          $('.menu_area').animate({right:'-100vw'});
        }
      });

      // 태블릿(가로길이가 768이상, 1024 미만일때)
      // let winWidth=$(window).width();
      // if(winWidth >= 768 && winWidth <1024) {
      //   var swiper2=new Swiper(".swiper2", {
      //     slidesPerView:2.7,
      //     spaceBeteween:0,
      //     freeMode:true,
      //   });
      //   let direction='ltr';
      //   swiper2.changeLanguageDirection(direction);
      // }



      });//document 끝