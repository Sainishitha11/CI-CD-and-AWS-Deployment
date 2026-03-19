pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = "2023bcd0031nishitha"
        ROLL = "2023BCD0031"

        FRONTEND_IMAGE = "${DOCKERHUB_USERNAME}/${REGISTER}_${ROLL}_frontend"
        BACKEND_IMAGE  = "${DOCKERHUB_USERNAME}/${REGISTER}_${ROLL}_backend"
    }

    stages {

        // Checkout Code
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sainishitha/FullStackApplication.git'
            }
        }

        // Build Images (no tagging here)
        stage('Build Images') {
            steps {
                sh 'docker build -t frontend ./frontend'
                sh 'docker build -t backend ./backend'
            }
        }

        // Tag Images (SEPARATE STAGE )
        stage('Tag Images') {
            steps {
                sh 'docker tag backend $BACKEND_IMAGE'
                sh 'docker tag frontend $FRONTEND_IMAGE'
            }
        }

        // Docker Login
        stage('Docker Login') {
            steps {
                withCredentials([string(credentialsId: 'docker-pass', variable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $DOCKERHUB_USERNAME --password-stdin'
                }
            }
        }

        // Push Images
        stage('Push Images') {
            steps {
                sh 'docker push $BACKEND_IMAGE'
                sh 'docker push $FRONTEND_IMAGE'
            }
        }
    }
}