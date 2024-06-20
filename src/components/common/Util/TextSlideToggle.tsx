import { useState } from 'react';



const TextSlideToggle = ({ data, type, setType }:{data:any, type:boolean, setType:any}) => {
	const toggleHandler = () => {
		setType(!type);
	};


	return (
		<div className={`text-toggle-radio ${type ? "--checked" : ""}`} >
			<input type="radio" name={data.name} value={data.falseValue} 
				id={data.falseValue} defaultChecked={true} />
			<label htmlFor={data.falseValue} onClick={toggleHandler}>{data.falseLabel}</label>
			<input type="radio" name={data.name} value={data.trueValue} 
				id={data.trueValue} />
			<label htmlFor={data.trueValue} onClick={toggleHandler}>{data.trueLabel}</label>
		</div>
	);
};

export default TextSlideToggle;