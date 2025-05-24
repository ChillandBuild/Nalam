
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
				// Nature-inspired theme colors
				nature: {
					forest: {
						light: '#4A6741',
						DEFAULT: '#2F5848',
						dark: '#1E3A2E',
					},
					sage: {
						light: '#D3EAE4',
						DEFAULT: '#A7CBBF',
						dark: '#8FBC8F',
					},
					moss: {
						light: '#E8F5E8',
						DEFAULT: '#D3EAE4',
						dark: '#B8D4B8',
					},
					earth: {
						terracotta: '#E2725B',
						warm: '#A77E55',
						sand: '#F5F5DC',
						cream: '#FAF6E9',
						stone: '#708090',
						gray: '#696969',
					},
					water: {
						light: '#B0E0E6',
						DEFAULT: '#ADD8E6',
						deep: '#87CEEB',
					},
					sun: {
						light: '#FFDEAD',
						gold: '#F4C93B',
						warm: '#DEB887',
					},
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
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'scale': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'nature-pulse': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'gentle-wave': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(5px) translateY(-2px)' },
					'50%': { transform: 'translateX(0) translateY(-4px)' },
					'75%': { transform: 'translateX(-5px) translateY(-2px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				'leaf-sway': {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'scale': 'scale 0.3s ease-out',
				'nature-pulse': 'nature-pulse 4s ease infinite',
				'gentle-wave': 'gentle-wave 6s ease-in-out infinite',
				'leaf-sway': 'leaf-sway 3s ease-in-out infinite'
			},
			fontFamily: {
				'sans': ['Lato', 'ui-sans-serif', 'system-ui'],
				'display': ['Montserrat', 'ui-sans-serif', 'system-ui'],
				'heading': ['Montserrat', 'ui-sans-serif', 'system-ui'],
				'body': ['Lato', 'ui-sans-serif', 'system-ui'],
				'nature': ['Quicksand', 'ui-sans-serif', 'system-ui'],
			},
			backgroundImage: {
				'nature-gradient': 'linear-gradient(135deg, #A7CBBF, #D3EAE4)',
				'earth-gradient': 'linear-gradient(135deg, #E2725B, #A77E55)',
				'forest-gradient': 'linear-gradient(135deg, #2F5848, #4A6741)',
				'sage-gradient': 'linear-gradient(135deg, #8FBC8F, #A7CBBF)',
				'water-gradient': 'linear-gradient(135deg, #ADD8E6, #B0E0E6)',
				'organic-pattern': 'radial-gradient(circle at 50% 50%, rgba(47, 88, 72, 0.1) 0%, transparent 50%)',
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
			},
			boxShadow: {
				'nature': '0 4px 20px rgba(47, 88, 72, 0.15)',
				'earth': '0 4px 20px rgba(167, 203, 191, 0.2)',
				'organic': '0 8px 32px rgba(47, 88, 72, 0.1)',
				'soft': '0 2px 8px rgba(112, 128, 144, 0.1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
