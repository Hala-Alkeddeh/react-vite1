import React from 'react'
import './Card3.css'
import stars from './../../assets/images/star.svg'

const Card3 = ({imgCard,flagImg,count,townName,desCard}) => {
  return (
    <div className='card3'>
        <div className='flagContainer'>
            <img className='bgCard' src={imgCard}/>
            <img className='flag' src={flagImg}/>
        </div>
        <div id='counts'>
            <div className='smallFlex'>
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3775 4H18.2325V3C18.2325 2.73478 18.1195 2.48043 17.9184 2.29289C17.7173 2.10536 17.4445 2 17.16 2C16.8756 2 16.6028 2.10536 16.4016 2.29289C16.2005 2.48043 16.0875 2.73478 16.0875 3V4H9.65252V3C9.65252 2.73478 9.53952 2.48043 9.33839 2.29289C9.13726 2.10536 8.86446 2 8.58002 2C8.29557 2 8.02278 2.10536 7.82165 2.29289C7.62051 2.48043 7.50752 2.73478 7.50752 3V4H5.36252C4.50919 4 3.6908 4.31607 3.0874 4.87868C2.48401 5.44129 2.14502 6.20435 2.14502 7V19C2.14502 19.7956 2.48401 20.5587 3.0874 21.1213C3.6908 21.6839 4.50919 22 5.36252 22H20.3775C21.2309 22 22.0492 21.6839 22.6526 21.1213C23.256 20.5587 23.595 19.7956 23.595 19V7C23.595 6.20435 23.256 5.44129 22.6526 4.87868C22.0492 4.31607 21.2309 4 20.3775 4ZM21.45 19C21.45 19.2652 21.337 19.5196 21.1359 19.7071C20.9348 19.8946 20.662 20 20.3775 20H5.36252C5.07807 20 4.80528 19.8946 4.60415 19.7071C4.40301 19.5196 4.29002 19.2652 4.29002 19V12H21.45V19ZM21.45 10H4.29002V7C4.29002 6.73478 4.40301 6.48043 4.60415 6.29289C4.80528 6.10536 5.07807 6 5.36252 6H7.50752V7C7.50752 7.26522 7.62051 7.51957 7.82165 7.70711C8.02278 7.89464 8.29557 8 8.58002 8C8.86446 8 9.13726 7.89464 9.33839 7.70711C9.53952 7.51957 9.65252 7.26522 9.65252 7V6H16.0875V7C16.0875 7.26522 16.2005 7.51957 16.4016 7.70711C16.6028 7.89464 16.8756 8 17.16 8C17.4445 8 17.7173 7.89464 17.9184 7.70711C18.1195 7.51957 18.2325 7.26522 18.2325 7V6H20.3775C20.662 6 20.9348 6.10536 21.1359 6.29289C21.337 6.48043 21.45 6.73478 21.45 7V10Z" fill="#7D7D7D"/>
                </svg>
                <span>8 Days</span>
            </div>
            <div className='smallFlex'>
                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7149 8C13.5381 8 14.9967 6.65 14.9967 5C14.9967 3.35 13.5381 2 11.7149 2C9.89163 2 8.43303 3.35 8.43303 5C8.43303 6.65 9.89163 8 11.7149 8ZM11.7149 10C8.71188 10 6.28803 7.76 6.28803 5C6.28803 2.24 8.71188 0 11.7149 0C14.7179 0 17.1417 2.24 17.1417 5C17.1417 7.76 14.7179 10 11.7149 10ZM4.20738 18H19.2224V16.67C19.2224 14.92 16.7449 13.11 11.7149 13.11C6.68485 13.11 4.20738 14.92 4.20738 16.67V18ZM11.7149 11.11C18.8577 11.11 21.3674 14.44 21.3674 16.67V20H2.06238V16.67C2.06238 14.44 4.57203 11.11 11.7149 11.11Z" fill="#7D7D7D"/>
                </svg>
                <span>{count} People going</span>
            </div>
        </div>
        <div id='stars'>
            <p id='town'>{townName}</p>
            <div>
            <img src={stars}/>
            <img src={stars}/>
            <img src={stars}/>
            <img src={stars}/>
            <img src={stars}/>
            </div>
        </div>
        <p className='description'>{desCard}</p>
        <button className='btnCard'>Explore Now</button>
    </div>
  )
}

export default Card3