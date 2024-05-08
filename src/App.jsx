//On import la classe du module Component  du  package "react"
/** 
import { Component } from "react";

class Carte extends Component {
  render(){
    return(
      <>
        <p>Nom Complet : <br/> NJOH SIMPLICE JUNIOR </p>
        <p>Email : <br/> njohjunior4@gmail.com </p>
      </>
    )
  }
}

class App extends Component {
  render(){
    return(
      <Carte/>
    )
  }
}

export default App; 

*/

import { Component } from "react";

class PhotoDeProfile extends Component {
  render(){
    return(
      <>
        <img src={"github.png"} alt="" width="54px" height="54px" style={{borderRadius:'100%'}} />
      </>
    )
  }
}

class App extends Component {
  render(){
    return(
      <PhotoDeProfile/>
    )
  }
}

export default App;