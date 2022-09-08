import React from 'react'
import classNames from 'classnames/bind'
import styles from './SocialMedia.module.sass'
import { FaFacebook, FaSkype, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const dataSocial = [
  {
    name: 'fb',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/profile.php?id=100014337392650'
  },
  {
    name: 'ins',
    icon: <BsInstagram />,
    link: '#'
  },
  {
    name: 'git',
    icon: <FaGithub />,
    link: 'https://github.com/dinhxuanhai206'
  },
  {
    name: 'linkin',
    icon: <FaLinkedinIn />,
    link: '#'
  },
]

const cx = classNames.bind(styles)

const SocialMedia = () => {
  return(
    <div className={cx('social-media')}>
      {
        dataSocial.map((item, i) => (
          <a style={{animationDelay: `${i/4}s`}} className={cx('social-item')} key={i} href={item.link}>
            {item.icon}
          </a>
        ))
      }
    </div>
  )
}
export default SocialMedia