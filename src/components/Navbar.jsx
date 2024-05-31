import shoppingCartIcon from '../assets/shopping-cart2.svg';
import Dropdown from './Dropdown';
const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center text-white">
    <div className="flex items-center">
        <div className="text-lg font-bold">Brand</div>
        <div className="ml-4">
    <span className="text-sm">Link</span>
    <span className="ml-2 text-sm"><Dropdown /></span>
    </div>
    </div>

    <div className="flex items-center">
    <div className="mr-4">
          <i className="fas fa-shopping-cart text-lg"></i>
        </div>
        <div className="mr-4">
          <i className="fab fa-twitter text-lg"></i>
        </div>
    <div>
          <input type="text" placeholder="Search" className="border border-gray-300 px-2 py-1 rounded-lg" />
        </div>

    </div>
    </nav>
  )
}

export default Navbar