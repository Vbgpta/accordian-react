import React, {useState} from 'react';
import './Accordian.css';

function Accordian({items}) {
    const [activeIndex,setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return (
        <div>
            {items.map((item,index)=>(
                <div key={item.title}>
                <button onClick={() =>handleClick(index)}>{item.title}</button>
                {index === activeIndex && <p>{item.content}</p>}
                </div>
            ))}
        </div>
    );
}
export default Accordian;