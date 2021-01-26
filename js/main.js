
// funcion abrir slide de los menus 
$(function(){
    abrirMenu()
    
})

function abrirMenu(){
    $('aside').hide()
    $('#bars').click(function(){
        $('aside').slideToggle(1000)
    })

}


//lista de permisos 
$(document).ready(function(){   
    $('.todo').on('click', 'li', function(){    
       $(this).appendTo('.done');
    });

    $('.done').on('click', 'li', function(){    
       $(this).appendTo('.todo');
    });
});

