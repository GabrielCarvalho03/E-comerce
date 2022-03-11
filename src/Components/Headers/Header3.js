import { Box, Space, Title } from "../../css/global";

import heatesett from '../../Assets/heatesett.png'

const Header3=() =>{
    return(
       <Box color="dark"  height={700}  className="containerheader" >
           <Box  row justify="space-around"  className="header"  >
               <Box>
                  <Title color="white" bold size={80} >Você pensou . <br/>a gente tem </Title>
                  <button className="btnheader1" > Saiba mais </button>
               </Box>

               <Box  top={5}>
                   <img src={heatesett}/>
               </Box>
                
           </Box>
       </Box>
    )
}

export default Header3;