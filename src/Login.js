import React, { Component } from 'react';
import './Login.css';

import styles from "./Login.css";
// import styles from "./Login.module.css";
class Login extends Component {
    render() {
        return (
            <div>
                 {/* <div class="container-fluid"> */}
                 
                {/* <div class="row" > */}
           
                 {/* <div class="col-sm-4" style={{backgroundColor: "red"}}  >.col-sm-4</div> */}
                {/* <div class="col-sm-8" style={{backgroundColor: "yellow"}}>.col-sm-8</div>  */}
                  {/* <div class="col-md-4"  className={styles.Leftpart}>.col-sm-4</div> */}
                {/* <div class="col-md-8"   className={styles.Rightpart} >.col-sm-8</div>  */}
                {/* <div class="col-md-4"className="Leftpart"  >.col-sm-4</div> */}
                {/* <div class="col-md-8" className="Rightpart">.col-sm-8</div> */}
                {/* </div> */}

                
          
            <div class="container"  >
                <div class="row">
                     <div class="col" className="Leftpart" >
                               1 of 3
                     </div>
                     <div class="col-8" className="Rightpart">
                             2 of 3 (wider)
                        <div class="container"  className="Innerpart">
                            <div class="row" className="">                              
                                {/* <div class="col"> */}
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
                                            {/* <Link to="/users">Forget Password ?</Link> */}
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