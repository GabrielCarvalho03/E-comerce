import styled from 'styled-components'
import theme from '../Assets/theme.json'
import { Link } from 'react-router-dom';



export const Container = styled.div`
 

    display: ${({row}) => row ? 'flex' : 'colum' }% ;


`;

export const Image = styled.img`

`;


export const Box = styled.div`
background: ${({color}) => color ? theme.Colors[color ] : '' };
   width: ${({width}) => width ? width : 'auto' }%;
   height: ${({height}) => height ? height  : 'auto' }px;
   margin-left: ${({left}) => left ? left : '' }%;
   margin-right: ${({right}) => right ? right : '' }%;
   margin-top: ${({top}) => top ? top : '' }%;
   margin-bottom: ${({bottom}) => bottom ? bottom : '' }%;
   padding-top: ${({paddingTop}) => paddingTop ? paddingTop : '' }%;
   padding-left: ${({paddingLeft}) => paddingLeft ? paddingLeft : '' }%;
   display: ${({row}) => row ? 'flex' : '' } ;
   flex-direction: ${({colum}) => colum ? 'colum' : '' } ;;
   justify-content:  ${({justify}) => justify ? justify : '' } ;
   align-items:  ${({align}) => align ? align : 'center' } ;
  
`;

export const Title = styled.h1`
font-family: 'Ubuntu' ,sans-serif;
font-size: ${({size}) => size ? size : ''}px;
font-weight:${({bold}) => bold ? "bold" : 'lighter'};
text-align:${({text}) => text ? text: ''}; 
margin-top: ${({top}) => top ? top : '' }%;
letter-spacing:${({spacing}) => spacing ? spacing: 0}px;
padding-left: ${({paddingleft}) => paddingleft ? paddingleft : '' }%;
color: ${({color}) => color ? theme.Colors[color] : 'dark'};
margin-bottom: ${({bottom}) => bottom ? bottom : '' }%;
opacity:  ${({opacity}) => opacity ? 0.8 : '' }; ;

`;
export const Space = styled.div`
height: 20px ;

`;
