import React, { useEffect, useState } from "react";
import "./Qualifications.css";
import imgurl1 from "./Photos/c.png";
import imgurl2 from "./Photos/c++.png";
import imgurl3 from "./Photos/python.png";
import imgurl4 from "./Photos/java.png";
import imgurl5 from "./Photos/html5.png";
import imgurl6 from "./Photos/css.png";
import imgurl7 from "./Photos/js.png";
import imgurl8 from "./Photos/react.png";
import imgurl9 from "./Photos/sql.png";
import imgurl10 from "./Photos/gehujpg.jpg";
import imgurl11 from "./Photos/school.jfif";

function Qualifications() {
  const redirectToURL = () => {
    window.open(
      "https://drive.google.com/file/d/10di5k0RL_0zArzFils1ZJ1G71bmi5YFK/view?usp=drivesdk",
      "blank"
    );
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 601px)");

    const handleDeviceChange = (e) => {
      setIsMobile(e.matches);
      // You can perform actions or set state based on the device change here
    };

    mediaQuery.addListener(handleDeviceChange);

    // Initial check for the device type
    setIsMobile(mediaQuery.matches);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleDeviceChange);
    };
  }, []);

  return (
    <>
      <div>
        {isMobile ? (
          <div className="page">
            <table>
              <div className="skill-img">
                <tr>
                  <div className="skill-img1">
                    <td>
                      <img
                        src={imgurl1}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl2}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                  </div>
                </tr>

                <tr>
                  <div className="skill-img2">
                    <td>
                      <img
                        src={imgurl3}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl6}
                        height={145}
                        width={145}
                        alt="IMG"
                      ></img>
                    </td>
                  </div>
                </tr>

                <tr>
                  <div className="skill-img3">
                    <td>
                      <img
                        src={imgurl9}
                        height={100}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl5}
                        height={145}
                        width={145}
                        alt="IMG"
                      ></img>
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="skill-img4">
                    <td>
                      <img
                        src={imgurl8}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl7}
                        height={145}
                        width={145}
                        alt="IMG"
                      ></img>
                    </td>
                  </div>
                </tr>
              </div>
            </table>

            <p className="q-icn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-mortarboard-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
              Education
            </p>

            <div className="box1">
              <div className="cllgedu1">
                <img
                  src={imgurl10}
                  className="img10"
                  alt=".."
                  height={300}
                  width={450}
                />
                <div className="para">
                  <p>
                    Graphic Era Hill University is located in a beautiful city
                  </p>
                  <p>
                    of Uttarakhand. The university is accredited with A+ grade
                    by NAAC.
                  </p>
                  <p>
                    I am pursuing Bahelor's of Technology in Computer Science
                    and Engineering
                  </p>
                  <p>from Graphic Era Hill University Dehradun.</p>
                  <p>SGPA (2020-Present)</p>
                  <p>8.2</p>
                </div>
              </div>
            </div>

            <div className="box2">
              <div className="cllgedu2">
                <div className="para">
                  <p>
                    St. Mary's Senior Secondary School is located in Rudrapur
                    city,
                  </p>
                  <p>
                    Uttarakhand. It is a convent school that comes under St.
                    Ann's.
                  </p>
                  <p>
                    Welfare Society. I have completed my schooling from this
                    school.
                  </p>
                  <div className="score">
                    <p>Intermediate(2020)</p>
                    <p>High School(2018)</p>
                  </div>
                  <div className="score2">
                    <p>80%</p>
                    <p>84%</p>
                  </div>
                </div>
                <img
                  src={imgurl11}
                  className="img10"
                  alt=".."
                  height={300}
                  width={450}
                />
              </div>
            </div>

            <div className="splbtn">
              <button
                type="button"
                className="btn btn-success"
                onClick={redirectToURL}
              >
                Resume
              </button>
            </div>
          </div>
        ) : (
          <div className="page">
            <table>
              <div className="skill-img">
                <tr>
                  <div className="skill-img1">
                    <td>
                      <img
                        src={imgurl1}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl2}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl5}
                        height={145}
                        width={145}
                        alt="IMG"
                      ></img>
                    </td>
                  </div>
                </tr>

                <tr>
                  <div className="skill-img2">
                    <td>
                      <img
                        src={imgurl4}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl3}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl6}
                        height={145}
                        width={145}
                        alt="IMG"
                      ></img>
                    </td>
                  </div>
                </tr>

                <tr>
                  <div className="skill-img3">
                    <td>
                      <img
                        src={imgurl9}
                        height={100}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl8}
                        height={120}
                        width={120}
                        alt="IMG"
                      ></img>
                    </td>
                    <td>
                      <img
                        src={imgurl7}
                        height={145}
                        width={145}
                        alt="IMG"
                      ></img>
                    </td>
                  </div>
                </tr>
              </div>
            </table>

            <p className="q-icn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-mortarboard-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
              Education
            </p>

            <div className="box1">
              <div className="cllgedu1">
                <img
                  src={imgurl10}
                  className="img10"
                  alt=".."
                  height={300}
                  width={450}
                />
                <div className="para">
                  <p>
                    Graphic Era Hill University is located in a beautiful city
                  </p>
                  <p>
                    of Uttarakhand. The university is accredited with A+ grade
                    by NAAC.
                  </p>
                  <p>
                    I am pursuing Bahelor's of Technology in Computer Science
                    and Engineering
                  </p>
                  <p>from Graphic Era Hill University Dehradun.</p>
                  <p>SGPA (2020-Present)</p>
                  <p>8.2</p>
                </div>
              </div>
            </div>

            <div className="box2">
              <div className="cllgedu1">
                <div className="para">
                  <p>
                    St. Mary's Senior Secondary School is located in Rudrapur
                    city,
                  </p>
                  <p>
                    Uttarakhand. It is a convent school that comes under St.
                    Ann's.
                  </p>
                  <p>
                    Welfare Society. I have completed my schooling from this
                    school.
                  </p>
                  <div className="score">
                    <p>Intermediate(2020)</p>
                    <p>High School(2018)</p>
                  </div>
                  <div className="score2">
                    <p>80%</p>
                    <p>84%</p>
                  </div>
                </div>
                <img
                  src={imgurl11}
                  className="img10"
                  alt=".."
                  height={300}
                  width={450}
                />
              </div>
            </div>

            <div className="splbtn">
              <button
                type="button"
                className="btn btn-success"
                onClick={redirectToURL}
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Qualifications;
