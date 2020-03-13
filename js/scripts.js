
$(document).ready(function(){


    // active class navigation

    $(".navbar .nav a").click(function(){
        
        $(".navbar .nav").find('a.active').removeClass( 'active' ).css({"background-color":'',"color":""});
        
        $(this).addClass('active').css({"background-color":"cornsilk","color":"black"});
        
        

    })




    $(".card").mouseenter(function(){
        

        $(this).children(".card-img-overlay").fadeToggle("fast");
        
    });
    $(".card").mouseleave(function () { 
        $(this).children(".card-img-overlay").fadeToggle("slow");
        
    });

    $(".filtersbtns button").click(function (e) { 
        e.preventDefault();

        var btnValue=$(this).attr('id');
        
        switch (btnValue){
            case ("allbtn"):
                $(".card").show();
                break;
            case ("cakesbtn"):
                $(".card.cakes").show();
                $(".card.sweets").hide();
                $(".card.donuts").hide();
                $(".card.cupcakes").hide();
                break;
            case ("sweetsbtn"):
                $(".card.sweets").show();
                $(".card.cakes").hide();
                $(".card.donuts").hide();
                $(".card.cupcakes").hide();
                break;
            case ("cupcakesbtn"):
                $(".card.cupcakes").show();
                $(".card.sweets").hide();
                $(".card.cakes").hide();
                $(".card.donuts").hide();
                break;
            case ("donutsbtn"):
                $(".card.donuts").show();
                $(".card.cakes").hide();
                $(".card.sweets").hide();
                $(".card.cupcakes").hide();
                break;
            
        }
        
    });
})
