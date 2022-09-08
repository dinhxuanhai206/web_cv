import React, { useState, useContext, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./MenuBar.module.sass";
import { MediaQueryContext } from "../../Context/MediaQueryContext";
import { useScrollSection } from "react-scroll-section";

import { AiFillHome } from "react-icons/ai";
import { FaAddressBook, FaChartPie } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { HiOutlinePresentationChartBar } from 'react-icons/hi'
const cx = classNames.bind(styles);

const dataIcon = [
  {
    id: "home",
    icon: <AiFillHome />,
    name: "Home",
  },
  {
    id: "about",
    icon: <FaAddressBook />,
    name: "About",
  },
  {
    id: "skill",
    icon: <FaChartPie />,
    name: "Skill",
  },
  {
    id: "project",
    icon: <HiOutlinePresentationChartBar />,
    name: "Project",
  },
  {
    id: "contact",
    icon: <MdAttachEmail />,
    name: "Contact",
  },
];

export const MenuItem = ({ id = "", className, children, style }) => {
  const nameSection = useScrollSection(id);
  return (
    <li
      onClick={nameSection.onClick}
      className={cx(className, { "nav-active": nameSection.selected })}
      style={style}
    >
      {children}
    </li>
  );
};

const MenuBar = () => {
  const isMobile = useContext(MediaQueryContext);
  const [side, setSide] = useState(false);
  return (
    <div className={cx("navbar-section")}>
      <ul className={cx("navbar")}>
        {dataIcon.map((item, id) => (
          <MenuItem key={id} id={item.id} className={cx("nav-item")}>
            <div className={cx("wrapper")}>
              <span className={cx("nav-icon")}>{item.icon}</span>
            </div>
            <span className={cx("title")}>{item.name}</span>
          </MenuItem>
        ))}
      </ul>
    </div>
  );
};
export default MenuBar;
