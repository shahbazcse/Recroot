import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";

import Events from "./pages/Events";
import Volunteers from "./pages/Volunteers";
import EventView from "./pages/EventView";
import VolunteerView from "./pages/VolunteerView";

import Modal from "./components/Modals/Modal";

import { fetchVolunteers } from "./features/volunteers/volunteersSlice";
import { fetchEvents } from "./features/events/eventsSlice";

function App() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState({
    showModal: false,
    data: null,
    formType: null,
  });

  useEffect(() => {
    dispatch(fetchVolunteers());
    dispatch(fetchEvents());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <TopNavBar setOpenModal={setOpenModal} />
      <div className="flex h-[90%] w-full">
        <div className="w-[30%] ml-8">
          <LeftNavBar />
        </div>
        <div className="w-[70%]">
          <Routes>
            <Route
              path="/"
              element={<Volunteers setOpenModal={setOpenModal} />}
            />
            <Route
              path="/volunteers"
              element={<Volunteers setOpenModal={setOpenModal} />}
            />
            <Route
              path="/events"
              element={<Events setOpenModal={setOpenModal} />}
            />
            <Route
              path="/volunteers-summary"
              element={<VolunteerView setOpenModal={setOpenModal} />}
            />
            <Route path="/events-summary" element={<EventView />} />
          </Routes>
        </div>
        {openModal.showModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

export default App;
