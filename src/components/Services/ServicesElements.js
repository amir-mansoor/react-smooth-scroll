import styled from "styled-components";

export const ServicesContainer = styled.div`
	height: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #010606;

	@media screen and (max-width: 900px) {
		display: none;
	}
`

export const ServicesWrapper = styled.div`
	max-width:1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;
	z-index: 999;	
`

export const ServicesCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	max-heihgt: 340px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		box-shadow: 0 1px 5px #fff;
		filter: blur(0.3px);
	}
	z-index: 999;
`

export const ServicesIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
	z-index: 999;
`

export const ServicesH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 30px;
	margin-left: 4px;
	z-index: 999;
	transform:translate(476px, -254px);
`

export const ServicesH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
	z-index: 999;
`

export const ServicesP = styled.p`
	font-size: 1rem;
	text-align: center;
	z-index: 999;
`