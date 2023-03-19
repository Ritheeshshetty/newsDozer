import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <section class="contact-address-area">
          <div class="container">
            <div class="sec-title-style1 text-center max-width">
              <div class="title">Contact Us</div>
              <div class="text">
                <div class="decor-left">
                  <span></span>
                </div>
                <p>Quick Contact</p>
                <div class="decor-right">
                  <span></span>
                </div>
              </div>
              <div class="bottom-text">
                {/* <p>
                  Feel free to contact us to get help and check updates.
                </p> */}
              </div>
            </div>
            <div class="contact-address-box row">
              {/* <!--Start Single Contact Address Box--> */}
              <div class="col-sm-4 single-contact-address-box text-center">
                <div class="icon-holder">
                  <span class="icon-clock-1">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                    <span class="path6"></span>
                    <span class="path7"></span>
                    <span class="path8"></span>
                    <span class="path9"></span>
                    <span class="path10"></span>
                    <span class="path11"></span>
                    <span class="path12"></span>
                    <span class="path13"></span>
                    <span class="path14"></span>
                    <span class="path15"></span>
                    <span class="path16"></span>
                    <span class="path17"></span>
                    <span class="path18"></span>
                    <span class="path19"></span>
                    <span class="path20"></span>
                  </span>
                </div>
                <h3>Contact 😍</h3>
                <h2>Feel free to ask queries about us </h2>
              </div>
              {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
              <div class="col-sm-4 single-contact-address-box main-branch">
                <h3>My contacts</h3>
                <div class="inner">
                  <ul>
                    <li>
                      <div class="title">
                        <h4>Github:</h4>
                      </div>
                      <div class="text">
                        <p>
                          <br /> 
                          <a href="https://github.com/Ritheeshshetty" style={{"color":"black"}}>@Ritheeshshetty</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="title">
                        <h4>Ph & email</h4>
                      </div>
                      <div class="text">
                        <p>
                          +7019565XXX <br /> ritheeshshetty77@gmail.com
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="title">
                        <h4>Socialmedia:</h4>
                      </div>
                      <div class="text">
                        <p style={{"padding":"12px"}}>
                        <a href="https://www.instagram.com/ritheesh.shetty/"  style={{"color":"black"}}>@Instagram</a> <br/>
                        <a href="https://m.facebook.com/ritheesh.shetty.37?mibextid=ZbWKwL" style={{"color":"black"}}>@facebook</a> <br/>
                        <a href="https://mobile.twitter.com/ShettyRitheesh?t=xizCqt8CG4hjjjtemfoW3w&s=09" style={{"color":"black"}}>@Twitter</a> 
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
              <div class="col-sm-4 single-contact-address-box text-center">
                <div class="icon-holder">
                  <span class="icon-question-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                  </span>
                </div>
                <h3>Feedback ?</h3>
                <h2>Give us feedbacks to improve</h2>
              </div>
              {/* <!--End Single Contact Address Box--> */}
            </div>
          </div>
        </section>
        {/* <!--End Contact Address Area-->   */}

        {/* <!--Start contact form area--> */}
        <section class="contact-info-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="contact-form">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="sec-title-style1 float-left">
                        <div class="title">Message</div>
                        <div class="text">
                          <div class="decor-left">
                            <span></span>
                          </div>
                          <p>Feedback form</p>
                        </div>
                      </div>
                      <div class="text-box float-right">
                        <p>
                          Give us Feedback{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="inner-box">
                    <form
                      id="contact-form"
                      name="contact_form"
                      class="default-form"
                      action=""
                      method="get"
                    >
                      <div class="row">
                        <div class="col-xl-6 col-lg-12">
                          <div class="row">
                            <div class="col-xl-6">
                              <div class="input-box">
                                <input
                                  type="text"
                                  name="form_name"
                                  value=""
                                  placeholder="Name"
                                  required=""
                                />
                              </div>
                              <div class="input-box">
                                <input
                                  type="text"
                                  name="form_phone"
                                  value=""
                                  placeholder="Phone"
                                />
                              </div>
                            </div>
                            <div class="col-xl-6">
                              <div class="input-box">
                                <input
                                  type="email"
                                  name="form_email"
                                  value=""
                                  placeholder="Email"
                                  required=""
                                />
                              </div>
                              {/* <div class="input-box">
                                <input
                                  type="text"
                                  name="form_website"
                                  value=""
                                  placeholder="Website"
                                />
                              </div> */}
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xl-12">
                              <div class="input-box">
                                <input
                                  type="text"
                                  name="form_subject"
                                  value=""
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-12">
                          <div class="input-box">
                            <textarea
                              name="form_message"
                              placeholder="Your Message..."
                              required=""
                            ></textarea>
                          </div>
                          <div class="button-box">
                            <input
                              id="form_botcheck"
                              name="form_botcheck"
                              class="form-control"
                              type="hidden"
                              value=""
                            />
                            <button
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              Send Message<span class="flaticon-next"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
