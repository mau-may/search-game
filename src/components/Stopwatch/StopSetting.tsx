import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextSlideToggle } from '../common/Util';
import { useTranslation } from "react-i18next";
import { Alert } from '../common/Modal';

const StopSetting = () => {
	const { t } = useTranslation();
	const [orgKw, setKw]:any = useState('');
	const [isOpen, setIsOpen]:any = useState(false);
	const [count, setCount]:any = useState(1);
	const [alertMsg, setAlertMsg]:any = useState("");
	const [type, setType]:any = useState(false);

	const TOGGLE_DATA:any = {
		name: "setRule",
		falseLabel: "낮은 숫자",
		falseValue: "LOW",
		trueLabel: "높은 숫자",
		trueValue: "HIGH"
	};

	
	// 초기 실행
	useEffect(() => {
		// dsSlideToggle();
	});


	const fnCountSet = (type:string) => {
		setIsOpen(false);
		if(type === "minus"){
			if(count !== 1){
				setCount(count-1);
			} else {
				setAlertMsg(t(`stopwatch.min-count`)); //1명 이상 가능
				setIsOpen(true);
			}
		} else {
			if(count !== 20){
				setCount(count+1);
			} else {
				setAlertMsg(t(`stopwatch.max-count`)); //1명 이상 가능
				setIsOpen(true);
			}
		}
	};


	return (
		<>
			<section>
				<h4 className="sub-title">{t(`stopwatch.set-rule`)}</h4>
				<TextSlideToggle data={TOGGLE_DATA} type={type} setType={setType} />
			</section>

			<section className="count-section-wrap">
				<h4 className="sub-title">{t(`stopwatch.set-count`)}</h4>
				<div className="count-wrap">
					<button type="button" onClick={()=>fnCountSet("minus")}>-</button>
					<input type="number" name="personnel" value={count}  />
					<button type="button" onClick={()=>fnCountSet("pluse")}>+</button>
				</div>
				<Alert isOpen={isOpen} msg={alertMsg} />
			</section>
			<Link to="/stopwatch/start" state={{ type: type, count: count }} className="btn primary">{t(`common.start`)}</Link>
		</>
	);
};


export default StopSetting;