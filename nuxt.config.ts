// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: "%s | " + "Bell Web Agency",
      title: "Bell Web Agency" || "",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "At Bell Web Agency, our web design and digital marketings strategies are created to help drive revenue, leads, and sales for your unique brand. Call Today! ",
        },

        { name: "format-detection", content: "telephone=no" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "Bell Web Agency",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://bellwebagency.com",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Bell Web Agency",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "At Bell Web Agency, our web design and digital marketings strategies are created to help drive revenue, leads, and sales for your unique brand. Call Today! ",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/bwa-logo.jpg",
        },
        {
          hid: "facebook-domain-verification",
          name: "facebook-domain-verification",
          content: "pncnbproypfjm1sem4r5vd93vgvq13",
        },

        // Open Graph
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Bell Web Agency",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://bellwebagency.com",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Bell Web Agency",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "At Bell Web Agency, our Mission is to provide the best digital tools to help assist our clients meet their goals and needs.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/bwa-logo.jpg",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "/bwa-logo.jpg",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Bell Web Agency",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-svgo",
  ],

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/bwa/image/upload/bellwebagency",
    },
  },
  css: [
    "@/assets/scss/global.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
