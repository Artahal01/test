import { NavBar } from '../home/navBar/index.jsx';
import { Block } from '../home/block/index.jsx';
import '../home/style.css'
export const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <div className='blockContainer'>
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  )
}