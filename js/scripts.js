$(document).ready(function(){
    $(".card").mouseenter(function(){
        
        $(".card-img-overlay").fadeToggle('2000',"swing");
    });
    $(".card").mouseleave(function () { 
        $(".card-img-overlay").fadeToggle("slow");
        
    });

    $(".filtersbtns button").click(function (e) { 
        e.preventDefault();

        var btnValue=$(this).attr('id');
        
        switch (btnValue){
            case ("allbtn"):
                break;
            case ("cakesbtn"):
                break;
            case ("sweetsbtn"):
                break;
            case ("cupcakesbtn"):
                break;
            case ("donutsbtn"):
                break;
            
        }
        
    });
})
