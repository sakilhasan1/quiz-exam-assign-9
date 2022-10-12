import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'


const Statistics = () => {
    const data = [
        {
            id: 1,
            logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            name: "React",
            total: 8
        },
        {
            id: 2,
            logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            name: "JavaScript",
            total: 9
        },
        {
            id: 4,
            logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            name: "CSS",
            total: 8
        },
        {
            id: 5,
            logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            name: "Git",
            total: 11
        }

    ]

    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics; 