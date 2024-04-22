import React, { useState } from 'react';
import Light from './light';
import Dimmer from './Dimmer';

export default function DimmedLight() {
    const [dimPercentage, setDimPercentage] = useState(100);
    return (
        <div className="dimmed-light">
            <Light dimPercentage={dimPercentage} />
            <Dimmer dimPercentage={dimPercentage} setDimPercentage={setDimPercentage} />
        </div>
    );
}