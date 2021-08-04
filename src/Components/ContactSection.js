import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone,  } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';
//import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    margin-left: 35rem;
    justify-content: space-between;
    position: relative;
  }
  
  .left {
    width: 100%;
    max-width: 500px;
  }
  
  @media only screen and (max-width: 768px) {
   
    .contactSection__wrapper::after {
      display: none;
    }
    .left{
      max-width: 100%;
    }
    
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contactos" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="912904101" />
            <ContactInfoItem icon={<MdEmail />} text="carlasof124@hotmail.com" />
            <ContactInfoItem icon={<FaLinkedin  />} text="linkedin.com/in/carla-oliveira-a8975917a" />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
