import React from "react";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import Video from "./components/sections/Video";
import Description from "./components/sections/Description";

const Group: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "Poppins", sans-serif;
	width: 100%;
`;
const Constraint: AnyStyledComponent = styled.div`
	max-width: 40em;
	margin-left: auto;
	margin-right: auto;
`;
const Footer: AnyStyledComponent = styled.div`
	font-size: 20px;
	font-weight: bold;
	padding-top: 10px;
	padding-bottom: 10px;
	justify-content: center;
	display: flex;
`;

export default () => {
	return (
		<Group>
			<Constraint>
				<Description />
				<Video />
				<Footer>©2020 Haleigh Wagner</Footer>
			</Constraint>
		</Group>
	);
};
