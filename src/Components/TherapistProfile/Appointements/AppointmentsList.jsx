import React from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';

const AppointmentsList = ({ 
  appointments, 
  selectedDate, 
  loading, 
  onApprove, 
  onCancel, 
  onReschedule, 
  onJoinCall 
}) => {
  return (
    <div className="md:w-2/3 bg-white/50 rounded-lg shadow-md p-6 overflow-y-auto max-h-[600px]">
      <h2 className="text-lg font-semibold mb-4 text-[#008238]">
        Appointments on {format(selectedDate, 'MMMM dd, yyyy')}
      </h2>

      {loading ? (
        <p>Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments for this day.</p>
      ) : (
        appointments.map((app) => (
          <AppointmentCard
            key={app.id}
            appointment={app}
            onApprove={onApprove}
            onCancel={onCancel}
            onReschedule={onReschedule}
            onJoinCall={onJoinCall}
          />
        ))
      )}
    </div>
  );
};

export default AppointmentsList;