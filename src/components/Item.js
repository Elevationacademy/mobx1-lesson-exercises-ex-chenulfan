import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class Item extends Component {

  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  //other Methods
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}><input type="checkbox" onClick={this.checkItem}
        value={item.name} />
        {item.name}
      </div>)
  }
  editItem = () => {
    let location = prompt("Please enter location")
    console.log(location)
    console.log(this.props.store)
    this.props.store.editItem(this.props.item.name, location)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox"
          value={item.name} />
        {item.name } { " "}
        {item.location}
        <button onClick={this.editItem} className="editButton"> editItem </button>
        <button onClick={this.deleteItem} className="editButton"> deleteItem </button>
      </div>
    )
  }
}
export default Item