
 function Input () {
 
 const mysubmit = () => {
 
  let carttotal = document.getElementById('totalcart') as any;
  let distance = document.getElementById('distance') as any;
  let totalitem=  document.getElementById('totalitem') as any;
  let p = document.getElementById('totalcost') as any;


    let ctotal = carttotal.value;
    let dist = distance.value;
    let itotal = totalitem.value; 

if (ctotal >= 100 ){  
return 'no charge'; }
else if (ctotal < 100) {
  //all the below statements for "cart total < 10 && items < 5 and distances changing"
if(carttotal.value <= 10 && itotal < 5 )
 {  if (dist <=500 )
        { let surcharge = 10 - ctotal + 1;
          if ( surcharge <= 15) {  p.append(surcharge); }
          else { p.innerHTML = 'delivery cost is exceeding 15e'; }
       

        }
    if (dist > 500 && dist <= 1000) 
        { let surcharge = 10 - ctotal + 2;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

        }
      
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 10 - ctotal + 3;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
        }    
     else if (dist >1500 && dist <= 2000)
        {let surcharge = 10 - ctotal + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
        }  
     else if (dist >2000 && dist <= 2500)
        { let surcharge = 10 - ctotal + 5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
        }  
     else if (dist >2500 && dist <= 3000)
        { let surcharge = 10 - ctotal + 6;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }  
     else if (dist >3000 && dist <= 3500)
        {let surcharge = 10 - ctotal + 7;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
        }
        
    else if (dist >3500 && dist <= 4000)
        { let surcharge = 10 - ctotal + 8;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
        }

     else if (dist >4000 && dist <= 4500)
        { let surcharge = 10 - ctotal + 9;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
        }

    else if (dist >4500 && dist <= 5000)
        { let surcharge = 10 - ctotal + 10;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
        }

    else if (dist >5000 && dist <= 5500)
        { let surcharge = 10 - ctotal + 11;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }

    else if (dist >5500 && dist <= 6000)
        { let surcharge = 10 - ctotal + 12;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
        }

    else if (dist >6000 && dist <= 6500)
        { let surcharge = 10 - ctotal + 13;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }

    else if (dist >6500 && dist <= 7000)
        { let surcharge = 10 - ctotal + 14;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
        }

    else if (dist >7000 && dist <= 7500)
        { let surcharge = 10 - ctotal + 15;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }
  }


  //all the below statements for "cart total < 10 && items = 5 and distances changing"
  if(carttotal.value <= 10 && itotal === 5 )
 {  if (dist <=500 )
        { let surcharge = 10 - ctotal + 1 + 0.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

        }
    if (dist > 500 && dist <= 1000) 
        { let surcharge = 10 - ctotal + 2 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

        }
  
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 10 - ctotal + 3 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
        }    
     else if (dist >1500 && dist <= 2000)
        {let surcharge = 10 - ctotal + 4 + 0.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
        }  
     else if (dist >2000 && dist <= 2500)
        { let surcharge = 10 - ctotal + 5 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
        }  
     else if (dist >2500 && dist <= 3000)
        { let surcharge = 10 - ctotal + 6 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }  
     else if (dist >3000 && dist <= 3500)
        {let surcharge = 10 - ctotal + 7 + 0.5;
             if ( surcharge <= 15) { p.append(surcharge); }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
        }
        
    else if (dist >3500 && dist <= 4000)
        { let surcharge = 10 - ctotal + 8 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
        }

     else if (dist >4000 && dist <= 4500)
        { let surcharge = 10 - ctotal + 9 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
        }

    else if (dist >4500 && dist <= 5000)
        { let surcharge = 10 - ctotal + 10 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
        }

    else if (dist >5000 && dist <= 5500)
        { let surcharge = 10 - ctotal + 11 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge); }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }

    else if (dist >5500 && dist <= 6000)
        { let surcharge = 10 - ctotal + 12 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
        }

    else if (dist >6000 && dist <= 6500)
        { let surcharge = 10 - ctotal + 13 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }

    else if (dist >6500 && dist <= 7000)
        { let surcharge = 10 - ctotal + 14 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
        }

    else if (dist >7000 && dist <= 7500)
        { let surcharge = 10 - ctotal + 15 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }
  }



  //all the below statements for "cart total < 10 && items = 6 and distances changing"
  if(carttotal.value <= 10 && itotal === 6 )
 {  if (dist <=500 )
        { let surcharge = 10 - ctotal + 1 + 1;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

        }
    if (dist > 500 && dist <= 1000) 
        { let surcharge = 10 - ctotal + 2 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

        }
  
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 10 - ctotal + 3 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
        }    
     else if (dist >1500 && dist <= 2000)
        {let surcharge = 10 - ctotal + 4 + 1;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
        }  
     else if (dist >2000 && dist <= 2500)
        { let surcharge = 10 - ctotal + 5 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
        }  
     else if (dist >2500 && dist <= 3000)
        { let surcharge = 10 - ctotal + 6 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }  
     else if (dist >3000 && dist <= 3500)
        {let surcharge = 10 - ctotal + 7 + 1;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
        }
        
    else if (dist >3500 && dist <= 4000)
        { let surcharge = 10 - ctotal + 8 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
        }

     else if (dist >4000 && dist <= 4500)
        { let surcharge = 10 - ctotal + 9 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
        }

    else if (dist >4500 && dist <= 5000)
        { let surcharge = 10 - ctotal + 10 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
        }

    else if (dist >5000 && dist <= 5500)
        { let surcharge = 10 - ctotal + 11 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }

    else if (dist >5500 && dist <= 6000)
        { let surcharge = 10 - ctotal + 12 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
        }

    else if (dist >6000 && dist <= 6500)
        { let surcharge = 10 - ctotal + 13 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }

    else if (dist >6500 && dist <= 7000)
        { let surcharge = 10 - ctotal + 14 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
        }

    else if (dist >7000 && dist <= 7500)
        { let surcharge = 10 - ctotal + 15 + 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
        }
  }


