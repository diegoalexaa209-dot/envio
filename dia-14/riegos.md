#  5 Riesgos
## 1. secretos expuestos

*  Riesgo: que es contraseña, token o API key quede guardada en el codigo

* probalidades: Alta 
* Impacto: Alto

 * Prevencion: no guarda secretos directamente en el codigo y utiliza variables de entorno

* Deteccion: revisar el codigo y el historial de git

* Respuesta: Revocar y generar nuevamente las credenciales 

* Aprendizaje: Revisar siempre los commits antes de subirlos

## 2. Contraseñas debiles

* Riesgo: que los usuarios utilizan contraseñas faciles de adivinar

* probalidades: Media 
* Impacto: Alto

* Prevencion: Solicitar contraseñas seguras

* Deteccion: Validar la contraseña durante el riesgo 

* Respuesta: Solicitar al usuario cambiar su contraseña

* Aprendizaje: Mejorar las reglas de seguridad de las cuentas

## 3. Entradas sin validar 

* Riesgo: que usuario indroduzca informacion incorrecta o meliciosa

* probabilidad: Alta 
* Impacto: Alta

* Prevencion: validar los datos antes de procesarlos

* Deteccion: Revisar errores y entradas inesperadas.

* Respuesta: Rechazar los datos que no cumplan la regla 

* Aprendizaje: Agregar mejores validaciones al sistema

## 4. Dependencias desactualizadas

* Riesgo: Utilizar paquetes o libreria que tenga vulnerabilidaad conocidas. 

* probabilidad: Media  
* Impacto: Medio

* Prevencion: Mantener las dependencias actualizadas

* Deteccion: Revisar periodicamente las dependencias. 

* Respuestas: Actualizar las versiones afectadas 

* Aprendizaje: Hacer revisiones de seguridad regularmente

## 5. Mensajes de error

* Riesgo: mostrar demasiada informacion tecnica cuando ocurre un error

* Probabilidad Media  
* Impacto: Medio
 
 * Prevencion: Mostrar mensajes sencillos al usuario

 * Deteccion: Revisar los errores que muestra la aplicacion.
 
 * Respuestas: ocultar la informacion sensible y guardar los detalles en registros seguros

 * Aprendizaje:  Separar los mensajes que ve el usuario de los detalles tecnicos
s