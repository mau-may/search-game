import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../../../locales/i18n";


const Alert = ({ isOpen, msg }:{isOpen:boolean, msg:string}) => {
	const { t } = useTranslation(); 

	useEffect(() => {
	},[]);
	
	
	return (
		<div className="alert-content">
			{isOpen &&
				(
				<div className="msg-wrap">
					{msg}
				</div>
				)
			}
		</div>
	);
};

export default Alert;
