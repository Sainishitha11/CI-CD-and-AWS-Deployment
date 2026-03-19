pipeline {
    agent any
environment {
    DOCKERHUB_CREDENTIALS = 'dockerhub'
    DOCKERHUB_USERNAME = '2023bcd0031nishitha'                
    ROLL_NUMBER = '2023bcd0031'                         
}

    stages {

        stage('Checkout Code') {
    steps {
        git branch: 'main',
            credentialsId: 'github-creds',
            url: 'https://github.com/Sainishitha11/CI-CD-and-AWS-Deployment'
    }
}

        stage('Build Backend Image') {
    steps {
        sh """
        docker build -t ${DOCKERHUB_USERNAME}/${ROLL_NUMBER}_backend:latest ./backend
        """
    }
}
        stage('Build Frontend Image') {
    steps {
        sh """
        docker build -t ${DOCKERHUB_USERNAME}/${ROLL_NUMBER}_frontend:latest ./frontend
        """
    }
}

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: DOCKERHUB_CREDENTIALS,
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                sh "docker push ${DOCKERHUB_USERNAME}/${ROLL_NUMBER}_backend"
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh "docker push ${DOCKERHUB_USERNAME}/${ROLL_NUMBER}_frontend"
            }
        }
    }
}