$(function(){
    abrirMenu()
    
})

function abrirMenu(){
    $('aside').hide()
    $('#bars').click(function(){
        $('aside').toggle(1000)
    })

}

