import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={dates :new Date()};
  }

   render(){
    return(
<p>
{this.state.dates.toLocaleTimeString()}
</p>

    );
  }

  componentDidMount() {
  this.timer=setInterval(()=>this.pass(), 1000);
  }

  componentWillUnmount(){

  }


pass(){
  this.setState({dates:new Date()});
}

}
export  default Clock;
