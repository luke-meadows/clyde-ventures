import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';
import ContactButton from './ContactButton';
export default function HeaderPrimary() {
  return (
    <StyledHeaderPrimary>
      <Nav />
      {/* <Logo width="7rem" style={{ flex: 1 }} /> */}
      <Logo width="11rem" style={{ flex: 1 }} variant={2} />

      <ContactButton />
    </StyledHeaderPrimary>
  );
}

const StyledHeaderPrimary = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 3rem;
  height: 8rem;
  position: absolute;
  z-index: 2;
  width: 100%;
  @media only screen and (min-width: 1600px) {
    padding: 0 6rem;
    height: 10rem;
  }
`;
