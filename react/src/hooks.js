import { useState } from 'react';

export const useModal = (mode = false) => {
	const [open, setOpen] = useState(mode);
	const toggle = () => setOpen(!open);

	return [open, setOpen, toggle];
};
