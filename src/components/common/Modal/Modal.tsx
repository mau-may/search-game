import React from 'react';
import LogoUrl from '../../../assets/images/common/logo.png';
import qr from '../../../assets/images/icon/qr.png';
import { useTranslation } from "react-i18next";
import ReactModal from 'react-modal';
import i18n from "../../../locales/i18n";



const Modal = ({ isOpen }:{isOpen:boolean}) => {
	const { t } = useTranslation(); //appElement:HTMLElement
	
	return (
		<ReactModal isOpen={isOpen} >
		</ReactModal>
	);
};

export default Modal;
