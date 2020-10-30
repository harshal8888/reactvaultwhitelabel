import React, { Component } from 'react';
import './Signup.css';
class Signup extends Component {
  

    render() {
        return (
            <div className='Signup'>
                <div class="containercenter"  >
                    <div class="row">
                    
                        <div class="col-sm-7 col-md-7 col-lg-7" className="Leftpart">
                                2 of 3 (wider)
                                <div class="container"  className="Innerpart">
                                <div class="row" className="" >
                                    <div class="col">
                                    <h4 style={{marginRight: "50px",marginTop:"20px"}}>Email One Time Password Verification </h4> 
                                    <p style={{marginLeft: "65px"}}>Enter verification code we send to<a href="" style={{marginLeft:"5px"}}>john.doe@gmail.com</a></p>        
                            
                                        <input
                                        className="Login_form"
                                        type="text"
                                        placeholder="0"
                                        name="otp"
                                        required
                                        ></input>

                                        <input
                                        className="Login_form"
                                        type="text"
                                        placeholder="0"
                                        name="otp"
                                        required
                                        ></input>
                                        
                                        <input
                                        className="Login_form"
                                        type="text"
                                        placeholder="0"
                                        name="otp"
                                        required
                                        ></input>
                                        
                                        <input
                                        className="Login_form"
                                        type="text"
                                        placeholder="0"
                                        name="otp"
                                        required
                                        ></input>
                                        
                                        <input
                                        className="Login_form"
                                        type="text"
                                        placeholder="0"
                                        name="otp"
                                        required
                                        ></input>
                                        
                                        <input
                                        className="Login_form"
                                        type="email"
                                        placeholder="0"
                                        name="otp"
                                        required
                                        ></input>
                                                
                                        <p className="prg1">Resend<a href="" className="fp">Email verification code</a></p>
                                            <button className="Btn1">Back</button>
                                            
                                            <button className="Btn2">Verify</button>
                                    </div>      
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3 col-md-3" className="Rightpart" >
                        <div className="RadioTag">    
                            <input type="radio" name="radio" value="radio1" className="Radio" checked/>Sign up<br/>
                            <input type="radio" name="radio" value="radio2" className="Radio"/>personal Details and Business Details<br/>
                            <input type="radio" name="radio" value="radio3" className="Radio"/>Upload Comapny Documents<br/>
                            <input type="radio" name="radio" value="radio4" className="Radio"/>Set password<br/>
                            <input type="radio" name="radio" value="radio5" className="Radio"/>Select Membership Plan<br/>
                            <input type="radio" name="radio" value="radio6" className="Radio"/>Card details
                        </div>

                        </div>
                     

                    </div>
                </div>
                
            </div>
        );
    }
}

export default Signup;