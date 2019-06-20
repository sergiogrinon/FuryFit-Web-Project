# FuryFit Project
_FuryFit es un proyecto donde se pretente mostrar la integración de una aplicación desarrollada en AngularJS con una API creada en Java apoyándose en GlassFish, de Oracle. La página web se nutre de la mencionada API, que recupera información contenida en una base de datos MySQL._

## Comenzando
_Las instrucciones que hay a continuación, te permitirán utilizar el proyecto para propósitos de desarrollo y pruebas en tu máquina local._

### Pre-requisitos
_Para poder desplegar esta aplicación, es necesario tener la API (es entregada junto con este proyecto, para que este sea capaz de funcionar)._
_Hablando de la API, es necesario tener instalado el servidor GlassFish, funcionando por el puerto 8080, ya que las URL están fijas haciendo peticiones a un servidor levantado en esa URL._
_Ya teniendo el servidor preparado, necesitamos MySQL Server y MySQL WorkBench, con el fin de importar la base de datos que se entrega, de la cual "bebe" la aplicación web presente. MySQL debe quedarse en el puerto por defecto, el 3306_

### Instalación
_Lo primero que hay que hacer, cuando tenemos la API levantada en el servidor, por el puerto 8080, es ejecutar el comando "npm install", con el fin de asegurar la correcta instalación de la aplicación._
_Una vez hecho esto, debemos ejecutar en la capeta raíz del proyecto (donde está el index.html) el comando "http-server", especificando el puerto que queramos, si no, por defecto será el 8081 ya que el 8080 estará en uso por la API. Esto es para levantar la aplicación en un servidor local, ya que si no, las CORS bloquearán las peticiones realizadas a la base de datos y con ello el correcto funcionamiento de la aplicación._
> Para poder ejecutar, probar o utilizar el proyecto es NECESARIO INSTALAR sweetalert, con el comendo "npm install angular-sweetalert"

## Deployment
_Creado con AngularJS (un framework de JavaScript), siguiendo la metodología de carpetas descrita por el arquitecto del proyecto en el que actualmente trabajo._
_Ajeno a esta carpeta y hablando de la API, ha sido desarrollada en Java, apoyándose en un servidor GlassFish, siendo recomendable para modificar o agregar nuevo código, utilizar Eclipse._

## Autor
_Sergio Griñón Chico_
