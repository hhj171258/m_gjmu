// JavaScript Document
$(function(){
	btnToggle(".btn-menu", ".menu", "body");
	btnToggle(".btn-close", ".menu", "body");
	tabmenu(".menu nav .tabmenu li", ".menu nav .content")
	
	var historySwiper = new Swiper ('.history .swiper-container', {
		centeredSlides: true,
		loop: true,
		spaceBetween: 80,
		slidesPerView: "auto",
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.btn-next',
			prevEl: '.btn-prev'
		}
	});
	
	beauty(".beauty-inner", ".beauty .beauty-inner div");
});

function btnToggle(btn, e, body){
	$(btn).on("click", function(){
		$(this).toggleClass("on");
		$(e).slideToggle();
		if($(e).is(":visible")){
			$(body).css({"hihght": "100%"});
		} else{
			$(body).css({"hihght": "auto"});
		}
	})	
}

function tabmenu(tab, content){
	$(tab).click(function(){
		$(tab).removeClass("on");
		$(this).addClass("on");

		var contentIndex = $(this).index();
		$(content).hide();
		$(content).eq(contentIndex).show();
	})
}

function beauty(wrap, item){
	var wrapPosition = $(wrap).position().top;
	$(document).on("scroll", function(){
		$(item).each(function(){
			var scrollTop = $(document).scrollTop();
			var windowHeight = $(window).height();
			var itemPosition = $(this).position().top;
			if(scrollTop >= wrapPosition + itemPosition - windowHeight*0.7 && scrollTop < wrapPosition + itemPosition){
				$(this).addClass("on");
			} else{
				$(this).removeClass("on");
			}
//		console.log( "scrollTop windowHeight wrapPosition itemPosition");
//		console.log( scrollTop +"   "+ windowHeight +"   "+ wrapPosition +"   "+ itemPosition );
		})
	})
}