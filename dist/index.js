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
    {documentNumber:1035781604,preparationNumber:8502857521,office:"Bogotá - Cundinamarca",day:14,month:"Junio",year:2024},
    {documentNumber:1018237006,preparationNumber:8506857521,office:"Medellín - Antioquia",day:18,month:"Octubre",year:2024},
    {documentNumber:1029984794,preparationNumber:8506857521,office:"Villavicencio - Meta",day:14,month:"Octubre",year:2024},
    {documentNumber:1097497689,preparationNumber:8506057521,office:"Armenia - Quindío",day:2,month:"Octubre",year:2024},
    {documentNumber:1050093325,preparationNumber:8506057521,office:"Tunja - Boyacá",day:14,month:"Octubre",year:2024},
    {documentNumber:1011592372,preparationNumber:8506257521,office:"Medellín - Antioquia",day:14,month:"Octubre",year:2024},
    {documentNumber:1122520714,preparationNumber:8506357521,office:"Acacías - Meta",day:14,month:"Octubre",year:2024},
    {documentNumber:1097850145,preparationNumber:8506457521,office:"Bucaramanga - Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1112045461,preparationNumber:8506557521,office:"Manizales - Caldas",day:14,month:"Octubre",year:2024},
    {documentNumber:1054285131,preparationNumber:8506657521,office:"Sogamoso - Boyacá",day:14,month:"Octubre",year:2024},
    {documentNumber:1086248270,preparationNumber:8505657521,office:"Túquerres - Nariño",day:14,month:"Octubre",year:2024},
    {documentNumber:1037323428,preparationNumber:8505757521,office:"Medellín - Antioquia",day:9,month:"Octubre",year:2024},
    {documentNumber:1023748925,preparationNumber:8505657521,office:"Medellín - Antioquia",day:14,month:"Octubre",year:2024},
    {documentNumber:1054870498,preparationNumber:8505657521,office:"Manizales - Caldas",day:14,month:"Octubre",year:2024},
    {documentNumber:1055756486,preparationNumber:8505757521,office:"Manizales - Caldas",day:21,month:"Octubre",year:2024},
    {documentNumber:1026127745,preparationNumber:8505757521,office:"Medellín - Antioquia",day:14,month:"Octubre",year:2024},
    {documentNumber:1043135821,preparationNumber:8505857521,office:"Barranquilla - Atlántico",day:14,month:"Octubre",year:2024},
    {documentNumber:1106516346,preparationNumber:8505857521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1099206904,preparationNumber:8505957521,office:"barbosa - Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1097102067,preparationNumber:8505057521,office:"Bucaramanga - Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1108643383,preparationNumber:8505157521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1043656837,preparationNumber:8505057521,office:"Cartagena - Bolívar",day:14,month:"Octubre",year:2024},
    {documentNumber:1023376254,preparationNumber:8505057521,office:"Bogotá - Cundinamarca",day:14,month:"Octubre",year:2024},
    {documentNumber:1107853735,preparationNumber:8505157521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1109118957,preparationNumber:8505058521,office:"Cali - Valle del Cauca",day:26,month:"Octubre",year:2024},
    {documentNumber:1011098670,preparationNumber:8505058521,office:"Bogotá - Cundinamarca",day:14,month:"Octubre",year:2024},
    {documentNumber:1050092400,preparationNumber:8505168521,office:"Tunja - Boyacá",day:14,month:"Octubre",year:2024},
    {documentNumber:1049619242,preparationNumber:8505268521,office:"Tunja - Boyacá",day:21,month:"Junio",year:2024},
    {documentNumber:1116545758,preparationNumber:8505368521,office:"Tauramena - Casanare",day:14,month:"Octubre",year:2024},
    {documentNumber:1109188420,preparationNumber:8505468521,office:"YUMBO - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1085660994,preparationNumber:8505468521,office:"san pablo - Nariño",day:14,month:"Octubre",year:2024},
    {documentNumber:1011098430,preparationNumber:8505568521,office:"Bogotá - Cundinamarca",day:14,month:"Octubre",year:2024},
    {documentNumber:1032428660,preparationNumber:8505768521,office:"Bogotá - Cundinamarca",day:21,month:"Octubre",year:2024},
    {documentNumber:1049616356,preparationNumber:8505768521,office:"Tunja - Boyacá",day:14,month:"Octubre",year:2024},
    {documentNumber:1142516337,preparationNumber:8505798521,office:"Pereira - Risaralda",day:21,month:"Octubre",year:2024},
    {documentNumber:1112046752,preparationNumber:8505708521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1024506257,preparationNumber:8505728521,office:"Bogotá - Cundinamarca",day:14,month:"Octubre",year:2024},
    {documentNumber:1031423638,preparationNumber:8505728521,office:"Bogotá - Cundinamarca",day:27,month:"Octubre",year:2024},
    {documentNumber:1109548711,preparationNumber:8505738521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1034291213,preparationNumber:8505748521,office:"Cali - Valle del Cauca",day:31,month:"Octubre",year:2024},
    {documentNumber:1110370062,preparationNumber:8505758521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1107851136,preparationNumber:8505748521,office:"Cali - Valle del Cauca",day:26,month:"Octubre",year:2024},
    {documentNumber:1092733031,preparationNumber:8505758521,office:"Ocaña - Norte de Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1053575421,preparationNumber:8505728521,office:"Manizales - Caldas",day:14,month:"Octubre",year:2024},
    {documentNumber:1082892933,preparationNumber:8505768521,office:"Santa Marta - Magdalena",day:16,month:"Octubre",year:2024},
    {documentNumber:1082912298,preparationNumber:8505778521,office:"Santa Marta - Magdalena",day:14,month:"Octubre",year:2024},
    {documentNumber:1033105315,preparationNumber:8505778521,office:"Bogotá - Cundinamarca",day:14,month:"Octubre",year:2024},
    {documentNumber:1104262381,preparationNumber:8505578521,office:"Barranquilla - Atlántico",day:14,month:"Octubre",year:2024},
    {documentNumber:1043682272,preparationNumber:8505678521,office:"Barranquilla - Atlántico",day:24,month:"Octubre",year:2024},
    {documentNumber:1043453323,preparationNumber:8505678521,office:"Barranquilla - Atlántico",day:14,month:"Octubre",year:2024},
    {documentNumber:1089603744,preparationNumber:8505648521,office:"Pereira - Risaralda",day:14,month:"Octubre",year:2024},
    {documentNumber:1115576040,preparationNumber:8504648521,office:"La Virginia - Risaralda",day:14,month:"Octubre",year:2024},
    {documentNumber:1097914077,preparationNumber:8505548521,office:"Bucaramanga - Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1095919149,preparationNumber:8505648521,office:"Bucaramanga - Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1092733421,preparationNumber:8505748521,office:"Ocaña - Norte de Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1110370062,preparationNumber:8505748521,office:"Cali - Valle del Cauca",day:14,month:"Junio",year:2024},
    {documentNumber:1042259874,preparationNumber:8505758521,office:"Barranquilla - Atlántico",day:30,month:"Octubre",year:2024},
    {documentNumber:1043454111,preparationNumber:8505748521,office:"Barranquilla - Atlántico",day:14,month:"Octubre",year:2024},
    {documentNumber:1096807731,preparationNumber:8505548521,office:"Barrancabermeja - Santander",day:14,month:"Octubre",year:2024},
    {documentNumber:1058353865,preparationNumber:8505548521,office:"Sogamoso - Boyacá",day:14,month:"Octubre",year:2024},
    {documentNumber:1021675289,preparationNumber:8505578521,office:"Bogotá - Cundinamarca",day:30,month:"Octubre",year:2024},
    {documentNumber:1065128580,preparationNumber:8509578521,office:"Barranquilla - Atlántico",day:14,month:"Octubre",year:2024},
    {documentNumber:1034295386,preparationNumber:8509778521,office:"Cartagena - Bolívar",day:14,month:"Octubre",year:2024},
    {documentNumber:1103500505,preparationNumber:8504738521,office:"Sincelejo - Sucre",day:8,month:"Octubre",year:2024},
    {documentNumber:1102832251,preparationNumber:8507738521,office:"Sincelejo - Sucre",day:14,month:"Octubre",year:2024},
    {documentNumber:1080052892,preparationNumber:8505748521,office:"Pasto - Nariño",day:14,month:"Octubre",year:2024},
    {documentNumber:1140415463,preparationNumber:8505758521,office:"Medellín - Antioquia",day:14,month:"Octubre",year:2024},
    {documentNumber:1107857247,preparationNumber:8505578521,office:"Cali - Valle del Cauca",day:30,month:"Octubre",year:2024},
    {documentNumber:1105374226,preparationNumber:8505578521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
    {documentNumber:1013266566,preparationNumber:8505578521,office:"Bogotá - Cundinamarca",day:14,month:"Octubre",year:2024},
    {documentNumber:1124853590,preparationNumber:8505578521,office:"Puerto Asís - Putumayo",day:14,month:"Noviembre",year:2024},
    {documentNumber:1074131254,preparationNumber:8505578521,office:"Bogotá - Cundinamarca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1043677549,preparationNumber:8505568521,office:"Soledad - Atlántico",day:14,month:"Noviembre",year:2024},
    {documentNumber:1097723265,preparationNumber:8505668521,office:"ibague - Tolima",day:14,month:"Noviembre",year:2024},
    {documentNumber:1070952413,preparationNumber:8505658521,office:"Bogotá - Cundinamarca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1014206738,preparationNumber:8505678521,office:"Bogotá - Cundinamarca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1061370213,preparationNumber:8505678521,office:"buga - Valle del Cauca",day:14,month:"Junio",year:2024},
    {documentNumber:1055361106,preparationNumber:8505678521,office:"Manizales - Caldas",day:14,month:"Noviembre",year:2024},
    {documentNumber:1042257601,preparationNumber:8505648521,office:"Barranquilla - Atlántico",day:14,month:"Noviembre",year:2024},
    {documentNumber:1123805786,preparationNumber:8505728521,office:"Villavicencio - Meta",day:14,month:"Noviembre",year:2024},
    {documentNumber:1142516337,preparationNumber:8505568521,office:"Pereira - Risaralda",day:14,month:"Mayo",year:2024},
    {documentNumber:1104261479,preparationNumber:8505748521,office:"Sincelejo - Sucre",day:14,month:"Noviembre",year:2024},
    {documentNumber:1104807690,preparationNumber:8505798521,office:"Cali - Valle del Cauca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1056125880,preparationNumber:8500857521,office:"Manizales - Caldas",day:14,month:"Noviembre",year:2024},
    {documentNumber:1102842310,preparationNumber:8506757521,office:"Sincelejo - Sucre",day:14,month:"Noviembre",year:2024},
    {documentNumber:1028661777,preparationNumber:8507857521,office:"Bogotá - Cundinamarca",day:19,month:"Julio",year:2024},
    {documentNumber:1092732180,preparationNumber:8504738521,office:"Barranquilla - Atlántico",day:14,month:"Noviembre",year:2024},
    {documentNumber:1016718262,preparationNumber:8509757521,office:"Bogotá - Cundinamarca",day:31,month:"Noviembre",year:2024},
    {documentNumber:1013624088,preparationNumber:8504857521,office:"Bogotá - Cundinamarca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1121863681,preparationNumber:8505768521,office:"Cartagena - Bolívar",day:14,month:"Diciembre",year:2024},
    {documentNumber:1143330311,preparationNumber:8505748521,office:"Cartagena - Bolívar",day:14,month:"Noviembre",year:2024},
    {documentNumber:1043658851,preparationNumber:8502857521,office:"Cartagena - Bolívar",day:25,month:"Septiembre",year:2024},
    {documentNumber:1116374157,preparationNumber:8506857521,office:"Cali - Valle del Cauca",day:3,month:"Enero",year:2024},
    {documentNumber:1027806552,preparationNumber:8509578521,office:"Medellín - Antioquia",day:14,month:"Noviembre",year:2024},
    {documentNumber:1105371777,preparationNumber:8505708521,office:"Cali - Valle del Cauca",day:20,month:"Noviembre",year:2024},
    {documentNumber:1142917240,preparationNumber:8504857521,office:"Cartagena - Bolívar",day:3,month:"Noviembre",year:2024},
    {documentNumber:1142919460,preparationNumber:8505757521,office:"Cartagena - Bolívar",day:24,month:"Octubre",year:2024},
    {documentNumber:1125609672,preparationNumber:8505758521,office:"Cali - Valle del Cauca",day:10,month:"Noviembre",year:2024},
    {documentNumber:1016954739,preparationNumber:8506857521,office:"Cali - Valle del Cauca",day:10,month:"Octubre",year:2024},
    {documentNumber:1110369455,preparationNumber:8506857521,office:"Cali - Valle del Cauca",day:26,month:"Enero",year:2024},
    {documentNumber:1107851722,preparationNumber:8505728521,office:"Cali - Valle del Cauca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1028885684,preparationNumber:8506857521,office:"Bogotá - Cundinamarca",day:12,month:"Febrero",year:2024},
    {documentNumber:1051068968,preparationNumber:8505648521,office:"Tunja - Boyacá",day:14,month:"Noviembre",year:2024},
    {documentNumber:1105678406,preparationNumber:8505648521,office:"Bogotá - Cundinamarca",day:16,month:"Mayo",year:2024},
    {documentNumber:1115912832,preparationNumber:8505757521,office:"Medellín - Antioquia",day:14,month:"Noviembre",year:2024},
    {documentNumber:1031813446,preparationNumber:8505728521,office:"Pasto - Nariño",day:14,month:"Noviembre",year:2024},
    {documentNumber:1086135026,preparationNumber:8502857521,office:"Pasto - Nariño",day:14,month:"Noviembre",year:2024},
    {documentNumber:1045426315,preparationNumber:8505758521,office:"Medellín - Antioquia",day:14,month:"Noviembre",year:2024},
    {documentNumber:1092458671,preparationNumber:8505548521,office:"San José del Guaviare - Guaviare",day:14,month:"Noviembre",year:2024},
    {documentNumber:1124821913,preparationNumber:8505578521,office:"Villavicencio - Meta",day:14,month:"Noviembre",year:2024},
    {documentNumber:1061728364,preparationNumber:8505578521,office:"Popayán - Cauca",day:14,month:"Diciembre",year:2024},
    {documentNumber:1107847958,preparationNumber:8505678521,office:"Cali - Valle del Cauca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1107854285,preparationNumber:8505778521,office:"Cali - Valle del Cauca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1140415463,preparationNumber:8505728521,office:"Medellín - Antioquia",day:14,month:"Noviembre",year:2024},
    {documentNumber:1140416511,preparationNumber:8505578521,office:"Cúcuta - Norte de Santander",day:11,month:"Diciembre",year:2024},
    {documentNumber:1054869379,preparationNumber:8509578521,office:"Manizales - Caldas",day:14,month:"Noviembre",year:2024},
    {documentNumber:1081277947,preparationNumber:8506857521,office:"Pasto - Nariño",day:14,month:"Noviembre",year:2024},
    {documentNumber:1110042958,preparationNumber:8505648521,office:"Cali - Valle del Cauca",day:14,month:"Noviembre",year:2024},
    {documentNumber:1090122679,preparationNumber:8506857521,office:"Pereira - Risaralda",day:14,month:"Noviembre",year:2024},
    {documentNumber:1015216949,preparationNumber:8505648521,office:"Medellín - Antioquia",day:14,month:"Diciembre",year:2024},
    {documentNumber:1054679122,preparationNumber:8505648521,office:"Manizales - Caldas",day:14,month:"Diciembre",year:2024},
   {documentNumber:1097502318,preparationNumber:8506857521,office:"Bucaramanga - Santander",day:14,month:"Diciembre",year:2024},
   {documentNumber:1096025231,preparationNumber:8505648521,office:"Bucaramanga - Santander",day:14,month:"Enero",year:2024},
   {documentNumber:1079535992,preparationNumber:8505778521,office:"Pitalito - Huila",day:14,month:"Diciembre",year:2024},
   {documentNumber:1088830308,preparationNumber:8505758521,office:"Bogotá - Cundinamarca",day:14,month:"Enero",year:2024},
   {documentNumber:1030000349,preparationNumber:8509757521,office:"Pasto - Nariño",day:14,month:"Enero",year:2024},
   {documentNumber:1096805152,preparationNumber:8505648521,office:"Barrancabermeja - Santander",day:14,month:"Octubre",year:2024},
   {documentNumber:1096803208,preparationNumber:8506857521,office:"Barrancabermeja - Santander",day:18,month:"Diciembre",year:2024},
   {documentNumber:1096803116,preparationNumber:8505578521,office:"Barrancabermeja - Santander",day:11,month:"Diciembre",year:2024},
   {documentNumber:1097187051,preparationNumber:8505757521,office:"Barrancabermeja - Santander",day:14,month:"Diciembre",year:2024},
   {documentNumber:1054871526,preparationNumber:8506857521,office:"Manizales - Caldas",day:14,month:"Noviembre",year:2024},
   {documentNumber:1107848013,preparationNumber:8506857521,office:"Cali - Valle del Cauca",day:14,month:"Noviembre",year:2024},
   {documentNumber:1016834512,preparationNumber:8505648521,office:"Bogotá - Cundinamarca",day:14,month:"Noviembre",year:2024},
   {documentNumber:1084332882,preparationNumber:8505678521,office:"Pitalito - Huila",day:14,month:"Noviembre",year:2024},
   {documentNumber:1097102067,preparationNumber:8509757521,office:"Bucaramanga - Santander",day:14,month:"Diciembre",year:2024},
   {documentNumber:1043982397,preparationNumber:8509757521,office:"Cartagena - Bolívar",day:20,month:"Diciembre",year:2024},
   {documentNumber:1043657474,preparationNumber:8505757521,office:"Cartagena - Bolívar",day:14,month:"Noviembre",year:2024},
   {documentNumber:1105372308,preparationNumber:8509578521,office:"Cali - Valle del Cauca",day:17,month:"Enero",year:2024},
   {documentNumber:1105372115,preparationNumber:8505578521,office:"Cali - Valle del Cauca",day:23,month:"Noviembre",year:2024},
   {documentNumber:1112047798,preparationNumber:8505648521,office:"Cali - Valle del Cauca",day:14,month:"Diciembre",year:2024},
   {documentNumber:1109545611,preparationNumber:8505757521,office:"Cali - Valle del Cauca",day:19,month:"Noviembre",year:2024},
   {documentNumber:1105373241,preparationNumber:8505648521,office:"Cali - Valle del Cauca",day:14,month:"Diciembre",year:2024},
   {documentNumber:1111481687,preparationNumber:8505678521,office:"Cali - Valle del Cauca",day:21,month:"Noviembre",year:2024},
   {documentNumber:1104820286,preparationNumber:8505757521,office:"Cali - Valle del Cauca",day:18,month:"Octubre",year:2024},
   {documentNumber:1110294798,preparationNumber:8505757521,office:"Cali - Valle del Cauca",day:14,month:"Septiembre",year:2024},
   {documentNumber:1107853291,preparationNumber:8505578521,office:"Medellín - Antioquia",day:14,month:"Diciembre",year:2024},
   {documentNumber:1110045508,preparationNumber:8505678521,office:"Cali - Valle del Cauca",day:14,month:"Octubre",year:2024},
   {documentNumber:1109189044,preparationNumber:8505578521,office:"Cali - Valle del Cauca",day:14,month:"Diciembre",year:2024},
   {documentNumber:1093599839,preparationNumber:8505648521,office:"Cúcuta - Norte de Santander",day:14,month:"Diciembre",year:2024},
   {documentNumber:1098074373,preparationNumber:8509757521,office:"Bucaramanga - Santander",day:14,month:"Enero",year:2024},
   {documentNumber:1098074373,preparationNumber:8509757521,office:"Bucaramanga - Santander",day:14,month:"Enero",year:2024},
   {documentNumber:1099742052,preparationNumber:8509757521,office:"Bucaramanga - Santander",day:14,month:"Diciembre",year:2024},
   {documentNumber:1030563259,preparationNumber:8506857521,office:"Bogotá - Cundinamarca",day:14,month:"Diciembre",year:2024},
   {documentNumber:1025536323,preparationNumber:8505757521,office:"Bogotá - Cundinamarca",day:14,month:"Enero",year:2024},
   {documentNumber:1121863782,preparationNumber:8505578521,office:"Villavicencio - Meta",day:14,month:"Enero",year:"2025"},
   {documentNumber:1105373038,preparationNumber:8518233124,office:"Cali - Valle del Cauca",day:14,month:"Febrero",year:"2026"}















































































































































































    






















































































  
  



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
