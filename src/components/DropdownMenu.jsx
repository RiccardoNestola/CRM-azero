
import { useState } from 'react';
const DropdownMenu = ({ onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" className="" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleDropdown}>
                    <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21.0938C20.8203 21.0938 21.5312 21.8047 21.5312 22.625C21.5312 23.4727 20.8203 24.1562 20 24.1562C19.1523 24.1562 18.4688 23.4727 18.4688 22.625C18.4688 21.8047 19.1523 21.0938 20 21.0938ZM20 16.7188C20.8203 16.7188 21.5312 17.4297 21.5312 18.25C21.5312 19.0977 20.8203 19.7812 20 19.7812C19.1523 19.7812 18.4688 19.0977 18.4688 18.25C18.4688 17.4297 19.1523 16.7188 20 16.7188ZM20 15.4062C19.1523 15.4062 18.4688 14.7227 18.4688 13.875C18.4688 13.0547 19.1523 12.3438 20 12.3438C20.8203 12.3438 21.5312 13.0547 21.5312 13.875C21.5312 14.7227 20.8203 15.4062 20 15.4062Z" fill="black" />
                    </svg>

                </button>
            </div>


            {isOpen && (
                <div className="origin-top-right absolute right-10 top-0 mt-2 w-26 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        <button onClick={onDelete} type="button" className="text-red-700 block w-full px-4 py-0 text-left text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-0">
                            Elimina
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
