import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Aryan</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#work" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href='https://www.linkedin.com/in/aryan-gaikwad-84401a203/' className='footer__social-link' target='_blank'>
                <i class="uil uil-linkedin-alt"></i>
                </a>
                <a href='https://www.instagram.com/__aryan__105/' className='footer__social-link' target='_blank'>
                <i class="uil uil-instagram"></i>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100007313176409' className='footer__social-link' target='_blank'>
                <i class="uil uil-facebook-f"></i>
                </a>

            </div>
                <span className='footer__copy'>&#169; Aryan. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer