// Write your component below!
import React from 'react';
import 

function Box (props){
  
  const text =props.text;

  return(
    <div>
       
      {!text ?<input type="checkbox" /> : <input placeholder="Ammar" />}
    </div>
  );
}


export default function Div (){
        return( <section>
            <h1>Amazing Art </h1>
          <Box text={false}/>
        </section>);
  
}

