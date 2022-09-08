import React from 'react'
import classNames from 'classnames/bind'
import styles from './Loading.module.sass'

const cx = classNames.bind(styles)

const Loading = () => {
  return(
    <div className={cx('loading')}>
        Loading
    </div>
  )
}
export default Loading