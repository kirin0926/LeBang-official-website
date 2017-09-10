// JavaScript Document
$('.ddw').val(0);
$('.ddw2').val(0);
$(function(){
    $('.num_box').mousewheel(function(event, delta) {
        var aaaa=$('.ddw2').val();
        if (aaaa == 1){
            return;
        }
        qpgd(delta);
    });
});
function qpgd(a){
    var z =$('.ddw').val();
    b = parseInt(z);
    c = $('.num').length;
    if(a<0){
        if(-b==c-1){
            b+=4;
            //return;
        }
        b-=1;
        $('.ddw2').val(1);
    }else if(a>0){
        if(-b==0){
            b-=4;
            //return;
        }
        b+=1;
        $('.ddw2').val(1);
    }
    if(-b==0){
        //
    }else if(-b==1){
        setTimeout(function(){
            $('.num').eq(1).find('#pc-two').addClass('animated fadeInDown');
            //$('#pc-two-c').addClass('animated fadeInUp');
            $('.num').eq(1).find('#pc-list-1').addClass('animated bounceIn');
            $('.num').eq(1).find('#pc-list-2').addClass('animated bounceIn');
            $('.num').eq(1).find('#pc-list-3').addClass('animated bounceIn');
            $('.num').eq(1).find('#pc-list-4').addClass('animated bounceIn');
            $('.num').eq(1).find('#pc-list-5').addClass('animated bounceIn');
            $('.num').eq(1).find('#pc-list-6').addClass('animated bounceIn');
            $('.num').eq(1).find('#pc-list-7').addClass('animated bounceIn');
        },500);
    }else if(-b==2){
        setTimeout(function(){
            $('.num').eq(2).find('#pc-three').addClass('animated tada');
        },500);
        //移动
        $('#poe2-c').addClass('animated fadeInDown');
        $('#poe2-phone').addClass('animated bounceInRight');
    }else if(-b==3){
        setTimeout(function(){
            $('.num').eq(3).find('#pc-four').addClass('animated bounceInRight');
            $('.num').eq(3).find('#pc-four-c').addClass('animated fadeInUp');
        },500);
        ////移动
        //$('#poe3-c').addClass('animated rubberBand');
        //$('#poe3-phone').addClass('animated shake');
    }

    $('.ddw').val(b);
    $('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
    var single_hh = $(window).height();
    click_hh =-single_hh*b;
    $('.num_box').animate({'bottom': click_hh},1000);
    setTimeout(function(){
        $('.ddw2').val(0);
    },1400);
}
$('.fixed_r li').eq(0).addClass('on');
$('.fixed_r li').click(function(){
    var b = $(this).index();
    $(this).addClass('on').siblings('li').removeClass('on');
    $('.ddw').val(-b);
    /*---------------------*/
    if(b==0){
        //$(this).find('#pc-three').addClass('animated flash');
    }else if(b==1){
        setTimeout(function(){
            $(".num").eq(1).find('#pc-two').addClass('animated fadeInDown');
            //$('#pc-two-c').addClass('animated fadeInUp');
            $(".num").eq(1).find('#pc-list-1').addClass('animated bounceIn');
            $(".num").eq(1).find('#pc-list-2').addClass('animated bounceIn');
            $(".num").eq(1).find('#pc-list-3').addClass('animated bounceIn');
            $(".num").eq(1).find('#pc-list-4').addClass('animated bounceIn');
            $(".num").eq(1).find('#pc-list-5').addClass('animated bounceIn');
            $(".num").eq(1).find('#pc-list-6').addClass('animated bounceIn');
            $(".num").eq(1).find('#pc-list-7').addClass('animated bounceIn');
        },500);
    }else if(b==2){
        setTimeout(function(){
            $('.num').eq(2).find('#pc-three').addClass('animated tada');
        },500);
        //移动
        $('#poe2-c').addClass('animated fadeInDown');
        $('#poe2-phone').addClass('animated bounceInRight');
    }else if(b==3){
        setTimeout(function(){
            $('.num').eq(3).find('#pc-four').addClass('animated bounceInRight');
            $('.num').eq(3).find('#pc-four-c').addClass('animated fadeInUp');
        },500);
        //移动
        $('#poe3-c').addClass('animated rubberBand');
        $('#poe3-phone').addClass('animated shake');
    }
    /*---------------------*/

    var single_hh = $(window).height();
    click_hh =single_hh*b;
    $('.num_box').animate({'bottom': click_hh},1000);
})
function quanp(){
    var single_hh = $(window).height();
    var single_ww = $(window).width();
    $('.num').height(single_hh);
    //$('.num li').width(single_ww);
}
quanp();
$(window).resize(function(){
    if (typeof indexSlides != 'undefined' && indexSlides.reformat)
        indexSlides.reformat();
    quanp();
});