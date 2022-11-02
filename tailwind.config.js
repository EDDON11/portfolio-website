module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				//'body': '#17171F',
				'body': '#0a192f',
				'selected-text': '#A3A3FF',
				//'theme': '#3F3FFF',
				'theme': '#64ffda',
				'nav': '#404053',
				'secondary': '#9191A4',
				
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'] 
			  },

			maxWidth: {
				'1/2': '50%',
				'1/4': '70%',
				'90': '90%'
			},

			screens: {
				'mobile': '350px',
				// => @media (min-width: 640px) { ... }
		  
				'tablet': {'min': '640px', 'max': '914px'},
				'tabletxxl': {'min': '640px', 'max': '888px'},

				'mobilesm': {'min': '320px' , 'max': '914px'},
				'mobilelm': {'min': '320px' , 'max': '640px'},
				'tabletsm': {'min': '320px', 'max': '924px'},
				'tabletxl': {'min': '320px', 'max': '741px'},
				'bigscreen': {'min': '1024px', 'max': '2056px'},
				'minmobile': {'min': '200px', 'max': '352px'},
				'screenbtn': {'min': '100px', "max": '768px'},
				'mobiletext': {'min': '100px', 'max': '435px'}
			  },
			
			
		},

	},
	
};
