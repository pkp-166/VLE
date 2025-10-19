pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "praneeth166"
    }

    stages {
        stage('Clone repo') {
            steps {
                git branch: 'main', url: 'https://github.com/pkp-166/VLE.git'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/exp7-app:latest .'
            }
        }

        stage('Push Docker image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-pass', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $DOCKER_USER/exp7-app:latest'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment-blue.yaml'
                sh 'kubectl apply -f deployment-green.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}

