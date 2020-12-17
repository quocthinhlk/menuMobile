/*Menu 1*/
jQuery(function() {
  function slideMenu() {
    var activeState = jQuery("#menu-container .menu-list").hasClass("active");
    jQuery("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
  jQuery("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    jQuery("#hamburger-menu").toggleClass("open");
    jQuery("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    jQuery("body").toggleClass("overflow-hidden");
  });

  jQuery(".menu-list").find(".accordion-toggle").click(function() {
    jQuery(this).next().toggleClass("open").slideToggle("fast");
    jQuery(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    jQuery(".menu-list .accordion-content").not(jQuery(this).next()).slideUp("fast").removeClass("open");
    jQuery(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });
});
/*Menu 1*/

/*Menu 2*/
function toggle(element) {
  element.classList.toggle("change");
}
/*Menu 2*/

/*Menu 3*/
jQuery(document).ready(function(){
  jQuery(".menuBtn").click(function(){
    jQuery('.menu_mobile').toggleClass("active");
    jQuery('.menuBtn').toggleClass('toggle')
  })
})
/*Menu 3*/

/*Menu 4*/
/*Menu 4*/