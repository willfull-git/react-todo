import React, {Component} from 'react';
import classes from './App.module.css';

import List from './components/list/List';
import Item from './components/list/item/Item';
import Controls from './components/controls/Controls';

// |--- DATA
const dataItems = [
  { id: 1, name: '' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '' },
  { id: 5, name: '' },
];

// |--- COMPONENT
class App extends Component {
  constructor(){
    super();
    this.state            = {items: dataItems};
    this.handleAddItem    = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  // |--- UTILS
  addItem(items){
    const editedItems = [...items];

    editedItems.push({
      id: editedItems.length,
      name: ''
    });

    return editedItems;
  }

  removeItem(items){
    const editedItems = [...items];

    editedItems.pop();

    return editedItems;
  }

  // |--- Handlers
  handleAddItem(){
    this.setState( {...this.state, items: this.addItem(this.state.items)} );
  }

  handleRemoveItem(){
    this.setState( {...this.state, items: this.removeItem(this.state.items)} );
  }

  render(){ return (
    <div className={classes.container}>
      <List>
        { this.state.items.map((item)=> <Item key={item.id} data={item}></Item> ) }
      </List>
      <Controls>
        <button
          className={classes.button}
          type="button"
          onClick={ this.handleAddItem }
        >
          Add
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={ this.handleRemoveItem }
        >
          Remove
        </button>
      </Controls>
    </div>
  )}
}

export default App;
