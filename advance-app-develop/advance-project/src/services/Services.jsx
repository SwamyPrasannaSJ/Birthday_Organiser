import React, { useEffect, useState } from "react";
import "./Services.css";

import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { cartProducts } from "../Redux/actions/action";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Services() {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedAddon, setSelectedAddon] = useState(null);

  // ... (your existing code)

  const handleConfirm = async () => {
    try {
      // Check if all selections are made
      if (!selectedVenue || !selectedTheme || !selectedAddon) {
        console.error("Please select a venue, theme, and additional service.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/postbooking",
        {
          venue: selectedVenue.venueName,
          theme: selectedTheme.themeName,
          additionalRequirements: selectedAddon.addonName,
          numberOfPeople: parseInt(numberOfPeople),
          cakeRequirement: cakeRequirement,
          duration: duration,
          invitationRequirements: invitationRequirements,
          date: date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Booking confirmed!");
        // Optionally, you can navigate to the "/bookings" page here.
        navigate("/bookings");
      } else {
        console.error("Failed to confirm booking. Status:", response);
      }
    } catch (error) {
      console.error("Error confirming booking:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response.data);
      }
    }
  };
  // const sources = [
  //   {
  //     id: 1,
  //     name: "Chennai",
  //     link: "https://creativedestinationevents.com/wp-content/uploads/2022/01/image40.jpeg",
  //     desc: "Chennai's Birthday Extravaganza: Celebrate Joy, Create Memories. ",
  //   },
  //   {
  //     id: 2,
  //     name: "Kodaikanal",
  //     link: "https://img1.wsimg.com/isteam/ip/0cf0c9ce-9aa7-4cd4-84cf-3ab58b144ea8/220507TL8068.JPG/:/cr=t:0%25,l:0.93%25,w:98.15%25,h:98.15%25/rs=w:1240,cg:true,m",
  //     desc: "Capture the essence of the celebration that transforms fleeting moments into timeless memories. ",
  //   },
  //   {
  //     id: 3,
  //     name: "Bangalore",
  //     link: "https://www.ten2tenphotography.com/wp-content/uploads/2016/03/10-10700-post/toronto-wedding-photographer-ten2ten-photography-161-1536x1024.jpg",
  //     desc: "Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion.",
  //   },
  // ];
  // const sources2 = [
  //   {
  //     id: 1,
  //     name: "Kid's Theme",
  //     link: "https://www.bambooevents.co.in/images/new/birthday6.webp",
  //     desc: "Chennai's Birthday Extravaganza: Celebrate Joy, Create Memories. ",
  //   },
  //   {
  //     id: 2,
  //     name: "Halloween Theme",
  //     link: "https://www.amazingcakeideas.com/wp-content/uploads/2015/10/Best-Ever-Halloween-Cakes-20.jpg",
  //     desc: "Capture the essence of the celebration that transforms fleeting moments into timeless memories. ",
  //   },
  //   {
  //     id: 3,
  //     name: "Pirate Theme",
  //     link: "https://i.pinimg.com/originals/49/19/09/4919092dba50e73ee718fbf3ee8061f3.jpg",
  //     desc: "Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion.",
  //   },
  // ];
  // const sources3 = [
  //   {
  //     id: 1,
  //     name: "Food & Accomplishments",
  //     link: "https://th.bing.com/th/id/OIP.YK6mnH10ALg5_o7lp7Z_pQAAAA?rs=1&pid=ImgDetMain",
  //     desc: "Chennai's Birthday Extravaganza: Celebrate Joy, Create Memories. ",
  //   },
  //   {
  //     id: 2,
  //     name: "Photo & Video",
  //     link: "https://www.brandinglosangeles.com/wp-content/uploads/Photo-and-Videography-scaled.jpg",
  //     desc: "Capture the essence of the celebration that transforms fleeting moments into timeless memories. ",
  //   },
  //   {
  //     id: 3,
  //     name: "Entertainment",
  //     link: "https://www.wallpaperup.com/uploads/wallpapers/2018/01/11/1188198/34fc5e0c4589a834136ecb5f8a7be079.jpg",
  //     desc: "Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion.",
  //   },
  // ];

  const events = [{ id: 1, name: "Wedding", link: "" }];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [cakeRequirement, setCakeRequirement] = useState("");
  const [duration, setDuration] = useState("");
  const [invitationRequirements, setInvitationRequirements] = useState("");
  const [date, setDate] = useState("");

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const dummy = await axios.get(
        "http://localhost:8081/api/v1/auth/getvenue"
      );
      const res = setData(dummy.data);
    }

    async function getData2() {
      const dummy = await axios.get(
        "http://localhost:8081/api/v1/auth/gettheme"
      );
      const res = setData2(dummy.data);
      setLoading(true);
    }
    async function getData3() {
      const dummy = await axios.get("http://localhost:8081/getaddion");
      const res = setData3(dummy.data);
      setLoading(true);
    }

    getData();
    getData2();
    getData3();
  }, []);

  // const handleConfirm = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8081/api/v1/auth/postaddon",
  //       {
  //         numberOfPeople: parseInt(numberOfPeople),
  //         cakeRequirement: cakeRequirement,
  //         duration: duration,
  //         invitationRequirements: invitationRequirements,
  //         date: date,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.status === 200) {
  //       console.log("Booking confirmed!");
  //       // Optionally, you can navigate to the "/bookings" page here.
  //       navigate("/bookings");
  //     } else {
  //       console.error("Failed to confirm booking. Status:", response);
  //     }
  //   } catch (error) {
  //     console.error("Error confirming booking:", error);
  //     if (axios.isAxiosError(error)) {
  //       console.error("Axios error details:", error.response.data);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   async function getData2() {
  //     const dummy = await axios.get(
  //       "http://localhost:8081/api/v1/auth/gettheme"
  //     );
  //     const res = setData2(dummy.data);
  //     setLoading(true);
  //   }

  //   getData2();
  // }, []);

  console.log(data);
  return loading ? (
    <>
      <Navbar />
      <br />
      <br />

      <div>
        <center>
          <h1 id="s-title1">SOME OF OUR VENUES</h1>
        </center>
      </div>
      <div className="services">
        {data.map((serv) => (
          <div className="service">
            <img src={serv.img} />
            <h1 id="s-name">{serv.venueName}</h1>
            <i>
              <p id="s-desc">{serv.details}</p>
            </i>
            <button
              onClick={() => {
                setSelectedVenue(serv);
                dispatch(cartProducts(serv));
              }}
            >
              SELECT
            </button>
          </div>
        ))}
      </div>

      <br />
      {/* <button id="spl1">Additional Venues</button> */}
      <br />
      <br />

      <div>
        <center>
          <h1 id="s-title1">SOME OF OUR THEMES</h1>
        </center>
      </div>
      <div className="services">
        {data2.map((serv) => (
          <div className="service">
            <img src={serv.img} />
            <h1 id="s-name">{serv.themeName}</h1>
            <i>
              <p id="s-desc">{serv.details}</p>
            </i>
            <button
              onClick={() => {
                setSelectedTheme(serv);
                dispatch(cartProducts(serv));
              }}
            >
              SELECT
            </button>
          </div>
        ))}
      </div>
      <br />
      {/* <button id="spl1">Additional Themes</button> */}
      <br />
      <br />

      <div>
        <center>
          <h1 id="s-title">ADDTIONAL REQUIREMENTS</h1>
        </center>
      </div>
      <div className="services">
        {data3.map((serv) => (
          <div className="service">
            <img src={serv.img} />
            <h1 id="s-name">{serv.addonName}</h1>
            <i>
              <p id="s-desc">{serv.details}</p>
            </i>
            <button
              onClick={() => {
                setSelectedAddon(serv);
                dispatch(cartProducts(serv));
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* <button id="spl1">Additional Requirements</button> */}
      <br />
      <br />

      <div className="event-form-container">
        <label className="form-label">
          Number of People:
          <input
            className="form-input"
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </label>

        <label className="form-label">
          Cake Requirement:
          <input
            className="form-input"
            type="text"
            value={cakeRequirement}
            onChange={(e) => setCakeRequirement(e.target.value)}
          />
        </label>

        <label className="form-label">
          Duration:
          <input
            className="form-input"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>

        <label className="form-label">
          Invitation Requirements:
          <input
            className="form-input"
            type="text"
            value={invitationRequirements}
            onChange={(e) => setInvitationRequirements(e.target.value)}
          />
        </label>

        <label className="form-label">
          Date:
          <input
            className="form-input"
            type="String"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button
          className="confirm-button"
          onClick={() => {
            handleConfirm();
          }}
        >
          Confirm
        </button>
      </div>
    </>
  ) : (
    "loading.."
  );
}
