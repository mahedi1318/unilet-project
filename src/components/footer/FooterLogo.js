import React from 'react'
import Footerlogos from "../../assets/images/footer-img-1.png"

const FooterLogo = () => {
  return (
    <div>
        <img className='w-50' src={Footerlogos} alt="footer-img" />
        <p className='lh-lg mt-3 w-75'>We're shutting the door on
           second-rate student housing</p>
    </div>
  )
}

export default FooterLogo