import React, { Component } from 'react';
import './Login.css';

import styles from "./Login.css";
// import styles from "./Login.module.css";
class Login extends Component {
    render() {
        return (
            <div>
            <div class="container"  >
                <div class="row">
                     <div class="col" className="Leftpart" >
                               1 of 3
                     </div>
                     <div class="col-7" className="Rightpart">
                             2 of 3 (wider)
                        <div class="container"  className="Innerpart">
                            <div class="row" className="" >
                                {/* <div class="col"> */}
                                <h4 style={{marginRight: "50px",marginTop:"50px"}}>Login to your Vault Business</h4> 
                                <h4 style={{marginRight: "270px"}}>account</h4>   
                                <p style={{marginLeft: "65px"}}>Loren Ipsum Is simply dummy text of the printing and types </p>
                                <p style={{margin: "-20px",marginRight: "110px"}}>industry.Loren Ipsum has been.</p>                           
                                
                                        <input
                                        className="Login_form"
                                        type="email"
                                        placeholder="john.doe@gmail.com"
                                        name="email"
                                        required
                                        ></input>
                                        
                                        <input
                                        className="Password_form"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        required
                                            ></input>
                                            <p className="prg1"><a href="" className="fp">Forget Password ?</a></p>
                                           
                                        <button className="Btn">Login</button>
                                        
                                       <p className="prg">Don't have an account?<a href="" className="sp">Sign uP</a></p>

                                </div>
                                
                            {/* </div> */}
                        </div>
                             

                     </div>

                </div>
            </div>
  
            
            </div>
        );
    }
}

export default Login;