"use strict";
const users = [
    { documentNumber: 1063190743, preparationNumber: 8503757521, office: 'MONTELÍBANO - CÓRDOBA', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1054491027, preparationNumber: 8504757521, office: 'CHINCHINA - CALDAS', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1070858334, preparationNumber: 8505757521, office: 'Facatativá - Cundinamarca', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1073230768, preparationNumber: 8506757521, office: 'Granada - Cundinamarca', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1102588887, preparationNumber: 8507757521, office: 'Socorro - Santander', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1123138335, preparationNumber: 8508757521, office: 'Cabuyaro - Meta', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1028585605, preparationNumber: 8509757521, office: 'Bogotá - Cundinamarca', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1120985938, preparationNumber: 8501857521, office: 'San José Del Guaviare - Guaviare ', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1073826873, preparationNumber: 8502857521, office: 'Bojacá  - Cundinamarca ', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1011691967, preparationNumber: 8503857521, office: 'Santa Fé de Antioquia-  Antioquia', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1026262330, preparationNumber: 8504857521, office: 'Medellín - Antioquia', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1035774587, preparationNumber: 8505857521, office: 'Itagüí - Antioquia', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1107951257, preparationNumber: 8506857521, office: 'Cali - Valle Del Cauca', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1072449699, preparationNumber: 8507857521, office: 'Chía - Cundinamarca', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1013229338, preparationNumber: 8508857521, office: 'Bogotá - Cundinamarca', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1025843444, preparationNumber: 8509857521, office: 'Bogotá, Cundinamarca', day: 14, month: 'Junio', year: 2024 },
    { documentNumber: 1026664102, preparationNumber: 8500857521, office: 'Mártires - Bogotá', day: 14, month: 'Junio', year: 2024 },
    {documentNumber:1049663508,preparationNumber:8503857521,office:"Yopal - Casanare",day:14,month:"Junio",year:2024},
    {documentNumber:1050393090,preparationNumber:8504857521,office:"Tunja - Boyacá",day:17,month:"Octubre",year:2024},
    {documentNumber:1115712021,preparationNumber:8505857521,office:"Yopal - Casanare",day:28,month:"Junio",year:2024},
    {documentNumber:1192463940,preparationNumber:8506857521,office:"Medellín - Antioquia",day:5,month:"Junio",year:2024},
    {documentNumber:1065336692,preparationNumber:8507857521,office:"Cúcuta - Norte de Santander",day:14,month:"Junio",year:2024},
    {documentNumber:1014964851,preparationNumber:8507957521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1079224909,preparationNumber:8508957521,office:"Neiva - Huila",day:14,month:"Junio",year:2024},
    {documentNumber:1038108609,preparationNumber:8509957521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1018862833,preparationNumber:8500957521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1011801685,preparationNumber:8501957521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1043544428,preparationNumber:8500857521,office:"Barranquilla - Atlántico",day:14,month:"Junio",year:2024},
    {documentNumber:1057755413,preparationNumber:8501857521,office:"Manizales - Caldas",day:14,month:"Junio",year:2024},
    {documentNumber:1065676565,preparationNumber:8502857521,office:"Cali - Valle del Cauca",day:14,month:"Junio",year:2024},
    {documentNumber:1006066846,preparationNumber:8503857521,office:"Bucaramanga - Santander",day:14,month:"Junio",year:2024},
    {documentNumber:1080829529,preparationNumber:8503857521,office:"Pereira - Risaralda",day:14,month:"Junio",year:2024},
    {documentNumber:1025984963,preparationNumber:8504857521,office:"Villavicencio - Meta",day:16,month:"Julio",year:2024},
    {documentNumber:1148514338,preparationNumber:8505857521,office:"Pereira - Risaralda",day:28,month:"Enero",year:2024},
    {documentNumber:1030974018,preparationNumber:8506857521,office:"Medellín - Antioquia",day:14,month:"Junio",year:2024},
    {documentNumber:1015739941,preparationNumber:8507857521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1017591796,preparationNumber:8508857521,office:"Medellín - Antioquia",day:14,month:"Junio",year:2024},
    {documentNumber:1018074048,preparationNumber:8509857521,office:"Medellín - Antioquia",day:14,month:"Enero",year:2024},
    {documentNumber:1124516367,preparationNumber:8500857521,office:"Villavicencio - Meta",day:14,month:"Junio",year:2024},
    {documentNumber:1015113265,preparationNumber:8501857521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1145924625,preparationNumber:8502857521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1035781604,preparationNumber:8502857521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024}




































  
  



];
const getCodeFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get('documentNumber'));
};
const getUserInfoByCode = (documentNumber) => {
    return users.find((user) => user.documentNumber === documentNumber) || {};
};
const userExists = (documentNumber) => {
    return users.some((user) => user.documentNumber === Number(documentNumber));
};
const redirecTo = (page) => {
    window.location.href = `${page}.html`;
};
const changeFrontToNoExist = () => {
    console.log('changeFrontToNoExist');
    if (!userExists(getCodeFromUrl())) {
        const infoElement = document.getElementById('user-table-data');
        console.log(infoElement);
        if (infoElement) {
            console.log(infoElement);
            infoElement.style.display = 'none';
            const withoutProcedureFrontElement = document.getElementById('without-procedure-front');
            withoutProcedureFrontElement && (withoutProcedureFrontElement.style.display = 'block');
            const documentNumber2element = document.getElementById('documentNumber2');
            documentNumber2element && (documentNumber2element.innerHTML = String(getCodeFromUrl()));
        }
    }
};
const showTextsInhtml = () => {
    console.log('showTextsInhtml');
    changeFrontToNoExist();
    const user = getUserInfoByCode(getCodeFromUrl());
    const keys = Object.keys(user);
    keys.forEach(key => {
        const element = document.getElementById(key);
        if (element)
            element.innerHTML = String(user[key]);
    });
};
const indexMain = () => {
    console.log('indexMain');
    document.addEventListener('DOMContentLoaded', event => {
        const sendButton = document.querySelector('#send');
        if (sendButton) {
            sendButton.addEventListener('click', event => {
                const nuipInput = document.querySelector('#nuip');
                if (nuipInput) {
                    const valor = nuipInput.value;
                    // Crear el div que solapa toda la página
                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    document.body.appendChild(overlay);
                    // Configurar el temporizador para quitar el div después de 2 segundos
                    setTimeout(() => {
                        overlay.remove();
                        window.location.href = `document.html?documentNumber=${valor}`;
                    }, 2000);
                }
            });
        }
    });
};
window.location.pathname.endsWith('document.html') ? showTextsInhtml() : indexMain();
