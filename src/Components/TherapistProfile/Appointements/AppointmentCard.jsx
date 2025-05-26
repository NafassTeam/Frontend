import React from 'react';
import { format, parseISO } from 'date-fns';

const AppointmentCard = ({ 
  appointment, 
  onApprove, 
  onCancel, 
  onReschedule, 
  onJoinCall 
}) => {
  const {
    id,
    patientName,
    date,
    durationMinutes,
    status,
    videoCallLink
  } = appointment;

  const isCallAvailable = () => {
    if (status !== 'approved' && status !== 'rescheduled') return false;
    
    const now = new Date();
    const appointmentTime = parseISO(date);
    const diffMs = appointmentTime - now;
    const diffMin = diffMs / 60000;
    return diffMin <= 5;
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-4">
      <div className="mb-2 md:mb-0">
      <p className="font-bold text-xl">
        {patientName}
        {appointment.createdByTherapist && (
            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Therapist-scheduled
            </span>
        )}
        </p>
        <p className="text-gray-600">
          {format(parseISO(date), 'hh:mm a')} - Duration: {durationMinutes} min
        </p>
        <StatusBadge status={status} />
      </div>

      <div className="flex space-x-2 flex-wrap">
        {status === 'pending' && (
          <>
            <ActionButton 
              onClick={() => onApprove(id)}
              color="bg-[#00FF88] hover:bg-[#00cc6f]"
              textColor="text-[#00270D]"
              text="Approve"
            />
            <ActionButton 
              onClick={() => onCancel(id)}
              color="bg-[#FF154B] hover:bg-red-600"
              textColor="text-white"
              text="Cancel"
            />
            <ActionButton 
              onClick={() => onReschedule(appointment)}
              color="bg-[#008238] hover:bg-[#00541C]"
              textColor="text-white"
              text="Reschedule"
            />
          </>
        )}

        {(status === 'approved' || status === 'rescheduled') && (
          <>
            <ActionButton 
              onClick={() => isCallAvailable() && onJoinCall(videoCallLink, id)}
              disabled={!isCallAvailable()}
              color={isCallAvailable() ? 'bg-[#00541C] hover:bg-[#003d0f]' : 'bg-gray-300'}
              textColor={isCallAvailable() ? 'text-white' : 'text-gray-600'}
              text="Join Video Call"
            />
            <ActionButton 
              onClick={() => onCancel(id)}
              color="bg-[#FF154B] hover:bg-red-600"
              textColor="text-white"
              text="Cancel"
            />
            <ActionButton 
              onClick={() => onReschedule(appointment)}
              color="bg-[#008238] hover:bg-[#00541C]"
              textColor="text-white"
              text="Reschedule"
            />
          </>
        )}
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const statusColors = {
    approved: 'text-green-600',
    pending: 'text-yellow-600',
    cancelled: 'text-red-600',
    rescheduled: 'text-blue-600',
    done: 'text-gray-800',
    missed: 'text-red-700',
    default: 'text-gray-600'
  };

  return (
    <p className={`font-semibold text-sm ${statusColors[status] || statusColors.default}`}>
      Status: {status.charAt(0).toUpperCase() + status.slice(1)}
    </p>
  );
};

const ActionButton = ({ onClick, color, textColor, text, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-2 py-1 text-sm rounded font-medium ${color} ${textColor} ${
      disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    }`}
  >
    {text}
  </button>
);

export default AppointmentCard;