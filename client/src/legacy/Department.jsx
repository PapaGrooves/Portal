import React from "react";
import departmentData from "./departmentData";
import { useState } from "react";
// FIXME currently not displaying anything once on this page 
const Department = (props) => {
    const {match} = props;
    const {params} = match;
    const {depID} = params;
    const [depsData, setDepsData] = useState(departmentData[`${depID}`])

    const generateDepJSX = () => {
        const { name, id, img } = departmentData;
        const image = `./images/departments/${id}.jpg;`;
    }
    return (
        <> {generateDepJSX()} </>
    )
};

// import { useParams } from "react-router-dom";

// const Department = () => {
//     const { id } = useParams();
//     return (
//         <>
//     <h1>Dep { id }</h1>
//     </>
//     );
// }
// export default Department