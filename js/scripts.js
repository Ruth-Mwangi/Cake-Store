var item;
var noOfItems=0;
var total=0;
var itemValue;
$(document).ready(function(){

    $(".card a").click(function(e){
        e.preventDefault();
        $(".cart-items").prepend('<li data-value="'+itemValue+'">' + item+' : '+itemValue+'</li>');
        noOfItems=noOfItems+1;
        total=total+itemValue;
        $(".number").text(noOfItems)
        $(".total").text("Your total is : "+total);
    })


    // active class navigation

    $(".navbar .nav a").click(function(){
        
        $(".navbar .nav").find('a.active').removeClass( 'active' ).css({"background-color":'',"color":""});
        
        $(this).addClass('active').css({"background-color":"cornsilk","color":"black"});
        
        

    })
    $("#checkout").click(function(){
        if (total===0){
            alert("No items in cart");
            return;
        }
        alert("Thank You! Enjoy!!")
        total=0;
        noOfItems=0;
        $(".cart-items li").remove();
        $(".total").text('');

    })
    $("#clear").click(function(){
        $(".cart-items li").remove();
        noOfItems=0
        total=0;
        $(".number").text(noOfItems)
        $(".total").text('');
    });
    $(".cart-items").on('click','li',function(){
         $(this).remove();
         var del=parseInt($(this).attr('data-value'));
         noOfItems=noOfItems-1;
         total=total-del;
         $(".number").text(noOfItems)
         if(total===0){
            $(".total").text("");
         }else
         $(".total").text("Your total is : "+total);
    })




    $(".card").mouseenter(function(){
        

        $(this).children(".card-img-overlay").fadeToggle("fast");
        
        item =$(this).children(".card-body").children(".card-title").text();
        itemValue=parseInt($(this).children(".card-body").children(".card-text").children("span").text())
        
    });
    $(".card").mouseleave(function () { 
        $(this).children(".card-img-overlay").fadeToggle("slow");
        item=''
        itemValue=0;
        
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

    $("#search").keyup(function (e) { 
        e.preventDefault();
        var text=$(this).val();
        if (text!=""){
            $(".card").hide();
            $(".card-columns").find('.card.'+text).show()  
        }
        else{
            $(".card").show();

        }
              
    });

    
})
