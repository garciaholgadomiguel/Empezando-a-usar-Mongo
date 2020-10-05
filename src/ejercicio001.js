/* 
Insertamos un documento en la colección col002
Tendreos que hacer previamente un:
use db
para posicionarnos o usar una base de datos concreta
*/


db.col002.insertOne({

    "nombre": "Juan",
    "apellidos": "Sanchez Pérez",
    "edad": 20
})

db.col002.insertOne({

    "nombre": "Paco",
    "apellidos": "Sanchez Pérez",
    "edad": 24
})