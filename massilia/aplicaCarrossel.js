/* Função para ser usada para habilitar e ativar o carrossel de fotos */
function aplicaCarrossel(){
        var habilitaCarrossel = $("#carrossel .habilitaCarrossel");
        var carrosselProx   = habilitaCarrossel.next().length ? habilitaCarrossel.next() : $("#carrossel li:first");
        carrosselProx.addClass("habilitaCarrossel").fadeIn();
        habilitaCarrossel.removeClass("habilitaCarrossel");
                }
    $(function(){
		$("#carrossel li:first");
         window.setInterval( "aplicaCarrossel()", 2000 );
         });
