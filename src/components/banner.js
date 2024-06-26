import React from 'react';
import Typed from 'typed.js';
import contact from '../components/images/contact.png'
import './banner.css'

function Banner() {
  // Create reference to store the DOM element containing the animation
  const intro = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(intro.current, {
      strings: [" Hello , I'm Santhosh👋 <br/> and I'm a Frontend Developer"],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro">
      <span ref={intro} />
      <button><a href="#Contact">Contact<img src={contact} alt="contact"/></a></button>
    </div>
  );
}
export default Banner 