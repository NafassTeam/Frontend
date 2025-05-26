import React, { useState, useEffect } from 'react';
import BackgroundTProfil from '/src/Components/BackgroundTProfil.jsx';
import SideBar from '/src/Components/TherapistProfile/SideBar.jsx';
import NavBar from '/src/Components/TherapistProfile/NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import {
  format,
  isSameDay,
  parseISO,
  addMinutes,
  isAfter,
} from 'date-fns';

import Calendar from '/src/Components/TherapistProfile/Appointements/Calendar.jsx';
import AppointmentsList from '/src/Components/TherapistProfile/Appointements/AppointmentsList';
import RescheduleModal from '/src/Components/TherapistProfile/Appointements/RescheduleModal';

// Mock appointments data (move to a separate constants file if possible)
const mockAppointments = [
  {
    id: 1,
    patientName: 'Sarah Johnson',
    date: '2025-05-26T18:09:00',
    durationMinutes: 1,
    status: 'pending',
    videoCallLink: 'https://video.call/room1',
  },
    {
        id: 2,
        patientName: 'James Carter',
        date: '2025-05-26T19:00:00',
        durationMinutes: 30,
        status: 'approved',
        videoCallLink: 'https://video.call/room2',
    },
    {
        id: 3,
        patientName: 'Amel Haddad',
        date: '2025-05-26T20:00:00',
        durationMinutes: 45,
        status: 'rescheduled',
        videoCallLink: 'https://video.call/room3',
    },
    {
        id: 4,
        patientName: 'Mohamed Ali',
        date: '2025-05-26T21:00:00',
        durationMinutes: 60,
        status: 'done',
        videoCallLink: 'https://video.call/room4',
        videoCallStarted: true,
    },
    {
        id: 5,
        patientName: 'Sofia Benyamina',
        date: '2025-05-26T22:00:00',
        durationMinutes: 30,
        status: 'missed',
        videoCallLink: '',
    },
];

const TherapistAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [rescheduleAppointment, setRescheduleAppointment] = useState(null);
  const [newDateTime, setNewDateTime] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAppointments() {
      setLoading(true);
      try {
        await new Promise((r) => setTimeout(r, 800));
        setAppointments(mockAppointments);
      } catch (error) {
        console.error('Failed to fetch appointments', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAppointments();
  }, []);

  // Auto status update based on current time
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointments((prev) =>
        prev.map((app) => {
          const endTime = addMinutes(parseISO(app.date), app.durationMinutes);
          if (
            (app.status === 'approved' || app.status === 'rescheduled') &&
            isAfter(new Date(), endTime)
          ) {
            return {
              ...app,
              status: app.videoCallStarted ? 'done' : 'missed',
            };
          }
          return app;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const dailyAppointments = appointments.filter((app) =>
    isSameDay(parseISO(app.date), selectedDate)
  );

  const handleApprove = (id) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: 'approved' } : app))
    );
  };

  const handleCancel = (id) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: 'cancelled' } : app))
    );
  };

  const openRescheduleModal = (appointment) => {
    setRescheduleAppointment(appointment);
    setNewDateTime(parseISO(appointment.date));
    setIsRescheduleOpen(true);
  };

  const confirmReschedule = () => {
    setAppointments((prev) =>
      prev.map((app) =>
        app.id === rescheduleAppointment.id
          ? { ...app, date: newDateTime.toISOString(), status: 'rescheduled' }
          : app
      )
    );
    setIsRescheduleOpen(false);
    setRescheduleAppointment(null);
  };

  const handleJoinCall = (link, id) => {
    window.open(link, '_blank');
    setAppointments((prev) =>
      prev.map((app) =>
        app.id === id
          ? { ...app, videoCallStarted: true, status: 'in call' }
          : app
      )
    );
  };

  return (
    <BackgroundTProfil>
      <div className="flex h-screen overflow-hidden font-inter">
        <SideBar />
        <div className="flex-1 flex flex-col ml-[190px]">
          <NavBar />
          <h1 className="font-inter font-medium text-2xl flex justify-center mt-3 mb-3">
            Appointments
          </h1>

          <main className="relative flex flex-col md:flex-row gap-8 px-4 pb-4 max-w-5xl mx-auto w-full overflow-y-auto no-scrollbar">
            <div className="md:w-1/3 bg-white/50 rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-4 text-[#008238]">Select a Date</h2>
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>

            <AppointmentsList
              appointments={dailyAppointments}
              selectedDate={selectedDate}
              loading={loading}
              onApprove={handleApprove}
              onCancel={handleCancel}
              onReschedule={openRescheduleModal}
              onJoinCall={handleJoinCall}
            />
          </main>

          <RescheduleModal
            isOpen={isRescheduleOpen}
            onClose={() => setIsRescheduleOpen(false)}
            appointment={rescheduleAppointment}
            newDateTime={newDateTime}
            setNewDateTime={setNewDateTime}
            onConfirm={confirmReschedule}
          />
        </div>
      </div>
    </BackgroundTProfil>
  );
};

export default TherapistAppointments;