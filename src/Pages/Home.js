import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Phone from '../Components/Phone';
import Categories from '../Components/Categories';
import Campaigns from '../Components/Campaigns';
import Socialmedia from '../Components/Socialmedia'
import Infocards from '../Components/Infocards';



function Home() {
  return (
    <div>
      <Phone />
      <Categories />
      <Campaigns />
      <Socialmedia />
      <Infocards />
    </div>
  );
}

export default Home;
