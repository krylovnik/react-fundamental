import React from 'react';
import s from './MySelect.module.css'

const MySelect = ({options,defaultValue,sortFunction,selectedSort}) => {
    return (
        <select value={selectedSort} onChange={(e)=>sortFunction(e.target.value)} className={s.mySelect}>
            <option disabled value="">{defaultValue}</option>
            { options.map(option=>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
            
        </select>
    );
};

export default MySelect;