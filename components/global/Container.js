import styled from 'styled-components';
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.section`
  padding: 10rem 5rem;
`;
