import './App.scss';
import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import ProfileInfo from './Components/ProfileInfo/ProfileInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Description />
      <ProfileInfo />
    </div>
  );
}

export default App;
