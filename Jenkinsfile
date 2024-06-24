pipeline {
    agent any

    stages {
        stage('Build Frontend') {
            steps {
                script {
                    docker.build('frontend-image', './frontend')
                }
            }
        }
        stage('Deploy Frontend') {
            steps {
                script {
                    docker.image('frontend-image').run('-d -p 8080:80 --name frontend-container')
                }
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    docker.build('backend-image', './backend')
                }
            }
        }
        stage('Deploy Backend') {
            steps {
                script {
                    docker.image('backend-image').run('-d -p 3000:3000 --name backend-container')
                }
            }
        }
        stage('Deploy Database') {
            steps {
                script {
                    sh 'docker run -d -p 3306:3306 --name db-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=escuela mysql:5.7'
                    sh 'docker exec db-container mysql -uroot -proot escuela < /docker-entrypoint-initdb.d/init.sql'
                }
            }
        }
    }
}
