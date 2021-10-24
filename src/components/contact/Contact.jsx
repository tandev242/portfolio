import "./contact.scss"
import { useState } from "react"
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    ,<button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply to you soon!</span>}
                </form>
                <h3>OR</h3>
                <div className="social">
                    <div className="itemContainer">
                        <a href="https://www.facebook.com/nguyentan2k/" target="_blank"> <FacebookIcon className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.instagram.com/tandzok/" target="_blank"> <InstagramIcon className="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
