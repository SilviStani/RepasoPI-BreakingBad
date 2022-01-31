const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//Esta función trae info de la api
const getApiInfo = async  () => {
    const apiUrl = await axios.get('https://breakingbadapi.com/api/characters');
    const apiInfo = await apiUrl.data.map( el => {
       return {
           id: el.char_id,
           name: el.name,
           nickname: el.nickname,
           birthday: el.birthday,
           status: el.status,
           img: el.img,
           appearance: el.appearance.map(e => {
               return e;
           }),
           occupation: el.occupation.map(e=> {
               return e;
           })
       };
   });
   return apiInfo; 
};

//Me va a traer info de la data base
 const getDbInfo = async () => {
 return await Character.findAll({
     include: { 
         model: Occupation, //esto es para cuando cree un personaje, si no tengo las ocupaciones, nunca me los va a traer....
         attributes: ['name'], //  esto es solo nombre porq el id me lo trae solo
         through: {  // comprobacion que hace...
             attributes: [],
         },
     }
 });      
};

const getAllCharacters = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

module.exports = router;
