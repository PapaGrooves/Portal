import Xray from "../assets/images/departments/1.jpg";
import Mri from "../assets/images/departments/2.jpg";
import Clinics from "../assets/images/departments/3.jpg";
import Wards from "../assets/images/departments/4.jpg";
import Play from "../assets/images/departments/5.jpg";
import Surgical from "../assets/images/departments/6.jpg";
import Cwing from "../assets/images/departments/7.jpeg";

import Map from "../assets/images/map.jpg"

const deps = [
    {
        id: 0,
        name: "Xray",
        description: "X-rays are special pictures of the inside of your body. A doctor will decide when you need an X-ray and what body part needs to be X-rayed.",
        image: `${Xray}`,
        what: "When a doctor needs to see something inside of your body, they might use an X-ray exam to take pictures of the inside of you from the outside of you. Don’t worry, it doesn’t hurt a bit and it’ll be done before you know it! The picture of your body is pretty cool, too. Solid things like your bones will show up white while squishy materials like your muscles will look gray.  The air in your lungs will look black.",
        why: "Sometimes doctors need to look at your bones, teeth, lungs, or stomach to find what hurts and why it hurts so they can help you feel better. Doctors might also need you to have an X-ray exam so that they can check up on you after you’ve already been treated.",
    },
    {
        id: 1,
        name: "MRI",
        description: "MRI is a way of looking inside your body without using X-rays. MRI is a very safe",
        image: `${Mri}`,
        what: "An MRI (magnetic resonance imaging) is a safe and painless test that uses magnets and radio waves to make detailed pictures of the body's organs, muscles, soft tissues, and structures. Unlike a CAT scan, an MRI doesn’t use radiation. MRIs are done in hospitals and at radiology centers.",
        why: "MRIs highlight contrasts in soft tissue, which helps doctors pinpoint problems with joints, cartilage, ligaments, and tendons. MRI also can help them identify infections and inflammatory conditions, and rule out problems such as tumors.",
    },
    {
        id: 2,
        name: "Clinics",
        description: "Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services.",
        image: `${Clinics}`,
        what: "A clinic (or outpatient clinic or ambulatory care clinic) is a healthcare facility that is primarily focused on the care of outpatients. Clinics can be privately operated or publicly managed and funded. They typically cover the primary healthcare needs of populations in local communities, in contrast to larger hospitals which offer specialized treatments and admit inpatients for overnight.",
        why: "Clinics are smaller than hospitals but offer a broader range of services than a doctor’s office might. You can visit a clinic for regular preventative care or if you have a condition that isn’t an emergency.",
    },
    {
        id: 3,
        name: "Wards",
        description: "The hospital is made up of many different wards for all types of situations, it helps the patients ge to where they need to go",
        image: `${Wards}`,
        what: "A large room or other area in a medical facility where patients experiencing similar medical conditions or receiving similar treatment are housed.",
        why: "Wards help keep patients with similar conditions grouped together, this prevents patiens from catching other diseases.",
    },
    {
        id: 4,
        name: "Play Areas",
        description: "Making hospital a more fun place to be in by improving the experience of both the child and their family.",
        image: `${Play}`,
        what: "The hospital playroom is a key resource for children and families to use away from clinical procedures. Play provides many benefits for children and young people while in, or visiting, hospital.",
        why: "Play areas help promote growth and development by providing children with a choice of a wide range of toys, games and creative activities. Choice is essential for restoring a sense of control in an otherwise clinical environment. Helps lessen anxiety",
    },
    {
        id: 5,
        name: "Surgical Theatres",
        description: "The operating theatre, sometimes called the OR, is where a surgeon works on or inside the body to fix something that is wrong.",
        image: `${Surgical}`,
        what: "An surgical theatre (also known as an operating theatre, operating room (OR), operating suite, or operation suite) is a facility within a hospital where surgical operations are carried out.",
        why: "Surgical theatres serve an educational purpose. Medical students, staff and other permitted persons can watch as the surgery takes place and learn about the operartions taking place.",
    },
    {
        id: 6,
        name: "Children's Wing Map",
        description: "A map showing where the childrens wing is located.",
        image: `${Cwing}`,
        map: `${Map}`,
    },
]
export default deps