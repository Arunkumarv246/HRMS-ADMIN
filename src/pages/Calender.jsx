import Header from "../components/common/Header"
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Calender = ({ isSidebarOpen }) => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: null, color: "" });
  const [eventToEdit, setEventToEdit] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentEventId, setCurrentEventId] = useState(null);

  useEffect(() => {
    // Fetch events if needed
  }, []);

  const generateEventId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };

  const handleDateClick = (arg) => {
    const isDateSelected = selectedDates.some(date => date.toDateString() === arg.date.toDateString());

    if (!isDateSelected) {
      setSelectedDates([arg.date]);
      setNewEvent({ ...newEvent, date: arg.date });
      setModalOpen(true);
    }
  };

  const handleSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    const dates = [];
    let date = new Date(start);

    while (date < end) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setSelectedDates(dates);
    setNewEvent({ ...newEvent, date: dates[0] });
    setModalOpen(true);
  };

  const handleEventSubmit = () => {
    if (newEvent.title) {
      const newEvents = selectedDates.map(date => ({
        id: generateEventId(),
        title: newEvent.title,
        start: date,
        color: newEvent.color,
      }));
      setEvents([...events, ...newEvents]);
      setModalOpen(false);
      setNewEvent({ title: "", date: null, color: "" });
      setSelectedDates([]);
    } else {
      alert("Event title is required!");
    }
  };

  const handleEventClick = (clickInfo) => {
    setCurrentEventId(clickInfo.event.id);
    setEventToEdit(clickInfo.event);
    setEditModalOpen(true);
  };

  const handleEventEdit = () => {
    if (eventToEdit.title) {
      eventToEdit.setProp("title", eventToEdit.title);
      setEditModalOpen(false);
      setEventToEdit(null);
      setCurrentEventId(null);
    } else {
      alert("Event title is required!");
    }
  };

  const handleEventDelete = () => {
    if (currentEventId) {
      setEvents(events.filter(event => event.id !== currentEventId));
      setEditModalOpen(false);
      setEventToEdit(null);
      setCurrentEventId(null);
    }
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentDay = currentDate.getDate();

  return (
    <div className='flex-1 overflow-auto relative z-10'>
       <Header title ='Calender' />
    <div className={`p-6 relative ${isSidebarOpen ? 'w-[calc(100%-5rem)]' : 'w-full'} transition-all`}>
      <div className={`text-center mb-6 ${modalOpen || editModalOpen ? 'filter blur-sm' : ''}`}>
        <h1 className="text-4xl font-bold text-white">
          {currentMonth} {currentDay}, {currentYear}
        </h1>
      </div>
      <div className={`bg-white rounded-lg shadow-lg p-6 ${modalOpen || editModalOpen ? 'filter blur-sm' : ''}`}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          select={handleSelect}
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          height="auto"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          buttonText={{
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day",
          }}
          eventColor="#000000"  // Set event color to black
          eventTextColor="black" // Ensure text color is black
          dayHeaderClassNames="text-black font-bold"
          dayCellClassNames="bg-white text-black" // Ensure day cell text color is black
          contentHeight="auto"
          dayCellDidMount={(info) => {
            info.el.querySelector('.fc-daygrid-day-number').style.color = 'black';
          }}
        />
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Add Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
            />
            <select
              value={newEvent.color}
              onChange={(e) => setNewEvent({ ...newEvent, color: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
            >
              <option value="">Select Color</option>
              <option value="red">Holiday</option>
              <option value="green">Meeting</option>
            </select>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setModalOpen(false)}
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleEventSubmit}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}

      {editModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={eventToEdit?.title || ""}
              onChange={(e) =>
                setEventToEdit({ ...eventToEdit, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
            />
            <div className="flex justify-between space-x-4">
              <button
                onClick={handleEventDelete}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete Event
              </button>
              <div className="flex space-x-4">
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEventEdit}
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Calender;
