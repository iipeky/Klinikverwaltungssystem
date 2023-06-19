import person from "./images/personIcon.png";
import home from "./images/homeIcon.png";
import termin from "./images/terminIcon.png";
import list from "./images/listIcon.png";
import peopleList from "./images/peopleList.png";
export const MenuData = [
    {
        title: "Home",
        link: "/home",
        icon: <img src={home} width={30} height={30} alt="" />,
    },
    {
        title: "Patiente hinzufügen",
        link: "/Patiente/neuerPatient",
        icon: <img src={person} width={30} height={30} alt="" />,
    },
    {
        title: "Patiente listen",
        link: "/Patiente/allePatiente",
        icon: <img src={peopleList} width={30} height={30} alt="" />,
    },
    {
        title: "Termine erstellen",
        link: "/Termine/neuerTermin",
        icon: <img src={termin} width={30} height={30} alt="" />,
    },
    {
        title: "Termine listen",
        link: "/Termine/alleTermine",
        icon: <img src={list} width={30} height={30} alt="" />,
    },
];
