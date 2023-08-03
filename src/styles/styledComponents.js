import styled from "styled-components";


export const ListWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const ListGroup = styled.div`
width: 600px;
padding: 20px;
max-width: 100%;
display: flex;
flex-direction: column;
margin: 2rem;
overflow: hidden;
@media (min-width: 768px) {
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      border-radius: 20px;
}   
`;

export const Flex = styled.div`
display: flex;
align-items: center;
justify-content: ${props=>props?.$justify || ""};
width: ${props=>props?.$width || ""}
`;


export const StreamIndex = styled.div`
border-radius: 50%;
    height: 20px;
    min-width: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.6rem;
    background-color : ${props=>props?.$backgroundColor || ""};
    p{
        color: #ffffff;
        font-weight: 600;
    }
`;

export const AvatarImage = styled.div`
border-radius: 50%;
min-height: 30px;
min-width: 30px;
position: relative;
margin: 0.6rem;
`;

export const Text = styled.p`
text-align: center;
font-weight:550;
margin: 5px;
font-size: 14px;
`;

export const PointsCount = styled.p`
text-align: center;
font-weight: 500;
margin: 5px;
font-size: 14px;
color: rgb(205, 70, 70);
`;