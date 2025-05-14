import { useClickOutside } from "@/hooks/use-click-outside";
import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

type DropdownOptionType = {
  value: any;
  label: string;
};

interface IDropdown {
  value: string;
  onSelect: (value: any) => void;
  options: DropdownOptionType[];
  inputClass?: string;
  className?: string;
}

function Dropdown({
  value,
  onSelect,
  options,
  inputClass,
  className,
}: IDropdown) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  useClickOutside(buttonRef, () => setOpen(false));

  const handleClickOption = (value: any) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className={`w-full text-base ${className}`} ref={buttonRef}>
      <div className="flex flex-col items-center relative">
        <button
          className="w-full outline-none decoration-transparent"
          onClick={() => setOpen(!open)}
        >
          <div className="relative my-2 md:my-1 bg-second p-1 flex justify-between border border-primary rounded ">
            <span
              className={`p-1 px-2  bg-second appearance-none w-full text-center sm:text-left outline-none text-white ${inputClass}`}
            >
              {value}
            </span>
            <div className="text-gray-300 flex items-center absolute right-3 h-full top-0">
              <span
                className="flex justify-center items-center transition cursor-pointer w-6 h-6 text-dropdown-icon outline-none focus:outline-none"
                style={{ transform: open ? "rotate(-180deg)" : "rotate(0deg)" }}
              >
                <FaChevronDown />
              </span>
            </div>
          </div>
        </button>
        <div
          className="absolute shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto"
          style={{
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
            transition: "all 0.15s ease-in",
          }}
        >
          <div className="flex flex-col w-full  overflow-hidden rounded">
            <ul className="dropdown cursor-pointer w-full border bg-second border-primary rounded">
              {options.map((opt) => {
                return (
                  <li
                    key={opt.label}
                    className="flex w-full h-full items-center p-2 pl-2 transition bg-second relative"
                    onClick={() => handleClickOption(opt.value)}
                  >
                    <p className="mx-2 w-full leading-6 text-center md:text-start">
                      {opt.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
