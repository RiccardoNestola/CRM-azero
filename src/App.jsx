import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { data as initialData } from '../data'
import Header from './components/Header'
import Filter from './components/Filter'
import Table from './components/Table'
import CreateUser from './components/CreateUser'


function App() {

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('data');
    return savedUsers ? JSON.parse(savedUsers) : [...initialData];
  });

  const [filtroRuolo, setFiltroRuolo] = useState('');

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(users));
  }, [users]);


  const handleFilter = (ruolo) => {
    console.log(ruolo);
    setFiltroRuolo(ruolo);
  };

  const datiFiltrati = users.filter((item) => {
    return filtroRuolo === '' || item.ruolo.toLowerCase() === filtroRuolo.toLowerCase();
  });

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUser = (userId) => {
    const isConfirmed = window.confirm("Sei sicuro di voler eliminare l'utente?");

    if (isConfirmed) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Filter onFilter={handleFilter} />
                <Table data={datiFiltrati} onDelete={deleteUser} />
              </>
            }
          />
          <Route path="/crea" element={
            <>
              <Header />
              <CreateUser addUser={addUser} />
            </>

          } />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
