import { Box, Space, Title } from "../css/global";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Lottie from 'react-lottie';

import Header1 from "../Components/Headers/Header1";
import Header2 from "../Components/Headers/Header2";
import Header3 from "../Components/Headers/Header3";

import sapato1 from "../Assets/sapato1.png";
import sapato2 from "../Assets/sapato2.png";
import sapato3 from "../Assets/sapato3.png";

import watchblack from '../Assets/watchblack.png'
import Carrosel from "../Components/Carrosel";


import emailanimation from "../Assets/lotties/email.json";
import deliveryanimation from "../Assets/lotties/delivery.json";
import paymentanimation from "../Assets/lotties/payment.json";



const Home =() =>{

    const email = {
        loop: true,
        autoplay: true, 
        animationData: emailanimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const delivery = {
        loop: true,
        autoplay: true, 
        animationData: deliveryanimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const payment = {
        loop: true,
        autoplay: true, 
        animationData: paymentanimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
     

          <>
          {/*HEADER ANIMADO*/}
           <Carousel  autoPlay={true} interval={2000} infiniteLoop={true} preventMovementUntilSwipeScrollTolerance={true} >
           <div>
           <Header1/>
            </div>

            <div>
           <Header2/>
            </div>
            <div>
                <Header3/>
            </div>
           </Carousel>


      {/*RELOGIO */}
           <Box top={5}>
            <Box row justify="space-around" className="relogiowatch" >
                 <Box>
                     <img src={watchblack} className="imgrelogioblack" />
                 </Box>
                 <Box className="relogiowatchtitle">
                     <Title top={-10} bold size={60}>Você faz seu <br/> estilo todos os dias </Title>
                     <Space/>
                     <Title opacity size={60} >experimente vários estilos <br/>personalizados , para o seu<br/>melhor look .</Title>
                     <button className="btnrelogio">Saber mais</button>
                 </Box>
            </Box>

           </Box>




               {/*CARROSEL DE ITENS */}


               <Carrosel color={"blue"}/>

               
                   {/*INFO */}

                   <Box>
                       <Box row justify="space-evenly" left={8} top={8} className="boxinfo">
                           <Box>
                               <Box left={-30} className="animationbox">
                               <Lottie options={email}
                                  height={300}
                                  width={300}
                                        />
                               </Box>
                               <Box width={70} className="boxinfotitle">
                                   <Title bold>Receba promoções via email </Title>
                               </Box>
                           </Box>

                           <Box>
                               <Box  left={-30} className="animationbox">
                               <Lottie options={delivery}
                                  height={300}
                                  width={300}
                                        />
                               </Box>
                               <Box width={70}className="boxinfotitle">
                                   <Title bold>Entregas 100% rapidas </Title>
                               </Box>
                           </Box>

                           <Box>
                               <Box  left={-30} className="animationbox">
                               <Lottie options={payment}
                                  height={300}
                                  width={300}
                                        />
                               </Box>
                               <Box width={70} className="boxinfotitle">
                                   <Title bold>Pagamenrto sem burocracia  </Title>
                               </Box>
                           </Box>

                       </Box>
                   </Box>

                   <Box top={10} className="boxtitlemodafeminina">
                                   <Title text="center" bold>Moda feminina </Title>
                               </Box>
               <Carrosel  color={"dark"}/>





    {/*SAPATO*/}
    <Box top={5}>
            <Box row justify="space-around" className="boxsapato" >
                 <Box className="Boxtitlesapato" width={40}>
                     <Title top={-10} bold size={60}>Desfrute sem sair de casa .</Title>
                     <Space/>
                     <button className="btnrelogio">Saber mais</button>
                 </Box>
                 <Box>
                 <img src={sapato1} className="imgsapato" />
                 </Box>
            </Box>

           </Box>

               {/*Footer*/}
               <Box  color="dark" height={100} row align="center" justify="center" >
                   <Title color="white" bold text="center">Todos os direitos reservados </Title>

               </Box>
      
          </>
    )
}

export default Home;