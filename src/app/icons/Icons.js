import React from 'react';

const networkBgColor = {
	f: '#1877F2',
	instagram: '#F00073',
	youtube: '#FF0000',
	twitter: '#1DA1F2',
	tiktok: '#161722',
	google_business: '#4285F4',
	pinterest: '#E60023',
	linkedin: '#2867B2'
}

export default function Icons(props) {
	const size = props.width ? props.width : 24;
	const padding = props.padding ? props.padding : 5;
	const margin = props.margin ? props.margin : 2;

	return (
		<img 
			src={"assets/images/icons/" + props.value + ".svg" }
			style={{
				backgroundColor: networkBgColor[props.value],
				borderRadius: "50%",
				width: size,
				height: size,
				padding: padding,
				margin: margin
			}}
			alt={props.value}
		/>
	)
}