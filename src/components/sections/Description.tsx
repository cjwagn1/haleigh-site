import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Group: AnyStyledComponent = styled.div`
	display: flex;
	padding-top: 10%;
	width: 100%;
	justify-content: center;
`;
const Overview: AnyStyledComponent = styled.div`
	display: flex;
`;

const Box: AnyStyledComponent = styled.div`
	height: auto;
	width: auto;
	margin: 10px;
	padding: 10%;
	background-color: white;
	margin-top: 20px;
	margin-bottom: 20px;
	border-radius: 12px;

	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);

	padding-bottom: 5px;
	@media (max-width: 900px) {
		margin: 30px;
	}
`;
const Name: AnyStyledComponent = styled.div`
	display: flex;
	padding-top: 2%;
	justify-content: center;
	font-weight: bold;
	padding-bottom: 5%;
	font-size: 20px;
`;
const Picture: AnyStyledComponent = styled.img`
	display: block;
	width: 100%;
	max-width: 150px; /*actual image width*/
	height: auto; /* maintain aspect ratio*/
	margin: auto; /*optional centering of image*/
	border-radius: 50%;
`;
const Description: AnyStyledComponent = styled.div`
	display: flex;
	justify-content: center;
	font-size: 20px;
`;

const ImageBox: AnyStyledComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ImageWrap: AnyStyledComponent = styled.div`
	width: 55%; /*or whatever you choose*/
	margin: auto;
`;
const HelloButton: AnyStyledComponent = styled.a`
	outline: none;
	border: none;
	padding-top: 2px;
	margin-top: 10px;
	padding: 3px;
	margin-bottom: 4%;
	padding-left: 5px;
	color: white;
	border-radius: 10px;
	background: #4a82f6;
	cursor: pointer;
	text-decoration: none;
	font-size: 20px;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #6898fc;
	}
`;
export default () => {
	return (
		<Overview>
			<Group>
				<Box>
					<ImageBox>
						<ImageWrap>
							<Picture src="https://www.w3schools.com/howto/img_avatar2.png" />
						</ImageWrap>
					</ImageBox>

					<Name>Haleigh Wagner</Name>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Description>
					<ImageBox>
						<HelloButton href="mailto:haleigh.wagner@gmail.com">
							Say hello! <span role="img">👋</span>
						</HelloButton>
					</ImageBox>
				</Box>
			</Group>
		</Overview>
	);
};
