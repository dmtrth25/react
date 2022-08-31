import React from 'react';

import './index.scss';

import { Success } from './components/Success';
import { Users } from './components/Users';

// List of users: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([])
  const [invites, setInvites] = React.useState([])
  const [success, setSuccess] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => setUsers(json.data))
      .catch((err) => {
        console.warn(err)
        alert('Ошибка при получении')
      })
      .finally(() => setIsLoading(false))
  }, [])

  const onChangeValue = (e) => {
    setSearchValue(e.target.value)
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSendInvites = () => {
    setSuccess(true)
  }

  return (
    <div className="App">
      {
        success ?
          <Success count={invites.length} />
          :
          <Users
            searchValue={searchValue}
            onChangeValue={onChangeValue}
            items={users}
            isLoading={isLoading}
            onClickInvite={onClickInvite}
            invites={invites}
            onClickSendInvites={onClickSendInvites}
          />
      }
    </div>
  );
}

export default App;
