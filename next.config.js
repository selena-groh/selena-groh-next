module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    const githubProjectURL = "https://selena-groh.github.io/";

    const githubProjects = [
      "wordle",
      "guess-who-anne",
      "guess-who-stardew",
      "spelling-bee",
      "dadlands",
      "pokemon",
      "gender-in-shakespeare",
      "hierarchy-linking",
      "drought-map",
      "comp20-sgroh",
      "bookshelf-css",
      "bookshelf-art",
    ];

    return [
      ...githubProjects.map((project) => ({
        source: `/${project}`,
        destination: `${githubProjectURL}${project}`,
        permanent: false,
      })),
      {
        source: `/happy-birthday-colin`,
        destination: `${githubProjectURL}bookshelf-art`,
        permanent: false,
      },
    ];
  },
};
