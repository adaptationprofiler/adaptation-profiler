import React, { PureComponent } from 'react';
import GraphScript from '../scripts/GraphScript'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

export default class Example extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.accuracy = props.extraData
    }

    componentDidMount() {
        GraphScript().then((response) => { this.setState({ data: response }); console.log(response) })
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={300}
                    data={this.state.data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2AB06E" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#2AB06E" stopOpacity={0.4} />
                        </linearGradient>
                        <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#E33737" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#E33737" stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Time" type="number" domain={['dataMin', 'dataMax']} ticks={[15, 30, 45, 60]}>
                        <Label value="Time" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                        <Label value="Power (mW)" offset={0} position="middle" angle={-90} />
                    </YAxis>
                    <YAxis yAxisId="right" orientation="right">
                        <Label value="Accuracy (%)" offset={0} position="middle" angle={-90} />
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Area type="monotone" dataKey="Power" stroke="#2AB06E" fillOpacity={1} fill="url(#colorPv)" activeDot={{ r: 2 }} />
                    <Area type="monotone" dataKey="Accuracy" stroke="#E33737" fillOpacity={1} fill="url(#colorRv)" activeDot={{ r: 2 }} />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
