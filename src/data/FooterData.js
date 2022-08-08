import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	
	
];

export const footerData = [
	{
		title: 'Main',
		links: ['About us','FAQs', 'Support'],
	},
	{
		title: 'Info',
		links: ['Team', 'Classes', 'Schedule'],
	},
	{
		title: 'Clause',
		links: ['Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
	{
		title: 'Contact',
		links: ['Email', 'Phone',' Head Office Address'],
	},
	
];
