import React from 'react'
import {getTaco} from './tacos'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tacos: [],
      splitRecipe: []
    }
    this.getTaco = this.getTaco.bind(this)

    this.splitRecipe = this.splitRecipe.bind(this)
  }

  componentDidMount(){
    this.getTaco()
    
  }


splitRecipe = () =>{
    let recipe = this.state.tacos.recipe
    console.log(this.state.tacos.recipe);
    console.log(this.state);
    let splits = recipe.split("*")
    console.log(splits);
   
    
  this.setState({
    splitRecipe: splits
  })
  console.log(this.state);
  
    
    // return recipe.split("*")
  }

getTaco(){
  getTaco()
    .then(res=> {
      console.log(res);
      
      this.setState({
        tacos: res.body
      })
        this.splitRecipe()
     

      
  })
}

// splitTacos = (tacos) =>{

// }

  
  render() {

    
    return (
      <div>
         <h1>Tacos!</h1> 
         <h2>{this.state.tacos.name}</h2>
         <ul>
         {this.state.splitRecipe.map(step => {
      return <li>{step}</li>
    })}
</ul>
      </div>
    )
  }
}

export default App


