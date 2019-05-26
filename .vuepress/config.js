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
      "/": ["/uke-4-10/","/uke-10/","/uke-11/","/uke-12/","/uke-13/","/uke-14/","/uke-15/","/uke-16/","/uke-17/","/uke-18/","/uke-20/","/uke-21/"]
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
