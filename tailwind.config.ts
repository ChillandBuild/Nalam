
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
					foreground: 'hsl(var(--card-foreground))'
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
				// Enhanced Nalam theme colors with vibrant orange and red
				nalam: {
					orange: {
						light: '#FFEDD5',
						DEFAULT: '#F97316',
						dark: '#C2410C',
						vibrant: '#FF7A00',
					},
					red: {
						light: '#FEE2E2',
						DEFAULT: '#ea384c',
						dark: '#B91C1C',
						vibrant: '#FF2D55',
					},
					earth: {
						light: '#D7CCC8',
						DEFAULT: '#A1887F',
						dark: '#5D4037',
					},
					leaf: '#66BB6A',
					sky: '#81D4FA',
					sun: '#FFD54F',
					// Additional vibrant colors
					peach: '#FEC6A1',
					coral: '#FF8A65',
					amber: '#FFAB40',
					rose: '#FF80AB',
					mint: '#80DEEA',
					lavender: '#B39DDB',
				},
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
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'scale': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-gradient': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'scale': 'scale 0.3s ease-out',
				'pulse-gradient': 'pulse-gradient 3s ease infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease infinite',
				'sparkle': 'sparkle 1.5s ease infinite'
			},
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
				'display': ['Poppins', 'ui-sans-serif', 'system-ui'],
				'hugh': ['"Hugh is Life"', 'cursive']
			},
			backgroundImage: {
				'orange-red-gradient': 'linear-gradient(90deg, #F97316, #ea384c)',
				'orange-red-light': 'linear-gradient(90deg, rgba(249, 115, 22, 0.2), rgba(234, 56, 76, 0.2))',
				'orange-peach-gradient': 'linear-gradient(90deg, #F97316, #FEC6A1)',
				'red-orange-gradient': 'linear-gradient(90deg, #ea384c, #F97316)',
				'vibrant-gradient': 'linear-gradient(45deg, #F97316, #ea384c, #FEC6A1)',
				'sunrise-gradient': 'linear-gradient(to top, #F97316, #FFD54F)',
				'sunset-gradient': 'linear-gradient(to bottom, #ea384c, #F97316)',
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
			},
			boxShadow: {
				'colorful': '0 4px 14px 0 rgba(249, 115, 22, 0.15), 0 2px 6px 0 rgba(234, 56, 76, 0.1)',
				'glow': '0 0 15px rgba(249, 115, 22, 0.5)',
				'inner-glow': 'inset 0 0 15px rgba(234, 56, 76, 0.2)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
