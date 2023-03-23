import { useParams } from "react-router-dom";
// import deps from "../components/Depdata";
import ResponsiveAppBar from "../components/Navigation";

const Department = () => {
  const { id } = useParams();


  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="page_heading">
      <h1>{id} Department</h1>
      </div>
    </>
  );
};
export default Department;
