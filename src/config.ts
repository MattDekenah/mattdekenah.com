// Site-wide settings. Everything an editor might need to change lives here,
// apart from the CV content itself, which lives in src/content/ and is
// editable through Pages CMS.
export const SITE = {
  name: "Matthew Dekenah",
  firstName: "Matthew",
  lastName: "Dekenah",
  tagline: "Software Engineering Manager (formerly Test Engineer) and Politico",
  jobTitle: "Senior Engineering Manager",
  url: "https://mattdekenah.com",
  description:
    "Matthew Dekenah is a software engineering manager and former test engineer based in Cape Town, South Africa and a green, lefty, liberal politico.",
  keywords:
    "matthew, dekenah, software, engineer, engineering manager, manager, tester, test engineer, software testing, politics, green politics, edinburgh, scotland, cape town, south africa, qa, developer, automation",

  location: "Cape Town, South Africa",
  addressLocality: "Cape Town",
  addressCountry: "ZA",

  // Split so the template can assemble a mailto: link without ever putting the
  // full address in the markup as a single scrapeable string.
  emailUser: "m",
  emailDomain: "dekenah.com",

  cvPath: "/resources/CV_Matthew_Dekenah.pdf",
  profileImage: "/images/profile.jpg",
  ogImage: "/images/og-image.jpg",

  // Sidebar navigation — each entry is a section id on the home page.
  nav: [
    { id: "about", label: "About" },
    { id: "profile", label: "Profile" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "languages", label: "Languages" },
    { id: "awards", label: "Awards" },
  ],

  // Social links, grouped exactly as they appear under the hero.
  social: {
    work: [
      {
        href: "https://uk.linkedin.com/in/mattdekenah",
        title: "/in/MattDekenah",
        icon: "fa6-brands:linkedin",
        label: "LinkedIn",
      },
      {
        href: "https://testchili.mattdekenah.com",
        title: "Software Testing Blog",
        icon: "fa6-brands:wordpress",
        label: "Software testing blog",
      },
      {
        href: "https://github.com/MattDekenah",
        title: "github.com/MattDekenah",
        icon: "fa6-brands:github",
        label: "GitHub",
      },
    ],
    play: [
      {
        href: "https://threads.net/MattDekenah",
        title: "@MattDekenah",
        icon: "fa6-brands:threads",
        label: "Threads",
      },
      {
        href: "https://instagram.com/MattDekenah",
        title: "@MattDekenah",
        icon: "fa6-brands:instagram",
        label: "Instagram",
      },
      {
        href: "https://blog.mattdekenah.com",
        title: "Personal Blog",
        icon: "fa6-brands:wordpress",
        label: "Personal blog",
      },
      {
        href: "https://last.fm/user/mattdekenah",
        title: "Last.fm: mattdekenah",
        icon: "fa6-brands:lastfm",
        label: "Last.fm",
      },
    ],
  },

  // Web3Forms access key — create one free at https://web3forms.com using
  // m@dekenah.com, then paste it here. The form will not send until you do.
  web3formsKey: "",

  // The original site has no contact form — it links to a mailto: address.
  // Flip this to true to add a "Contact" section (and nav entry) backed by
  // Web3Forms. Set web3formsKey above first.
  showContact: false,
};

export const EMAIL = `${SITE.emailUser}@${SITE.emailDomain}`;
