import Xray from "../assets/images/departments/1.jpg";
import Mri from "../assets/images/departments/2.jpg";
import Clinics from "../assets/images/departments/3.jpg";
import Wards from "../assets/images/departments/4.jpg";
import Play from "../assets/images/departments/5.jpg";
import Surgical from "../assets/images/departments/6.jpg";
import Cwing from "../assets/images/departments/7.jpeg";

const deps = [
    {
        id: 0,
        name: "Xray",
        description: "X-rays are special pictures of the inside of your body. A doctor will decide when you need an X-ray and what body part needs to be X-rayed.",
        image: `${Xray}`,
    },
    {
        id: 1,
        name: "MRI",
        description: "MRI is a way of looking inside your body without using X-rays. MRI is a very safe",
        image: `${Mri}`,
    },
    {
        id: 2,
        name: "Clinics",
        description: "Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services.",
        image: `${Clinics}`,
    },
    {
        id: 3,
        name: "Wards",
        description: "The hospital is made up of many different wards for all types of situations, it helps the patients ge to where they need to go",
        image: `${Wards}`,
    },
    {
        id: 4,
        name: "Play Areas",
        description: "Making hospital a more fun place to be in by improving the experience of both the child and their family.",
        image: `${Play}`,
    },
    {
        id: 5,
        name: "Surgical Theatres",
        description: "The operating theatre, sometimes called the OR, is where a surgeon works on or inside the body to fix something that is wrong.",
        image: `${Surgical}`,
    },
    {
        id: 6,
        name: "Children's Wing Map",
        description: "A map shwoing where the childrens wing is located and what it has to offer.",
        image: `${Cwing}`,
    },
]
export default deps