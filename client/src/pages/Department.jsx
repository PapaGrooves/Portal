import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../components/Navigation";
import deps from "../components/Depdata";

const Department = () => {
  // using id parameter to select data used from objects
  const { id } = useParams();

    if (id <= 5)
  {
    return (
    
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <div className="big_card">
      <div className="top_row">
        <div className="image">
          <img src={deps[id].image} />
        </div>

        <div className="title">
          <h1>{deps[id].name}</h1>
        </div>
      </div>


      <div className="description">
        <h3>What is it?</h3>
        <p>{deps[id].what}</p>
        <h3>Why?</h3>
        <p>{deps[id].why}</p>
      </div>
    </div>
    </>)
  }

  if (id == 6)
  {
    return (
      <>
        <ResponsiveAppBar></ResponsiveAppBar>
    <div className="big_card">
      <div className="top_row">
        <div className="image">
          <img src={deps[id].image} />
        </div>

        <div className="title">
          <h1>{deps[id].name}</h1>
        </div>
      </div>


      <div className="description">
        <div className="map">
          <img src={deps[id].map} alt="" />
        </div>
      </div>
    </div>
      </>
    );
  }
 


};
export default Department;
