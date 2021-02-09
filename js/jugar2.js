$(function(){

    cartonUno()
    mySelection()
    // ballNumber()

})

// creador del carton uno 

function cartonUno(){
    let balls = 1
    
    while(balls <= 63){
       
        let cartonItem = $('#carton1').append(`<div id="${balls}"> ${balls} </div>`).find('div:last').addClass("rounded-circle"+" " +"cartonItem"+" "+'bg-unselected'+" "+ "d-flex"+" "+ "align-items-center"+" "+ " justify-content-center").attr(`id, ${balls}`)
       
        balls++
    } 

}

// selecionar numeros 
var numbersSelected=[]

function mySelection(){

    $('.carton').on('click', ".cartonItem", function () {
     
        

        var aa = $(this)
        if( !aa.is('.bg-selected' )&& numbersSelected.length<4 ){
            aa.addClass('bg-selected');
                var my_id=this.id;
                
                numbersSelected.push(my_id);
               
            
        } else {
        
            aa.removeClass('bg-selected');
            var my_id=this.id;
			var index = numbersSelected.indexOf(my_id);
			if (index > -1) {
			numbersSelected.splice(index, 1);
			}
        }


    //append del los numeros elegidos 

    for(let i= 0;i<numbersSelected.length;i++){

        let post = [...numbersSelected].sort((a,b)=>a-b)
        
        $( `.${i}`).text(post[i])
    }
    
    console.log(numbersSelected)

    })
}//funcion myselection






