import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './Components/Message';

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      firstName: "",
      lastName:""
    }

    // Binding des méthodes
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  // Méthodes

  handleEmailChange = (e) => {
    let regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    this.setState ({
      email: e.target.value, 
      emailIsValid: regex.test(e.target.value)
    })

    if (regex.test(e.target.value)){
      e.target.className = "form-control is-valid"
    } else {
      e.target.className = "form-control is-invalid"
    }
  }

  handlePasswordChange (e) {
    this.setState ({
      password: e.target.value, 
      passwordIsValid: e.target.value.length > 5
    })

    if (e.target.value.length > 5){
      e.target.className = "form-control no is-valid"
    } else {
      e.target.className = "form-control no is-invalid"
    }
  }

  handleRememberMeChange (e) {
    this.setState ({
      rememberMe: e.target.checked
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      isSubmitted: this.state.emailIsValid && this.state.passwordIsValid
    })
  }

  handleFirstNameChange (e){
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange (e){
    this.setState({lastName: e.target.value})
  }

  render () {

    console.log(this.state)

    return (
      <>
        <h1 className="text-center p-3">Login</h1>

        {this.state.isSubmitted ? <Message email={this.state.email} /> 
        : (
        <form className="p-3"
        onSubmit={this.handleSubmit}
        >
          {/* Nom et Prénom */}
          <div className="row mb-3">
            <div className="col">
            <label className="form-label">First name</label>
              <input type="text" className="form-control" aria-label="First name" required/>
            </div>
            <div className="col">
            <label className="form-label">Last name</label>
              <input type="text" className="form-control" aria-label="Last name" required/>
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              email={this.state.email}
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
              className="form-control no" 
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
          className="btn btn-primary">
            Submit
          </button>

        </form>
        )}
      </>
    )
  }
}

export default App;
