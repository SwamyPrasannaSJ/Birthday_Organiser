import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../navbar/Navbar';
import "./About.css";
function About() {


    
    return ( 
        <div>
            <NavBar/>
            <div className='abt-whole'>
            <div className='abt'>
                <h2>WHAT WE’RE ALL ABOUT</h2>
                <p>We at HappyBash Planners are a team of seasoned specialists, dedicated to curating unforgettable experiences that inspire. With accomplished event producers and some of the most creative minds in the industry, our Event Planning Company is committed to delivering excellence from the initial concept through the event itself.</p>
      <p>Since our establishment, we have collaborated with a diverse range of clients, tailoring each event to meet their specific needs and desires. We take pride in taking care of people and thrive on turning your dream event into a reality. Let HappyBash Planners make your celebrations truly extraordinary!</p>
            </div>
                <div className='aimg'>
                    <img id='img-abt' src="https://media.giphy.com/media/3o6gfYL0E6tFw3e8yA/giphy.gif" alt="" />
                </div>
            </div>
            <div className='middle'>
                <h2><center>WHAT WE DO</center></h2>

                <div className="mid1">
                    
                    <img src='https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_SLOT-MACHINE_01.gif' />
                    <div className="cont1">
                    <h4>CREATE YOUR CELEBRATION</h4>
                    <p>asfasdasdasdasdasdasdas</p>
                    </div>
                    
                </div>

                <div className="mid2">
                    <img src='https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_CHEERS_01.gif' />
                    <div className="cont2">
                    <h4>ANALYSE YOUR CELEBRATION</h4>
                    <p>asfasdasdasdasdasdasdas</p>
                    </div>
                </div>

                <div className="mid3">
                    <img src='https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_UNDO_01.gif' />
                    
                    <div className="cont3">
                        <h4>DESIGN YOUR VIEWS</h4>
                        <p>asfasdasdasdasdasdasdas</p>
                    </div>
                    
                </div>

                <div className="mid4">
                    <img src='https://thisismkg.com/wp-content/uploads/2021/10/MKG_BRAND-REFRESH_ANIMATION_WALKIE-TALKIE_01.gif' />
                    <div className="cont4">
                        <h4>PRODUCE YOUR VISIONS</h4>
                        <p>asfasdasdasdasdasdasdas</p>
                    </div>
                </div>
           
            </div>




            <div className='abt-container'>
                <img id='a-img' src="https://wallpaperset.com/w/full/3/9/0/141947.jpg" alt="" />
                <div className='a-text'>
                <h1>WORKING HOURS</h1>
                <p><i>Contact us Today</i></p>
                <p>M-F: 8am-8pm</p>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default About;