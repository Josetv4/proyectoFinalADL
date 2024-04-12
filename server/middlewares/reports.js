const getActivity = async (req, res, next) => {

    const parametros_body = req.body
    const params = req.params
    const query = req.query
    const url = req.url
    
    console.log(
      `Hoy ${new Date()} 
      se ha recibido una consulta de la ruta ${url}
      con los parámetros:`, parametros_body , ` y con datos de query`, query, ` y con datos de params`, params   
    )
    next()
  }
  
  export { getActivity }