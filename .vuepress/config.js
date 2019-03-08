module.exports = {
  title: "Sbanken bachelor blog",
  base: "/bachelor-blog/",
  description: "blogg om gjennomføringen av bacheloren",
  themeConfig: {
    nav: [
      { text: "Hjem", link: "/" },
      { text: "GitHub", link: "https://github.com/181221/bachelor-blog" },
      { text: "Sbanken", link: "https://sbanken.no/" }
    ],
    sidebar: {
      "/": ["/uke-10/"]
    },
    lastUpdated: "Sist oppdatert",
    serviceWorker: {
      updatePopup: {
        message: "Nytt innhold tilgjengelig.",
        buttonText: "Oppdater"
      }
    }
  }
};
