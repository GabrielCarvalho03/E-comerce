import {  Box, Title , Image }  from '../css/global'

import relogio from '../Assets/relogiowatch.png'
import teclado from '../Assets/teclado.png'
import heatesett from '../Assets/heatesett.png'
import watchblack from '../Assets/watchblack.png'

const Card = ({img, title, buy}) =>{
   

    return(
        <Box width={20} color="white" height={450} className="card" >
            <Box  className='boxcard' row  justify="center">
                <Box >
                    <Image className='imgcard' src={img == "teclado" && teclado || img=="heatesett" && heatesett || img=="relogio" && relogio  || img=="watchblack" && watchblack  }  />
                </Box>
                <Box paddingTop={10}>
                  <Title  className='titlecard' bold  text="center" >{title}</Title>
                </Box>
                <Box  paddingTop={10} >  
                <Title className='titlecard' bold size={40}>{buy} R$</Title>
                </Box>

            </Box>
            
         
        </Box>
    )
}

export default Card;