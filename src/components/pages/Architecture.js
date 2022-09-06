import React from "react";
import two from "../img/two.jpg";
import four from "../img/four.jpg";
import five from "../img/five.jpg";
import seven from "../img/seven.jpg";
import eight from "../img/eight.jpg";
import fourt from "../img/fourt.jpg";

const Architecture = () => {
  return (
    <>
      <div class="grid-container1" >
        <div style={{background:" #1E1E1E"}}>
          <div className="text-1" style={{marginLeft:"-30px"}} >Today</div>

          <p className="text-2" style={{marginLeft:"-40px", marginTop:"10px"}}> Friday,26 August 2022</p>
        </div>
        <div style={{background:" #1E1E1E"}}>
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
        </div >
        <div style={{background:" #1E1E1E"}}>
          <img
            className="d-block w-100"
            src={four}
            alt="First slide"
            style={{ width: "108px", height: "199px", borderRadius: "10px" ,marginTop:"10%" }}
          />
          <p className="img-text" style={{ marginLeft: "20%" }}>
            Kitchen_sansudan.jpg
          </p>
        </div>
        <div style={{background:" #1E1E1E"}}>
          <img
            className="d-block w-100"
            src={five}
            alt="First slide"
            style={{
              width: "159px",
              height: "95px",
              borderRadius: "10px",
              marginTop: "52%",
            }}
          />
          <p className="img-text" style={{ marginLeft: "25%" }}>
            Bridge.jpg
          </p>
        </div>
      </div>

      <div class="grid-container2">
        <div style={{background:" #1E1E1E"}}>
          <div className="text-1" style={{marginLeft:"-30px",
    fontSize: "40px"}}>This Week</div>
          <p className="text-2" style={{marginLeft:"-30px"}}>21 to 25 August, 2022</p>
        </div>
        <div style={{background:" #1E1E1E"}}>
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
        <div style={{background:" #1E1E1E"}}>
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
        
        
        <div style={{background:" #1E1E1E"}}>
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

export default Architecture;
