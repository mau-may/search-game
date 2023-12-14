import React from 'react';
import LogoUrl from '../../../assets/images/common/logo.png';
import qr from '../../../assets/images/icon/qr.png';
import { useTranslation } from "react-i18next";
import ReactModal from 'react-modal';
import i18n from "../../../locales/i18n";


const customModalStyles: ReactModal.Styles = {
	overlay: {
		backgroundColor: " rgba(0, 0, 0, 0.4)",
		width: "100%",
		height: "100vh",
		zIndex: "10",
		position: "fixed",
		top: "0",
		left: "0",
	},
	content: {
		width: "360px",
		height: "180px",
		zIndex: "150",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		borderRadius: "10px",
		boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
		backgroundColor: "white",
		justifyContent: "center",
		overflow: "auto",
	},
};

const Modal = ({ isOpen, msg }:{isOpen:boolean, msg:string}) => {
	const { t } = useTranslation(); //appElement:HTMLElement
	
	return (
		<ReactModal isOpen={isOpen} style={customModalStyles}>
		</ReactModal>
	);
};

export default Modal;
