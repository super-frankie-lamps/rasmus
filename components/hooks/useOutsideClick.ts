import { MouseEventHandler, useEffect, useRef } from "react";

//   @ts-ignore
const useOutsideClick = (callback) => {
	const ref = useRef();
  
	useEffect(() => {
	  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		//   @ts-ignore
		if (ref.current && !ref.current.contains(event.target)) {
		  callback();
		}
	  };
	  
	//   @ts-ignore
	  document.addEventListener('click', handleClick, true);
  
	  return () => {
		//   @ts-ignore
		document.removeEventListener('click', handleClick, true);
	  };
	}, [ref]);
  
	return ref;
  };

export default useOutsideClick