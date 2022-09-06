import styled from 'styled-components';
import ServiceCard from '../home/ServiceCard';
export default function CircularSolutionsGrid() {
  return (
    <StyledGrid>
      <ServiceCard
        title="Consult"
        bullets={[' Net zero marketplace', 'Opt-in value optimisation']}
        link="/what-we-do/consultancy"
      />
      <ServiceCard
        title="Educate"
        bullets={['Sustainability MBA', ' Diversity recruitment']}
        link="/what-we-do/education"
      />
      <ServiceCard
        title="Integrate"
        bullets={[
          'Systems integration',
          'Automation',
          'Lean processing',
          'Data analytics',
        ]}
        link="/what-we-do/integration"
      />
      <ServiceCard
        title="Manufacture"
        bullets={[
          'Fibre reinforced polymers (FRP)',
          'FRP Fire doors',
          'FRP Panels and cladding',
          'FRP Structural beams',
          'FRP Logistic containers',
        ]}
        link="/what-we-do/manufacturing"
      />
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media only screen and (max-width: 1170px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: -3rem;
    width: 100%;
  }
`;