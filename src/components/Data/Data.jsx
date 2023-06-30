
import { LuMail } from "react-icons/lu";
import { BsFilterSquare } from "react-icons/bs";
import { PiPencilSimpleLineThin, PiSquaresFourLight, PiCalendarBlank } from "react-icons/pi";
import { BiLineChart } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";



export const SidebarData = [
    {
        icon: PiCalendarBlank,
        heading: "Calender"
    },
    {
        icon: LuMail,
        heading: "Mails",
    },
    {
        icon: PiSquaresFourLight,
        heading: "Widget"
    },
    {
        icon: BsFilterSquare,
        heading: "Pages"
    },
    {
        icon: PiPencilSimpleLineThin,
        heading: "Write Post"
    }, {
        icon: BiLineChart,
        heading: "Charts"
    },

];

export const AccountData = [
    {
        icon: SlSettings,
        heading: "Setting"
    },
    {
        icon: IoIosLogOut,
        heading: "Logout",
    },
]

export const InboxData = [
    {
        photo: 'https://i.ibb.co/r72CNCy/pexels-pixabay-220453.jpg',
        name: "Dany Gress",
        text: "Hey! there, I'm available",
        time: "14:20PM",
    },
    {
        photo: 'https://i.ibb.co/r72CNCy/pexels-pixabay-220453.jpg',
        name: "Albert",
        text: "This is a good theme.",
        time: "14:20PM",
    },
];


