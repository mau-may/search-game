import { useEffect, useState } from 'react';
import { GameSubject } from '../../components/Gamesubject';
import { SearchBar, SearchKeyword } from '../../components/Kimchi';
import { useTranslation } from "react-i18next";
import { Modal } from '../../components/common/Modal';



const Search = () => {
	const { t } = useTranslation();
	const [searchList, setSearchList]:any = useState([]);
	const [inputList, setInputList]:any = useState([]);
	const [confirmModal, setConfirmModal]:any = useState(false);
	// const [confirmHtml, setConfirmHtml]:HTMLElement = useState('<div></div>');
	
	return (
		<div className="game-wrap kimchi-wrap">
			<GameSubject type="kimchi" />
			<SearchBar searchList={searchList} setSearchList={setSearchList} 
						inputList={inputList} setInputList={setInputList} />
			<div className="notice">{t(`kimchi.notice`)}</div>

			<SearchKeyword data={inputList} />
			{/* <Modal isOpen={confirmModal} ></Modal> */}
		</div>
	);
};

export default Search;
