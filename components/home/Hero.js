import Image from 'next/image';
import styled from 'styled-components';
import hero from '../../public/hero.jpg';
import MissionBanner from './MissionBanner';
export default function Hero() {
  return (
    <StyledHero>
      {/* <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> */}
      <HeroVideo
        autoPlay
        muted
        loop
        webkit-playsinline="true"
        playsInline={true}
        src={require('../../public/HERO.mp4')}
        type="video/mp4"
      />
      <MissionBanner />
      <LearnMore>Learn More</LearnMore>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  position: relative;
  height: calc(100vh - 3rem);
  /* @media only screen and (min-width: 1600px) {
    height: calc(100vh - 13rem);
  } */
`;

const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const LearnMore = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  background: var(--yellow2);
  border: 2px solid var(--yellow2);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateX(-50%) translateY(45%);
  }
`;
