import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
   constructor(props){
    super(props);
    this.state = {
        data: [
            {name: 'John S.', salary: 800, increase: true, id: 1},
            {name: 'Jacob B.', salary: 1000, increase: false, id: 2},
            {name: 'Bob M.', salary: 1700, increase: true, id: 3}
        ]
    }
    this.maxId  = 4
   }
   
   deleteItem = id => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
   }

   addItem = (name, salary) => {
        const newItem = {name, salary, increase: false, id: this.maxId++}
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {data: newArr}
        })
   }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={data} onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
   }
}

export default App;