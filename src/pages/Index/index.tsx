import React from "react";
import Chart from "../../components/chart";
import { options } from "./data";

const Index = ()=>{
   
    return (
        <div>
          {
           [1,2,3,5,6,8,9,10].map((v)=>{
              return <Chart key={v} options={options}/>
            })
          }
            
        </div>
    )
}

export default Index