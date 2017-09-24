import React, {Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './Charts.css';



class SimpleBarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Yoga video', Views: 4005},
                {name: 'Car Video', Views: 3004},
                {name: 'Bike Video', Views: 2023},
                {name: 'Cat Video', Views: 2783},
                {name: 'Dog Video', Views: 1890},
                {name: 'Donkey Video', Views: 2394},
                {name: 'Train Video', Views: 3496},
          ]
        }
    }


	render () {
        return (
            <section className='charts'>
                <BarChart width={800} height={500} data={this.state.data}
                margin={{top: 5, right: 30, left: 20, bottom: 55}} className='chart1'>
                    <XAxis dataKey="name" className='xaxis'/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                    <Bar dataKey="Views" fill="#82ca9d" fontSize='8px' />
                </BarChart>
                <ul className='legendx'>
                    {
                        this.state.data.map( (item, i) => {
                            return <li className='legend_item'>item.name</li>
                        })
                    }
                </ul>
            </section>
        );
    }
}

export default SimpleBarChart

