import { useState } from 'react';

const useShownModal = () => {
	const [isShown, setIsShown] = useState(false);
	const handleCloseClick = () => {
		setIsShown(false)
	}
  return {isShown, setIsShown, handleCloseClick};
};

export default useShownModal;
