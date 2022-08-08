import React from 'react';


import { BiDollar, BiHeadphone, BiMouse, BiSortUp, BiSupport, BiTime } from 'react-icons/bi';
const iconStyle = (Icon) => <Icon size="4rem" color="skyblue" />;

export const featuresData = [
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Ease Of Understanding',
		description: 'Our Teaching is easy to understand',
		icon: iconStyle(BiMouse),
		imgClass: 'two',
	},

	
];
