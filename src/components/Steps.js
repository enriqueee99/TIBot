const steps = [
    {
        id: "intro",
        message: "Hola, soy TIBot, el asistente virtual de la carrera de TI, ¿Cómo te llamas?",
        trigger: 'pregunta-nonbre'
    },
    {
        id: 'pregunta-nonbre',
        user: true,
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
        trigger: 'botoms_information'
    },   
        {  //-------  botones de informacion general
            id: 'botoms_information',
            options: [
                {value: '1', label: 'Prácticas pre-profesionales y vinculación con la sociedad', trigger: 'botoms_practice' },
                {value: '2', label: 'Biblioteca', trigger: 'botoms_library'}
            ]
        }, 
            {   // --------- botones de practicas profesionales
                id: 'botoms_practice',
                
                options: [
                    {value: '1', label: 'lugares donde puedo aplicar', trigger: ''},
                    {value: '2',  label: 'Quiero aplicar a un lugar sin convenio', trigger: ''},
                    {value: '3', label: 'Matrices y documentos', trigger: ''}
                ]

            },

            {   // --------- botones de biblioteca
                id: 'botoms_library',
                
                options: [
                    {value: '1', label: '¿Dónde se encuentra la biblioteca?', trigger: ''},
                    {value: '2',  label: 'Libros digitales', trigger: ''},
                    {value: '3', label: 'Urkund', trigger: ''}
                ]

            },



      // ............... botones respuestas de opcion admision y matricula --------------------
    {
        id: 'admition_response',
        message: '¿Necesitas ayuda en admision y matricula?',
        trigger: 'botoms_admition'
    },  
        {  //-------  botones nivel uno admision y matricula
            id: 'botoms_admition',
            options: [
                {value: '1', label: 'Requisitos de ingreso', trigger: '' },
                {value: '2', label: 'Matriculas para el siguiente semestre', trigger: ''},
                {value: '3', label: 'Procesos de homologación de materias', trigger: ''},
                {value: '4', label: 'Segundas matriculas', trigger: ''},
                {value: '5', label: 'Cambio de curso', trigger: ''},
                {value: '6', label: 'Posgrado', trigger: ''}
            ]
        },


    // ............... botones respuestas de opcion informacion horarios y clases --------------------
    {
        id:'schedule_response',
        message: '¿Conoces todo acerca de tu horario?',
        trigger: 'botoms_schedule'
    },
        {  //-------  botones nivel uno horarios y clase
            id: 'botoms_schedule',
            options: [
                {value: '1', label: '¿Qué materias veré este semestre?', trigger: '' },
                {value: '2', label: '¿Cómo conocer mi horario?', trigger: ''},
            ]
        },



    // ............... botones respuestas de opcion informacion bienestar estudiantil --------------------
    {
        id: 'welfare_response',
        message: '¿Todo bien en bienestar estudiantil ñaño?',
        trigger: 'botoms_welfare'
    },
        {  //-------  botones nivel uno bienestar estudiantil
            id: 'botoms_welfare',
            options: [
                {value: '1', label: 'Solicitudes de beca', trigger: '' },
                {value: '2', label: 'Consultorio médico', trigger: ''},
            ]
        },


        // ............... botones respuestas de opcion informacion otros --------------------
    {
        id: 'others_response',
        message: 'Necesitas información más específica? Escribe al correo de secretaria detallando tu solicitud',
        trigger: 'botom_others'
    },  
        {  // ----------- boton de respuesta de otros ---------------
            id: 'botom_others',
            options: [
                {value: '1', label: 'correo de secretaria', trigger:''}
            ]
        }

    
  
    
    

   

    // ----------- opciones de respuesta nivel 2 ----------------
    // ----- respuestas de informacion general

 
]

export default steps;