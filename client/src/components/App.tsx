/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';
import NewItem from './NewItem';
import apis from '../api';
import { IItem, JItem } from '../types';

function App() {
  const [isLoaded, setLoad] = useState(false);

  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await apis.getAllItems();
      setListItems(res.data.data);
      setLoad(true);
    };
    fetchData();
  }, [isLoaded]);

  function addItem(newItem: IItem) {
    apis.addItem(newItem);
    setLoad(false);
  }

  function deleteItem(id: string) {
    apis.deleteItemByID(id);
    setLoad(false);
  }

  function updateItem(id: string, item: IItem) {
    apis.updateItemByID(id, item);
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
        <NewItem
          addItem={addItem}
          updateItem={updateItem}
          title=""
          description=""
        />
        {isLoaded &&
          listItems.map((item: JItem) => (
            <Item
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              remove={deleteItem}
              updateItem={updateItem}
              addItem={addItem}
            />
          ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
