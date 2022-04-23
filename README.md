# AppPruebaTecnica
Developed by Yeisson Ortiz
Frontend: https://github.com/YeissonOrtiz/FrontPruebaTecnica.git

Para crear el backend de la app para la prueba tecnica use Node.js y basicamente cree
un API que da respuesta a la solicitudes que se realizan desde el frontend de la app.

Dentro de Node.js use librerias como boom, hapi, Joi, sequelize, cryptr.

Las dos primeras librerias mencionadas las utilice para el control de errores mediante middlewares.
La libreria Joi la use para la validación de datos que intentan ingresar a mi base de datos.
Utilice el ORM sequelize para acceder mediante metodos predeterminados a la base de datos.
Por ultimo, utilice la libreria cryptr para encriptar la contraseña y guardar un hash en la base de datos
en vez de la contraseña en texto plano.

El API contiene 6 rutas disponibles, las cuales son:
- Login: https://apiusersyeisson.herokuapp.com/api/users/login
- Listar usuarios: https://apiusersyeisson.herokuapp.com/api/users (Aqui se puede observar la encriptación de las contraseñas).
- Visualizar un usuario: https://apiusersyeisson.herokuapp.com/api/users/id
- Crear un usuario: https://apiusersyeisson.herokuapp.com/api/users/create
- Editar un usuario: https://apiusersyeisson.herokuapp.com/api/users/edituser/id
- Eliminar un usuario: https://apiusersyeisson.herokuapp.com/api/users/delete/id

En el metodo de eliminación, en vez de eliminar el usuario de la base de datos le cambio su estado a "Inactivo", esto en pro
de hacer uso de buenas practicas del manejo de datos contenidos en la BD.