//all the below statements for "cart total < 10 && items = 7 and distances changing"
if(carttotal.value <= 10 && itotal === 7 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 1.5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

   else if (dist >5000 && dist <= 5500)
       { let surcharge = 10 - ctotal + 11 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }

   else if (dist >5500 && dist <= 6000)
       { let surcharge = 10 - ctotal + 12 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }

   else if (dist >6000 && dist <= 6500)
       { let surcharge = 10 - ctotal + 13 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }

   else if (dist >6500 && dist <= 7000)
       { let surcharge = 10 - ctotal + 14 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
       }

   else if (dist >7000 && dist <= 7500)
       { let surcharge = 10 - ctotal + 15 + 1.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }
 }


 
 
   //all the below statements for "cart total < 10 && items = 8 and distances changing"
   if(carttotal.value <= 10 && itotal === 8 )
   {  if (dist <=500 )
          { let surcharge = 10 - ctotal + 1 + 2;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
          }
      if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
          }
    
      else if (dist >1000 && dist <= 1500)
          { let surcharge = 10 - ctotal + 3 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }    
       else if (dist >1500 && dist <= 2000)
          {let surcharge = 10 - ctotal + 4 + 2;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
          }  
       else if (dist >2000 && dist <= 2500)
          { let surcharge = 10 - ctotal + 5 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
          }  
       else if (dist >2500 && dist <= 3000)
          { let surcharge = 10 - ctotal + 6 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
          }  
       else if (dist >3000 && dist <= 3500)
          {let surcharge = 10 - ctotal + 7 + 2;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
          }
          
      else if (dist >3500 && dist <= 4000)
          { let surcharge = 10 - ctotal + 8 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
          }
  
       else if (dist >4000 && dist <= 4500)
          { let surcharge = 10 - ctotal + 9 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
          }
  
      else if (dist >4500 && dist <= 5000)
          { let surcharge = 10 - ctotal + 10 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
          }
  
      else if (dist >5000 && dist <= 5500)
          { let surcharge = 10 - ctotal + 11 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
          }
  
      else if (dist >5500 && dist <= 6000)
          { let surcharge = 10 - ctotal + 12 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }
  
      else if (dist >6000 && dist <= 6500)
          { let surcharge = 10 - ctotal + 13 + 2;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
          }
  
    }


//all the below statements for "cart total < 10 && items = 9 and distances changing"
if(carttotal.value <= 10 && itotal === 9 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 2.5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 2.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 2.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

   else if (dist >5000 && dist <= 5500)
       { let surcharge = 10 - ctotal + 11 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }

   else if (dist >5500 && dist <= 6000)
       { let surcharge = 10 - ctotal + 12 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }

   else if (dist >6000 && dist <= 6500)
       { let surcharge = 10 - ctotal + 13 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }

 }


 //all the below statements for "cart total < 10 && items = 10 and distances changing"
if(carttotal.value <= 10 && itotal === 10 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 3;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 3;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 3;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

   else if (dist >5000 && dist <= 5500)
       { let surcharge = 10 - ctotal + 11 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }

   else if (dist >5500 && dist <= 6000)
       { let surcharge = 10 - ctotal + 12 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }


 }


  //all the below statements for "cart total < 10 && items = 11 and distances changing"
if(carttotal.value <= 10 && itotal === 11 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 3.5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 3.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 3.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

   else if (dist >5000 && dist <= 5500)
       { let surcharge = 10 - ctotal + 11 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }

   else if (dist >5500 && dist <= 6000)
       { let surcharge = 10 - ctotal + 12 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }


 }

  //all the below statements for "cart total < 10 && items = 12 and distances changing"
if(carttotal.value <= 10 && itotal === 12 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 4;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 4;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 4;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

   else if (dist >5000 && dist <= 5500)
       { let surcharge = 10 - ctotal + 11 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }


 }

   //all the below statements for "cart total < 10 && items = 13 and distances changing"
if(carttotal.value <= 10 && itotal === 13 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 4.5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 4.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 4.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

   else if (dist >5000 && dist <= 5500)
       { let surcharge = 10 - ctotal + 11 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }


 }

   //all the below statements for "cart total < 10 && items = 14 and distances changing"
if(carttotal.value <= 10 && itotal === 14 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }
 }


    //all the below statements for "cart total < 10 && items = 15 and distances changing"
if(carttotal.value <= 10 && itotal === 15 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 5.5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 5.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 5.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 5.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 5.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 5.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 5.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 5.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }

   else if (dist >4500 && dist <= 5000)
       { let surcharge = 10 - ctotal + 10 + 5.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }
 }

    //all the below statements for "cart total < 10 && items = 16 and distances changing"
if(carttotal.value <= 10 && itotal === 16 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 6;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 6;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 6;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 6;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 6;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 6;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 6;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 6;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 6;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }
 }



     //all the below statements for "cart total < 10 && items = 17 and distances changing"
if(carttotal.value <= 10 && itotal === 17 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 6.5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 6.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 6.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 6.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 6.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 6.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 6.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 6.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }

    else if (dist >4000 && dist <= 4500)
       { let surcharge = 10 - ctotal + 9 + 6.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
       }
 }

     //all the below statements for "cart total < 10 && items = 18 and distances changing"
if(carttotal.value <= 10 && itotal === 18 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 7;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 7;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 7;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 7;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 7;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 7;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 7;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 7;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }
 }

     //all the below statements for "cart total < 10 && items = 19 and distances changing"
