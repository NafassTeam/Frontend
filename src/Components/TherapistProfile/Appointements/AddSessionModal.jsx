import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const AddSessionModal = ({ 
  isOpen, 
  onClose, 
  patients, 
  onAddSession 
}) => {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [sessionDate, setSessionDate] = useState(new Date());
  const [duration, setDuration] = useState(30);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSession({
      patientId: selectedPatient,
      date: sessionDate.toISOString(),
      durationMinutes: duration,
      notes,
      status: 'approved', // Automatically approved when therapist creates
      createdByTherapist: true
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-[#00541C]">Schedule New Session</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="patient">
              Patient
            </label>
            <select
              id="patient"
              className="w-full px-4 py-2 border rounded-md"
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              required
            >
              <option value="">Select a patient</option>
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="date">
              Date & Time
            </label>
            <DatePicker
              selected={sessionDate}
              onChange={(date) => setSessionDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="duration">
              Duration (minutes)
            </label>
            <select
              id="duration"
              className="w-full px-4 py-2 border rounded-md"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              required
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="notes">
              Notes (Optional)
            </label>
            <textarea
              id="notes"
              className="w-full px-4 py-2 border rounded-md"
              rows="3"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button 
              type="button"
              onClick={onClose} 
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-black"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-[#00541C] hover:bg-[#003d0f] px-4 py-2 rounded text-white font-semibold"
            >
              Schedule Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSessionModal;