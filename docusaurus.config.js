// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const gitRepoBaseUrl =
  "https://github.com/OfferZen-Community/developer-mentoring";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Developer Mentoring Guide",
  tagline: "Helping devs help devs",
  url: "https://www.developermentoring.guide",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "offerzen", // Usually your GitHub org/user name.
  projectName: "developer-mentoring-guide", // Usually your repo name.

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-TZVBNJD", // GTM Container ID
      },
    ],
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      {
        quality: 70,
        max: 1200,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${gitRepoBaseUrl}/blob/main/`,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${gitRepoBaseUrl}/blob/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Dinocorn",
          src: "img/dinocorn.png",
          srcDark: "img/dinocorn_white.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction/welcome",
            position: "left",
            label: "The Ultimate Developer Mentoring Guide",
          },
          {
            href: gitRepoBaseUrl,
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Get involved",
            items: [
              {
                label: "Register as a mentor",
                to: "/",
              },
              {
                label: "Find a mentor",
                to: "/",
              },
              {
                label: "Discuss on Slack",
                to: "https://zatech.slack.com/archives/C1RAQ4G5U",
              }
            ],
          },
          {
            title: "OfferZen Links",
            items: [
              {
                label: "OfferZen Community",
                href: "https://www.offerzen.com/community",
              },
              {
                label: "Blog",
                href: "https://www.offerzen.com/blog",
              },
              {
                label: "Find a Software Developer Job",
                href: "https://www.offerzen.com/candidate/signup",
              }
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "Contact us",
                href: "mailto:community@offerzen.com",
              },
              {
                label: "GitHub",
                href: gitRepoBaseUrl,
              },
              {
                html: '<iframe src="https://ghbtns.com/github-btn.html?user=OfferZen-Community&repo=developer-mentoring&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
              },
            ],
          },
        ],
        copyright: `Made with ♥ for devs by devs. Initiated and supported by OfferZen`,
        logo: {
          alt: 'OfferZen Logo',
          src: 'img/logo_white.png',
          href: 'https://www.offerzen.com',
          height: 25,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
