import React, { Component } from 'react'
import puzzle from './742px-Icone_Puzzle.svg.png'
import AuthHOC from "../HOC/AuthHOC";

export class About extends Component {
    render() {
        return (
            <div className="how-section1">
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src={puzzle} className="rounded-circle img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>About Us</h4>
                        <h4 className="subheading">Pair UP was created by three junior developers with a passion for self improvement</h4>
                        <p className="text-muted"> Here at Pair UP we believe learning should be fun and effortless! Thats why we developed this game where in just 10 minutes each day you can train your brain. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Play and Become Smarter!</h4>
                        <h4 className="subheading">Memory and Matching Games Have Many Benefits:</h4>
                        <p className="text-muted"> Studies have shown that games like matching pairs can improve concentration, short term memory and attention to detail. Play our top rated game here at Pair UP and become the best version of yourself!</p>
                    </div>
                    <div className="col-md-6 how-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Red_Silhouette_-_Brain.svg/410px-Red_Silhouette_-_Brain.svg.png" className="rounded-circle img-fluid" alt="" />
                    </div>
                </div>
                {/* <div class="container contact-form">
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" ></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div> */}
            </div>
        )
    }
}

export default AuthHOC(About)
