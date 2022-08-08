export const data = [
	{
		title: 'What our clients say',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Our Team',
		description: 'Our team consists of the most experienced experts in the industry, learn about them',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'World Wide Teaching',
		description: 'Our team has been teaching our clients from all over the world',
		image: './assets/world.jpg',
	},
	{
		title: 'Affordable',
		description: 'Our Company provides most affordable learning on wide scale around the world',
		image: './assets/aff.jpg',
	},

];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
