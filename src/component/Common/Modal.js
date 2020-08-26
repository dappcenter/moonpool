import React, { useEffect } from 'react';

function Modal(props) {

	useEffect(() => {
		function closeModal() {
			props.closeModal();
		}

		if (props.isOpen) {
			document.body.classList.add('modal-open');
			document.getElementById("modal-backdrop").classList.add('active');
			document.getElementById("modal-backdrop").addEventListener("click", closeModal);
		} else {
			document.body.classList.remove('modal-open');
			document.getElementById("modal-backdrop").classList.remove('active');
			document.getElementById("modal-backdrop").removeEventListener("click", closeModal);
		}
	}, [props]);

	return (
		<>
			{props.isOpen &&
				<div className="modal">
					<div className="modal__content">
						<div className="modal__close" onClick={props.closeModal}>×</div>
						{props.children}
					</div>
				</div>
			}
		</>
	)
}

export default Modal;
