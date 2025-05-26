import React from 'react';
import {
  format,
  isSameDay,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addMonths,
} from 'date-fns';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const firstDayOfMonth = startOfMonth(selectedDate);
  const lastDayOfMonth = endOfMonth(selectedDate);
  const calendarStart = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(lastDayOfMonth, { weekStartsOn: 0 });
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-lg shadow p-4 select-none w-full">
      <div className="flex justify-between items-center mb-4 px-2">
        <button 
          onClick={() => setSelectedDate(addMonths(selectedDate, -1))} 
          className="text-[#00541C] font-bold px-2 hover:text-[#003d0f]"
        >
          &#8592;
        </button>
        <div className="text-center text-[#00541C] font-semibold text-lg">
          {format(selectedDate, 'MMMM yyyy')}
        </div>
        <button 
          onClick={() => setSelectedDate(addMonths(selectedDate, 1))} 
          className="text-[#00541C] font-bold px-2 hover:text-[#003d0f]"
        >
          &#8594;
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2 text-center font-semibold text-gray-600">
        {weekdays.map((day) => (
          <div key={day} className="py-1">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentMonth = day.getMonth() === selectedDate.getMonth();

          return (
            <button
              key={day.toISOString()}
              onClick={() => setSelectedDate(day)}
              className={`p-2 rounded-md cursor-pointer text-center text-[10px]  
                ${isCurrentMonth ? '' : 'text-gray-400'} 
                ${isSelected ? 'bg-[#00541C] text-white font-bold' : 'bg-gray-100 hover:bg-gray-300'}
                w-14 h-14 md:h-9 md:w-9`}
              title={format(day, 'MMMM do, yyyy')}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-gray-700">
        <h3 className="font-semibold text-[#00541C] mb-2">Legend:</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span> Approved
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-yellow-400 inline-block"></span> Pending
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-500 inline-block"></span> Cancelled
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-blue-500 inline-block"></span> Rescheduled
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;