var item;
var noOfItems=0;
$(document).ready(function(){

    $(".card a").click(function(e){
        e.preventDefault();
        $(".cart-items").prepend('<li>' + item+'</li>');
        noOfItems=noOfItems+1;
        $(".number").text(noOfItems)
    })


    // active class navigation

    $(".navbar .nav a").click(function(){
        
        $(".navbar .nav").find('a.active').removeClass( 'active' ).css({"background-color":'',"color":""});
        
        $(this).addClass('active').css({"background-color":"cornsilk","color":"black"});
        
        

    })
    $("#clear").click(function(){
        $(".cart-items li").remove();
        noOfItems=0
        $(".number").text(noOfItems)
    });
    $(".cart-items").on('click','li',function(){
         $(this).remove();
         noOfItems=noOfItems-1;
         $(".number").text(noOfItems)
    })




    $(".card").mouseenter(function(){
        

        $(this).children(".card-img-overlay").fadeToggle("fast");
        
        item =$(this).children(".card-body").children(".card-title").text();
        
    });
    $(".card").mouseleave(function () { 
        $(this).children(".card-img-overlay").fadeToggle("slow");
        item=''
        
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
