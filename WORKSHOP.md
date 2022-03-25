# Checklist del workshop

1- Explicar en el código las cosas a tener en cuenta en el desarrollo de Angular y que difieren del estado inicial del proyecto.

- [ ] Fichero assets/config/config.json
- [ ] Config service
- [ ] APP_INITIALIZER (app.module.ts)
- [ ] Configuración de nginx para evitar 404

2- Creación de la imagen k8sangular:0.0.1

- [ ] Explicar el contenido del Dockerfile
- [ ] Crear la imagen <[usuario]>/k8sangular:0.0.1
  - $> docker build -t <[usuario]>/k8sangular:0.0.1 .
- [ ] Probar la imagen
  - $> docker run -d -p 8888:80 <[usuario]>/k8sangular:0.0.1
- [ ] Si se va desplegar fuera de local, publicar imagen
  - $> docker login (credenciales docker hub)
  - $> docker push <[usuario]>/k8sangular:0.0.1

3- Desplegamos la aplicación en K8s

- [ ] Configuración de Lens y Kubectl para conectar
  - $> kubectl get nodes
- [ ] Creación del namespace <[usuario]>
  - $> kubectl create namespace <[usuario]>
- [ ] Despliegue del configmap
  - $> kubectl apply -f k8s/configmap.yml
- [ ] Despliegue del deployment
  - $> kubectl apply -f k8s/deployment.yml
- [ ] Comprobar despliegue con Lens
- [ ] Despliegue del servicio con ClusterIP
  - $> kubectl apply -f k8s/service.yml
- [ ] Añadir k8sangular.local.com a los hosts de la máquina apuntando a 127.0.0.1
- [ ] Despliegue del ingress en local
  - $> kubectl apply -f k8s/local-ingress.yml
- [ ] Comprobar url: <https://k8sangular.local.com>

4- Cambiar URL en el configmap con Lens, esperar al cambio.

- [ ] Comprobar resultado: <https://k8sangular.local.com>

5- Realizar modificación en el código

- [ ] Cambiar la versión del package.json
- [ ] Creación de la nueva imagen
- [ ] Despliegue del deployment actualizado
- [ ] Comprobar resultado: <https://k8sangular.local.com>

6- Añadimos el certificado local

- [ ] Instalamos soporte mkcert
  - $> mkcert --install
- [ ] Creamos los certificados para local
  - $> mkcert k8sangular.local.com
- [ ] Registramos el secreto con los certificados
  - $> kubectl create secret tls tls-secret --cert k8sangular.local.com.pem --key k8sangular.local.com-key.pem -n <[usuario]>

7- Desarrollo dentro de Kubernetes

- [ ] Instalamos el CLI de Okteto
- [ ] Vamos a la carpeta okteto del proyecto
- [ ] Ejecutamos $> okteto up
- [ ] Dentro del terminal creado levantamos la aplicación
  - [ ] $> npm run start:k8s
- [ ] Comprobamos que cualquier cambio se ve inmediatamente reflejado en k8s
