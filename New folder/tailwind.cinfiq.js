tailwind.config = {
  theme: {
    extend: {
      boxShadow: {
        full: "0px 0px 20px rgba(0, 0, 0, 0)",
      },
      backgroundImage: {
        "hero-banner": "url(assets/image/png/bg-top-banner.png)",
        "hero-banner-repairs": "url(assets/image/png/hero-banner-repairs.png)",
        "repair-service": "url(assets/image/png/top-repair-services1.png)",
        "shipping-banner": "url(assets/image/png/shipping-banner-bg.WEBP)",
        "contact-banner": "url(assets/image/png/contact-banner.WEBP)",
        "about-banner": "url(assets/image/png/about-banner-top.WEBP)",
        "lifetime-warranty-banner":
          "url(assets/image/png/lifetime-warranty-banner.avif)",
        "terms-condition-banner":
          "url(assets/image/png/terms-condition-banner.WEBP)",
        "privacy-policy-banner":
          "url(assets/image/png/privacy-policy-banner.jfif)",
        "return-policy-banner":
          "url(assets/image/png/return-policy-banner.webp)",
        "custom-design-banner":
          "url(assets/image/png/custom-design-banner.jpg)",
        "design-form-banner": "url(assets/image/png/design-form-banner.webp)",
      },
      backgroundSize: {
        fillups: "100% 100%",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
    fontSize: {
      xsm: "12px !important",
      sm: "14px !important",
      md: "18px !important",
      lg: "24px !important",
      xl: "32px !important",
      xxl: "42px !important",
      rare: "74px !important",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      larger: "1680px",
      // long: { raw: "(max-width: 768px),(max-height: 840px)" },
    },
    fontFamily: {
      inter: "Inter",
      lato: "Lato",
    },
    container: {
      center: true,
      padding: "0.75rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1326px",
      },
    },
  },
};
