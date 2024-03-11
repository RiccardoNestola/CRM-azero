import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const CreateUser = ({ addUser }) => {
    const [user, setUser] = useState({
        nome: '',
        cognome: '',
        ruolo: '',
        mansione: '',
        email: ''
    });


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(user);
        setUser({
            id: Math.floor(Math.random() * 1000),
            nome: '',
            cognome: '',
            ruolo: '',
            mansione: '',
            email: ''
        });
        navigate('/');

    };

    return (
        <div className="container mx-auto">

            <NavLink to="/" className=" underline py-2 px-4 rounded focus:outline-none focus:shadow-outline flex">
                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='self-center mr-2'>
                    <path d="M1.24609 4.14844L4.74609 0.648438C5.07422 0.292969 5.64844 0.292969 5.97656 0.648438C6.33203 0.976562 6.33203 1.55078 5.97656 1.87891L3.98047 3.875H14.125C14.5898 3.875 15 4.28516 15 4.75C15 5.24219 14.5898 5.625 14.125 5.625H3.98047L5.97656 7.64844C6.33203 7.97656 6.33203 8.55078 5.97656 8.87891C5.64844 9.23438 5.07422 9.23438 4.74609 8.87891L1.24609 5.37891C0.890625 5.05078 0.890625 4.47656 1.24609 4.14844Z" fill="#1F2937" />
                </svg>
                indietro
            </NavLink>

            <div>
                <h1 className="text-2xl font-bold p-4">
                    Nuovo utente
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-lg">

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold" htmlFor="nome">
                            Nome
                        </label>
                        <input
                            className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="nome"
                            type="text"
                            name="nome"
                            value={user.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold" htmlFor="cognome">
                            Cognome
                        </label>
                        <input
                            className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="cognome"
                            type="text"
                            name="cognome"
                            value={user.cognome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold" htmlFor="ruolo">
                            Ruolo
                        </label>
                        <select
                            className=" block w-full border border-gray-400 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="ruolo"
                            name="ruolo"
                            value={user.ruolo}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleziona un ruolo</option>
                            <option value="Admin">Admin</option>
                            <option value="Operatore">Operatore</option>
                            <option value="Contabilità">Contabilità</option>
                        </select>
                    </div>





                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block mb-2 text-sm font-bold" htmlFor="mansione">
                            Mansione
                        </label>
                        <input
                            className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="mansione"
                            type="text"
                            name="mansione"
                            value={user.mansione}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block mb-2 text-sm font-bold" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>




                </div>

                <div className="flex items-center justify-between">



                    <NavLink to="/" className="border py-2 px-4  focus:outline-none focus:shadow-outline">
                        Annulla
                    </NavLink>

                    <button
                        className="bg-[#00AEEF] hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Aggiungi Utente
                    </button>

                </div>
            </form>
        </div>
    );
};

export default CreateUser;
