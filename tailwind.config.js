/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
            },
            colors: {
                marineBlue: "hsl(213, 96%, 18%)",
                purpleBlue: "hsl(243, 100%, 62%)",
                blue: "hsl(228, 100%, 84%)",
                lightBlue: "hsl(206, 94%, 87%)",
                strawberryRed: "hsl(354, 84%, 57%)",
                grey: "hsl(231, 11%, 63%)",
                lightGrey: "hsl(229, 24%, 87%)",
                magnolia: "hsl(217, 100%, 97%)",
                alabaster: "hsl(231, 100%, 99%)",
                white: "hsl(0, 0%, 100%)",
            },
            backgroundImage: {
                mobile: "url('./images/bg-sidebar-mobile.svg')",
                desktop: "url('./images/bg-sidebar-desktop.svg')",
            },
        },
    },
    plugins: [],
};
