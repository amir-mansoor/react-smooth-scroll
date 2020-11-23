import React from "react";
import {ServicesContainer, ServicesWrapper, ServicesCard,
 ServicesIcon, ServicesH1, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/car.svg";
import Icon2 from "../../images/card.svg";
import Icon3 from "../../images/graph.svg";
const Services = () => {
	return(
		<div>
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Reduce expenses</ServicesH2>
					<ServicesP>We Help reduce your fess and increase your overall revenue.</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Virtual Offices</ServicesH2>
					<ServicesP>You can access our flatform online anywhere in the world.</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Premium Benefits</ServicesH2>
					<ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
		</div>
	)
}

export default Services;