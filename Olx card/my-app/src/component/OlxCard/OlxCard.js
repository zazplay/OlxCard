import React from 'react';
import PropTypes from 'prop-types';
import styles from './OlxCard.module.css';
import BmwX5 from './images/image.webp'  ;

const OlxCard = () => (
  <div className={styles.OlxCard}>
      <img src={BmwX5} className={styles.carImg}/>
      <div className={styles.buttonInImgDel}>  
          <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="css-d7r8uj"><path d="M21 15.999h-.343A3.501 3.501 0 0 0 17.5 14a3.501 3.501 0 0 0-3.156 1.997l-4.687.002A3.5 3.5 0 0 0 6.5 14a3.5 3.5 0 0 0-3.158 2L3 16.002V5h11v6l1 1h6v3.999zM17.5 19c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm-11 0c-.827 0-1.5-.673-1.5-1.5S5.673 16 6.5 16s1.5.673 1.5 1.5S7.327 19 6.5 19zm12-12 2.25 3H16V7h2.5zm1-2H16V4l-1-1H2L1 4v13.002l1.001 1 1.039-.001A3.503 3.503 0 0 0 6.5 21a3.502 3.502 0 0 0 3.46-3l4.08-.003A3.503 3.503 0 0 0 17.5 21a3.502 3.502 0 0 0 3.46-3.001H22l1-1V9.665L19.5 5z" fill="currentColor" fill-rule="evenodd"></path></svg>
      </div>
      <div>
        <div className={styles.divTittle}> Обвес M-Performance тюнинг BMW X5 F15 Спойлер Диффузор Пороги Губа  </div>
        <div className={styles.newText}>Нове</div>
        <div className={styles.dateAndLock}>Київ, Печерський - 06 червня 2024 р.</div>
      </div>
      <div >
      <div className={styles.imgpricedel}>  
          <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="css-d7r8uj"><path d="M21 15.999h-.343A3.501 3.501 0 0 0 17.5 14a3.501 3.501 0 0 0-3.156 1.997l-4.687.002A3.5 3.5 0 0 0 6.5 14a3.5 3.5 0 0 0-3.158 2L3 16.002V5h11v6l1 1h6v3.999zM17.5 19c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm-11 0c-.827 0-1.5-.673-1.5-1.5S5.673 16 6.5 16s1.5.673 1.5 1.5S7.327 19 6.5 19zm12-12 2.25 3H16V7h2.5zm1-2H16V4l-1-1H2L1 4v13.002l1.001 1 1.039-.001A3.503 3.503 0 0 0 6.5 21a3.502 3.502 0 0 0 3.46-3l4.08-.003A3.503 3.503 0 0 0 17.5 21a3.502 3.502 0 0 0 3.46-3.001H22l1-1V9.665L19.5 5z" fill="currentColor" fill-rule="evenodd"></path></svg>
      </div>
        <div className={styles.price}> 11 343 грн.</div>
        <div className={styles.like}>♡</div>
        </div>
  </div>

  



);




OlxCard.propTypes = {};

OlxCard.defaultProps = {};

export default OlxCard;
