
import './App.scss';
import AuthContextProvider from './context/AuthContext';
import Routes from './pages/Routes'
function App() {
  return (
    <AuthContextProvider className="App">
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
