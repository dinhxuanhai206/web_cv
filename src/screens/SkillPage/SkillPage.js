import React from "react";
import classNames from "classnames/bind";
import Skill from "../../components/Skill/Skill";
import styles from "./SkillPage.module.sass";

const cx = classNames.bind(styles);

const SkillPage = () => {
  return (
    <div className={cx("skill-container")}>
      <div className={cx("skill")}>
        <div className={cx("title")}>SKILLS</div>
        <div className={cx("block-skill")}>
          <div className={cx("skill-item")}>
            <Skill label="html" percent="80%" width="80%" />
          </div>
          <div className={cx("skill-item")}>
            <Skill label="Reactjs/ redux" percent="70%" width="70%" />
          </div>
          <div className={cx("skill-item")}>
            <Skill label="css/ scss/ sass" percent="85%" width="85%" />
          </div>
          <div className={cx("skill-item")}>
            <Skill label="photoshop/ figma" percent="50%" width="50%" />
          </div>
          <div className={cx("skill-item")}>
            <Skill label="javascript" percent="70%" width="70%" />
          </div>
          <div className={cx("skill-item")}>
            <Skill label="nodejs" percent="30%" width="30%" />
          </div>
        </div>
        <div className={cx("title-resume")}>RESUME</div>
        <div className={cx("resume-block")}>
          <div className={cx("left")}>
            <div className={cx("education-title")}>Education</div>
            <div className={cx("education")}>
              <div className={cx("dog")}></div>
              <div className={cx("education-log")}>
                <p className={cx("desc")}>AT SCHOOL</p>
                <div className={cx("btn")}>2018-2022</div>
                <p className={cx("text")}>
                  Follow the school's program and basic knowledge, graduation
                  project
                </p>
                <p>
                  <span>- </span> Learn the basics of information technology
                </p>
                <p>
                  <span>- </span>Learn more basic programming languages C, C++,
                  Java, software engineering
                </p>
                <p>
                  <span>- </span>graduation project build a movie watching
                  website
                </p>
              </div>
            </div>
            <div className={cx("education")}>
              <div className={cx("dog")}></div>
              <div className={cx("education-log")}>
                <p className={cx("desc")}>AT ZENDVN</p>
                <div className={cx("btn")}>December - 2019</div>
                <p className={cx("text")}>
                  Join the practical frontend developer course here
                </p>
                <p>
                  <span>- </span> Practice the actual tasks a front end
                  developer needs to do
                </p>
                <p>
                  <span>- </span>Learn the essential technologies for front end
                  developers
                </p>
                <p>
                  <span>- </span>Know how to read documents and search
                </p>
              </div>
            </div>
          </div>
          <div className={cx("right")}>
            <div className={cx("experience-title")}>
              Professional Experience
            </div>
            <div className={cx("experience")}>
              <div className={cx("dog")}></div>
              <div className={cx("experience-log")}>
                <p className={cx("desc")}>ALTA SOFTWARE</p>
                <div className={cx("btn")}>November - 2021</div>
                <p className={cx("text")}>
                  Participate in the company's internship program
                </p>
                <p>
                  <span>- </span>Learn the work to be done in the actual project
                </p>
                <p>
                  <span>- </span>Participate in the development of the company's
                  management software
                </p>
                <p>
                  <span>- </span>develop admin page interface for management app
                </p>
                <p>
                  <span>- </span>Hone skills and practice teamwork skills
                </p>
              </div>
            </div>
            <div className={cx("experience")}>
              <div className={cx("dog")}></div>
              <div className={cx("experience-log")}>
                <p className={cx("desc")}>ISAI GON SOFTWARE</p>
                <div className={cx("btn")}>June-2022</div>
                <p className={cx("text")}>
                  Start working at the company, fresher frontend reactjs
                </p>
                <p>
                  <span>- </span> participate in project development bk8
                </p>
                <p>
                  <span>- </span>Building mobile app bk8
                </p>
                <p>
                  <span>- </span>Build the interface and functionality for the website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillPage;
