import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  history,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  forklift,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  uofm,
  tsm,
  powerding,
  wms,
  photos,
  twins,
  wms2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web / Mobile Development",
    icon: web,
  },
  {
    title: "Cloud Developer",
    icon: backend,
  },
  {
    title: "Linux Administration",
    icon: mobile,
  },
  {
    title: "Radio Producer & Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Past to Present",
    company_name: "how we got here",
    icon: history,
    iconBg: "#E6DEDD",
    date: "Birth - Jan 2014",
    points: [
      "Lifelong tech geek and tinkerer. Building computers and websites since childhood. ",
      "Novice programming with QBasic and Pascal, and Unix administration/shell scripting. ",
      "Self taught web development with HTML, CSS, and JavaScript. ",
    ],
  },
  {
    title: "Director of Production",
    company_name: "Townsquare Media",
    icon: tsm,
    iconBg: "#383E56",
    date: "Jan 2014 - Jan 2017",
    points: [
      "Developed automated radio show production application with Java, used daily on 100+ radio stations.",
      "Collaborate with Director of Programming to produce and implement new radio show concepts.",
      "Work with sales and marketing teams to develop and execute on-air advertising campaigns.",
      "Facilitate and manage national radio show syndication and distribution.",
      "Facilitate and manage national cash giveaway contests with 100,000+ participants.",
    ],
  },
  {
    title: "Production Director",
    company_name: "Go Radio / Minnesota Twins",
    icon: twins,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Jan 2020",
    points: [
      "Write and produce radio commercials and creative imaging for local and national clients.",
      "Maintain broadcast servers and content databases, update station website and social media.",
      "Technical producer for Minnesota Twins Player's Playlist weekly radio show and podcast.",
      "On-field photographer for Minnesota Twins home games, and other special events.",
      "Worked daily with notable hip-hop creators DJ Bonics (Wiz Khalifa), Sophia Eris (Lizzo), and Peter Parker (Machine Gun Kelly).",
    ],
  },
  {
    title: "Bootcamp Graduation",
    company_name: "University of Minnesota",
    icon: uofm,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Completed University of Minnesota's Full-Slack Coding Bootcamp where I was introduced to the MERN stack paradigm. Continuing self teaching and introducing myself to new technologies.",
    ],
  },
  {
    title: "Forklift Operator | Jr. Developer",
    company_name: "Current",
    icon: forklift,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Present",
    points: [
      "Primary focus is now on warehouse, production and logistic-based applications.",
      "Deployed multiple warehouse tools used in daily production, including a pallet tag/barcode generator, labratory sample tracking, and driver check-in mobile app.",
      "Built a complete, open-source warehouse management system (WMS) using Next.js, React Native, and Supabase.",
      "Extensive study in Next.js, React Native and Supabase",
      "Built an interactive, live stream donation platform with React, MongoDB, and Google Pay",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Troy proved me wrong.",
    name: "George Gimarc",
    designation: "CEO",
    company: "Today's Comedy",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Troy does.",
    name: "Dan Schlissel",
    designation: "Owner",
    company: "Stand Up! Records",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Troy optimized our website, our traffic and SEO increased by 50%. We can't thank him enough.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Open WMS",
    description:
      "Warehouse management system built with Next.js, React Native, Clerk, and Supabase. Includes inventory/shipment management, mobile app, and more features.",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: wms2,
    source_code_link: "https://github.com/infiniteoo/wms",
    demo_link: "https://greatblue.netlify.app",
  },
  {
    name: "Photography Portfolio",
    description:
      "My personal photography portfolio collected from my years of working with the Minnesota Twins, and Go Radio.  Includes on-field action, concerts, and other special events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: photos,
    source_code_link: "https://github.com/infiniteoo/photo_portfolio",
    demo_link: "https://troypics.netlify.app",
  },
  {
    name: "PalletTest",
    description:
      "A warehouse to labratory sample request and loadout approval communication tool, which displays real-time updates on tests being conducted by the labratory.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wms,
    source_code_link: "https://github.com/infiniteoo/lab_checks",
    demo_link: "https://pallettest.netlify.app",
  },
  {
    name: "PowerDing",
    description:
      "An interactive, live stream donation platform built with React, MongoDB, and Google Pay.  Includes authentication, media playback, donation payments, and more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: powerding,
    source_code_link: "https://github.com/infiniteoo/powerding",
    demo_link: "https://github.com/infiniteoo/powerding",
  },
];

export { services, technologies, experiences, testimonials, projects };
