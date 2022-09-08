import React from "react";
import classNames from "classnames/bind";
import img from "../../assets/image/me.jpg";
import styles from "./AboutMe.module.sass";
import { AiOutlineRight } from "react-icons/ai";
import { BsEmojiSmile, BsJournalRichtext, BsHeadset, BsCalendarDay } from "react-icons/bs";

const cx = classNames.bind(styles);

const AboutMe = ({ style }) => {
  return (
    <div className={cx("about-container")}>
      <div className={cx("about")}>
        <div className={cx("title")}>ABOUT</div>
        <div className={cx("desc")}>LEARN MORE ABOUT ME</div>

        <div className={cx("content")}>
          <div className={cx("image")}>
            <img src={img} alt="" className={cx("img")} />
          </div>
          <div className={cx("content-ui")}>
            <div className={cx("ui-title")}>Frontend Developer</div>
            <div className={cx("ui-desc")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={cx("ui-info")}>
              <div className={cx("info-left")}>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} /> <span>Name:</span>{" "}
                  Dinh Xuan Hai
                </div>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} />{" "}
                  <span>Birthday:</span> 20 june 2000
                </div>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} /> <span>Phone:</span>{" "}
                  +84 353 432 512
                </div>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} />
                  <span> City:</span> Ho Chi Minh City
                </div>
              </div>
              <div className={cx("info-right")}>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} /> <span>Age:</span> 22
                </div>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} /> <span>Email:</span>{" "}
                  dinhxuanhai206@gmail.com
                </div>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} />{" "}
                  <span>University:</span> Ho Chi Minh City University of
                  Transport
                </div>
                <div className={cx("info")}>
                  <AiOutlineRight className={cx("icon")} /> <span>GPA:</span>{" "}
                  3.01
                </div>
              </div>
            </div>
            <div className={cx("ui-text")}>
              Become a professional frontend web developer and hone your
              knowledge, learn and work hard, dedicate your knowledge with a
              serious work ethic to develop and orient the company long term
            </div>
          </div>
        </div>
        <div className={cx('counts')}>
          <div className={cx('item')}>
            <div className={cx('icon')}>
              <BsEmojiSmile />
            </div>
            <div className={cx('block')}>
              <p className={cx("number")}>
                5
              </p>
              <p className={cx("name")}>Happy Clients</p>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('icon')}>
              <BsJournalRichtext/>
            </div>
            <div className={cx('block')}>
              <p className={cx("number")}>
                6
              </p>
              <p className={cx("name")}>Project</p>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('icon')}>
              <BsHeadset />
            </div>
            <div className={cx('block')}>
              <p className={cx("number")}>
                4
              </p>
              <p className={cx("name")}>Years Of Study</p>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('icon')}>
              <BsCalendarDay />
            </div>
            <div className={cx('block')}>
              <p className={cx("number")}>
                6
              </p>
              <p className={cx("name")}>Professional Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
