import { toast } from 'react-toastify';

const toastMessage = (message, type, duration=2000) => {
  if(type === 'info'){
    toast.info(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: duration,
    });
  }
  else if(type === 'success'){
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: duration,
    });
  }
  else if(type === 'error'){
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: duration,
    });
  }
}

export default toastMessage;