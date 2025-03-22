
import { useEffect } from 'react';
import './App.css';
// import Apisecond from './Component/Apisecond';
import Navbar from './Component/Navbar';
import Task from './Component/Task/Task';
// import Impress from './Component/Impress/Impress';



function App() {


  // const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const handleCopy = (event) => {
      // Prevent default copy action
      event.preventDefault();

      // Set custom message to clipboard
      event.clipboardData.setData("text/plain", " ................");
    };

    // Attach the event listener
    document.addEventListener("copy", handleCopy);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <div>

      <Navbar />

      {/* <Impress />  */}
      {/* <Apisecond /> */}

      <Task/>




    </div>
  );
}

export default App;
