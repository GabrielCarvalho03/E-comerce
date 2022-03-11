import { Box, Space, Title } from "../css/global";
import { Link } from "react-router-dom";


import imgLogin from "../Assets/imgLogin.png"

const Singin =() =>{
    return(
     <Box row justify="center" align="center">
        <Box row width={100} className="containersingIN" >

            <Box className="form" left={12} width={30}  height={500}className="form" color="dark">
               <Title top={-10} className="titlebox" color="white" text="center" bold >Faça Login</Title>
               
       

                <Box width={90} left={5} top={8}>

               <input required type="email" placeholder="email " className="input" />
               
                   <input required type="password" placeholder="Senha"  className="input"/>
                </Box>
                <Box width={60} top={5}left={-5}  row aling="center" justify="center">
                <button className="btnLogin" ><Link  className="linkar" to="/Home" >Enviar</Link></button>
                </Box>

             
            
            </Box>
            <Box paddingLeft={10} top={5}>
                <Title className="titlesigIn" bold size={60}>Tudo que você precisa <br/> Onde você precisa</Title>
                <img src={imgLogin} className="imgLogin"/>
            </Box>

            
            
        </Box>
     </Box>
    )
}

export default Singin;