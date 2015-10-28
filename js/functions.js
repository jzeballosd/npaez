$(function(){
   // CONTACT.HTML
   $("#button-reason").click(function(){
       $("#combo-reason").fadeIn(200);
   });
   
   $("#combo-reason>li>a").click(function(){
       var item = $(this).attr("data-valor");
       $("#button-reason").attr("data-item",item);
       $("#button-reason").html(item + "<span class='caret'></span>");
       $("#combo-reason").fadeOut(200);
   });
    
});

