import { SITE } from "../config";

/**
 * Builds the `Person` JSON-LD for a page.
 *
 * The home page passes in the extras, derived from the CV content itself, so
 * the structured data stays true as the content is edited through the CMS
 * rather than drifting from a second hand-maintained copy. Other pages get
 * the base object.
 *
 * Deliberately absent: `email`. The visible address is entity-obfuscated to
 * slow down harvesters, and repeating it as plain text in JSON-LD would undo
 * that for no search benefit — Google does not rank on it.
 */

interface PersonExtras {
  alumniOf?: string[];
  knowsLanguage?: string[];
  knowsAbout?: readonly string[];
}

export function personSchema(extras: PersonExtras = {}) {
  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    givenName: SITE.firstName,
    familyName: SITE.lastName,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    jobTitle: SITE.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: SITE.employer,
      url: SITE.employerUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.addressLocality,
      addressCountry: SITE.addressCountry,
    },
    sameAs: [...SITE.social.work, ...SITE.social.play].map((link) => link.href),
  };

  if (extras.alumniOf?.length) {
    person.alumniOf = extras.alumniOf.map((name) => ({
      "@type": "EducationalOrganization",
      name,
    }));
  }

  if (extras.knowsLanguage?.length) {
    person.knowsLanguage = extras.knowsLanguage.map((name) => ({
      "@type": "Language",
      name,
    }));
  }

  if (extras.knowsAbout?.length) {
    person.knowsAbout = [...extras.knowsAbout];
  }

  return person;
}
