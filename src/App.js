import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {MarkdownProvider} from './context/MarkdownContext';
import Main from './components/Main';




function App() {
  return (

  <MarkdownProvider>
    <Sidebar />
    <div className="App flex flex-col">
     <Header/>
     <Main />
    </div>
  </MarkdownProvider>
  );
}

export default App;
