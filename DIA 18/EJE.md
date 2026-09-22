# DIA 18
## Zoom a 200%
* El maquetado utiliza un diseño resposivo fluido (flexbox/grid) sin scroll horizontal global (overflow es el contenedor padre). todos los contenedores usan unidades relativas

## Navegacion por teclado unicamente
* Orden de foco: secuencia logica DOM sin saltos imprevistos 

(tabindex="0" solo en elementos interactivos).

* Indicador visual de foco: anillo visible y de alto constante

( outline: 3px solid #508cc0; autline-offset: 2px )

* Acceso por teclado: Eventos en todos lso controles interactivos personalizables

( Enter ) y ( Space )

* Sin dependencia del color: Todo estado visual incluye un elemento textual explicativo y un icono diferenciador por formar ( no solo por color )

## pruebas individuales
  
  Perfil de los participantes:

  1. * (P1): Navegacion habitual solo por teclado
  2. * (P2): Usuario de amplificador de pantalla/zoom alto (200%-300%) con navegacion conbinada
  3. * (P3) Usuario sin discapacidades previa, realizando la pruebasin raton/mouse como restriccion tecnica.
  
  
  Tareas Asignadas:
  
  1. * Tarea1 (estado vacio a carga):
Localizar la accion principal en la pantalla inicial vacia e iniciar el proceso

2. * Tarea2 (estado error a reintento):
Identificar el fallo simulado en el sistema y lograr la recuperacion por teclado.

3. * Tarea3 (estado exito y contenido largo): Confirmar la finalizacion correcta y leer la informacion detalladaa sin perder el foco de navegacion 
