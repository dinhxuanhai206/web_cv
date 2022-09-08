import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { BsArrowRight } from "react-icons/bs";
import img from "../../assets/image/img.jpg"
import styles from "./Home.module.sass";

const cx = classNames.bind(styles);

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["I'm Web Developer", "Frontend Developer"];
  const period = 1000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className={cx("home")}>
      <div className={cx("left")}>
        <div className={cx("name")}>Hello, I'm Edward Dinh</div>
        <div className={cx("title")}>
          <span
            className="txt-rotate"
          >
            <span className="wrap">{text}</span>
          </span>
        </div>
        <div className={cx("desc")}>
          Become a professional frontend web developer and hone your knowledge,
          learn and work hard, dedicate your knowledge with a serious work ethic
          to develop and orient the company long term
        </div>
        <button className={cx("btn")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span> Let’s Connect <BsArrowRight size={25} />
        </button>
      </div>
      <div className={cx("right")}>
        <img src={img} alt="" className={cx("img")}/>
      </div>
    </div>
  );
};
export default Home;
