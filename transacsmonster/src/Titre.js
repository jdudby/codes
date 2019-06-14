import React from "react";

class Titre extends React.Component
{

constructor(props){
super(props);
this.state={ text:"Tu n'es pas cliqué !"};
this.superClick=this.superClick.bind(this);
this.state={compteur:0};
}

superClick(){
  this.setState({text:"Tu es cliqué !"});
}

render(){

return(<div onClick={this.superClick}>
<h1>Transacs Monsters</h1>
<p>{this.state.text}</p>
<p>Rendering {this.state.compteur} fois ! </p>
</div>
);
}

componentDidMount(){
setInterval(()=>this.setState({text:"Tu n'es pas cliqué fonction interval!", compteur:this.state.compteur+1}), 5000);
}

componentWillUnmount(){

}



}

export default Titre;
