import React from 'react';

import Link from 'next/link';
const Class = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Click on this icon {'>'}</h2>
            <Link href="/">
                <img style={{ width: '30%', cursor: 'pointer' }} src="https://i.imgur.com/XMsPQsD.png" alt="img" />
            </Link>

        </div>
    );
};

export default Class;