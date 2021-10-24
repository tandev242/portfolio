import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

export default function Topbar( {menuOpen, setMenuOpen}) {

 
    return (
        <div className= {"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left" >
                    <a href="#intro" className="logo"> Tandev. </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span> 0822040559 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span> tan240600@gmail.com </span>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                        <a href="https://github.com/tandev2k" target="_blank">My GitHub </a>
                    </div>
                    <div className="itemContainer">
                        <DescriptionIcon className="icon" />
                        <a href="https://www.topcv.vn/xem-cv/BQ5cVg4HBAcBDAIGAloLAFRRUVUHUFRTVldRBw91df" target="_blank">My CV </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
