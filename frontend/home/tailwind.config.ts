
import { headers } from "next/headers"
import type { Config } from "tailwindcss" 

const primitiveColors = {
	gradient : "#F3F2FB",
	white : "FFFFF",
	primary:{
		50: "#F0EFF9",
		100: "#E1DFF3",
		300: "#CAC6EB",
		400: "#938AE5",
		500: "#685DC5",
		600: "#4F469C",
		800: "#3E377A"
	},
  gray: {
    50: "#FAFAFA",
    100: "#E6E6E6",
	200: "#C2C2C2",
    300: "#C4C4C4",
    400: "#A3A3A3",
    500: "#535353",
    900: "#333333"
  },
  success: {
	50: "#DEF5E6",
	500: "#5ACF81"
  },
  error: {
    50: "#FBDEDD",
    500: "#EC5857"
  },
  warning: {
    50: "#FBF6DD",
    500: "#F6DE63"
  },
  shadow: {
    500: "#081131"
  } 
}

const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

const shadowRgb = hexToRgb(primitiveColors.shadow[500])


const config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './stories/**/*.{ts,tsx,mdx}',
  ],

  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			sm: '576px',
  			'sm-max': {
  				max: '576px'
  			},
  			md: '768px',
  			'md-max': {
  				max: '768px'
  			},
  			lg: '992px',
  			'lg-max': {
  				max: '992px'
  			},
  			xl: '1200px',
  			'xl-max': {
  				max: '1200px'
  			},
  			'2xl': '1320px',
  			'2xl-max': {
  				max: '1320px'
  			},
  			'3xl': '1600px',
  			'3xl-max': {
  				max: '1600px'
  			},
  			'4xl': '1850px',
  			'4xl-max': {
  				max: '1850px'
  			}
  		}
  	},
  	extend: {
  		fontFamily: {
  			jakarta: [
  				'Inter',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
			'apercu-pro':[
				'Light',
				'Regular',
				'Medium',
				'Bold'
			]
  		},
  		height: {
  			'300px': '300px',
  			'500px': '500px',
  			sidebar: 'calc(100vh - 32px)'
  		},
      fontSize: {
        "display-lg": ['12.5rem', {
          lineHeight: '1',
          letterSpacing: 'normal'
        }],
        "display-md": ['7.5rem', {
          lineHeight: '6.5625rem',
          letterSpacing: '-0.15rem'
        }],
        "display-sm": ['3rem', {
          lineHeight: '3.125rem',
          letterSpacing: '-0.01875rem'
        }],
        "header-xl": ['3rem', {
          lineHeight: '3.125rem',
          letterSpacing: '-0.375rem'
        }],
        "header-lg": ['2rem', {
          lineHeight: '2.375rem',
          letterSpacing: '-0.01875rem'
        }],
        "header-md": ['1.625rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01875rem'
        }],
        "header-sm": ['1.375rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01875rem'
        }],
        "header-xs": ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.0125rem'
        }],
        "text-lg": ['1.625rem', {
          lineHeight: '2.1875rem',
          letterSpacing: '-0.01875rem'
        }],
        "text-md": ['1.375rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01875rem'
        }],
        "text-sm": ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.0125rem'
        }],
        "caption-lg": ['0.75rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.00625rem'
        }],
        'caption-sm': ['0.625rem', {
          lineHeight:  "1.5rem",
          letterSpacing: "-0.00625rem"
        }],
        'text-btn': ['1.125rem', {
          lineHeight: '1',
          letterSpacing: "-0.0125rem"
        }],
        'text-tag': ['0.75rem', {
          lineHeight: '1.5rem',
          letterSpacing: "-0.00625rem"
        }]
      },
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))',
  				border: 'hsl(var(--border))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
      dropShadow: {
        'xs': `0px 1px 2px 0px rgba(${shadowRgb.r}, ${shadowRgb.g}, ${shadowRgb.b}, 0.05)`,
        'sm': `0px 1px 3px 0px rgba(${shadowRgb.r}, ${shadowRgb.g}, ${shadowRgb.b}, 0.1)`,
        'md': `0px 4px 8px -2px rgba(${shadowRgb.r}, ${shadowRgb.g}, ${shadowRgb.b}, 0.1)`,
        'lg': `0px 12px 16px -4px rgba(${shadowRgb.r}, ${shadowRgb.g}, ${shadowRgb.b}, 0.08)`,
        '2xl': `0px 24px 48px -12px rgba(${shadowRgb.r}, ${shadowRgb.g}, ${shadowRgb.b}, 0.18)`,
        '3xl': `0px 32px 64px -12px rgba(${shadowRgb.r}, ${shadowRgb.g}, ${shadowRgb.b}, 0.14)`,
        
        'btn-focus': [
          '0px 0px 0px 4px rgba(51, 84, 255, 0.24)', 
          '0px 1px 2px 0px rgba(8, 17, 49, 0.05);'
        ],
      }
  	}
  },
  plugins: [require('tailwindcss-rtl'), require('tailwindcss-animate')],
} satisfies Config

export default config