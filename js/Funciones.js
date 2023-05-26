$(document).ready(function(){

$('#fecha').on('change',function(){
    $('#edad').val(Calcular_Edad);
});

function Calcular_Edad(){

    var fecha_seleccionada = $('#fecha').val();
    var fecha_nacimiento = new Date(fecha_seleccionada);
    var fecha_actual = new Date();
    var edad = (parseInt((fecha_actual-fecha_nacimiento) / (1000*60*60*24*365) ));
    return edad;
}
    
$(function(){

    $("p").css({"background-color": "red"});

    var mayus = new RegExp("^(?=.*[A-Z].*[A-Z].*[A-Z])");
    var special = new RegExp("^(?=.*[!@#$%&*].*[!@#$%&*].*[!@#$%&*])");
    var numbers = new RegExp("^(?=.*[0-9])");
    var lower = new RegExp("^(?=.*[a-z])");
    var len = new RegExp("^(?=.{8,})");

    var regExp= [mayus, special, numbers, lower, len];
    var elementos = [$("#mayus"),$("#special"),$("#numbers"),$("#lower"),$("#len"),];

    $("#password").on("keyup", function(){
        var pass = $("#password").val();
        var check = 0;

        for(var i = 0; i < 5; i++){
            if(regExp[i].test(pass)){
                elementos[i].hide();
                check++;
            }else{
                elementos[i].show();
            }
        }
        if(check >=0 && check<=2){
            $("#mensaje").text("Contraseña muy insegura").css("color", "red");
         }else if(check >=3 && check <=4){
            $("#mensaje").text("Insegura").css("color", "orange");
         }else if(check == 5 ){ 
            $("#mensaje").text("Suficientemente segura").css("color", "green");
        }
    
        });
});


$(function(){
$("#enfermedades").hide();

$("#radio1").click(function(){

        $("#enfermedades").show();
});                  

$("#radio2").click(function(){

    $("#enfermedades").hide();
});                  
});

$(function(){
    $("#cuales").hide();
    
    $("#radio3").click(function(){
    
            $("#cuales").show();
    });                  
    
    $("#radio4").click(function(){
    
        $("#cuales").hide();
    });                  
    });

    $(function(){
        $("#frase").css("resize", "none");
    });





});