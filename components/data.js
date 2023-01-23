import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/trip-view.png";
import benefitTwoImg from "../public/img/ai-demo.png";

const benefitOne = {
  title: "Create a personalized trip in a few clicks (literally)",
  desc: "You don't even need an account to get started. Just add some interests, and start creating trips",
  image: benefitOneImg,
  bullets: [
    // {
    //   title: "Understand your customers",
    //   desc: "Then explain the first point breifly in one or two lines.",
    //   icon: <EmojiHappyIcon />,
    // },
    // {
    //   title: "Improve acquisition",
    //   desc: "Here you can add the next benefit point.",
    //   icon: <ChartSquareBarIcon />,
    // },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorClickIcon />,
    // },
  ],
};

const benefitTwo = {
  title: "Leverages AI to Make Planning Easy",
  desc: "Kitbag leverage AI to add interesting activies around your main events",
  image: benefitTwoImg,
  bullets: [
    // {
    //   title: "Mobile Responsive Template",
    //   desc: "Nextly is designed as a mobile first responsive template.",
    //   icon: <DeviceMobileIcon />,
    // },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};

export { benefitOne, benefitTwo };
