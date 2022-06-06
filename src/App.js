import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <body className='bg-background transition-all lg:h-screen h-full'>
      <Navbar />
      <Content />
    </body>
    
  );
}

export default App;
