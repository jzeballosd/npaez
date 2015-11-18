$(function () {
    // CONTACT.HTML
    $("#button-reason").click(function () {
        $("#combo-reason").fadeIn(200);
    });

    $("#combo-reason>li>a").click(function () {
        var item = $(this).attr("data-valor");
        $("#button-reason").attr("data-item", item);
        $("#button-reason").html(item + "<span class='caret'></span>");
        $("#combo-reason").fadeOut(200);
    });

    //SUSCRIBIR
    var cumple = function(){
      var meses = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      
      for (var d = 1; d <= 31; d++) {
        $("#combo-dia").append("<li><a href='#' data-item='" + d + "' data-valor='" + d + "'>" + d + "</a></li>");
      }
      
      for (var m = 1; m <= 12; m++) {
        $("#combo-mes").append("<li><a href='#' data-item='" + m + "' data-valor='" + meses[m] + "'>" + meses[m] + "</a></li>");
      }
      
      for (var y = 1930; y <= 2010; y++) {
        $("#combo-ayo").append("<li><a href='#' data-item='" + y + "' data-valor='" + y + "'>" + y + "</a></li>");
      }
    };
    cumple();
    //SUBSCRIBIR - DISTRITO
    $("#button-distrito").click(function(){
        $(".combo-items").fadeOut(100);
        $("#combo-distrito").fadeIn(200);
    });
    $("#combo-distrito>li>a").click(function () {
        var item = $(this).attr("data-valor");
        $("#button-distrito").attr("data-item", item);
        $("#button-distrito").html(item + "<span class='caret'></span>");
        $("#combo-distrito").fadeOut(200);
    });
    
    //SBUSCRIBIR - DIA
    $("#button-dia").click(function(){
        $(".combo-items").fadeOut(100);
        $("#combo-dia").fadeIn(200);
    });
    $("#combo-dia>li>a").click(function () {
        var item = $(this).attr("data-valor");
        $("#button-dia").attr("data-item", item);
        $("#button-dia").html(item + "<span class='caret'></span>");
        $("#combo-dia").fadeOut(200);
    });
    //SBUSCRIBIR - MES
    $("#button-mes").click(function(){
        $(".combo-items").fadeOut(100);
        $("#combo-mes").fadeIn(200);
    });
    $("#combo-mes>li>a").click(function () {
        var item = $(this).attr("data-valor");
        $("#button-mes").attr("data-item", item);
        $("#button-mes").html(item + "<span class='caret'></span>");
        $("#combo-mes").fadeOut(200);
    });
    //SBUSCRIBIR - AYO
    $("#button-ayo").click(function(){
        $(".combo-items").fadeOut(100);
        $("#combo-ayo").fadeIn(200);
    });
    $("#combo-ayo>li>a").click(function () {
        var item = $(this).attr("data-valor");
        $("#button-ayo").attr("data-item", item);
        $("#button-ayo").html(item + "<span class='caret'></span>");
        $("#combo-ayo").fadeOut(200);
    });
    
    // REPROGRAMAR OBJETOS
    var dimensionar = function () {
        setTimeout(function () {
            var anchoPantalla = $(window).width();
            if (anchoPantalla <= 767) {
                //var altoConteSlide = $(".seq-model").height();
                var altoBoxImg = $(".seq-model>img").height();
                //$("#sequence").css("height", (altoConteSlide + 10) + "px");
                $(".seq-model").css("height", (altoBoxImg + 15) + "px");
                var altoConteSlide = $(".seq-model").height();
                $("#sequence").css("height", (altoConteSlide + 10) + "px");
            }
        }, 500);

    };
    dimensionar();
    $(window).resize(function () {
        dimensionar();        
    });
    
    
    
   

});

