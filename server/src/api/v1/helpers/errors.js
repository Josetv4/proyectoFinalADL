const ERRORS = [
  { code: "23502", status: 400, message: "El campo destino o presupuesto no puede estar vacio" },
  { code: "42P01", status: 500, message: "Error en la conexión con la base de datos" },
  { code: "22P02", status: 400, message: "Bad request" },
  { code: "42601", status: 400, message: "Error de sintaxis en la consulta" },
  { code: "23505", status: 400, message: "Clave duplicada" },
  { code: "23503", status: 400, message: "Violación de la restricción de integridad referencial" },
  { code: "auth01", status: 400, message: "El usuario no existe" },
  { code: "auth02", status: 400, message: "Contraseña inválida" },
  { code: "auth03", status: 401, message: "El token debe estar presente" },
  { code: "auth04", status: 401, message: "El token no es válido" },
  
  ];
  
  export default ERRORS;