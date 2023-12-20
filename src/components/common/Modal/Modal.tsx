import { Component, useEffect, useState } from 'react';
import LogoUrl from '../../../assets/images/common/logo.png';
import qr from '../../../assets/images/icon/qr.png';
import { useTranslation } from "react-i18next";
import ReactModal from 'react-modal';
import i18n from "../../../locales/i18n";
import { FALSE } from 'sass';


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
		display: "flex",
		width: "80%",
		zIndex: "150",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		borderRadius: "10px",
		border:"1px solid #000",
		boxShadow:"none",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},
};
interface ModalProps {
	children: React.ReactNode;
	onRequestClose: () => void;
}

const Modal = ({ isOpen, setIsOpen, img, content, btnType }:{isOpen:boolean, setIsOpen:any, img:string, content:any, btnType:string}) => {
	const { t } = useTranslation(); //appElement:HTMLElement
	// 모달을 닫을 때 onRequestClose 함수 호출

	const closeModal = () => {
		setIsOpen(false);
	};
	useEffect(() => {
	},[]);
	
	return (
		<ReactModal isOpen={isOpen} 
				// onRequestClose={() => closeModal()}
				shouldCloseOnOverlayClick={true} ariaHideApp={false} 
				style={customModalStyles} >
			<div className="modal-content">
				{img 
					? (<img src={img} className="thumb" />) 
					: ("")}
				<div className="content">
					{content()}
				</div>
				<div className="btn-wrap">
				{
					btnType === "confirm" ?
					( <button className="btn primary" onClick={closeModal}>{t(`common.confirm`)}</button> ) 
					: ( <button className="btn default" onClick={closeModal}>{t(`common.close`)}</button> )
				}
				</div>
			</div>
		</ReactModal>
	);
};

export default Modal;
