import React, { Component } from 'react';
import './Verifyotp.css';
class Verifyotp extends Component {
    render() {
        return (
            <div>
                <div class="container"  >
                    <div class="row">
                    
                        <div class="col-7" className="Leftpart">
                        
                                2 of 3 (wider)
                            
                        </div>
                        <div class="col" className="Rightpart" >
                        <div class="container"  className="Innerpart">
                                <div class="row" className="" >
                                    <div class="col">
                                    <h4 style={{marginRight: "50px",marginTop:"50px"}}>Login to your Vault Business</h4> 
                                    <h4 style={{marginRight: "270px"}}>account</h4>   
                                    <p style={{marginLeft: "65px"}}>Loren Ipsum Is simply dummy text of the printing and types </p>
                                    <p style={{margin: "-20px",marginRight: "110px"}}>industry.Loren Ipsum has been.</p>                           
                                            
                                                <p className="prg1"><a href="" className="fp">Forget Password ?</a></p>
                                            <button className="Btn">Login</button>
                                        <p className="prg">Don't have an account?<a href="" className="sp">Sign uP</a></p>
                                    </div>      
                                </div>
                            </div>
                        </div>
                     

                    </div>
                </div>
  
          
            </div>
        );
    }
}

export default Verifyotp;