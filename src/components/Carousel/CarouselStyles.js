import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
	width: 100%;
	height: 400px;
	border-radius: 40px 40px 10px 10px;
	object-fit: cover;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 40px 40px 30px 30px;
	outline-color: black;
	height: 530px;

	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 0.6rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 0.6;
		transition: opacity 0.3s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 30px;
		gap: 4rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
	background-color: skyblue;
	font-size: 1.4rem;
	padding: 10px 10px;
	color: black;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0px 0px 20px 20px;

	&:hover {
		background-color: grey;
		transition: background-color 0.3s ease-in;
	}
`;
