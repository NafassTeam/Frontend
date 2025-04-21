import React from 'react';
import { Triangle } from 'lucide-react';

const FormInput = ({
  label,
  name,
  type = 'text',
  required = true,
  isSelect = false,
  options = [],
  value,
  onChange,
}) => {
  return (
    <div className="relative my-4 w-full">
      {isSelect ? (
        <div className="relative">
          <Triangle
            className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-2.5 text-black pointer-events-none rotate-180"
            fill="currentColor"
          />

          <select
            name={name}
            required={required}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className="peer block w-full appearance-none py-2.5 pl-7 pr-8 text-sm font-mulish text-black bg-transparent border-0 border-b-2 border-[#002A17] focus:outline-none focus:ring-0 focus:text-black focus:border-[#BFFF66]"
          >
            <option value="" disabled hidden></option>
            {options.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label
            htmlFor={name}
            className={`absolute left-5 text-sm text-black font-mulish duration-300 transform origin-[0] top-3 -z-10
              ${value
                ? 'scale-75 -translate-y-6 text-[#BFFF66]'
                : 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0'}
              peer-focus:scale-75 peer-focus:-translate-x-5 peer-focus:-translate-y-6 peer-focus:text-[#BFFF66]`}
          >
            {label}
          </label>
        </div>
      ) : (
        <>
          <input
            type={type}
            name={name}
            required={required}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className="peer block w-full py-2.5 px-0 text-sm font-mulish text-black bg-transparent border-0 border-b-2 border-[#002A17] appearance-none focus:outline-none focus:ring-0 focus:text-black focus:border-[#BFFF66]"
            placeholder=""
          />
          <label
            htmlFor={name}
            className="absolute text-sm text-black font-mulish duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#BFFF66]
              peer-valid:scale-75 peer-valid:-translate-y-6"
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
};

export default FormInput;
