import {
    RxDashboard,
    RxFile,
} from 'react-icons/rx';

import {
    FiUsers,
} from 'react-icons/fi';

import {
    AiOutlineFileSearch,
} from 'react-icons/ai';

import {
    MdTerminal,
} from 'react-icons/md';

export const SidebarData = [
    {
        icon: RxDashboard,
        heading: "Dashbaord",
    },

    {
        icon: RxFile,
        heading: "Files",
    },

    {
        icon: FiUsers,
        heading: "Users",
    },

    {
        icon: AiOutlineFileSearch,
        heading: "File_history",
    },

    {
        icon: MdTerminal,
        heading: "Ocr",
    }
]

export const CardsData = [
    {
        title: "Files Uploaded",
        color: {
            backGround: "var(--color-white)",
            boxShadow: "0px 10px 20px 0px #f6f6f9",
            borderRadius: "var(--card-border-radius)",
        },
        barValue:70,
        value: "25,970",
        png: MdTerminal,
    },

    {
        title: "Total Users",
        color: {
            backGround: "var(--color-white)",
            boxShadow: "0px 10px 20px 0px #f6f6f9",
            borderRadius: "var(--card-border-radius)",
        },
        barValue:40,
        value: "5,000",
        png: MdTerminal,
    },

    {
        title: "Accuracy",
        color: {
            backGround: "var(--color-white)",
            boxShadow: "0px 10px 20px 0px #f6f6f9",
            borderRadius: "var(--card-border-radius)",
        },
        barValue:20,
        value: "4,150",
        png: MdTerminal,
    },
]