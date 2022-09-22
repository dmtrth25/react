import React, { useState } from 'react';
import './index.scss';

import { Collection } from './components/Collection';
import { collections } from './data/data.js'

function App() {
  const [searchValue, setSearchValue] = useState('')

  const onChangeValue = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>Моя колекція фотографій</h1>
      <div className="top">
        <input
          value={searchValue}
          onChange={onChangeValue}
          className="search-input"
          placeholder="Пошук за назвою" />
      </div>
      <div className="content">
        {
          collections
            .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index) => (
              <Collection
                key={index}
                name={obj.name}
                images={obj.photos}
              />
            ))
        }
      </div>
    </div>
  );
}

export default App;
