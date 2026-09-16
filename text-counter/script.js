const textContainer = document.getElementById('text-input')
const counter = document.getElementById('char-count')
let counterZ = ['0','50']
textContainer.addEventListener('keydown', (event)=>{
   if (event.key === "Backspace" && counterZ[0]!=='0' ) {

    const nbrmoin = Number(counterZ[0]) - 1
    counter.style.color= 'black'
    counterZ[0] = `${nbrmoin}`
    counter.textContent= "Charactère Count: " + `${counterZ[0]}`+"/50"
      

  }
  else if(event.key.length === 1 && counterZ[0]!=='50'){
      
      const nbr = Number(counterZ[0]) + 1
      counterZ[0] = `${nbr}`
      counter.textContent= "Charactère Count: " + `${counterZ[0]}`+"/50"
      
  }
  else if(counterZ[0] =='50'){ 
    counter.style.color= 'red'
    
    event.preventDefault(); 
  }
  

 
  
  
})




