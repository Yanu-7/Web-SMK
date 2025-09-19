module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Islamic heritage and growth foundation
        primary: {
          DEFAULT: "#006400", // dark-green
          50: "#F0FFF4", // mint-green-50
          100: "#C6F6D5", // green-100
          200: "#9AE6B4", // green-200
          300: "#68D391", // green-300
          400: "#48BB78", // green-400
          500: "#38A169", // green-500
          600: "#2F855A", // green-600
          700: "#276749", // green-700
          800: "#22543D", // green-800
          900: "#1A202C", // green-900
        },
        // Secondary Colors - Achievement celebration and excellence moments
        secondary: {
          DEFAULT: "#FFD700", // gold
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          200: "#FDE68A", // yellow-200
          300: "#FCD34D", // yellow-300
          400: "#FBBF24", // yellow-400
          500: "#F59E0B", // yellow-500
          600: "#D97706", // yellow-600
          700: "#B45309", // yellow-700
          800: "#92400E", // yellow-800
          900: "#78350F", // yellow-900
        },
        // Accent Colors - Interactive elements and progress indicators
        accent: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          200: "#BBF7D0", // green-200
          300: "#86EFAC", // green-300
          400: "#4ADE80", // green-400
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          900: "#14532D", // green-900
        },
        // Background Colors
        background: "#FEFEFE", // near-white
        surface: "#F8F9FA", // gray-50
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900
          secondary: "#666666", // gray-600
        },
        // Status Colors
        success: "#28A745", // green-600
        warning: "#FFC107", // yellow-500
        error: "#DC3545", // red-600
        // Border Colors
        border: {
          light: "#E5E5E5", // gray-300
          accent: "#006400", // primary
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'strong': '0 4px 16px rgba(0, 100, 0, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 100, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}