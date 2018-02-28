$('a[href^="#"]').bind('click.smoothscroll',function (e) { //scroll to block when you click on menu
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
 });


function offer(a, b, c) { // offer icon animation	
	var imgSrc = $(a).find('img').attr("src");
	imgSrc = imgSrc.split(b, 1);
	$(a).find('img').attr("src", imgSrc+c);
}
$('.offer-block').on('mouseover', function() {
	offer(this,'.','2.png')
});
$('.offer-block').on('mouseout', function() {
	offer(this,'2','.png')
});


$('.btn-menu').click(function () { // mobile-menu
    $('.mobile-nav-block').stop().slideDown('fast');
});
$('.close').click(function () {
    $('.mobile-nav-block').stop().slideUp('fast');
});
$('.mobile-main-menu a').click(function() {
    $('.mobile-nav-block').stop().slideUp('fast');
});


// google-map 
var map;
function initMap() {
  	var element = document.getElementById('map');
 	var option = {
  		zoom: 16,
  		center: {lat: 49.795932, lng:  24.004669},
  		disableDefaultUI: true
  	};	
  	var myMap = new google.maps.Map(element, option);
  	var marker = new google.maps.Marker({
  		position: {lat: 49.795932, lng:  24.004669},
  		map: myMap,
  		icon: 'img/map-marker.png' 	                
  	})
}

