import React from 'react';
import './App.css';
import Navber from './Components/Navber';
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
    
<Navber/>
<Card
tittle='Flower Card'
imageUrl='https://th.bing.com/th/id/R.677f1a3d78816e3c5ff14587e403c0c9?rik=WlkkyRXfFwi5nA&pid=ImgRaw&r=0'
body= 'Lorem ipsum, dlit. Ut natus doloremque repudiandae rem quis sed nisi sapiente maxime in, vitae rerum nobis magnam aspernatur officia autem, distinctio dolore alias eos!'
/>

</div>
    
  );
}

export default App;
