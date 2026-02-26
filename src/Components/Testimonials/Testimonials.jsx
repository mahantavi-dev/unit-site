import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>

          {/* Slide 1 (2 cards) */}
          <li>
            <div className="slide-row">
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree was one of the best decisions I’ve made.</p>
              </div>

              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Sophia Martinez</h3>
                    <span>Edusity, Canada</span>
                  </div>
                </div>
                <p>The professors and learning environment exceeded my expectations.</p>
              </div>
            </div>
          </li>

          {/* Slide 2 (2 cards) */}
          <li>
            <div className="slide-row">
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>James Anderson</h3>
                    <span>Edusity, UK</span>
                  </div>
                </div>
                <p>The diverse campus made my experience truly exceptional.</p>
              </div>

              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Aisha Rahman</h3>
                    <span>Edusity, Australia</span>
                  </div>
                </div>
                <p>I discovered my true potential through leadership opportunities.</p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonials