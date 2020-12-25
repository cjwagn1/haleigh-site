import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Box: AnyStyledComponent = styled.div`
	height: auto;
	width: auto;
	margin: 10px;
	padding: 7%;
	background-color: white;

	border-radius: 12px;
	font-size: 20px;

	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);

	@media (max-width: 900px) {
		margin: 30px;
	}
`;

const VidBox: AnyStyledComponent = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
	padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;
const Title: AnyStyledComponent = styled.div`
	display: flex;
	justify-content: center;
	font-size: 20px;
	padding-bottom: 15px;
`;
const Vid: AnyStyledComponent = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	border: none;
`;
export default () => {
	return (
		<div>
			<Box>
				<Title>Check this out!</Title>
				<VidBox>
					{" "}
					<Vid src="https://www.youtube.com/embed/tgbNymZ7vqY" />
				</VidBox>
			</Box>
		</div>
	);
};
