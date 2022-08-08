import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Learn From The Best</MainHeading>
				<HeroText>
					We provide the best Learning Platform for clients all over the world
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Sign Up</Button>
					</Link>
					<HeroButton>Information</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
