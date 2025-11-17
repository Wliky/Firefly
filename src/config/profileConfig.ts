import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
  avatar: "/docs/images/head/head.jpg",
  name: "Wliky",
  bio: "Hello, I'm Wliky.",
  links: [
      //个人网站
      {
          name: "Website",
          icon: "fa6-solid:globe",
          url: "https://005201.xyz",
      },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/Wliky",
    },
  ],
};
