import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogoUrl from '../../../assets/images/common/logo.png';
import phoneWithText from '../../../assets/images/common/text_with.png';

const Nav = () => {
	const [menu, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정


	const handleToggleMenu = () => {
		setMenu(menu => !menu); // on,off 개념 boolean
	}

	return (
		<div className="navigation-wrap">
			<button className="menuBtn" onClick={handleToggleMenu}>토글</button>
			<div className="menu-wrap">
				<div className={menu ? "show-menu" : "hide-menu"}>
					<div className="bg" onClick={handleToggleMenu}></div>
					<div className="nav">
						<button>닫기</button>
						<img src={LogoUrl} alt="술뽀" />
						<h4><img src={phoneWithText} alt="내 폰으로 모여" /></h4>
						<Link to="/">main1</Link>
						<Link to="/kimchi">김치게임</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
