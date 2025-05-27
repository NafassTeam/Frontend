import React, { useState, useEffect } from 'react';
import BackgroundTProfil from "../Components/BackgroundTProfil.jsx";
import SideBar from "../Components/TherapistProfile/SideBar.jsx";
import NavBar from "../Components/TherapistProfile/NavBar.jsx";
import { useNavigate } from 'react-router-dom';
import {
  format,
  isSameDay,
  parseISO,
  addMinutes,
  isAfter,
} from 'date-fns';

import Calendar from "../Components/TherapistProfile/Appointements/Calendar.jsx";
import AppointmentsList from "../Components/TherapistProfile/Appointements/AppointmentsList.jsx";
import RescheduleModal from "../Components/TherapistProfile/Appointements/RescheduleModal.jsx";
import AddSessionModal from "../Components/TherapistProfile/Appointements/AddSessionModal.jsx";

// Mock appointments data
const mockAppointments = [
  {
    id: 1,
    patientName: 'Sarah Johnson',
    date: '2025-05-26T18:09:00',
    durationMinutes: 30,
    status: 'pending',
    videoCallLink: 'https://video.call/room1',
    createdByTherapist: false
  },
  {
    id: 2,
    patientName: 'James Carter',
    date: '2025-05-26T14:30:00',
    durationMinutes: 45,
    status: 'approved',
    videoCallLink: 'https://video.call/room2',
    createdByTherapist: false
  },
  {
    id: 3,
    patientName: 'Amel Haddad',
    date: '2025-05-28T09:00:00',
    durationMinutes: 30,
    status: 'approved',
    videoCallLink: 'https://video.call/room3',
    createdByTherapist: true,
    notes: 'Initial consultation'
  },
  {
    id: 4,
    patientName: 'Michael Brown',
    date: '2025-05-30T11:00:00',
    durationMinutes: 60,
    status: 'pending',
    videoCallLink: 'https://video.call/room4',
    createdByTherapist: false
  },
];

// Mock patients data
const mockPatients = [
  { id: '1', name: 'Sarah Johnson' },
  { id: '2', name: 'James Carter' },
  { id: '3', name: 'Amel Haddad' },
  { id: '4', name: 'Michael Brown' },
  { id: '5', name: 'Emily Davis' },
];

const TherapistAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'therapist', 'patient'

  // Modals state
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isAddSessionOpen, setIsAddSessionOpen] = useState(false);
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

  // Check if a date has pending appointments
  const hasPendingAppointments = (date) => {
    return appointments.some(app => 
      isSameDay(parseISO(app.date), date) && 
      ['pending', 'approved', 'rescheduled'].includes(app.status)
    );
  };

  // Filter appointments by selected date and filter type
  const filteredAppointments = appointments
    .filter((app) => isSameDay(parseISO(app.date), selectedDate))
    .filter((app) => {
      if (filter === 'all') return true;
      if (filter === 'therapist') return app.createdByTherapist;
      return !app.createdByTherapist;
    });

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
          ? { 
              ...app, 
              date: newDateTime.toISOString(), 
              status: 'rescheduled',
              createdByTherapist: app.createdByTherapist
            }
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

  const handleAddSession = (newSession) => {
    const patient = mockPatients.find(p => p.id === newSession.patientId);
    const newAppointment = {
      id: Math.max(...appointments.map(a => a.id), 0) + 1,
      patientName: patient?.name || 'Unknown Patient',
      date: newSession.date,
      durationMinutes: newSession.duration,
      status: newSession.status,
      videoCallLink: `https://video.call/room-${Math.floor(Math.random() * 1000)}`,
      notes: newSession.notes,
      createdByTherapist: true
    };
    
    setAppointments(prev => [...prev, newAppointment]);
  };

  return (
    <BackgroundTProfil>
      <div className="flex h-screen overflow-hidden font-inter">
        <SideBar />
        <div className="flex-1 flex flex-col ml-[190px]">
          <NavBar />
          <div className="flex justify-center items-center px-4 pt-3">
            <h1 className="font-inter font-medium text-2xl text-[#003d0f]">
              Appointments
            </h1>
          </div>

         
               {/* Filter Controls */}
          <div className="flex-row space-x-2 mb-4 px-4 max-w-5xl mx-auto w-full ml-98">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded text-sm ${filter === 'all' ? 'bg-[#00541C] text-white' : 'bg-gray-200'}`}
            >
              All Sessions
            </button>
            <button
              onClick={() => setFilter('therapist')}
              className={`px-3 py-1 rounded text-sm ${filter === 'therapist' ? 'bg-[#00541C] text-white' : 'bg-gray-200'}`}
            >
              Therapist-Scheduled
            </button>
            <button
              onClick={() => setFilter('patient')}
              className={`px-3 py-1 rounded text-sm ${filter === 'patient' ? 'bg-[#00541C] text-white' : 'bg-gray-200'}`}
            >
              Patient-Requested
            </button>
            <button
              onClick={() => setIsAddSessionOpen(true)}
              className="bg-[#00541C] ml-15 hover:bg-[#003d0f] px-4 py-2 rounded text-white font-semibold"
            >
              + Add Session
            </button>
          </div>

          <main className="relative flex flex-col md:flex-row gap-8 px-4 pb-4 max-w-5xl mx-auto w-full overflow-y-auto no-scrollbar mt-[-3px]">
            <div className="md:w-1/3 bg-white/50 rounded-lg h-115 shadow-md p-4">
              <h2 className="text-lg font-semibold mb-3 mt-[-5px] text-[#008238] ">Select a Date</h2>
              <Calendar 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate}
                appointments={appointments}
                hasPendingAppointments={hasPendingAppointments}
              />
            </div>

            <AppointmentsList
              appointments={filteredAppointments}
              selectedDate={selectedDate}
              loading={loading}
              onApprove={handleApprove}
              onCancel={handleCancel}
              onReschedule={openRescheduleModal}
              onJoinCall={handleJoinCall}
            />
          </main>

          {/* Add Session Modal */}
          <AddSessionModal
            isOpen={isAddSessionOpen}
            onClose={() => setIsAddSessionOpen(false)}
            patients={mockPatients}
            onAddSession={handleAddSession}
          />

          {/* Reschedule Modal */}
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