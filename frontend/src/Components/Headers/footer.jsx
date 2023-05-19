import React from "react";
import './header.css';
import {Link} from 'react-router-dom';

function Footer() {
    return(
    <>
        <footer class="xyz">
            <div class="xy">
                <Link to="https://www.instagram.com/vaibhavjha3257/" target="_blank"><i class="fab fa-instagram"></i></Link>
                <Link to="/"><i class="fab fa-facebook"></i></Link>
                <Link tp="/"><i class="fab fa-youtube"></i></Link>
                <Link to="/"><i class="fab fa-telegram"></i></Link>
            </div>
            <h6>copyright @DSA360 All Right Reserved</h6>
        </footer>
    </>
    )
}

export default Footer;