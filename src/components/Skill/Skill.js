import React from "react";
import classNames from "classnames/bind";
import styles from "./Skill.module.sass";

const cx = classNames.bind(styles);

const Skill = ({label, percent, width}) => {
  return (
    <div className={cx("progress")}>
      <div className={cx("skill")}>
        <span>{label}</span>
        <span>{percent}</span>
      </div>
      <div className={cx("progress-bar")}>
        <div className={cx("process-in")} style={{width: width}}></div>
      </div>
    </div>
  );
};
export default Skill;
