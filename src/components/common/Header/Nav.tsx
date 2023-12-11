import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogoUrl from '../../../assets/images/common/logo.png';
import phoneWithText from '../../../assets/images/common/text_with.png';
import kimchi from '../../../assets/images/icon/kimchi.png';
import stopwatch from '../../../assets/images/icon/stopwatch.png';

const Nav = () => {
	const [menu, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정


	const handleToggleMenu = () => {
		setMenu(menu => !menu); // on,off 개념 boolean
	}

	return (
		<div className="navigation-wrap">
			<button className="menu-btn" onClick={handleToggleMenu}>
				<span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
			</button>
			<div className="menu-wrap">
				<div className={menu ? "show-menu" : "hide-menu"}>
					<div className="bg" onClick={handleToggleMenu}></div>
					<div className="nav">
						<button className="close" onClick={handleToggleMenu}>
							<span className="line line1"></span>
							<span className="line line2"></span>
						</button>
						<Link className="logo-img" to="/"  onClick={handleToggleMenu}><img src={LogoUrl} alt="술뽀" /></Link>
						<h4 className="title-mini"><img src={phoneWithText} alt="내 폰으로 모여" /></h4>
						<ul className="menu-link" onClick={handleToggleMenu}>
							<li><Link to="/kimchi"><img src={kimchi} alt="김치" /><span>김치게임</span></Link></li>
							<li><Link to="/stopwatch"><img src={stopwatch} alt="스톱워치" /><span>스톱워치 게임</span></Link></li>
						</ul>
						<address className="copy">ⓒ SOBER SISTERS</address>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
