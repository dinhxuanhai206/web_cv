import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.sass";
import ImgContact from "../../assets/image/img-contact.svg";
import { FiSend } from "react-icons/fi";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const cx = classNames.bind(styles);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ruhmzr",
        "template_rkimjdf",
        form.current,
        "q9zWMif1YjQM8Uv1a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={cx("contact")}>
      <div className={cx("section")}>
        <div className={cx("intro")}>
          <h4>Send me an email</h4>
          <p>I'm very responsive to message</p>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("contact-img")}>
            <img src={ImgContact} alt="..." />
          </div>
          <form className={cx("contact-form")} ref={form} onSubmit={sendEmail}>
            <div className={cx("form__group")}>
              <div className={cx("form__item")}>
                <input
                  className={cx("form__input")}
                  placeholder="Username"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div className={cx("form__item")}>
              <input
                className={cx("form__input")}
                placeholder=" Email"
                type="email"
                name="email"
              />
            </div>
            <div className={cx("form__item")}>
              <input
                className={cx("form__input")}
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className={cx("form__item", "form__textarea")}>
              <textarea
                autoCorrect="off"
                className={cx("form__input")}
                placeholder="Message"
                name="message"
              />
            </div>
            <button className={cx("btn-submit")} type="submit">
              Send Message <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
