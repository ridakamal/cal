

 function Input () {

    let carttotal = document.querySelector('#totalcart') as HTMLInputElement;
    let distance = document.querySelector('#distance') as HTMLInputElement;
    let totalitem=  document.querySelector('#totalitem') as HTMLInputElement;
    let mybutton = document.getElementById('btn');
    
    let ctotal = carttotal.value;
        let dist = distance.value;
        let itotal = carttotal.value;
       
      
    
  mybutton.addEventListener('submit', (event:any) =>
     {
        console.log("hello world");
       // let delievrytotal = ctotal + dist + itotal;
  document.querySelector('#totalcost').nodeValue = ctotal + dist + itotal; 
    } ) 
   

     return (

<form className="form" > 
      
    
      <label className= "label"> Total distance </label>
 <input className = "input" id="distance" type="number" placeholder="  Enter here "/>

<br/><br/>


  <label className= "label">Total Cart Value </label>
 <input className = "input" id="totalcart" type="number" placeholder="  Enter here "/>

 <br/><br/>

  <label className= "label">Total items </label>
 <input className = "input" id="totalitem" type="number" placeholder="  Enter here "/>

 <br/><br/>
 <input  id="btn" type="submit"/>
 <br/><br/>
 <label className= "label">Total Delivery Cost :  </label>
 <input className = "cost" id="totalcost" type="number"/>
</form>
    )

 }

 export default Input
