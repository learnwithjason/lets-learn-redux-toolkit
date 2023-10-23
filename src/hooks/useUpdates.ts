import { useDispatch } from 'react-redux';
import {decremented, incremented} from "../features/counter/counter-slice";


// Custom hook to manipulate the counter
const useUpdates = () => {
  const dispatch = useDispatch();

 // Functions to modify counter value
  const increment = () => dispatch(incremented());
  const decrement = () => dispatch(decremented());

  return {increment,decrement};
};

export {useUpdates};
