import React from 'react';
import Accordian from './Accordian';

const items = [
  {
    title:"Section 1",
    content:"This is the content of section1"
  },
  {
    title:"Section 2",
    content:"This is the content of section2"
  },
  {
     title:"Section 3",
     content:"This is the content of section3"
  }

]
function App() {
  return (
    <div>
      <Accordian items={items}/>
    </div>
  );
}

export default App;
