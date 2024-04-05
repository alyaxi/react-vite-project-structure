import { threeHorizontalLineIcon } from '../../utils/icons';

const Header = ({ setIsOpen }) => {
  return (
    <div className="flex items-center w-full h-[60px] sm:h-[70px] bg-white-300 px-5 sm:px-14">
        {/* Sidebar open option */}
        <div className="sm:hidden w-6 h-6 mt-3 ml-3 cursor-pointer" onClick={()=>setIsOpen(true)}>{threeHorizontalLineIcon}</div>
        <h2 className='text-black mt-2 ml-4 sm:ml-0 sm:mt-0 font-bold text-lg sm:text-4xl'>Header</h2>
    </div>
  );
}

export default Header