import React, { useState } from "react";
import "./Services.css";

import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { cartProducts } from "../Redux/actions/action";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
export default function Services() {
  const sources = [
    {
      id: 1,
      name: "Chennai",
      link: "https://creativedestinationevents.com/wp-content/uploads/2022/01/image40.jpeg",
      desc: "Chennai's Birthday Extravaganza: Celebrate Joy, Create Memories. ",
    },
    {
      id: 2,
      name: "Kodaikanal",
      link: "https://img1.wsimg.com/isteam/ip/0cf0c9ce-9aa7-4cd4-84cf-3ab58b144ea8/220507TL8068.JPG/:/cr=t:0%25,l:0.93%25,w:98.15%25,h:98.15%25/rs=w:1240,cg:true,m",
      desc: "Capture the essence of the celebration that transforms fleeting moments into timeless memories. ",
    },
    {
      id: 3,
      name: "Bangalore",
      link: "https://www.ten2tenphotography.com/wp-content/uploads/2016/03/10-10700-post/toronto-wedding-photographer-ten2ten-photography-161-1536x1024.jpg",
      desc: "Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion.",
    },
  ];
  const sources2 = [
    {
      id: 1,
      name: "Kid's Theme",
      link: "https://www.bambooevents.co.in/images/new/birthday6.webp",
      desc: "Chennai's Birthday Extravaganza: Celebrate Joy, Create Memories. ",
    },
    {
      id: 2,
      name: "Halloween Theme",
      link: "https://www.amazingcakeideas.com/wp-content/uploads/2015/10/Best-Ever-Halloween-Cakes-20.jpg",
      desc: "Capture the essence of the celebration that transforms fleeting moments into timeless memories. ",
    },
    {
      id: 3,
      name: "Pirate Theme",
      link: "https://i.pinimg.com/originals/49/19/09/4919092dba50e73ee718fbf3ee8061f3.jpg",
      desc: "Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion.",
    },
  ];
  const sources3 = [
    {
      id: 1,
      name: "Food & Accomplishments",
      link: "https://th.bing.com/th/id/OIP.YK6mnH10ALg5_o7lp7Z_pQAAAA?rs=1&pid=ImgDetMain",
      desc: "Chennai's Birthday Extravaganza: Celebrate Joy, Create Memories. ",
    },
    {
      id: 2,
      name: "Photo & Video",
      link: "https://www.brandinglosangeles.com/wp-content/uploads/Photo-and-Videography-scaled.jpg",
      desc: "Capture the essence of the celebration that transforms fleeting moments into timeless memories. ",
    },
    {
      id: 3,
      name: "Entertainment",
      link: "https://www.wallpaperup.com/uploads/wallpapers/2018/01/11/1188198/34fc5e0c4589a834136ecb5f8a7be079.jpg",
      desc: "Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion.",
    },
  ];

  const events = [{ id: 1, name: "Wedding", link: "" }];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [cakeRequirement, setCakeRequirement] = useState("");
  const [duration, setDuration] = useState("");
  const [invitationRequirements, setInvitationRequirements] = useState("");
  const [date, setDate] = useState("");

  const handleConfirm = () => {
    console.log({
      numberOfPeople,
      cakeRequirement,
      duration,
      invitationRequirements,
      date,
    });
  };

  return (
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
        {sources.map((serv) => (
          <div className="service">
            <img src={serv.link} />
            <h1 id="s-name">{serv.name}</h1>
            <i>
              <p id="s-desc">{serv.desc}</p>
            </i>
            <button onClick={() => dispatch(cartProducts(serv))}>SELECT</button>
          </div>
        ))}
      </div>

      <br />
      <button id="spl1">Additional Venues</button>
      <br />
      <br />

      <div>
        <center>
          <h1 id="s-title1">SOME OF OUR THEMES</h1>
        </center>
      </div>
      <div className="services">
        {sources2.map((serv) => (
          <div className="service">
            <img src={serv.link} />
            <h1 id="s-name">{serv.name}</h1>
            <i>
              <p id="s-desc">{serv.desc}</p>
            </i>
            <button onClick={() => dispatch(cartProducts(serv))}>SELECT</button>
          </div>
        ))}
      </div>
      <br />
      <button id="spl1">Additional Themes</button>
      <br />
      <br />

      <div>
        <center>
          <h1 id="s-title">ADDTIONAL REQUIREMENTS</h1>
        </center>
      </div>
      <div className="services">
        {sources3.map((serv) => (
          <div className="service">
            <img src={serv.link} />
            <h1 id="s-name">{serv.name}</h1>
            <i>
              <p id="s-desc">{serv.desc}</p>
            </i>
            <button onClick={() => dispatch(cartProducts(serv))}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      <button id="spl1">Additional Requirements</button>
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
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button
          className="confirm-button"
          onClick={()=>{handleConfirm();navigate("/bookings")}}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
