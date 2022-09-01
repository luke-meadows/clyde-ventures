import styled from 'styled-components';
import CircularSolutionsGraphic from '../components/circular-solutions/CircularSolutionsGraphic';
import CircularSolutionsGrid from '../components/circular-solutions/CircularSolutionsGrid';
export default function CircularSolutions() {
  return (
    <CircularSolutionsPage>
      <Container>
        <h1>Circular Solutions</h1>
        <MainContainer>
          <CircularSolutionsGrid />
          <div className="graphic">
            <CircularSolutionsGraphic />
          </div>
        </MainContainer>
      </Container>
    </CircularSolutionsPage>
  );
}

const CircularSolutionsPage = styled.section`
  padding: 9.5rem 5rem 5rem 5rem;
`;

const Container = styled.section`
  padding: 0;
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 2.5rem;
  h1 {
    margin: 0 auto;
    font-size: 4rem;
    font-weight: 500;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  margin-top: 2rem;
  .graphic {
    width: 55rem;
  }
`;
