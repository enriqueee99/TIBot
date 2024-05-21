import react, {Component} from "react";
import Chatbot from "react-simple-chatbot"
import { ThemeProvider } from "styled-components";
import steps from "./Steps"; 
import botAvatarTi from '../images/avatarBot.jpg'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#224266',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBlublecolor: '#eb3449',
    botFontColor: '#000',
    userBubleColor: '#0cb3c9',
    userFontColo: '#fff'
}


export default class Contenido extends Component{
    render(){
        return(
            <div>
                <ThemeProvider theme={theme}>
                    <Chatbot
                        steps={steps}
                        headerTitle= 'TIBot'
                        botAvatar= {botAvatarTi}
                        floating = 'false'
                    
                    />
                </ThemeProvider>
            </div>)
            
        
    }
}




