import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
    
  }
  
  render () {
    return (
      <div>
        <p>hello</p>
      </div>
    )
  }
}

export default App;
