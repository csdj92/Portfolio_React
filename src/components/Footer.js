import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Charles Davis</h1>
          <PText>
           Software developer thats always looking to learn.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                link: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                link: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                link: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                link: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '216-798-8752',
                link: 'tel:+216-798-8752',
              },
              {
                title: 'csdj92@gmail.com',
                link: 'mailto:csdj92@gmail.com',
              },
              
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                link: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                link: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                link: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/charles-davis-20a748123/">
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}