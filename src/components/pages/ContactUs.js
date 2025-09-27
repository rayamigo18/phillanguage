import React from "react";
import "../../App.css";
import Recaptcha from "react-recaptcha";
import { useForm } from "react-hook-form";
import Footer from "../Footer";
import emailjs from "emailjs-com";

let recaptchaInstance;

function ContactUs() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation
  const resetRecaptcha = () => {
    alert("Thank you for emailing Philippine Language!");
    recaptchaInstance.reset();
  };

  function sendEmail(form, e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ww1hcso",
        "template_jbao3qe",
        e.target,
        "user_UNnW6Xlc97h20WK28kvsv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  function recaptchaLoaded() {
    console.log("capcha successfully loaded");
  }

  return (
    <div className="contactus-container">
      <h1 className="contact-us">
        Contact Us
      </h1>
      <div className="contactus-info">
        <div>
          <i class="fas fa-map-marker-alt"></i> Melbourne Victoria
        </div>
        <div>
          <i class="fas fa-phone"></i>
          <a href="tel:+61412836883"> 0412836883 </a>
        </div>
        <div>
          <i class="fas fa-envelope"></i>
          <a href="mailto:phillangsov@gmail.com">
            {" "}
            phillangsov@gmail.com
          </a>
        </div>
      </div>

      <div className="contactus-details">
        <h2>
          Join us and learn how to speak, read and write Filipino language!
          <br />
        </h2>
        <p>
        Fill  in the contact form, we would love to hear from you !
        </p>
        <form onSubmit={handleSubmit(sendEmail)}>
          <input
            ref={register({
              required: {
                value: true,
                message: "You must enter your Full Name",
              },
              maxLength: {
                value: 40,
                message: "Your Full name must be at least 40 characters",
              },
            })}
            type="text"
            name="name"
            placeholder="Full Name"
          />
          {errors.name && <div className="error">{errors.name.message}</div>}

          <input
            ref={register({
              required: {
                value: true,
                message: "You must enter an email address",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              },
            })}
            type="text"
            placeholder="Email"
            name="email"
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
          <textarea
            name="message"
            placeholder="Please enter your message"
            ref={register({ required: true })}
          />
          <div className="g-recaptcha">
            <Recaptcha
              ref={(e) => (recaptchaInstance = e)}
              sitekey="6LfsZ_odAAAAALUZTJRjwub07gpYrQx86NXqEoGr"
              render="explicit"
              //onChange={useCallback(() => setDisableSubmit(false))}
              onloadCallback={recaptchaLoaded}
              verifyCallback={handleSubmit(onSubmit)}
            />
          </div>
          <input type="submit" onClick={resetRecaptcha}></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
