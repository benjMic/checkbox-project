import React from 'react';

/* Affiche la checkbox courante en récupérant les props envoyées par le container. 
Déclenche la function "handleCheckItem" (envoyé en props) à chaque changement. */

export const CheckBoxItem = props => {
    return(
        <div>
            <label className="container">
                <input className="checkbox" key={props.value} onChange={props.handleCheckItem} type="checkbox" checked={props.isChecked} value={props.value} /> 
                {props.value}
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default CheckBoxItem;
