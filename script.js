$(document).ready(function(){
  $(".sub_menu").hide();

  const menu_icon = [
    "./images/icon-menu.svg",
    "./images/icon-close-menu.svg"
  ]
  var n = 1;
  $("#hamburger_menu").click(function(){
    n++;
    if(n > 1){
      n = 0;
    }
    $("#hamburger_menu").attr("src", menu_icon[n]);
    $("nav").children("ul").slideToggle();
    if($("#hamburger_menu").attr("src") == "./images/icon-close-menu.svg"){
      $("body").css({
      "background-color":"hsl(0, 0%, 41%)"
    });
    } else {
      $("body").css({
      "background-color":"hsl(0, 0%, 98%)"
    });
    $(".menu").show();
    }
  });
  
});
function mouse_hover(element_id){
$("#"+element_id).children("img").attr("src", "./images/icon-arrow-up.svg");
$("."+element_id+"_sub_menu").show();
//$("."+element_id+"_sub_menu").css("display", "flex");
}
function mouse_leave(element_id){
$("#"+element_id).children("img").attr("src", "./images/icon-arrow-down.svg");
$("."+element_id+"_sub_menu").hide();
//$("."+element_id+"_sub_menu").css("display", "none");
}







  