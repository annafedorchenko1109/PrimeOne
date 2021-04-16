function ibg(){$.each($(".ibg"),(function(e,a){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}function ibg(){let e=document.querySelectorAll(".ibg");for(var a=0;a<e.length;a++)e[a].querySelector("img")&&(e[a].style.backgroundImage="url("+e[a].querySelector("img").getAttribute("src")+")")}function adaptive_header(e,a){var n=$(".header__adaptive-container"),t=$(".header-top__lang");e<750?t.hasClass("done")||t.addClass("done").appendTo(n):t.hasClass("done")&&t.removeClass("done").prependTo($(".header-top")),e<750?$(".menu").hasClass("done")||$(".menu").addClass("done").appendTo(n):$.each($(".menu"),(function(e,a){$(this).hasClass("menu__right")?$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-bottom__column").eq(2)):$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-bottom__column").eq(0))}))}function adaptive_function(){adaptive_header($(window).outerWidth(),$(window).outerHeight())}$(".icon-menu").click((function(e){$(this).toggleClass("active"),$(".header__adaptive-container").toggleClass("active"),$("body").toggleClass("lock")})),ibg(),ibg(),$(window).resize((function(e){adaptive_function()})),adaptive_function();
//MAP
function initMap() {
   
    const firmLocation = { lat:40.74282937789867, lng: -73.92624443872621 };
    const mapCenter = { lat: 40.74282937789867, lng: -73.92624443872621 }
    const mapOption = {
        zoom: 12,
        center: mapCenter}
      
    let map = new google.maps.Map(
        // document.getElementById('map'), { zoom: 12, center: mapCenter });
        document.getElementById('map'), mapOption);
    map.setMapTypeId('terrain');
  
//    let marker = new google.maps.Marker({
//         position: firmLocation,
//         map: map,
//         icon: 'image/map/marker.png'
//     });
}
