# Taller: Desplegando Angular en Kubernetes

## Requisitos técnicos

Quien quiera seguir el taller necesitará tener instalado en su máquina:

* Docker (<https://rancherdesktop.io/>)
* Cuenta en Docker Hub para poder subir imágenes propias.
* Lens (<https://k8slens.dev/>)
* Visual Studio Code (<https://code.visualstudio.com/>)

Para el taller presencial se utilizará una instancia de Kubernetes en la nube, pero si se quiere probar en local se recomienda instalar Rancher Desktop habilitando Docker, Kubernetes y Traefik. (Solo para máquinas con 16GB o más de RAM)

Si vas a asistir a un taller presencial por favor ejecuta estos comandos antes para tener descargadas las imágenes de Docker necesarias y no saturar la red del evento:

```bash
$> docker pull node:16.14.0-alpine3.14
$> docker pull nginx:1.21.6-alpine
$> docker pull raguilera82/ng:1.0
```

## Desarrollo dentro de Kubernetes

Si quieres desarrollar la aplicación dentro de Kubernetes tendrás que tener instalado el CLI de Okteto <https://www.okteto.com/docs/getting-started/installation/>

## Simulación de HTTPS en local (Opcional)

Además si se desea simular dominios HTTPS en local se deberá tener instalado mkcert, siguiendo esta guía: <https://github.com/FiloSottile/mkcert>
