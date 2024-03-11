import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className="text-gray-600 body-font border-b-2">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.5C0 3.70312 0.65625 3 1.5 3H19.5C20.2969 3 21 3.70312 21 4.5C21 5.34375 20.2969 6 19.5 6H1.5C0.65625 6 0 5.34375 0 4.5ZM3 12C3 11.2031 3.65625 10.5 4.5 10.5H22.5C23.2969 10.5 24 11.2031 24 12C24 12.8438 23.2969 13.5 22.5 13.5H4.5C3.65625 13.5 3 12.8438 3 12ZM19.5 21H1.5C0.65625 21 0 20.3438 0 19.5C0 18.7031 0.65625 18 1.5 18H19.5C20.2969 18 21 18.7031 21 19.5C21 20.3438 20.2969 21 19.5 21Z" fill="black" />
                    </svg>

                    <img src={logo} className="h-8 pl-4" alt="" />
                </NavLink>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900 text-black font-bold">Mario Rossi</a>

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="black" />
                        <path d="M8.716 25.5V14.3H11.1L14.364 19.132L17.628 14.3H19.996V25.5H17.82V17.724L14.364 22.812L10.908 17.74V25.5H8.716ZM22.4348 25.5V14.3H26.5948C27.3841 14.3 28.0828 14.4547 28.6908 14.764C29.2988 15.0733 29.7734 15.5 30.1148 16.044C30.4561 16.5773 30.6267 17.2013 30.6267 17.916C30.6267 18.62 30.4454 19.2493 30.0828 19.804C29.7308 20.348 29.2454 20.7747 28.6268 21.084C28.0081 21.3827 27.3041 21.532 26.5148 21.532H24.6268V25.5H22.4348ZM28.5948 25.5L26.0028 21.004L27.6828 19.804L31.0748 25.5H28.5948ZM24.6268 19.532H26.6108C26.9414 19.532 27.2348 19.4627 27.4908 19.324C27.7574 19.1853 27.9654 18.9933 28.1148 18.748C28.2748 18.5027 28.3548 18.2253 28.3548 17.916C28.3548 17.436 28.1788 17.0467 27.8268 16.748C27.4854 16.4493 27.0428 16.3 26.4988 16.3H24.6268V19.532Z" fill="white" />
                    </svg>

                </nav>

            </div>
        </header>

    )
}

export default Header