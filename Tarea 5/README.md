Tarea 5. CRUD de Tareas.

API creada mediante Node y Express, la cual hace una solicitud de información a una base de datos en MongoDB.

A partrir de los diferentes métodos (GET, POST, PUT, DELETE) podemos hacer que el CRUD este disponible para las tareas.

Las peticiones se realizan a través de swagger, en la siguiente ruta:
http://localhost:3000/swagger/

Las tareas cuentan con los atributos de id, Titulo, Descripción, Status y Fecha. 
Estas son las acciones que podemos realizar: 
- Crear una tarea (Si no tiene Status se denomina new y si no tiene fecha se le pone la del dia de hoy)
-Mostrar todas las tareas
-Mostrar una tarea en especifico a partir de su id
- Eliminar una tarea a partir de su id
-Modificar una tarea a partir de su id
Pasos para poder correr la API:

-npm install
-npm run start o npm run dev

Se debe de sustituir la cadena de conexión en un archivo .env (el ejemplo de como hacerlo se encuentra en example.env).

