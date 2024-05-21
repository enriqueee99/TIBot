const steps = [
    {
        id: "intro",
        message: "Hola, soy TIBot, el asistente virtual de la carrera de TI, ¿Cómo te llamas?",
        trigger: 'pregunta-nonbre'
    },
    {
        id: 'pregunta-nonbre',
        user: true,
        /* validator: (value) =>{
            if(/[A-Z]{1}[a-z]{2,15}/.test(value)){
                return true
            } else {
                return 'por favor escribe un nombre valido'
            }
        }, */
        trigger: 'respuesta-nombre'
    },
    {
        id: 'respuesta-nombre',
        message: 'Hola {previousValue}, un gusto conocerte! ¿puedo ayudarte en algunas de estas inquietudes y consultas académicas?',
        trigger: 'response_need'
    
    },
    {   //opciones principales
        id: 'response_need',
        options: [
            {value: '1', label: 'Información general', trigger: 'information_response'},
            {value: '2', label: 'Admisión y matriculas', trigger: 'admition_response'},
            {value: '3', label: 'Horarios y clases', trigger: 'schedule_response'},
            {value: '4', label: 'Bienestar estudiantil', trigger: 'welfare_response'},
            {value: '5', label: 'Otros', trigger: 'others_response'}
        ]
    },

    // ............... botones respuestas de opcion informacion general --------------------
    {  
        id: 'information_response',
        message: '¿Qué tipo de información general necesitas? ',
        end: true
    },
        


      // ............... botones respuestas de opcion informacion admision y matricula --------------------
    {
        id: 'admition_response',
        message: 'escogiste la opcion admision y matricula',
        end: true
    },



    // ............... botones respuestas de opcion informacion horarios y clases --------------------
    {
        id:'schedule_response',
        message: 'escogiste la opcion de horarios y clases',
        end: true
    },



    // ............... botones respuestas de opcion informacion bienestar estudiantil --------------------
    {
        id: 'welfare_response',
        message: 'escogiste la opcion de bienestar estudiantil',
        end: true
    },


        // ............... botones respuestas de opcion informacion otros --------------------
    {
        id: 'others_response',
        message: 'escogiste la opcion de otros, verá diosito cómo te ayuda pq hasta aqui pienso programar',
        end: true
    },

    
  
    
    

   

    // ----------- opciones de respuesta nivel 2 ----------------
    // ----- respuestas de informacion general

 
]

export default steps;