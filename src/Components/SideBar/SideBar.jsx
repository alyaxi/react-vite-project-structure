
import { customerIcon } from '../../utils/icons';
import Button from '../Button/Button';

const SideBar = ({ isOpen, setIsOpen, }) => {
  return (
    <div className={`top-0 left-0 min-h-screen bg-mygreen ${isOpen ? "fixed block z-50 w-[90%]":"fixed hidden w-[340px]"} max-w-[400px] sm:block`}>
        <div className="flex justify-end mr-4 mt-2 text-white font-bold cursor-pointer sm:hidden" onClick={() => setIsOpen(false)}>
            X
        </div>
        <div className="mt-6 sm:mt-8 flex justify-center w-full mb-14">
            {/* <img src={icon} className='object-fill' alt="" /> */}
            <h2 className="text-4xl font-bold">SideBar</h2>
        </div> 
        <div className="flex justify-center w-full mb-3">
            <Button onClick={()=>{console.log("Button 1 Clcked")}} className={`bg-gradient-to-bl hover:from-green-700 hover:to-green-950`}>
                <span className='ml-5 mr-8'>{customerIcon}</span>
                <span>Button 1</span>
            </Button>
        </div>
        <div className="flex justify-center w-full mb-3">
            <Button onClick={()=>{console.log("Button 2 Clcked")}} className={`bg-gradient-to-bl hover:from-green-700 hover:to-green-950`}>
                <span className='ml-5 mr-8'>{customerIcon}</span>
                <span>Button 2</span>
            </Button>
        </div>
        <div className="flex justify-center w-full mb-3">
            <Button onClick={()=>{console.log("Button 3 Clcked")}} className={`bg-gradient-to-bl hover:from-green-700 hover:to-green-950`}>
                <span className='ml-5 mr-8'>{customerIcon}</span>
                <span>Button 3</span>
            </Button>
        </div>
    </div>
  );
}

export default SideBar