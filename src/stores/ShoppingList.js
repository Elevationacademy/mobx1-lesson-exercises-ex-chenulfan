import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;

    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    
    @action addItem = (name) => {
        console.log(name)
        this.list.push(new Item(name))
    }
    @action editItem = (itemName, newLocation) => {
        let item = this.list.find( l  => l.name === itemName)
        item.location = newLocation
    }
    @action deleteItem = (itemName) => {
        console.log(itemName)
        this.list = this.list.filter(l => l.name !== itemName)
        
    } 
}

