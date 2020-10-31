import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './Signup.css';
import './Floatlabel.css';
class Signup extends Component {
  

    render() {
        return (
            <div className='Signup'>
                <div class="containercenter"  >
                    <div class="row">
                        <div class="col-sm-7 col-md-7 col-lg-7" className="Leftpart">
                        <div class="container fullwidth"  className="Innerpart">
                        <div className="row ">
                            <div class="col-md-12">
                                <form className="go-bottom">
                                <div class="form-group ">
                                <div className="row">
                                    <div className="col-md-12 heading">
                                        <h2>Sign up to your Vault Business Account
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 smalltext">
                                    <p>Lorem Ipsum is simply dummy text of the printing and types ndustry. Lorem Ipsum has been.</p>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 col-xs-6">
                                    <div class="input-group">
                                        <input type="text" required></input>
                                        <span class="highlight"></span>
                                        <label>Email Address</label>
                                        
                                      
                                     
                                        
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xl-6">
                                        <input className="form-control form-control-lg" type="text" id="refcode" placeholder="Referral Code"></input>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12 smalltext">
                                    <p>Already have an account? <a href="" >Login</a></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <h1>
                                    </h1>

                                </div>
                                <div className="  formfooter ">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                    <button className="btn1">Back</button>

                                    </div>
                                    <div className="col-md-6  col-lg-6 ">
                                    <button type="button" class="btn2">Primary
                                        <i class='far fa-arrow-alt-circle-right'></i>
                                    </button>
                                    </div>
                                </div>

                                </div>

                                </div>
                                </form>
                            </div>      
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-3 col-md-3 col-lg-3" className="Rightpart" >
                    <div className="RadioTag radiobox">    
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