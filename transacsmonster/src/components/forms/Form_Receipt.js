import React from "react";
import ReactDOM from "react-dom";
import "./Form_Receipt.css";
import {Button} from 'react-bootstrap';
import PopWindows from "./PopWindows";



class Form_Receipt extends React.Component implements Node
{

constructor(props)
{
super(props);
this.state={
  isOpen:false,
   text:"Add Pallet...",
              };
this.viewPalletWindow=this.viewPalletWindow.bind(this);
}

viewPalletWindow(){

}


render(){
const styles={
  color:"#123123",
fontweight:"bold"}

  return (
<div>

<fieldset>
  <legend style={styles}>Please input and review carefully the goods receipt information</legend>
<div className="size">
<p className="lbl">
<label>
  Receipt note # :
</label>
</p>
<p className="div_form">
<input
name="grn_no"
value=""
/>
</p>
</div>

<div className="size">
<p className="lbl">
<label >
Arriving date :
</label>
</p>
<p className="div_form">
<input
name="gdate"
value=""
/>
</p>
</div>

<div className="size">
<p className="lbl">
<label>
Invoice # :
</label>
</p>
<p className="div_form">
<input
name="inv_ref"
value=""
/>
</p>
</div>

<div className="size">
<p className="lbl">
<label>
Stock Owner :
</label>
</p>
<p className="div_form">
<select name="product_owner">
<option value="">Owner 1</option>
<option value="">Owner 2</option>
<option value="">Owner 3</option>
<option value="">Owner 4</option>
<option value="">Owner 5</option>
</select>
</p>
</div>

<div className="size">
<p className="lbl">
<label>
Quantity of pallet :
</label>
</p>
<p className="div_form">
<input
name="pallet_qty"
value=""
/>
</p>
</div>

<div className="size">
<p className="lbl">
<PopWindows/>
</p>
</div>
</fieldset>
<div id="main">

</div>
</div>

);
}



}

export default Form_Receipt;
