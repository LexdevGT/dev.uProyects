
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


