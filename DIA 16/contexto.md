# DIA 16
* fecha:16 de Septiembre del 2026
## contexto
La aplicacion fue concebida asumiendo una conexion a interned la metrica y pruebas con usuarios demuestran que gran parte de la operacion ocurre en entornos de conectividad inestable 
* las peticiones HTTP caducan o fallan inmediatamente
* los usuarios pierden los cambios no guardados en los formularios
## Opciones concideradas
* Que maneje conflictos y persista todo el estado de la pagina localmente
* Guarda localmente las acciones/formulas pendiente mediante una cola aplicar reintentos automaticas con tiempo de espera exponencial
## Decision
implemetar una estrategia de residencia financiando este esfuerzo mediante la salida de funcionalidades secundarias del tablero actual
## consecuencias
Los formularios y acciones principales se guardan localmente hasta recuperarse e informa al usuario sobre el estado de la red sin bloquear la navegación, la reducción de alcance compensa el esfuerzo técnico de la resiliencia.