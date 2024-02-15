import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./services/Services";
import About from "./About/about";
import { Provider } from "react-redux";
import { store } from "./Redux/reducer/store";

import Booking from "./Bookings/Booking";
import Login from "./Login/Login";
import Admin from "./Admin/Admin";
import ViewBooking from "./Admin/ViewBooking";
import Feedback from "./Contact/feedback";
import Dashboard from "./Admin/Dashboard";
import DeleteBooking from "./Admin/DeleteBooking";
import { UserContext } from "./context/context";
import { useState } from "react";
import Party from "./Admin/Party";
import VenueAddForm from "./Admin/VenueAddForm";
import ThemeAddForm from "./Admin/ThemeAddForm";
import AdditionalAddForm from "./Admin/AdditionalAddForm";

function App() {
  const [pop, setPop] = useState(false);
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={[pop, setPop]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/bookings" element={<Booking />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/deleteBookings" element={<DeleteBooking />}></Route>
              <Route path="/viewBookings" element={<ViewBooking />}></Route>
              <Route path="/feedback" element={<Feedback />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/partyaddform" element={<Party />}></Route>
              <Route path="/venueaddform" element={<VenueAddForm />} />
              <Route path="/themeadd" element={<ThemeAddForm />} />
              <Route path="/addtionaladd" element={<AdditionalAddForm />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
