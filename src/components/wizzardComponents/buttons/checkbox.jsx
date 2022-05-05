//React import
import React from 'react';

const Checkbox = ({ items, checked, setCurrentChecked, setDefaultChecked }) => {

    return (
        <div>
            {
                items.map((item, index) => (
                    <div key={item.id}>
                        <input 
                            type="checkbox" 
                            id={item.id} 
                            name={item.value} 
                            value={item.value}
                            defaultChecked={checked[index]}
                            onChange={(e) => setDefaultChecked(setCurrentChecked, item.index, e.target.checked)}            
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Checkbox;