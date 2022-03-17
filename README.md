# Taller: Desplegando Angular en Kubernetes

## Requisitos técnicos

Quien quiera seguir el taller necesitará tener instalado en su máquina:

* Docker (<https://rancherdesktop.io/>)
* Cuenta en Docker Hub para poder subir imágenes propias.
* Lens (<https://k8slens.dev/>)
* Visual Studio Code (<https://code.visualstudio.com/>)

Para el taller presencial se utilizará una instancia de Kubernetes en la nube, pero si se quiere probar en local se recomienda instalar Rancher Desktop habilitando Docker, Kubernetes y Traefik.

Además si se desea simular dominios HTTPS en local se deberá tener instalado mkcert, siguiendo esta guía: <https://github.com/FiloSottile/mkcert>

Tenemos que crear los certificados en local:

```sh
$> mkcert k8sangular.local.com
```

Crear el secreto con los dos ficheros creados:

```sh
$> kubectl create secret tls tls-secret --cert k8sangular.local.com.pem --key k8sangular.local.com-key.pem -n raguilera82
```
