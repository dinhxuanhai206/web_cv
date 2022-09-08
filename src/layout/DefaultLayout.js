import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.sass";
import { useMediaQuery } from "react-responsive";
import MenuBar from "./MenuBar/MenuBar";
import ToggleThemes from '../components/ToggleThemes/ToggleThemes'
import SocialMedia from "../components/SocialMedia/SocialMedia";

const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 739px)` });
  return (
    <div className={cx("default-layout")}>
      <MenuBar />
      <ToggleThemes />
      <SocialMedia />
      <span className={cx("bg-attachment", 'container-fluid')}>
        <h1>EDWARD</h1>
      </span>
      <div className={cx('wrapper')}>
        {children}
      </div>
    </div>
  );
};
export default DefaultLayout;
