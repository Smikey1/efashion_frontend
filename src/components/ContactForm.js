import React, { Component } from 'react'

class ContactForm extends Component {
    render() {
        return (
            <div>
                <div className="wthree-form-left">
                    {/* contact form grid */}
                    <div className="contact-top1">
                        <h5 className="text-dark mb-4 text-capitalize">send us a note</h5>
                        <form action="#" method="get" className="f-color">
                            <div className="form-group">
                                <label htmlFor="contactusername">Name</label>
                                <input type="text" className="form-control" id="contactusername" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactemail">Email</label>
                                <input type="email" className="form-control" id="contactemail" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactcomment">Your Message</label>
                                <textarea className="form-control" rows={5} id="contactcomment" required defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-info btn-block">Submit</button>
                        </form>
                    </div>
                    {/*  //contact form grid ends here */}
                </div>
            </div>
        )
    }
}

export default ContactForm
