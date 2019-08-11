import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Item } from '../src/stores/Item'
import { ShoppingList } from '../src/stores/ShoppingList'


let potatoes = new Item("Potatoes")
let corn = new Item("corn")
let asd = new Item("asd")
let groceryList = new ShoppingList()
groceryList.list.push(potatoes, corn, asd )

// Use the prop "store" for your store
ReactDOM.render(<App store={groceryList} />, document.getElementById('root'));
registerServiceWorker();
