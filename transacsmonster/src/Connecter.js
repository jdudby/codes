import React from "react";
let user={
  name:'Carl',
  lastName:'Jean Pierre',
  age:'30',
  phone: '+509 3641-1505',
  email:'carld.jeanpierre@gmail.com'
};

function Connecter(){
return(
  <div>
  <p>Connecté : {user.name} {user.lastName}</p>
  <p>Email : {user.email} </p>
  <p>Phone : {user.phone}</p>
  <p>Age : {user.age}</p>
  </div>
);
}

export default Connecter;
