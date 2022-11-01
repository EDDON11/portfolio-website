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
				'badge': '#3F3F51',
				'input-border': '#565666',
				'input': '#2A2A35',
				'react': '#18AEFF',
				'js': '#FFC618',
				'html': '#FF4E18',
				'css': '#184EFF',
				'ts': '#1A18FF',
				'tw': '#18EEFF',
				'title': '#fff',
				'form' : '#112240'
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'] 
			  },

			  fontFamily: {
				plusJakarta: 'PlusJakartaDisplay-Regular',
			  },

			  fontFamily: {
				burtons: "burtons",
			  },
			maxWidth: {
				'1/2': '50%',
				'1/4': '70%',
				'90': '90%'
			},

			maxheight: {
				'40': '40rem'
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
				'minmobile': {'min': '200px', 'max': '352px'}
			  },
			  animation: {
				tilt: 'tilt 10s infinite linear',
				strok: '2s liner forwards'
			  },
			  keyframes: {
				tilt: {
				  '0%, 50%, 100%': {
					transform: 'rotate(0deg)',
				  },
				  '25%': {
					transform: 'rotate(0.5deg)',
				  },
				  '75%': {
					transform: 'rotate(-0.5deg)',
				  },
				},
               strok: {
               '0%': {
				'stroke-dashoffset': '0',
			   },
			   '40%': {
				'stroke-dashoffset':'1560',
			   },
			   '80%': {
				'stroke-dashoffset':'3120',
				'fill': 'transparent',
			   },
			   '100%': {
				'stroke-dashoffset':'3120',
				'fill': '#FFC618',
			   }
			   },

			  },	
		},

	},
	
};
