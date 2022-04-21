/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';
import NewItem from './NewItem';
import api from '../api';
import { IItem, JItem } from '../types';

function App() {
  const [isLoaded, setLoad] = useState(false);

  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.getAllItems();
      setListItems(res.data.data);
      setLoad(true);
    };
    fetchData();
  }, [isLoaded]);

  function addItem(newItem: IItem) {
    api.addItem(newItem);
    setLoad(false);
  }

  function deleteItem(id: string) {
    api.deleteItemByID(id);
    setLoad(false);
  }

  function updateItem(id: string, description: string) {
    api.updateItemByID(id, description);
    setLoad(false);
  }

  return (
    <>
      <Header>
        <h1>What do you want to work on today?</h1>
      </Header>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <NewItem addItem={addItem} name="" notes="" />
        {isLoaded &&
          listItems.map((item: JItem, index) => (
            <Item
              key={item._id}
              id={item._id}
              name={item.title}
              notes={item.description}
              delete={deleteItem}
              update={updateItem}
            />
          ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
