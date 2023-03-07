import React from "react";

const Department = (props) => {
    const {match} = props;
    const {params} = match;
    const {depID} = params;

    return <div>{`this si the page for #${depID}`}</div>
};
export default Department