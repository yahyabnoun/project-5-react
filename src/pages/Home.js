import React from 'react';
import Navbar from '../comp/Navbar';

class Home extends React.Component{
  state={
    myArray:[
      {id:1,name:'yahya'}
    ]
  }
// constructor(){
//   super()
//   console.log('hello constructor')
// }
// componentDidMount=()=>{
//   console.log('hello componentDidMount');
// }
componentDidUpdate=(preProps,prevState)=>{
  console.log(prevState);

}
handlAdd=(event)=>{
  let Array1=this.state.myArray
  Array1.push(
    {id:2,name:'naji'},
    {id:3,name:'abdo'}

  )
  this.setState({
    myArray:Array1
  }
    
  )

}
handlDelet=(event)=>{
  let Array1=this.state.myArray
  // Array1.pop(
  // )
  Array1=Array1.filter(item => item.name!=='naji');

  this.setState({
    myArray:Array1
  }
    
  )

}
  render(){
    return(
      <   > 
        <Navbar/>
      
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Home</h2>
        <div style={{textAlign:'center',marginTop:'20px'}}>

    <table className="table">
          <thead>
            <tr>
              <th className="col">id</th>
              <th className="col">First Name</th>

            </tr>
          </thead>
          <tbody>
            
            {this.state.myArray.map((item,key) => <tr key={key}><td >{item.id}</td><td >{item.name}</td></tr>  )}
          </tbody>
  </table>
        <button type="button" onClick={this.handlAdd } onChange={ this.componentDidUpdate} className="btn btn-primary">Primary</button>
        <button type="button" onClick={this.handlDelet} className="btn btn-danger">Danger</button>  
        </div>

      </ >
    )
  }
}
 

export default Home;
