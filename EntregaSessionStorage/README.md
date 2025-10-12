    Session Storage

Es una API de almacenamiento web que permite guardar pares clave-valor (key-value) en el navegador de un usuario.
A diferencia de el LocalStorage, la información no se envía al servidor con cada solicitud, solo se mantiene en el lado del cliente.
Se usa principalmente para almacenar datos temporales de una sesión, y se borra automáticamente cuando se cierra la pestaña o ventana del navegador.
Las propiedades son: length, key(), getItem(), setItem(), removeItem(clave), clear()
