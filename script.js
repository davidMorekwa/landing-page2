$(document).ready(function(){
  $(".sub_menu").hide();
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

  