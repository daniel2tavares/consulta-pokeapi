import React from "react";
import '../../components/button-prev-nex/ButtonPn.css'

function ButtonPn(props){

    return(
        <>
            <button className="button-pn">{props.name}</button>
        </>
              
    )

}

export default ButtonPn;