import React, { useContext } from 'react';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppContext } from '../../Layout';

export default function Navbar() {
    const [value, setValue] = React.useState(1);
    const {category, setCategory} = useContext(AppContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Link href="/Class">
                    <Tab label="Class Routine" onClick={() => {setCategory('Class Routine'); setValue(0)}} />
                </Link>
                <Link href="/">
                    <Tab label="Class Test Routine" onClick={() => {setCategory('Class Test Routine'); setValue(1)}} />
                </Link>
                <Link href="/Diet">
                    <Tab label="Diet Routine" onClick={() => {setCategory('Diet Routine'); setValue(2)}} />
                </Link>
                <Link href="/WorkOut">
                    <Tab label="Work-Out Routine" onClick={() => {setCategory('Work-Out Routine'); setValue(3)}} />
                </Link>
            </Tabs>
        </Paper>
    );
}
