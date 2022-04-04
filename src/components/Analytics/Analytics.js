import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis } from 'recharts';
import useCharts from '../../Hook/useCharts';

import './Analytics.css';

const Analytics = () => {
    const [charts] = useCharts();
    return (
        <section className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 my-8'>
            {/* chart 1 */}
            <LineChart
                width={350}
                height={250}
                data={charts}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
                <Line type="monotoneX" dataKey="investment" stroke="#8884d8" />
            </LineChart>

            {/* chart 2 */}
            <AreaChart
                width={350}
                height={250}
                data={charts}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>

            {/* chart 3 */}
            <BarChart width={350} height={250} data={charts}>
                <Bar dataKey="sell" fill="#8884d8" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
            </BarChart>
        </section>
    );
};

export default Analytics;