import React from 'react';
import Characters from './Characters.js';

import './StarWars.css';

const Characterlist = props => {
    return (
        <div classname = 'Characterlist-Wrap'>
             {props.characters.map}
        </div>
    );
};

export default Characterlist;