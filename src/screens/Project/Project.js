import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Project.module.sass";
import image from "../../constants/image";
import {
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import { BiLinkAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const tabList = [
  {
    key: "all",
    display: "ALL",
  },
  {
    key: "app",
    display: "APP",
  },
  {
    key: "card",
    display: "CARD",
  },
  {
    key: "web",
    display: "WEB",
  },
];

const workList = [
  {
    category: "all, app",
    image: image.por1,
    title: "App BK8",
    desc: "APP",
  },
  {
    category: "all, app",
    image: image.por2,
    title: "SeoulSpa",
    desc: "APP",
  },
  {
    category: "all, app",
    image: image.por3,
    title: "App Redit Blog",
    desc: "APP",
  },
  {
    category: "all, web",
    image: image.por4,
    title: "Web Hmovie",
    desc: "WEB",
  },
  {
    category: "all, web, card",
    image: image.por5,
    title: "Web Travel Tour",
    desc: "WEB",
  },
  {
    category: "all, web, card ",
    image: image.por6,
    title: "Web Ban Hang",
    desc: "WEB",
  },
];
const Project = () => {
  const [renderTab, setRenderTab] = useState("all");
  const [slice, setSlice] = useState(0);
  const [open, setOpen] = useState(false);

  const handelOpen = (index) => {
    setSlice(index); 
    setOpen(true);
  };

  const handelMove = (direction) => {
    let newSlice;
    if (direction === "l") {
      newSlice = slice === 0 ? 3 : slice - 1; //qua trái
    } else {
      newSlice = slice === 3 ? 0 : slice + 1; // qua phải
    }

    setSlice(newSlice);
  };
  const handleClick = (key) => {
    setRenderTab(key);
  };

  return (
    <div className={cx("project-container")}>
      {open && (
        <div className={cx("pro")}>
          <AiOutlineClose
            className={cx("pro-close")}
            onClick={() => setOpen(false)}
          />
          <AiOutlineArrowLeft
            className={cx("arrow")}
            onClick={() => handelMove("l")}
          />
          <div className={cx("sliceWrapper")}>
            <img
              src={workList[slice].image}
              alt=""
              className={cx("pro-image")}
            />
          </div>
          <AiOutlineArrowRight
            className={cx("arrow")}
            onClick={() => handelMove("r")}
          />
        </div>
      )}
      <div className={cx("project")}>
        <div className={cx("title")}>PORTFOLIO</div>
        <div className={cx("desc")}>MY WORK</div>
        <div className={cx("tab-block")}>
          {tabList.map((item, index) => (
            <div
              className={cx(
                "tab-item",
                renderTab === item.key ? "tab-active" : ""
              )}
              key={index}
            >
              <div
                className={cx("item-title")}
                onClick={() => handleClick(item.key)}
              >
                {item.display}
              </div>
            </div>
          ))}
        </div>
        <div className={cx("work-list")}>
          {workList?.map((item, index) => {
            if (renderTab === "all") {
              return (
                <div className={cx("block-item")} key={index} >
                  <div className={cx("item")}>
                    <img src={item.image} className={cx("image")} />
                  </div>
                  <div className={cx("item-hover")}>
                    <div className={cx("name-project")}>{item.title}</div>
                    <div className={cx("desc")}>{item.desc}</div>
                    <div className={cx("block-icon")}>
                      <div className={cx("plus")}>
                        <AiOutlinePlus onClick={() => handelOpen(index)} />
                      </div>
                      <Link to="" className={cx("link")}>
                        <BiLinkAlt />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              if (item.category?.includes(renderTab)) {
                return (
                  <div className={cx("block-item")} >
                    <div className={cx("item")}>
                      <img src={item.image} className={cx("image")} />
                    </div>
                    <div className={cx("item-hover")}>
                      <div className={cx("name-project")}>{item.title}</div>
                      <div className={cx("desc")}>{item.desc}</div>
                      <div className={cx("block-icon")}>
                        <div className={cx("plus")}>
                          <AiOutlinePlus onClick={() => handelOpen(index)} />
                        </div>
                        <Link to="" className={cx("link")}>
                          <BiLinkAlt />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Project;
