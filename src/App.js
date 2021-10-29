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

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)

  }

  // Méthodes

  handleEmailChange = (e) => {
    let regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    this.setState ({
      email: e.target.value, 
      emailIsValid: regex.test(e.target.value)
    })
  }

  handlePasswordChange (e) {
    this.setState ({
      password: e.target.value, 
      passwordIsValid: e.target.value.length > 5
    })
  }

  handleRememberMeChange () {
    this.setState ({rememberMe: this.state.rememberMe})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({})
  }

  
  render () {

    console.log(this.state)

    return (
      <>

      <h1 className="text-center p-3">Login</h1>

      <form className="p-3">

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            onChange={this.handleEmailChange}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1"
            onChange={this.handlePasswordChange}
          />
        </div>

        {/* Check : Remember me */}
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1"
            onChange={this.handleRememberMeChange}
          />
          <label className="form-check-label">Remember me</label>
        </div>

        {/* Bouton submit */}
        <button 
        type="submit" 
        className="btn btn-primary"
        onChange={this.handleSubmit}>
          Submit
        </button>

      </form>

      </>
    )
  }
}

export default App;
