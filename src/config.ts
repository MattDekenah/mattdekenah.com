// Site-wide settings. Everything an editor might need to change lives here,
// apart from the CV content itself, which lives in src/content/ and is
// editable through Pages CMS.
export const SITE = {
  name: "Matthew Dekenah",
  firstName: "Matthew",
  lastName: "Dekenah",
  // The descriptor after the name in <title> and og:title. Kept well under 60
  // characters so Google shows it whole. Held separately from jobTitle below
  // so the page title can be worded independently of the structured data.
  tagline: "Senior Engineering Manager",
  jobTitle: "Senior Engineering Manager",
  employer: "ClearScore",
  employerUrl: "https://www.clearscore.com",
  url: "https://mattdekenah.com",
  description:
    "Matthew Dekenah is a software engineering manager and former test engineer based in Cape Town, South Africa and a green, lefty, liberal politico.",

  // Used for <html lang> and og:locale — the copy is British English.
  lang: "en-GB",
  locale: "en_GB",
  username: "MattDekenah",

  location: "Cape Town, South Africa",
  addressLocality: "Cape Town",
  addressCountry: "ZA",

  // Person.knowsAbout in the structured data. Keep this to things the CV
  // actually evidences — search engines treat it as a claim about expertise.
  knowsAbout: [
    "Software engineering management",
    "Software testing",
    "Test automation",
    "Quality engineering",
    "Agile software development",
    "Engineering leadership",
  ],

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
        href: "https://github.com/MattDekenah",
        title: "github.com/MattDekenah",
        icon: "fa6-brands:github",
        label: "GitHub",
      },
      {
        href: "https://testchili.mattdekenah.com",
        title: "Software Testing Blog",
        icon: "fa6-brands:wordpress",
        label: "Software testing blog",
      },
    ],
    play: [
      {
        href: "https://instagram.com/MattDekenah",
        title: "@MattDekenah",
        icon: "fa6-brands:instagram",
        label: "Instagram",
      },
      {
        href: "https://last.fm/user/mattdekenah",
        title: "Last.fm: mattdekenah",
        icon: "fa6-brands:lastfm",
        label: "Last.fm",
      },
      {
        href: "https://blog.mattdekenah.com",
        title: "Personal Blog",
        icon: "fa6-brands:wordpress",
        label: "Personal blog",
      },
      {
        href: "https://threads.net/MattDekenah",
        title: "@MattDekenah",
        icon: "fa6-brands:threads",
        label: "Threads",
      },
      {
        href: "https://bsky.app/profile/mattdekenah.com",
        title: "@mattdekenah.com",
        icon: "fa6-brands:bluesky",
        label: "Bluesky",
      },
    ],
  },

  // Web3Forms access key — create one free at https://web3forms.com using
  // m@dekenah.com, then paste it here. The form will not send until you do.
  web3formsKey: "d55bac3f-6223-48e7-92cc-13a694c713f0",

  // The original site has no contact form — it links to a mailto: address.
  // Flip this to true to add a "Contact" section (and nav entry) backed by
  // Web3Forms. Set web3formsKey above first.
  showContact: true,
};

export const EMAIL = `${SITE.emailUser}@${SITE.emailDomain}`;
