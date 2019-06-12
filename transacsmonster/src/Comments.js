import React from "react";

function Comments(props){
  return (
<div>
<p>Comments : «{props.text}»</p>
<p>Author : {props.author.name} {props.author.lastname}</p>
<p>Published on {props.date}</p>
</div>
  );
}

export default Comments;
