import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>Have project in mind
        <br className='sm:block hidden' />
        lets talk about it! 
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  )
}

export default CTA;