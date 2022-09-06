import React from "react";
import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpg";
import four from "../img/four.jpg";
import five from "../img/five.jpg";
import six from "../img/six.jpg";
import seven from "../img/seven.jpg";
import eight from "../img/eight.jpg";
import nine from "../img/nine.jpg";

import el from "../img/el.jpg";
import twe from "../img/twe.jpg";
import thirt from "../img/thirt.jpg";
import fourt from "../img/fourt.jpg";
// import { FiSettings } from "react-icons/fi";
// import { FiBell } from "react-icons/fi";
// import { FiPlusCircle } from "react-icons/fi";
// import { FiSearch } from "react-icons/fi";
// import { FcLike } from "react-icons/fc";

const AllPhotos = () => {
  return (
    <>
      <div class="grid-container1">
        <div style={{ background: " #1E1E1E" }}>
          <div className="text-1" style={{ marginLeft: "-30px" }}>
            Today
          </div>

          <p
            className="text-2"
            style={{ marginLeft: "-40px", marginTop: "10px" }}
          >
            {" "}
            Friday,26 August 2022
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block"
            src={one}
            alt="First slide"
            style={{
              width: "159px",
              height: "199px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            seg_12399.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={two}
            alt="First slide"
            style={{
              width: "159px",
              height: "111px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
              marginTop: "45%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            New_house_... .jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={three}
            alt="First slide"
            style={{
              width: "159px",
              height: "168px",
              borderRadius: "10px",
              marginTop: "12%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            Barakpore valley.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={four}
            alt="First slide"
            style={{ width: "108px", height: "199px", borderRadius: "10px" }}
          />
          <p className="img-text" style={{ marginLeft: "20%" }}>
            Kitchen_sansudan.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={five}
            alt="First slide"
            style={{
              width: "159px",
              height: "95px",
              borderRadius: "10px",
              marginTop: "60%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            Bridge.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={six}
            alt="First slide"
            style={{
              width: "159px",
              height: "160px",
              borderRadius: "10px",
              marginTop: "25%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "20%" }}>
            Abstract_44533.jpg
          </p>
        </div>
      </div>

      <div class="grid-container2">
        <div style={{ background: " #1E1E1E" }}>
          <div
            className="text-1"
            style={{ marginLeft: "-30px", fontSize: "40px" }}
          >
            This Week
          </div>
          <p className="text-2" style={{ marginLeft: "-30px" }}>
            21 to 25 August, 2022
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={seven}
            alt="First slide"
            style={{
              width: "159px",
              height: "199px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            seg_12399.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={eight}
            alt="First slide"
            style={{
              width: "108px",
              height: "199px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            New_house_... .jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={twe}
            alt="First slide"
            style={{
              width: "159px",
              height: "95px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
              marginTop: "60%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "12%" }}>
            Barakpore valley.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={el}
            alt="First slide"
            style={{
              width: "159px",
              height: "111px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
              marginTop: "52%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "12%" }}>
            Kitchen_sansudan.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={twe}
            alt="First slide"
            style={{
              width: "159px",
              height: "168px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
              marginTop: "15%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "30%" }}>
            Bridge.jpg
          </p>
        </div>

        <div style={{ background: " #1E1E1E" }}>
          {" "}
          <img
            className="d-block w-100"
            src={nine}
            alt="First slide"
            style={{
              width: "159px",
              height: "199px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
              marginTop: "6%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "20%" }}>
            Abstract_44533.jpg
          </p>
        </div>
        <div style={{ background: " #1E1E1E" }}></div>
        <div style={{ background: " #1E1E1E" }}>
          <img
            className="d-block w-100"
            src={thirt}
            alt="First slide"
            style={{
              width: "159px",
              height: "199px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            seg_12399.jpg
          </p>
        </div>

        <div style={{ background: " #1E1E1E" }}>
          {" "}
          <img
            className="d-block w-100"
            src={fourt}
            alt="First slide"
            style={{
              width: "159px",
              height: "150px",
              left: "500px",
              top: "990px",
              borderRadius: "10px",
              marginTop: "20%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            New_house_... .jpg
          </p>
        </div>
      </div>
    </>
  );
};

export default AllPhotos;
