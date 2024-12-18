pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ghayaammari/static-api'  
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/ghayaammari/static-api-2'
            }
        }
        stage('build docker image') {
            steps {
                script {
                  docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'LoginDockerHub') {
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }
    stage('Deploy Container') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'LoginDockerHub') {
                        def docker_image = docker.image("${DOCKER_IMAGE}:latest")
                        docker_image.run('--name Mini-Projet -p 3000:3000')
                    }
                }
            }
        }
    }
}
