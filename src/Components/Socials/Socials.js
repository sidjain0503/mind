import React from 'react'
import './Socials.css'
import instagram from './img/instagram.png'
import telegram from './img/telegram.png'
import whatsapp from './img/whatsapp.png'
import youtube from './img/youtube.png'
import gmail from './img/gmail.png'


function Socials() {
  return (
    <div className='socials'>
        <a href="https://www.instagram.com/soul_iitian/" target="_blank" ><img src={instagram} alt="" /></a>
        <a href="https://t.me/Tushar_IITBHU" target="_blank" ><img src={telegram} alt="" /></a>
        <a href="https://wa.me/message/XLJVSMON5KTRF1" target="_blank" ><img src={whatsapp} alt="" /></a>
        <a href="https://www.youtube.com/channel/UCWskRG4bggQF7SlHuLsYFjA" target="_blank"><img src={youtube} alt="" /></a>
        <a href="mailto:support@boosturmind.com"><img src={gmail} alt="" /></a>
    </div>
  )
}

export default Socials