import React, {useState} from 'react';

const Light = (props) => { 

    const [ colorSelect, setColorSelect] = useState('');

    return(
        <>
            <div 
                className={`light red ${(colorSelect === 'red')? 'selected' : ''}`} 
                onClick={() => { setColorSelect('red')}}
            />
            <div 
                className={`light yellow ${(colorSelect === 'yellow')? 'selected' : ''}`} 
                onClick={() => { setColorSelect('yellow')}}
            />
            <div 
                className={`light green ${(colorSelect === 'green')? 'selected' : ''}`} 
                onClick={() => { setColorSelect('green')}}
            />
        </>
        )
}

export default Light;
