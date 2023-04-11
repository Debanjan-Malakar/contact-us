import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvcf0vr",
        "template_yexu60b",
        form.current,
        "ry7mOtCuOo2APrxWe"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          
        }
      );
  };

  return (
    <StyledContactForm>
      <h3> <a href="https://www.w3schools.com/css/css_link.asp"> \Home</a></h3>
      <h1> Contact Form </h1>
      
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  a{
    color: #ffe100;
    text-decoration: none;
    :hover {
      filter: drop-shadow(0px 6px 9px #ffe10051);
    }
  }
  h1{
    color: #ffe100;
    align: center;
  }
  h3{
    color: #ffe100;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      background: transparent;
      color: white;
      padding: 7px;
      outline: none;
      align-items: center;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      background: transparent;
      color: white;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      color: white;
    }

    input[type="submit"] {
      margin-top: 2rem;
      align: center;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: Black;
      border: none;
      background-color: #ffe100;
      align-items: center;
      :hover {
        filter: drop-shadow(0px 6px 9px #ffe10051);
      }
    }
  }
`;
