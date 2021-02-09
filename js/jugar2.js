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
       
       
       

        
      

    // if(numbersSelected.length == 4){
    //     sorted.forEach(function(content){
    //         let lotto = document.getElementById("result")
    //         let circle = document.createElement('div')
    //         circle.classList.add('circle', 'p-3');
    //         circle.textContent = content
    //         lotto.append(circle)
    //     })
       
    // }else if(document.getElementsByClassName('circle').length) {
    //     const removeElements = (elms) => elms.forEach(el => el.remove());
    //     removeElements( document.querySelectorAll(".circle") );
    // }
    

    console.log(numbersSelected)



    })
}//funcion myselection






