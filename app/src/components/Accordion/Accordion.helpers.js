export const toggle = (setIsopen, isOpen) => () => {
	setIsopen(!isOpen);
};

export const getLabel = (isOpen, closeLabel, openLabel) =>
	isOpen ? closeLabel : openLabel;
