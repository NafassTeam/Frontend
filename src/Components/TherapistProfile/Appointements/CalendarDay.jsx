import React from 'react';
import { isSameDay, parseISO } from 'date-fns';

const CalendarDay = ({ 
  day, 
  isSelected, 
  isCurrentMonth, 
  onSelect, 
  appointments = [] 
}) => {
  const hasPendingAppointments = appointments.some(app => 
    isSameDay(parseISO(app.date), day) && 
    ['pending', 'approved', 'rescheduled'].includes(app.status)
  );

  return (
    <button
      onClick={() => onSelect(day)}
      className={`p-2 rounded-md cursor-pointer text-center text-[10px] relative
        ${isCurrentMonth ? '' : 'text-gray-400'} 
        ${isSelected ? 'bg-[#00541C] text-white font-bold' : 'bg-gray-100 hover:bg-gray-300'}
        w-14 h-14 md:h-9 md:w-9`}
      title={format(day, 'MMMM do, yyyy')}
    >
      {format(day, 'd')}
      {hasPendingAppointments && (
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      )}
    </button>
  );
};

export default CalendarDay;