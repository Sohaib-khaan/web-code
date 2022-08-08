import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="0px 60px" inverse>
			<Row justify="space-between" margin="3rem" wrap="wrap">
				<Heading width="auto" inverse>
					More Info
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '4rem', color: 'skyblue' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.5rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="1rem" margin="0.7rem" color="">
							{el.description}
						</TextWrapper>
						<CardButton>Learn More</CardButton>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
