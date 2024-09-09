import "./imagecontainer.css";
import img_1 from "../../assets/images/pexels-d-ng-nhan-324384-1529881.jpg";
import img_2 from "../../assets/images/pexels-eberhardgross-1421903.jpg";
import img_3 from "../../assets/images/pexels-francesco-ungaro-1671325.jpg";
import img_4 from "../../assets/images/pexels-koolshooters-6495322.jpg";
import img_5 from "../../assets/images/pexels-markusspiske-298821.jpg";
import img_6 from "../../assets/images/pexels-nxbid0-26125144.jpg";
import img_7 from "../../assets/images/pexels-pixabay-414144.jpg";
import img_8 from "../../assets/images/pexels-sebastians-1276518.jpg";

const Imagecontainer = () => {
  return (
    <div className="main">
      <div className="Imagecontainer">
        <div className="img">
          <img src={img_1} alt="" />
        </div>
        <div className="img">
          <img src={img_2} alt="" />
        </div>
        <div className="img">
          <img src={img_3} alt="" />
        </div>
        <div className="img">
          <img src={img_4} alt="" />
        </div>
        <div className="img">
          <img src={img_5} alt="" />
        </div>
        <div className="img">
          <img src={img_6} alt="" />
        </div>
        <div className="img">
          <img src={img_7} alt="" />
        </div>
        <div className="img">
          <img src={img_8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Imagecontainer;
