import {useAppSelector} from "../app/hooks";


// Custom hook to retrieve the counter
const useCount = () => {

  const count = useAppSelector((state) => state.counter.value);

  return {count};
};

export {useCount};
