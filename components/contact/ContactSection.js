import styled from 'styled-components';
import Container from '../global/Container';
import Title from '../global/Title';
import ContactForm from './ContactForm';
export default function ContactSection() {
  return (
    <Container>
      <StyledContactSection>
        <div>
          <Title>Talk To Us</Title>
          <p>
            If you have a project in mind we&apos;d love to hear from you.
            Please fill in the details below and a team member will get back to
            you shortly.
          </p>
          <div className="contact-info">
            <i className="icon-mail" />
            <p>help@clydeventures.com</p>
          </div>
          <div className="contact-info">
            <i className="icon-phone" />
            <p>0280 400 3000</p>
          </div>
        </div>
        <ContactForm />
      </StyledContactSection>
    </Container>
  );
}

const StyledContactSection = styled.section`
  display: flex;
  margin: 0 4rem;
  max-width: 1300px;
  margin: 4rem 0 6rem 0;
  p {
    font-size: 1.2rem;
    margin-bottom: 0;

    max-width: 550ch;
    color: var(--dark-grey);
    margin-left: 0.2rem;
    margin-bottom: 2rem;
  }
  .contact-info {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    p {
      margin: 0;
      font-weight: 500;
    }
    i {
      margin: 0;
      margin-right: 0.5rem;
      margin-bottom: 0.12rem;
      font-size: 1.4rem;
    }
  }
  @media only screen and (min-width: 1600px) {
    p {
      font-size: 1.2rem;
    }
  }
`;
