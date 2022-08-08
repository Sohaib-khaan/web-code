import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled(motion.div)`
	margin-bottom: 5px;
	padding-right: 5px;
	padding-left: 5px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 105px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 320px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const TopLine = styled(motion.div)`
	font-size: 1.2rem;
	line-height: 16px;
	font-weight: 550;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: black;
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 30px;
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? 'skyblue' : 'white')};

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Subtitle = styled(motion.p)`
	max-width: 540px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? 'black' : 'black')};
`;

export const ContentButton = styled(motion.button)`
	height: 2.5rem;
	padding: 10px 120px 100px 200px;
	font-weight: 700;
	font-size: 1rem;
	line-height: 18px;
	letter-spacing: 1.6px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? 'black' : 'black')};

	border-radius: 8rem;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '100px 604px' : '0px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid ${({ inverse }) => (inverse ? 'grey' : 'black')};
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:before {
		background: ${({ inverse }) => (inverse ? 'black' : 'white')};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: ${({ inverse }) => (inverse ? 'skyblue' : '')};
	}
`;
