import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div>
      <div>
        <div>
           <img src={assets.logo} alt='' />
           <p>Our Company is trusted company with years of expertise in this particular field. Our Mission to provide high quality services in the healthcare industry</p>
        </div>
      <div>
        <p>COMPANY</p>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>

        </ul>
      </div>
        <div>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+1-212-456-7890</li>
            <li>varghesejoyel71@gmail.com</li>
          </ul>
        </div>
        {/*---- Copyright Text-----*/}
        <div>
            <hr />
            <p>Copyright 2024@ Prescripto - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
