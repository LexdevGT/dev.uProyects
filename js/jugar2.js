$(function(){

    cartonUno()
    mySelection()
    agregarCarton()
    payment() 
    

})

function payment(){
    $('#tarjetaForm').hide()
    $('#sendContact').click(function(){
        $('#paymentForm').addClass('d-none')
        $('#tarjetaForm').fadeIn(1000)
    })
}

// creador del carton uno 

function cartonUno(){
    let balls = 1
    
    while(balls <= 63){
       
        $('#carton1').append(`<div id="${balls}"> ${balls} </div>`).find('div:last').addClass("rounded-circle"+" " +"cartonItem"+" "+'bg-unselected'+" "+ "d-flex"+" "+ "align-items-center"+" "+ " justify-content-center").attr(`id, ${balls}`)
       
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


function agregarCarton(){

  
    let  i = 2 //contara el numero de cartones por agregar hasta 10
    

    $('.carton_nuevo').click( function(){

        

        if(i<=10){
            let CartonNumero        = `<div class="carton${i} hover"> </div>`//father
            let cartonEncabezado    = `<h3 class="text-center bg-warning rounded ">Carton ${i}</h3>`//hijo 1 encabezado

            let cartonContenedor    = `<div class="carton  border border-1 pt-1 pb-1 rounded" id=carton${i} class="d-flex"> </div>`//hijo 2 contenedor de las balls

            let row                 = `<div class="d-flex justify-content-evenly p-2" id="resultado${i}"></div> `//hijo 3

            
            $('.cartones').append(CartonNumero)
            $(`.carton${i}`).append(cartonEncabezado, cartonContenedor, row)

            let balls = 1
    
            while(balls <= 63){
            
                let cartonItem = $(`#carton${i}`).append(`<div id="${balls}"> ${balls} </div>`).find('div:last').addClass("rounded-circle"+" " +"cartonItem"+" "+'bg-unselected'+" "+ "d-flex"+" "+ "align-items-center"+" "+ " justify-content-center").attr(`id, ${balls}`)//las pelotas podrian necesitar un id por cada carton 
            
                balls++
            } 


            let resultadoItem = 0
            // let resultBox = `${i}${resultadoItem}`;
            while(resultadoItem <4){
                $(`#resultado${i}`).append(`<div class="carton${i}${resultadoItem} circle p-2" ></div>`) //aca sera posible agrear una clase especial par identificar el div que contendra el numero selecionado

                resultadoItem ++
            }
            myselection2()
          
         
            var numbersSelected2 = [];
            
            function myselection2(){
                
                $(`#carton${i}`).on('click', ".cartonItem", function(e){
                    
                    let resultBox = e.delegateTarget.id;
                    console.log(resultBox)
                    var aa = $(this)
                                if( !aa.is('.bg-selected' )&& numbersSelected2.length<4 ){
                                    aa.addClass('bg-selected');
                                        var my_id=this.id;
                                        
                                        numbersSelected2.push(my_id);
                                    
                                    
                                } else {
                                
                                    aa.removeClass('bg-selected');
                                    var my_id=this.id;
                                    var index = numbersSelected2.indexOf(my_id);
                                    if (index > -1) {
                                    numbersSelected2.splice(index, 1);
                                    }
                                }
                                //APPEND EN RESULTADO
                                for(let i= 0;i<numbersSelected2.length;i++){

                                    let post2 = [...numbersSelected2].sort((a,b)=>a-b)
                                    
                                    console.log(` lo que necesito ${resultBox}${i}`)
                                    $( `.${resultBox}${i}`).text(post2[i])
                                }
                               
                                console.log(numbersSelected2)
                })

                
               
            }

            
            
            i++
            
            // console.log(i)
           

        }else{
            alert('Has llegado al maximo numero de cartones')
        }

        
        
      
       

        

    }) // click
    
     
 
}//funcion agregar carton


//selecionar numeros en cartones nuevos 








