/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px'
        },
        fontWeight: {
            light: 200,
            normal: 400,
            semi: 500,
            medium: 600,
            bold: 700
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            inherit: 'inherit',
            mono: {
                DEFAULT: '#050505',
                50: '#FFFFFF',
                100: '#E5E5E5',
                200: '#C9C9C9',
                300: '#ADADAD',
                400: '#919191',
                500: '#757575',
                600: '#595959',
                700: '#3D3D3D',
                800: '#212121',
                900: '#050505'
            },
            primary: {
                DEFAULT: '#EC4899',
                50: '#FDEEF6',
                100: '#FBDCEB',
                200: '#F8B7D7',
                300: '#F492C2',
                400: '#F06DAE',
                500: '#EC4899',
                600: '#E4187D',
                700: '#B11261',
                800: '#7F0D45',
                900: '#4C0829'
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem'
            }
        },
        extend: {
            zIndex: {
                5: '5',
                15: '15',
                25: '25',
                35: '35',
                45: '45'
            }
        }
    },
    plugins: []
};
