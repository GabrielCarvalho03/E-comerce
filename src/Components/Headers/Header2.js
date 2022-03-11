import { Box, Space, Title } from "../../css/global";

import teclado from '../../Assets/teclado.png'

const Header2 =() =>{
    return(
       <Box color="white"  height={700}  className="containerheader">
           <Box  row justify="space-around" top={5} className="header" >
               <Box>
                  <Title bold size={80} >Tudo que você precisa <br/>em um só lugar. </Title>
                  <button className="btnheader2" > Saiba mais </button>
               </Box>

               <Box  top={5}>
                   <img src={teclado}/>
               </Box>
                
           </Box>
       </Box>
    )
}

export default Header2;