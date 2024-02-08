import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './feedback.css';

function feedback() {
  return (
  <>
    <div className="container-fluid" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg?w=740&t=st=1668690713~exp=1668691313~hmac=4e4699858732639ca9e2569c11c7fb5bf5ec04a636160c3218002ffad281414c)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100vh" }}>
                <div className="row p-3">
                    <div className="col-sm-4 ms-auto me-auto pt-5 mt-3  shadow-sm" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(275, 275, 275, 0.550)", borderRadius: "15px" }}>
                        <h4 className='text-center' style={{ fontWeight: "900", fontFamily: "segoe ui symbol" }}>Feedback <i class="fa-solid fa-paper-plane" style={{ color: "#640513" }} ></i></h4>
                        <p className='text-center mb-0' style={{ fontWeight: "700", fontFamily: "segoe ui symbol", fontSize: "14px" }}>Free Feel To Drop Us Your Feedback</p>
                        <form action="" className='ms-auto me-auto p-5 feedback-form'>
                            <div className='mb-4'>
                                <TextField id="standard-basic1" type={"text"} className='col-sm-12 w-100' label="Full Name" variant="standard"  required />
                            </div>
                            <div className='mb-4'>
                                <TextField id="standard-basic2" type={"email"} className='col-sm-12 w-100' label="Email Address" variant="standard"  required />
                            </div>
                            <div className='mb-4'>
                                <TextField id="standard-basic3"  type={"text"} className='col-sm-12 w-100' label="Subject" variant="standard" required />
                            </div>
                            <div className='mb-4'>
                                <TextField id="standard-basic4" minRows={10} className='col-sm-12 w-100' label="Message" variant="standard" required />
                            </div>
                            <Button variant="contained" type='submit' className='w-100 mt-3 p-3 mb-5' style={{ backgroundColor: "#640513" }}>Send Message &nbsp;<i class="fa-solid fa-paper-plane" ></i></Button>

                        </form>
                    </div>
                </div>
            </div></>
  );
}

export default feedback;