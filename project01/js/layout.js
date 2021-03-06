    $(function(){

        $(".top_banner i").on("click", function(){
            $(".top_banner").addClass("on");
        })


        $(".mopen").on("click", function(){
            $("nav").toggleClass("on");
            $(this).toggleClass("on");
        });

        $(".main_slider").slick({
            autoplay:true,
            autoplaySpeed: 4000,
            arrows:false,
            dots:true,
            pauseOnHover:false,
        });

        $(".main_slider figure").eq(1).addClass("on");
        $(".main_slider").on("afterChange", function(e,s,c){
            $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
            });



            $("#movie01 .xi-play").on("click", function(){$("#movie01 video").trigger("play");
             });

             $("#movie01 .xi-pause").on("click", function(){$("#movie01 video").trigger("pause");
            });

            
        jQuery(function(){
        jQuery("#[playerID]").YTPlayer();
        });
  
            $("#bgndVideo").YTPlayer({
                containment:'#movie02', 
                autoPlay:true, 
                mute:true, 
                startAt:0, 
                opacity:0.5,
                showControls: false,
                playOnlyIfVisible: true,
            });

        $("#movie02 .xi-pause").on("click", function(){$("#bgndVideo").YTPPause();})

        $("#movie02 .xi-play").on("click", function(){$("#bgndVideo").YTPPlay();})

        $(".product_slider").slick({
            arrows: false,
            slidesToShow: 5,
            dots: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

        $("#product i.xi-arrow-left").on("click", function(){
            $(".product_slider").slick("slickPrev")
        })
  
        $("#product i.xi-arrow-right").on("click", function(){
            $(".product_slider").slick("slickNext");
        });

        $(".tab li").on("click", function(){
            var idx=$(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_item").eq(idx).show().siblings().hide();
        })

        $(".link select").on("change", function(){
            var lik=$(this). val();
            if(lik) window.open(lik)
        })

        AOS.init();
    

    });