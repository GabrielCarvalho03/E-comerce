import {  Box }  from '../css/global'
import Card from './Card';


const Carrosel = ({color}) =>{

    return(
        <Box color={color} height={500} top={8}  className='containercard'  >
         <Box paddingTop={1.5} row justify="space-around" align="center"  className='containerboxcard'>
     
           <Card img="watchblack" 
              title="Relogio watch Branco"
              buy=" 149,99 "
           />

            <Card img="relogio" 
              title="Relogio watch Branco"
              buy=" 149,99 "
           />

           <Card img="heatesett" 
              title="heatesett preto"
              buy=" 129,99 "
           />

            <Card img="teclado" 
              title="teclado gamer"
              buy=" 49,99 "
           />

           

         
         </Box>
        </Box>
    )
}

export default Carrosel;