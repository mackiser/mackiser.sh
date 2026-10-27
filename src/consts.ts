import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "mackiser.sh",
  DESCRIPTION: "mackiser.sh is a personal website and blog built with Astro.",
  EMAIL: "mkiser96@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

// Seeds the homepage blobatar and the favicon; changing it changes both
export const AVATAR_SEED = "sh.resikcam";

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "mackiser.sh is a personal website and blog built with Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/mackiser",
  },
  {
    NAME: "Letterboxd",
    HREF: "https://letterboxd.com/mackiser",
  },
];
