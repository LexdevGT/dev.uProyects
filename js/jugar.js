const Numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]

const cartonUno = document.getElementById('carton1')

const fragmentUno = document.createDocumentFragment()
const cartonUnoSelect = ["--","--","--","--"]

for(const numero of Numeros){
    const cartonItem = document.createElement("a")
    cartonItem.textContent = numero
    cartonItem.setAttribute('value',numero)
    
    cartonItem.classList.add("btn","btn-light","rounded-circle",'cartonItem','bg-unselected')
    fragmentUno.appendChild(cartonItem)
       
}

    cartonUno.appendChild(fragmentUno)



//agregando los numeros seleccionados por carton 



let cartonUnoItem1 = document.getElementById('cartonUnoItem1')
let cartonUnoItem2 = document.getElementById('cartonUnoItem2')
let cartonUnoItem3 = document.getElementById('cartonUnoItem3')
let cartonUnoItem4 = document.getElementById('cartonUnoItem4')
let i = 0
cartonUno.addEventListener('click', (e)=>{
    const cartonUnoSelect = ["--","--","--","--"]
        if(i< 4){
            // cartonUnoSelect.shift()
            let valueItem = e.target.textContent
            
            e.target.classList.replace('bg-unselected','bg-selected')
            cartonUnoSelect.unshift(valueItem)
            // console.log(cartonUnoSelect)
            
           i++
           cartonUnoSelect.pop()
            cartonUnoItem1.value = cartonUnoSelect[3]
            
            cartonUnoItem2.value = cartonUnoSelect[2] 
            cartonUnoItem3.value = cartonUnoSelect[1] 
            cartonUnoItem4.value = cartonUnoSelect[0]

            console.log(cartonUnoSelect)

        } 
    })
    
    
    
         
   



  

    
   

   
