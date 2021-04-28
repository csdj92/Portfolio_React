import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Resume from '../assets/data/Project_Resume.pdf'
import  { Link }  from 'react-router-dom';


const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .resume{
      font-size: 1.5rem;
      border-bottom: 1px solid
    }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hello, I am <span>Charles Davis</span>
              </p>
              <h2 className="about__heading">A Software developer</h2>
              <div className="about__info">
                <PText>
                New Software Engineer graduate with a passion to create and improve. I enjoy diving into the world of code to develop and create. I enjoy diving into the world of code to develop, debug and create. I am always looking for new ways to improve. Hard work ethic and a thriving curiosity to learn, has been my backbone through my professional career. 
                  <br /> <br />
                  I started coding in high school. I first started out with rooting android phones and moved on to making small android applications.
                  Since then I have always found joy when coding, wether it be making magic mirrors with Raspberry Pi's or making mods for video games.
                  <br />
                  <br />
                  My vision is to make the world a better place. Technology has become more important than ever. I want to create techonolgy that will be able to help others for years to come .
                </PText>
              </div>
              <a className="resume" target="_blank" href="https://docs.google.com/document/d/1erJk-KEX_mhiCP6QWJq0GazljKqhNiuP5K_H5LqaPNM/edit?usp=sharing">Download Resume
              
                     </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="Bootcamp"
                items={['Flatiron, New York']}
              />
              <AboutInfoItems
                title="College"
                items={['Cleveland State University']}
              />
             
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT',]}
              />
              <AboutInfoItems
                title="BackEnd"
                items={['Node', 'Django','Ruby On Rails', 'Flask']}
              />
             
            </div>
           
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}