import htmlImg from "./assets/images/html-img.png";
import cssImg from "./assets/images/css-img.png";
import jsImg from "./assets/images/js-img.png";
import bootstrapImg from "./assets/images/bootstrap-img.png";
import reactImg from "./assets/images/react-img.png";
import reduxImg from "./assets/images/redux-img.png";
import tailwindImg from "./assets/images/tailwind-img.png";
import nextImg from "./assets/images/next-img.jpg";
import jsonImg from "./assets/images/json-img.jpeg";
import tsImg from "./assets/images/ts-img.png";
import expenseImg from "./assets/images/expense_tracker.png";
import jewlImg from "./assets//images/jewellery_store.png";
import foodImg from "./assets//images/food_donation.png";
import tastyImg from "./assets//images/tasty_eats.png";

export const skillsData = [
    { id: 0, skill: "HTML", img: htmlImg, height: "80", width: "80" },
    { id: 1, skill: "CSS", img: cssImg, height: "70", width: "70" },
    { id: 2, skill: "JavaScript", img: jsImg, height: "80", width: "80" },
    { id: 3, skill: "Bootstrap", img: bootstrapImg, height: "95", width: "95" },
    { id: 4, skill: "React", img: reactImg, height: "88", width: "88" },
    { id: 5, skill: "Redux", img: reduxImg, height: "75", width: "75" },
    { id: 6, skill: "TypeScript", img: tsImg, height: "75", width: "75" },
    { id: 7, skill: "Tailwind CSS", img: tailwindImg, height: "75", width: "75" },
    { id: 8, skill: "Next JS", img: nextImg, height: "75", width: "75" },
];

export const experienceData = [
    {
        id: 0,
        company: "Dot ai",
        year: "June 2024 - Present",
        role: "Frontend Developer",
        description:
            "Designing, optimizing, and maintaining a tracking web application. Integrating RESTful APIs and WebSockets for real-time data updates. Developing a responsive, pixel-perfect, and SEO-friendly interface for a seamless user experience.",
    },
    {
        id: 1,
        company: "Elena Geo Systems",
        year: "August 2023 - November 2023",
        role: "Jr. Software Engineer",
        description: "Developed and maintained web applications with React.js, integrating React Leaflet for real-time buoy tracking and Chart.js for status visualization. Implemented service workers for low battery notifications and ensured responsive, cross-device compatibility."
    },
    {
        id: 2,
        company: "Infynow Software Solutions LLP",
        year: "November 2021 - November 2022",
        role: "Associate Software Engineer",
        description: "Worked on client and company projects, creating visually appealing and responsive UIs with React.js, JavaScript, and Bootstrap. Optimized web application performance, fixed bugs, and performed code reviews to enhance efficiency."
    },
    {
        id: 3,
        company: "Web Developer",
        year: "November 2021 - November 2022",
        role: "Web Developer (Internship)",
        description: "Assisted in frontend development, manual testing, and SEO. Designed social media graphics and marketing materials using Canva. Ensured cross-browser compatibility and implemented responsive design for an optimized user experience."
    },
];

export const projectsData = [
    {
        id: 0,
        title: "Expense Tracker",
        img: expenseImg,
        tools: "HTML, Tailwind CSS, React JS, ContetAPI, SpeechlyAPI",
        description:
            "Built an Expense Tracker that helps to keep track of daily expenses.",
        sourceLink: "https://github.com/KaveriPatil03/expense-tracker.git",
        liveLink: "https://kaveripatil03.github.io/expense-tracker/",
    },
    {
        id: 1,
        title: "Tasty Eats",
        img: tastyImg,
        tools: "HTML, React, Redux, Tailwind CSS",
        description:
            "Developed a responsive food ordering application, enabling users to browse menus, add items to the cart, and place orders seamlessly.",
        sourceLink: "https://github.com/KaveriPatil03/tasty-eats.git",
        liveLink: "https://kaveripatil03.github.io/tasty-eats/",
    },
    {
        id: 2,
        title: "Shopping Mart",
        img: jewlImg,
        tools: "HTML, Bootstrap, React JS, Redux",
        description:
            "Developed a dynamic e-commerce application, enabling seamless shopping cart management, product browsing, and a smooth user experience.",
        sourceLink: "https://github.com/KaveriPatil03/shopping-mart.git",
        liveLink: "https://kaveripatil03.github.io/shopping-mart/",
    },
    {
        id: 3,
        title: "Food Donation",
        img: foodImg,
        tools: "HTML, Bootstrap, React JS",
        description: "Built a simple static react project Food Donation.",
        sourceLink: "https://github.com/KaveriPatil03/food-donation.git",
        liveLink: "https://kaveripatil03.github.io/food-donation/",
    },
];

export const educationData = [
    {
        id: 0,
        year: "2017 - 2020",
        degree: "Bachelor of Computer Applications",
        college: "Rani Channamma University, Belagavi",
        percentage: "81.25%",
    },
    {
        id: 1,
        year: "2015 - 2017",
        degree: "PUC",
        college: "Karnataka Department of Pre-University Education",
        percentage: "62.5%",
    },
    {
        id: 2,
        year: "2014 - 2015",
        degree: "SSLC",
        college: "Karnataka Secondary Education Examination Board",
        percentage: "80.64%",
    },
];
