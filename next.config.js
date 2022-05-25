module.exports = {
  images: { domains: ["images.ctfassets.net"] },
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
    ];

    return githubProjects.map((project) => ({
      source: `/${project}`,
      destination: `${githubProjectURL}${project}`,
      permanent: false,
    }));
  },
};
