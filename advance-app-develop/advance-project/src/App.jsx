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
import Dashboard from "./dashboard/Dashboard";
import DeleteBooking from "./Admin/DeleteBooking";
import { UserContext } from "./context/context";
import { useState } from "react";

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
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