if(carttotal.value <= 10 && itotal === 19 )
{  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 7.5;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
   if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 7.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }

       }
 
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 10 - ctotal + 3 + 7.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
       }    
    else if (dist >1500 && dist <= 2000)
       {let surcharge = 10 - ctotal + 4 + 7.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
       }  
    else if (dist >2000 && dist <= 2500)
       { let surcharge = 10 - ctotal + 5 + 7.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
       }  
    else if (dist >2500 && dist <= 3000)
       { let surcharge = 10 - ctotal + 6 + 7.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
       }  
    else if (dist >3000 && dist <= 3500)
       {let surcharge = 10 - ctotal + 7 + 7.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
  
       }
       
   else if (dist >3500 && dist <= 4000)
       { let surcharge = 10 - ctotal + 8 + 7.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
       }
 }


   //all the below statements for "cart total < 10 && items = 20 and distances changing"
   if(carttotal.value <= 10 && itotal === 20 )
   {  if (dist <=500 )
          { let surcharge = 10 - ctotal + 1 + 8;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
      if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 8;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
    
      else if (dist >1000 && dist <= 1500)
          { let surcharge = 10 - ctotal + 3 + 8;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }    
       else if (dist >1500 && dist <= 2000)
          {let surcharge = 10 - ctotal + 4 + 8;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
          }  
       else if (dist >2000 && dist <= 2500)
          { let surcharge = 10 - ctotal + 5 + 8;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
          }  
       else if (dist >2500 && dist <= 3000)
          { let surcharge = 10 - ctotal + 6 + 8;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
          }  
       else if (dist >3000 && dist <= 3500)
          {let surcharge = 10 - ctotal + 7 + 8;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
          }
   
    }

      //all the below statements for "cart total < 10 && items = 21 and distances changing"
   if(carttotal.value <= 10 && itotal === 21 )
   {  if (dist <=500 )
          { let surcharge = 10 - ctotal + 1 + 8.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
      if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 8.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
    
      else if (dist >1000 && dist <= 1500)
          { let surcharge = 10 - ctotal + 3 + 8.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }    
       else if (dist >1500 && dist <= 2000)
          {let surcharge = 10 - ctotal + 4 + 8.5;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
          }  
       else if (dist >2000 && dist <= 2500)
          { let surcharge = 10 - ctotal + 5 + 8.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
          }  
       else if (dist >2500 && dist <= 3000)
          { let surcharge = 10 - ctotal + 6 + 8.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
          }  
       else if (dist >3000 && dist <= 3500)
          {let surcharge = 10 - ctotal + 7 + 8.5;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
          }
   
    }

      //all the below statements for "cart total < 10 && items = 22 and distances changing"
   if(carttotal.value <= 10 && itotal === 22 )
   {  if (dist <=500 )
          { let surcharge = 10 - ctotal + 1 + 9;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
      if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 9;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
    
      else if (dist >1000 && dist <= 1500)
          { let surcharge = 10 - ctotal + 3 + 9;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }    
       else if (dist >1500 && dist <= 2000)
          {let surcharge = 10 - ctotal + 4 + 9;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
          }  
       else if (dist >2000 && dist <= 2500)
          { let surcharge = 10 - ctotal + 5 + 9;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
          }  
       else if (dist >2500 && dist <= 3000)
          { let surcharge = 10 - ctotal + 6 + 9;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
          }     
    }

         //all the below statements for "cart total < 10 && items = 23 and distances changing"
   if(carttotal.value <= 10 && itotal === 23 )
   {  if (dist <=500 )
          { let surcharge = 10 - ctotal + 1 + 9.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
      if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 9.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
    
      else if (dist >1000 && dist <= 1500)
          { let surcharge = 10 - ctotal + 3 + 9.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }    
       else if (dist >1500 && dist <= 2000)
          {let surcharge = 10 - ctotal + 4 + 9.5;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
          }  
       else if (dist >2000 && dist <= 2500)
          { let surcharge = 10 - ctotal + 5 + 9.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
          }  
       else if (dist >2500 && dist <= 3000)
          { let surcharge = 10 - ctotal + 6 + 9.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
          }     
    }

         //all the below statements for "cart total < 10 && items = 24 and distances changing"
   if(carttotal.value <= 10 && itotal === 24 )
   {  if (dist <=500 )
          { let surcharge = 10 - ctotal + 1 + 10;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
      if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 10;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
    
      else if (dist >1000 && dist <= 1500)
          { let surcharge = 10 - ctotal + 3 + 10;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }    
       else if (dist >1500 && dist <= 2000)
          {let surcharge = 10 - ctotal + 4 + 10;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
          }  
       else if (dist >2000 && dist <= 2500)
          { let surcharge = 10 - ctotal + 5 + 10;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
          }      
    }

           //all the below statements for "cart total < 10 && items = 25 and distances changing"
   if(carttotal.value <= 10 && itotal === 25 )
   {  if (dist <=500 )
          { let surcharge = 10 - ctotal + 1 + 10.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
      if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 10.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
   
          }
    
      else if (dist >1000 && dist <= 1500)
          { let surcharge = 10 - ctotal + 3 + 10.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
          }    
       else if (dist >1500 && dist <= 2000)
          {let surcharge = 10 - ctotal + 4 + 10.5;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
          }  
       else if (dist >2000 && dist <= 2500)
          { let surcharge = 10 - ctotal + 5 + 10.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
          }      
    }

       //all the below statements for "cart total < 10 && items = 26 and distances changing"
       if(carttotal.value <= 10 && itotal === 26 )
       {  if (dist <=500 )
              { let surcharge = 10 - ctotal + 1 + 11;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
              }
          if (dist > 500 && dist <= 1000) 
              { let surcharge = 10 - ctotal + 2 + 11;
                    if ( surcharge <= 15) { p.append(surcharge);  }
                    else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
              }
        
          else if (dist >1000 && dist <= 1500)
              { let surcharge = 10 - ctotal + 3 + 11;
                    if ( surcharge <= 15) { p.append(surcharge);  }
                    else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
              }    
           else if (dist >1500 && dist <= 2000)
              {let surcharge = 10 - ctotal + 4 + 11;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
              }        
        }
     //all the below statements for "cart total < 10 && items = 27 and distances changing"
     if(carttotal.value <= 10 && itotal === 27 )
     {  if (dist <=500 )
            { let surcharge = 10 - ctotal + 1 + 11.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
            }
        if (dist > 500 && dist <= 1000) 
            { let surcharge = 10 - ctotal + 2 + 11.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
            }
      
        else if (dist >1000 && dist <= 1500)
            { let surcharge = 10 - ctotal + 3 + 11.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
            }    
         else if (dist >1500 && dist <= 2000)
            {let surcharge = 10 - ctotal + 4 + 11.5;
                 if ( surcharge <= 15) { p.append(surcharge);  }
                 else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
            }        
      }

           //all the below statements for "cart total < 10 && items = 28 and distances changing"
           if(carttotal.value <= 10 && itotal === 28 )
           {  if (dist <=500 )
                  { let surcharge = 10 - ctotal + 1 + 12;
                    if ( surcharge <= 15) { p.append(surcharge);  }
                    else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
                  }
              if (dist > 500 && dist <= 1000) 
                  { let surcharge = 10 - ctotal + 2 + 12;
                        if ( surcharge <= 15) { p.append(surcharge);  }
                        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
                  }
            
              else if (dist >1000 && dist <= 1500)
                  { let surcharge = 10 - ctotal + 3 + 12;
                        if ( surcharge <= 15) { p.append(surcharge);  }
                        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
                  }    
       
            }

 //all the below statements for "cart total < 10 && items = 29 and distances changing"
    if(carttotal.value <= 10 && itotal === 29 )
           {  if (dist <=500 )
                  { let surcharge = 10 - ctotal + 1 + 12.5;
                    if ( surcharge <= 15) { p.append(surcharge);  }
                    else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
                  }
              if (dist > 500 && dist <= 1000) 
                  { let surcharge = 10 - ctotal + 2 + 12.5;
                        if ( surcharge <= 15) { p.append(surcharge);  }
                        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
                  }
            
              else if (dist >1000 && dist <= 1500)
                  { let surcharge = 10 - ctotal + 3 + 12.5;
                        if ( surcharge <= 15) { p.append(surcharge);  }
                        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
                  }    
       
                }

 //all the below statements for "cart total < 10 && items = 30 and distances changing"
 if(carttotal.value <= 10 && itotal === 30 )
    {  if (dist <=500 )
         { let surcharge = 10 - ctotal + 1 + 13;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                 
         }
        if (dist > 500 && dist <= 1000) 
          { let surcharge = 10 - ctotal + 2 + 13;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                 
          }          
             
    }

     //all the below statements for "cart total < 10 && items = 31 and distances changing"
 if(carttotal.value <= 10 && itotal === 31 )
 {  if (dist <=500 )
      { let surcharge = 10 - ctotal + 1 + 13.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }
     if (dist > 500 && dist <= 1000) 
       { let surcharge = 10 - ctotal + 2 + 13.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
       }          
          
 }

  //all the below statements for "cart total < 10 && items = 32 and distances changing"
  if(carttotal.value <= 10 && itotal === 32 )
  {  if (dist <=500 )
       { let surcharge = 10 - ctotal + 1 + 14;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
       }        
           
  }







       //all the below statements for "cart total > 10 && items < 5 and distances changing"
  if(carttotal.value >= 10 && carttotal.value < 100 && itotal < 5 )
  {  if (dist <=500 )
         { let surcharge = 1;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
 
         }
     if (dist > 500 && dist <= 1000) 
         { let surcharge =  2;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
 
         }
         
     else if (dist >1000 && dist <= 1500)
         { let surcharge = 3;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
         }    
      else if (dist >1500 && dist <= 2000)
         {let surcharge =  4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
         }  
      else if (dist >2000 && dist <= 2500)
         { let surcharge =  5;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
         }  
      else if (dist >2500 && dist <= 3000)
         { let surcharge =  6;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
         }  
      else if (dist >3000 && dist <= 3500)
         {let surcharge =  7;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
         }
         
     else if (dist >3500 && dist <= 4000)
         { let surcharge =  8;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
         }
 
      else if (dist >4000 && dist <= 4500)
         { let surcharge =  9;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
         }
 
     else if (dist >4500 && dist <= 5000)
         { let surcharge =  10;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
         }
 
     else if (dist >5000 && dist <= 5500)
         { let surcharge =  11;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
         }
 
     else if (dist >5500 && dist <= 6000)
         { let surcharge = 12;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
         }
 
     else if (dist >6000 && dist <= 6500)
         { let surcharge =  13;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
         }
 
     else if (dist >6500 && dist <= 7000)
         { let surcharge =  14;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
         }
 
     else if (dist >7000 && dist <= 7500)
         { let surcharge = 15;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
         }
   }

     //all the below statements for "cart total > 10 && items = 5 and distances changing"
     if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 5 )
     {  if (dist <=500 )
            { let surcharge = 1 + 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
            }
        if (dist > 500 && dist <= 1000) 
            { let surcharge =  2 + 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
    
            }
            
        else if (dist >1000 && dist <= 1500)
            { let surcharge = 3+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
            }    
         else if (dist >1500 && dist <= 2000)
            {let surcharge =  4+ 0.5;
                 if ( surcharge <= 15) { p.append(surcharge);  }
                 else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
            }  
         else if (dist >2000 && dist <= 2500)
            { let surcharge =  5+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
            }  
         else if (dist >2500 && dist <= 3000)
            { let surcharge =  6+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
            }  
         else if (dist >3000 && dist <= 3500)
            {let surcharge =  7+ 0.5;
                 if ( surcharge <= 15) { p.append(surcharge);  }
                 else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
            }
            
        else if (dist >3500 && dist <= 4000)
            { let surcharge =  8+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
            }
    
         else if (dist >4000 && dist <= 4500)
            { let surcharge =  9+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
            }
    
        else if (dist >4500 && dist <= 5000)
            { let surcharge =  10+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
            }
    
        else if (dist >5000 && dist <= 5500)
            { let surcharge =  11+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
            }
    
        else if (dist >5500 && dist <= 6000)
            { let surcharge = 12+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
            }
    
        else if (dist >6000 && dist <= 6500)
            { let surcharge =  13+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
            }
    
        else if (dist >6500 && dist <= 7000)
            { let surcharge =  14+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
            }
    
        else if (dist >7000 && dist <= 7500)
            { let surcharge = 15+ 0.5;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
            }
      }


      //all the below statements for "cart total > 10 && items < 5 and distances changing"
      if(carttotal.value >= 10 && carttotal.value < 100  && itotal < 5 )
      {  if (dist <=500 )
             { let surcharge = 1;
               if ( surcharge <= 15) { p.append(surcharge);  }
               else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
             }
         if (dist > 500 && dist <= 1000) 
             { let surcharge =  2;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
     
             }
             
         else if (dist >1000 && dist <= 1500)
             { let surcharge = 3;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
             }    
          else if (dist >1500 && dist <= 2000)
             {let surcharge =  4;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
             }  
          else if (dist >2000 && dist <= 2500)
             { let surcharge =  5;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
             }  
          else if (dist >2500 && dist <= 3000)
             { let surcharge =  6;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
             }  
          else if (dist >3000 && dist <= 3500)
             {let surcharge =  7;
                  if ( surcharge <= 15) { p.append(surcharge);  }
                  else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
             }
             
         else if (dist >3500 && dist <= 4000)
             { let surcharge =  8;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
             }
     
          else if (dist >4000 && dist <= 4500)
             { let surcharge =  9;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
             }
     
         else if (dist >4500 && dist <= 5000)
             { let surcharge =  10;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
             }
     
         else if (dist >5000 && dist <= 5500)
             { let surcharge =  11;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
             }
     
         else if (dist >5500 && dist <= 6000)
             { let surcharge = 12;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
             }
     
         else if (dist >6000 && dist <= 6500)
             { let surcharge =  13;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
             }
     
         else if (dist >6500 && dist <= 7000)
             { let surcharge =  14;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
             }
     
         else if (dist >7000 && dist <= 7500)
             { let surcharge = 15;
                   if ( surcharge <= 15) { p.append(surcharge);  }
                   else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
             }
       }

//all the below statements for "cart total > 10 && items = 5 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 5 )
  { if (dist <=500 )
      { let surcharge = 1 + 0.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
    if (dist > 500 && dist <= 1000) 
      { let surcharge =  2 + 0.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
                
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 3+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }    
    else if (dist >1500 && dist <= 2000)
        {let surcharge =  4+ 0.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
        }  
    else if (dist >2000 && dist <= 2500)
        { let surcharge =  5+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
        }  
    else if (dist >2500 && dist <= 3000)
        { let surcharge =  6+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }  
    else if (dist >3000 && dist <= 3500)
        {let surcharge =  7+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
        }
                
     else if (dist >3500 && dist <= 4000)
        { let surcharge =  8+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >4000 && dist <= 4500)
        { let surcharge =  9+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
        }
        
    else if (dist >4500 && dist <= 5000)
        { let surcharge =  10+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >5000 && dist <= 5500)
        { let surcharge =  11+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }
        
    else if (dist >5500 && dist <= 6000)
        { let surcharge = 12+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }
        
    else if (dist >6000 && dist <= 6500)
        { let surcharge =  13+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }
        
    else if (dist >6500 && dist <= 7000)
        { let surcharge =  14+ 0.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                 
        }
        
    else if (dist >7000 && dist <= 7500)
          { let surcharge = 15+ 0.5;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
          }
  }

//all the below statements for "cart total > 10 && items = 6 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 6 )
  { if (dist <=500 )
      { let surcharge = 1 + 1;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
    if (dist > 500 && dist <= 1000) 
      { let surcharge =  2 + 1;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
                
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 3+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }    
    else if (dist >1500 && dist <= 2000)
        {let surcharge =  4+ 1;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
        }  
    else if (dist >2000 && dist <= 2500)
        { let surcharge =  5+1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
        }  
    else if (dist >2500 && dist <= 3000)
        { let surcharge =  6+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }  
    else if (dist >3000 && dist <= 3500)
        {let surcharge =  7+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
        }
                
     else if (dist >3500 && dist <= 4000)
        { let surcharge =  8+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >4000 && dist <= 4500)
        { let surcharge =  9+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
        }
        
    else if (dist >4500 && dist <= 5000)
        { let surcharge =  10+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >5000 && dist <= 5500)
        { let surcharge =  11+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }
        
    else if (dist >5500 && dist <= 6000)
        { let surcharge = 12+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }
        
    else if (dist >6000 && dist <= 6500)
        { let surcharge =  13+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }
        
    else if (dist >6500 && dist <= 7000)
        { let surcharge =  14+ 1;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                 
        }
        
    else if (dist >7000 && dist <= 7500)
          { let surcharge = 15+ 1;
                if ( surcharge <= 15) { p.append(surcharge);  }
                else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
          }
  } 
  
 //all the below statements for "cart total > 10 && items = 7 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 7 )
{ if (dist <=500 )
    { let surcharge = 1 + 1.5;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
    }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 1.5;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
    }
              
  else if (dist >1000 && dist <= 1500)
      { let surcharge = 3+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
      }    
  else if (dist >1500 && dist <= 2000)
      {let surcharge =  4+ 1.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
      }  
  else if (dist >2000 && dist <= 2500)
      { let surcharge =  5+1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }  
  else if (dist >2500 && dist <= 3000)
      { let surcharge =  6+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }  
  else if (dist >3000 && dist <= 3500)
      {let surcharge =  7+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
      }
              
   else if (dist >3500 && dist <= 4000)
      { let surcharge =  8+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }
      
  else if (dist >4000 && dist <= 4500)
      { let surcharge =  9+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
      }
      
  else if (dist >4500 && dist <= 5000)
      { let surcharge =  10+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }
      
  else if (dist >5000 && dist <= 5500)
      { let surcharge =  11+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }
      
  else if (dist >5500 && dist <= 6000)
      { let surcharge = 12+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
      }
      
  else if (dist >6000 && dist <= 6500)
      { let surcharge =  13+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }
      
  else if (dist >6500 && dist <= 7000)
      { let surcharge =  14+ 1.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
      }
      
  else if (dist >7000 && dist <= 7500)
        { let surcharge = 15+ 1.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }
} 

 //all the below statements for "cart total > 10 && items = 8 and distances changing"
 if(carttotal.value >= 10  && carttotal.value < 100 && itotal === 8 )
 { if (dist <=500 )
     { let surcharge = 1 + 2;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
     }
   if (dist > 500 && dist <= 1000) 
     { let surcharge =  2 + 2;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
     }
               
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 3+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
       }    
   else if (dist >1500 && dist <= 2000)
       {let surcharge =  4+ 2;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
       }  
   else if (dist >2000 && dist <= 2500)
       { let surcharge =  5 + 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                 
       }  
   else if (dist >2500 && dist <= 3000)
       { let surcharge =  6 + 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
       }  
   else if (dist >3000 && dist <= 3500)
       {let surcharge =  7+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
       }
               
    else if (dist >3500 && dist <= 4000)
       { let surcharge =  8+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
       }
       
   else if (dist >4000 && dist <= 4500)
       { let surcharge =  9+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
       }
       
   else if (dist >4500 && dist <= 5000)
       { let surcharge =  10+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
       }
       
   else if (dist >5000 && dist <= 5500)
       { let surcharge =  11+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
       }
       
   else if (dist >5500 && dist <= 6000)
       { let surcharge = 12+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
       }
       
   else if (dist >6000 && dist <= 6500)
       { let surcharge =  13+ 2;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
       }

 }

 //all the below statements for "cart total > 10 && items = 9 and distances changing"
 if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 9 )
 { if (dist <=500 )
     { let surcharge = 1 + 2.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
     }
   if (dist > 500 && dist <= 1000) 
     { let surcharge =  2 + 2.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
       
     }
               
   else if (dist >1000 && dist <= 1500)
       { let surcharge = 3+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
       }    
   else if (dist >1500 && dist <= 2000)
       {let surcharge =  4+ 2.5;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
       }  
   else if (dist >2000 && dist <= 2500)
       { let surcharge =  5 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                 
       }  
   else if (dist >2500 && dist <= 3000)
       { let surcharge =  6 + 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
       }  
   else if (dist >3000 && dist <= 3500)
       {let surcharge =  7+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
       }
               
    else if (dist >3500 && dist <= 4000)
       { let surcharge =  8+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
       }
       
   else if (dist >4000 && dist <= 4500)
       { let surcharge =  9+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
       }
       
   else if (dist >4500 && dist <= 5000)
       { let surcharge =  10+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
       }
       
   else if (dist >5000 && dist <= 5500)
       { let surcharge =  11+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
       }
       
   else if (dist >5500 && dist <= 6000)
       { let surcharge = 12+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
       }
       
   else if (dist >6000 && dist <= 6500)
       { let surcharge =  13+ 2.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
       }

 }
//all the below statements for "cart total > 10 && items = 10 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 10 )
  { if (dist <=500 )
      { let surcharge = 1 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
    if (dist > 500 && dist <= 1000) 
      { let surcharge =  2 + 3;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
                
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 3+ 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }    
    else if (dist >1500 && dist <= 2000)
        {let surcharge =  4+ 3;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
        }  
    else if (dist >2000 && dist <= 2500)
        { let surcharge =  5 + 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
        }  
    else if (dist >2500 && dist <= 3000)
        { let surcharge =  6 + 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }  
    else if (dist >3000 && dist <= 3500)
        {let surcharge =  7+ 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
        }
                
     else if (dist >3500 && dist <= 4000)
        { let surcharge =  8+ 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >4000 && dist <= 4500)
        { let surcharge =  9+ 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
        }
        
    else if (dist >4500 && dist <= 5000)
        { let surcharge =  10+ 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >5000 && dist <= 5500)
        { let surcharge =  11+ 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }
        
    else if (dist >5500 && dist <= 6000)
        { let surcharge = 12+ 3;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }
        

 
  }
//all the below statements for "cart total > 10 && items = 11 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 11 )
  { if (dist <=500 )
      { let surcharge = 1 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
    if (dist > 500 && dist <= 1000) 
      { let surcharge =  2 + 3.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
                
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 3+ 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }    
    else if (dist >1500 && dist <= 2000)
        {let surcharge =  4+ 3.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
        }  
    else if (dist >2000 && dist <= 2500)
        { let surcharge =  5 + 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
        }  
    else if (dist >2500 && dist <= 3000)
        { let surcharge =  6 + 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }  
    else if (dist >3000 && dist <= 3500)
        {let surcharge =  7+ 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
        }
                
     else if (dist >3500 && dist <= 4000)
        { let surcharge =  8+ 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >4000 && dist <= 4500)
        { let surcharge =  9+ 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
        }
        
    else if (dist >4500 && dist <= 5000)
        { let surcharge =  10+ 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >5000 && dist <= 5500)
        { let surcharge =  11+ 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }
        
    else if (dist >5500 && dist <= 6000)
        { let surcharge = 12+ 3.5;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }
        

 
  }
//all the below statements for "cart total > 10 && items = 12 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 12 )
  { if (dist <=500 )
      { let surcharge = 1 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
    if (dist > 500 && dist <= 1000) 
      { let surcharge =  2 + 4;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
                
    else if (dist >1000 && dist <= 1500)
        { let surcharge = 3+ 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
        }    
    else if (dist >1500 && dist <= 2000)
        {let surcharge =  4+ 4;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
        }  
    else if (dist >2000 && dist <= 2500)
        { let surcharge =  5 + 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
        }  
    else if (dist >2500 && dist <= 3000)
        { let surcharge =  6 + 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }  
    else if (dist >3000 && dist <= 3500)
        {let surcharge =  7+ 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
        }
                
     else if (dist >3500 && dist <= 4000)
        { let surcharge =  8+ 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >4000 && dist <= 4500)
        { let surcharge =  9+ 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
        }
        
    else if (dist >4500 && dist <= 5000)
        { let surcharge =  10+ 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
        }
        
    else if (dist >5000 && dist <= 5500)
        { let surcharge =  11+ 4;
              if ( surcharge <= 15) { p.append(surcharge);  }
              else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
        }
 
  }


//all the below statements for "cart total > 10 && items = 13 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 13 )
  { if (dist <=500 )
      { let surcharge = 1 + 4.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 4.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
    }
                
  else if (dist >1000 && dist <= 1500)
      { let surcharge = 3+ 4.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }    
  else if (dist >1500 && dist <= 2000)
      {let surcharge =  4+ 4.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
      }  
  else if (dist >2000 && dist <= 2500)
      { let surcharge =  5 + 4.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
      }  
  else if (dist >2500 && dist <= 3000)
      { let surcharge =  6 + 4.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }  
  else if (dist >3000 && dist <= 3500)
      {let surcharge =  7+ 4.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
      }
                
  else if (dist >3500 && dist <= 4000)
      { let surcharge =  8+ 4.5;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
        
  else if (dist >4000 && dist <= 4500)
      { let surcharge =  9+ 4.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
      }
        
  else if (dist >4500 && dist <= 5000)
      { let surcharge =  10+ 4.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
        
else if (dist >5000 && dist <= 5500)
      { let surcharge =  11+ 4.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }
 
  }

//all the below statements for "cart total > 10 && items = 14 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 14 )
  { if (dist <=500 )
      { let surcharge = 1 + 5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
    }
                
  else if (dist >1000 && dist <= 1500)
      { let surcharge = 3+ 5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }    
  else if (dist >1500 && dist <= 2000)
      {let surcharge =  4+ 5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
      }  
  else if (dist >2000 && dist <= 2500)
      { let surcharge =  5 + 5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
      }  
  else if (dist >2500 && dist <= 3000)
      { let surcharge =  6 + 5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }  
  else if (dist >3000 && dist <= 3500)
      {let surcharge =  7+ 5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
      }
                
  else if (dist >3500 && dist <= 4000)
      { let surcharge =  8+ 5;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
        
  else if (dist >4000 && dist <= 4500)
      { let surcharge =  9+ 5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
      }
        
  else if (dist >4500 && dist <= 5000)
      { let surcharge =  10+ 5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
 
  }
//all the below statements for "cart total > 10 && items = 15 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 15 )
  { if (dist <=500 )
      { let surcharge = 1 + 5.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 5.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
    }
                
  else if (dist >1000 && dist <= 1500)
      { let surcharge = 3+ 5.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }    
  else if (dist >1500 && dist <= 2000)
      {let surcharge =  4+ 5.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
      }  
  else if (dist >2000 && dist <= 2500)
      { let surcharge =  5 + 5.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
      }  
  else if (dist >2500 && dist <= 3000)
      { let surcharge =  6 + 5.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }  
  else if (dist >3000 && dist <= 3500)
      {let surcharge =  7+ 5.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
      }
                
  else if (dist >3500 && dist <= 4000)
      { let surcharge =  8+ 5.5;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
        
  else if (dist >4000 && dist <= 4500)
      { let surcharge =  9+ 5.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
      }
        
  else if (dist >4500 && dist <= 5000)
      { let surcharge =  10+ 5.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
 
  }

  //all the below statements for "cart total > 10 && items = 16 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 16 )
{ if (dist <=500 )
    { let surcharge = 1 + 6;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
    }
if (dist > 500 && dist <= 1000) 
  { let surcharge =  2 + 6;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
      
  }
              
else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 6;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }    
else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 6;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
    }  
else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 6;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }  
else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 6;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
    }  
else if (dist >3000 && dist <= 3500)
    {let surcharge =  7+ 6;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
         
    }
              
else if (dist >3500 && dist <= 4000)
    { let surcharge =  8+ 6;
         if ( surcharge <= 15) { p.append(surcharge);  }
         else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }
      
else if (dist >4000 && dist <= 4500)
    { let surcharge =  9+ 6;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
    }

}

  //all the below statements for "cart total > 10 && items = 17 and distances changing"
  if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 17 )
  { if (dist <=500 )
      { let surcharge = 1 + 6;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 6;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
    }
                
  else if (dist >1000 && dist <= 1500)
      { let surcharge = 3+ 6;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }    
  else if (dist >1500 && dist <= 2000)
      {let surcharge =  4+ 6;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
      }  
  else if (dist >2000 && dist <= 2500)
      { let surcharge =  5 + 6;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
      }  
  else if (dist >2500 && dist <= 3000)
      { let surcharge =  6 + 6;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }  
  else if (dist >3000 && dist <= 3500)
      {let surcharge =  7+ 6;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
      }
                
  else if (dist >3500 && dist <= 4000)
      { let surcharge =  8+ 6;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
        
  else if (dist >4000 && dist <= 4500)
      { let surcharge =  9+ 6;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
      }
  
  }

  //all the below statements for "cart total > 10 && items = 18 and distances changing"
  if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 18 )
  { if (dist <=500 )
      { let surcharge = 1 + 6.5;
             if ( surcharge <= 15) { p.append(surcharge);  }
             else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
      }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 6.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
        
    }
                
  else if (dist >1000 && dist <= 1500)
      { let surcharge = 3+ 6.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
            
      }    
  else if (dist >1500 && dist <= 2000)
      {let surcharge =  4+ 6.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
      }  
  else if (dist >2000 && dist <= 2500)
      { let surcharge =  5 + 6.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
      }  
  else if (dist >2500 && dist <= 3000)
      { let surcharge =  6 + 6.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
      }  
  else if (dist >3000 && dist <= 3500)
      {let surcharge =  7+ 6.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
           
      }
                
  else if (dist >3500 && dist <= 4000)
      { let surcharge =  8+ 6.5;
           if ( surcharge <= 15) { p.append(surcharge);  }
           else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
      }
        
  else if (dist >4000 && dist <= 4500)
      { let surcharge =  9+ 6.5;
            if ( surcharge <= 15) { p.append(surcharge);  }
            else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
      }
  
  }
//all the below statements for "cart total > 10 && items = 19 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 19 )
  { if (dist <=500 )
     { let surcharge = 1 + 7;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 7;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 7;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 7;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 7;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 7;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }  
  else if (dist >3000 && dist <= 3500)
    {let surcharge =  7+ 7;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
    }
                  
  else if (dist >3500 && dist <= 4000)
    { let surcharge =  8+ 7;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
    }    
 }
//all the below statements for "cart total > 10 && items = 20 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 20 )
  { if (dist <=500 )
     { let surcharge = 1 + 7.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 7.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 7.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 7.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 7.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 7.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }  
  else if (dist >3000 && dist <= 3500)
    {let surcharge =  7+ 7.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
    }
                  
  else if (dist >3500 && dist <= 4000)
    { let surcharge =  8+ 7.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                  
    }    
 }
//all the below statements for "cart total > 10 && items = 21 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 21 )
  { if (dist <=500 )
     { let surcharge = 1 + 8;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 8;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 8;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 8;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 8;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 8;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }  
  else if (dist >3000 && dist <= 3500)
    {let surcharge =  7+ 8;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
    }   
 }
//all the below statements for "cart total > 10 && items = 22 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 22 )
  { if (dist <=500 )
     { let surcharge = 1 + 8.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 8.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 8.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 8.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 8.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 8.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }  
  else if (dist >3000 && dist <= 3500)
    {let surcharge =  7+ 8.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
             
    }   
 }

//all the below statements for "cart total > 10 && items = 23 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 23 )
  { if (dist <=500 )
     { let surcharge = 1 + 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 9;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 9;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }     
 }
//all the below statements for "cart total > 10 && items = 24 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100  && itotal === 24 )
  { if (dist <=500 )
     { let surcharge = 1 + 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 9.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 9.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }     
 }

//all the below statements for "cart total > 10 && items = 25 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 25 )
  { if (dist <=500 )
     { let surcharge = 1 + 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 9;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 9;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 9;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }     
 }

//all the below statements for "cart total > 10 && items = 26 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 26 )
  { if (dist <=500 )
     { let surcharge = 1 + 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 9.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 9.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }  
  else if (dist >2500 && dist <= 3000)
    { let surcharge =  6 + 9.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                
    }     
 }
//all the below statements for "cart total > 10 && items = 27 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 27 )
  { if (dist <=500 )
     { let surcharge = 1 + 10;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 10;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 10;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 10;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 10;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }      
 }
//all the below statements for "cart total > 10 && items = 28 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 28 )
  { if (dist <=500 )
     { let surcharge = 1 + 10.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 10.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 10.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 10.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }  
  else if (dist >2000 && dist <= 2500)
    { let surcharge =  5 + 10.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
                    
    }      
 }

//all the below statements for "cart total > 10 && items = 29 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 29 )
  { if (dist <=500 )
     { let surcharge = 1 + 11;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 11;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 11;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 11;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }       
 }

//all the below statements for "cart total > 10 && items = 30 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 30 )
  { if (dist <=500 )
     { let surcharge = 1 + 11.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 11.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 11.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }    
  else if (dist >1500 && dist <= 2000)
    {let surcharge =  4+ 11.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
               
    }       
 }

//all the below statements for "cart total > 10 && items = 31 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 31 )
  { if (dist <=500 )
     { let surcharge = 1 + 12;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 12;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 12;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else {  p.innerHTML = 'delivery cost is exceeding 15e'; }
              
    }         
 }

//all the below statements for "cart total > 10 && items = 32 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 32 )
  { if (dist <=500 )
     { let surcharge = 1 + 12.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else { p.innerHTML = 'delivery cost is exceeding 15e'; }
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 12.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else { p.innerHTML = 'delivery cost is exceeding 15e';}
          
    }
                  
  else if (dist >1000 && dist <= 1500)
    { let surcharge = 3+ 12.5;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else { p.innerHTML = 'delivery cost is exceeding 15e';}
              
    }         
 }
//all the below statements for "cart total > 10 && items = 33 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 33 )
  { if (dist <=500 )
     { let surcharge = 1 + 13;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else { p.innerHTML = 'delivery cost is exceeding 15e';}
          
     }
  if (dist > 500 && dist <= 1000) 
    { let surcharge =  2 + 13;
          if ( surcharge <= 15) { p.append(surcharge);  }
          else { p.innerHTML = 'delivery cost is exceeding 15e';}
          
    }
                      
 }

 //all the below statements for "cart total > 10 && items = 34 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 34 )
{ if (dist <=500 )
   { let surcharge = 1 + 13.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else { p.innerHTML = 'delivery cost is exceeding 15e';}
        
   }
if (dist > 500 && dist <= 1000) 
  { let surcharge =  2 + 13.5;
        if ( surcharge <= 15) { p.append(surcharge);  }
        else { p.innerHTML = 'delivery cost is exceeding 15e';}
        
  }
                    
}
//all the below statements for "cart total > 10 && items = 35 and distances changing"
if(carttotal.value >= 10 && carttotal.value < 100 && itotal === 35 )
  { if (dist <=500 )
     { let surcharge = 1 + 14;
          if ( surcharge <= 15) { p.append(surcharge);  
           }
          else { p.innerHTML = 'delivery cost is exceeding 15e'; } 
          
     }
                      
 }
   }

}
    return (

<form className="form" > 
      
    
      <label className= "label"> Total distance </label>
 <input className = "input" id="distance"  placeholder="  Enter here "/>

<br/><br/>


  <label className= "label">Total Cart Value </label>
 <input className = "input" id="totalcart" type="number" placeholder="  Enter here "/>

 <br/><br/>

  <label className= "label">Total items </label>
 <input className = "input" id="totalitem" type="number" placeholder="  Enter here "/>

 <br/><br/>
 <input  id="btn" type="submit" onClick= {mysubmit} />
 <br/><br/>
 <label className= "label">Total Delivery Cost :  </label>
 <p className = "cost" id="totalcost"> </p>
</form>
    )

 }

 export default Input
