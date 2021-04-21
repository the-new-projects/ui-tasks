$(document).ready(function(){
    $(".setting").click(function(){
        $("aside").toggle();
      
});
    $(".Dashbord").click(function(){
    $("#dd_menu1").slideToggle();    
});
   
$(".News").click(function(){
    $("#dd_menu2").slideToggle();
   
});
    $(".Trends").click(function(){
    $("#dd_menu3").slideToggle();    
});
});
//function appear($this){
//    if($this.children[1].style.display==="none"){
//        $this.children[1].style.display="block";
//    }else{
//        $this.children[1].style.display="none"
//    }
//}
