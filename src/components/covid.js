import React, { useEffect,useState } from 'react'
import Card from'./card'
import './covid.css' ;
const Covid =() => {
     var actdata=0;
     const [data ,setdata] = useState([]);
     

  const getCovidData = async () =>{
      try {   const res = await fetch('https://api.covid19india.org/data.json');
   
  actdata = await res.json();
  console.log(actdata);
  setdata(actdata.statewise[0]) ;
      }  catch(error)
      { console.log(error);

      }
 
 

}


     useEffect ( () =>{
             getCovidData ();
     } ,[] );

     

    return(
       <div className ="main">
          <div className ="titl"> 
        <div class="element"></div>
      <div>  <h1> LIVE</h1> </div>
        </div> 
        <div id ="Top">
       
           <h2 > COVID -19 CORONAVIRUS TRACKER</h2>
           </div>  
           <div className ="main_inner">
           
    <div className = "item"> <Card  data1 = "INDIA" heading1="OUR" heading2= "COUNTRY" /> 

    </div>
    <div className = "item">   <Card   data1 = {data.recovered} heading1="TOTAL" heading2= "RECOVERED"  /> 

</div>
<div className = "item">    <Card  data1 = {data.confirmed} heading1="TOTAL" heading2= "CONFIRMED" />

</div>
<div className = "item">  <Card  data1 = {data.deaths} heading1="TOTAL" heading2= "DEATHS" />

</div>
<div className = "item">  <Card data1 = {data.active} heading1="TOTAL" heading2= "ACTIVE"   />

</div>
<div className = "item">    <Card  data1 = {data.lastupdatedtime} heading1="LAST" heading2= "UPDATED" />

</div>

  
           </div>
       </div>

    )

}
export default Covid;