import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

const RescheduleModal = ({ 
  isOpen, 
  onClose, 
  appointment, 
  newDateTime, 
  setNewDateTime, 
  onConfirm 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-[#00541C]">Reschedule Appointment</h2>
        <p className="mb-2 text-gray-700">
          Current: {appointment && format(parseISO(appointment.date), 'MMMM dd, yyyy hh:mm a')}
        </p>

        <DatePicker
          selected={newDateTime}
          onChange={(date) => setNewDateTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />

        <div className="flex justify-end space-x-2">
          <button 
            onClick={onClose} 
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-black"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="bg-[#00541C] hover:bg-[#003d0f] px-4 py-2 rounded text-white font-semibold"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;