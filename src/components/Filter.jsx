import React from 'react'
import { NavLink } from 'react-router-dom'

const Filter = ({ onFilter }) => {


    return (
        <>
            <div className="p-6 flex items-center gap-4 pt-6 justify-between container mx-auto px-4">
                <p className='text-2xl font-bold p-4'>
                    Utenti
                </p>
                <NavLink to="/crea" className='bg-[#00AEEF] hover:bg-blue-700 text-white py-2 px-4 uppercase'>
                    inserisci nuovo
                </NavLink>
            </div>


            <div className="flex items-center gap-4 justify-between container mx-auto px-4 bg-[#F0F0F0] border border-[#D2D2D2]">
                <div className='flex align-middle'>
                    <p className='font-bold p-4 uppercase'>
                        filtra
                    </p>
                    <button onClick={() => onFilter('Admin')} className='self-center h-8 w-[120px] text-gray-900 border border-gray-300 font-medium rounded-full text-sm  mr-2'>
                        Admin
                    </button>
                    <button onClick={() => onFilter('Operatore')} className='self-center h-8 w-[120px] text-gray-900 border border-gray-300 font-medium rounded-full text-sm  mr-2'>
                        Operatore
                    </button>
                    <button onClick={() => onFilter('Contabilità')} className='self-center h-8 w-[120px] text-gray-900 border border-gray-300 font-medium rounded-full text-sm  mr-2'>
                        Contabilità
                    </button>

                </div>

                <div className='flex gap-2'>
                    <button >
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="45" height="45" rx="22.5" fill="#00AEEF" />
                            <path d="M30.25 29.2188C30.5625 29.5312 30.5625 30 30.25 30.2812C30.125 30.4375 29.9375 30.5 29.75 30.5C29.5312 30.5 29.3438 30.4375 29.1875 30.2812L25 26.0938C23.875 27 22.4688 27.5 20.9688 27.5C17.4062 27.5 14.5 24.5938 14.5 21C14.5 17.4375 17.375 14.5 20.9688 14.5C24.5312 14.5 27.4688 17.4375 27.4688 21C27.4688 22.5312 26.9688 23.9375 26.0625 25.0312L30.25 29.2188ZM16 21C16 23.7812 18.2188 26 21 26C23.75 26 26 23.7812 26 21C26 18.25 23.75 16 21 16C18.2188 16 16 18.25 16 21Z" fill="white" />
                        </svg>
                    </button>

                    <button onClick={() => onFilter('')}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="30" height="30" rx="15" stroke="black" strokeWidth="2" />
                            <path d="M20.6875 19.3125C21.0938 19.6875 21.0938 20.3438 20.6875 20.7188C20.5 20.9062 20.25 21 20 21C19.7188 21 19.4688 20.9062 19.2812 20.7188L16 17.4375L12.6875 20.7188C12.5 20.9062 12.25 21 12 21C11.7188 21 11.4688 20.9062 11.2812 20.7188C10.875 20.3438 10.875 19.6875 11.2812 19.3125L14.5625 16L11.2812 12.7188C10.875 12.3438 10.875 11.6875 11.2812 11.3125C11.6562 10.9062 12.3125 10.9062 12.6875 11.3125L16 14.5938L19.2812 11.3125C19.6562 10.9062 20.3125 10.9062 20.6875 11.3125C21.0938 11.6875 21.0938 12.3438 20.6875 12.7188L17.4062 16.0312L20.6875 19.3125Z" fill="black" />
                        </svg>
                    </button>

                </div>

            </div>


        </>
    )
}

export default Filter