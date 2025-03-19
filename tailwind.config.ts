
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
				content: {
					onaction: 'hsl(var(--content-onaction))',
					'onaction-inverted': 'hsl(var(--content-onaction-inverted))',
					primary: 'hsl(var(--content-primary))',
					'primary-inverted': 'hsl(var(--content-primary-inverted))',
					secondary: 'hsl(var(--content-secondary))',
					'secondary-inverted': 'hsl(var(--content-secondary-inverted))',
					tertiary: 'hsl(var(--content-tertiary))',
					'tertiary-inverted': 'hsl(var(--content-tertiary-inverted))',
					danger: 'hsl(var(--content-danger))',
					warning: 'hsl(var(--content-warning))',
					caution: 'hsl(var(--content-caution))',
					success: 'hsl(var(--content-success))',
					confirm: 'hsl(var(--content-confirm))',
					info: 'hsl(var(--content-info))',
					draft: 'hsl(var(--content-draft))',
					link: 'hsl(var(--content-link))',
					'link-active': 'hsl(var(--content-link-active))',
					disabled: 'hsl(var(--content-disabled))',
					'danger-inverted': 'hsl(var(--content-danger-inverted))',
					'warning-inverted': 'hsl(var(--content-warning-inverted))',
					'caution-inverted': 'hsl(var(--content-caution-inverted))',
					'success-inverted': 'hsl(var(--content-success-inverted))',
					'confirm-inverted': 'hsl(var(--content-confirm-inverted))',
					'info-inverted': 'hsl(var(--content-info-inverted))',
					'draft-inverted': 'hsl(var(--content-draft-inverted))',
					'link-inverted': 'hsl(var(--content-link-inverted))',
					'link-active-inverted': 'hsl(var(--content-link-active-inverted))',
					'disabled-inverted': 'hsl(var(--content-disabled-inverted))',
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
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
