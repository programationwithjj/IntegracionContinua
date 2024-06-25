pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('nfp_n1SdR8zXpNtbWavvQR7JeZgRHzTLAZu56d6e')
    }

    stages {
        stage('Preparar') {
            steps {
                script {
                    sh 'npm list -g netlify-cli || npm install -g netlify-cli'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    docker.build('frontend-image', './frontend')
                }
            }
        }
        stage('Desplegar en Netlify') {
            steps {
                script {
                    sh 'netlify login --token ${NETLIFY_AUTH_TOKEN}'
                    dir('frontend') {
                        sh 'netlify deploy --dir=./build --prod'
                    }
                }
            }
        }
        // stage('Build Backend') {
        //     steps {
        //         script {
        //             docker.build('backend-image', './backend')
        //         }
        //     }
        // }
        // stage('Deploy Backend') {
        //     steps {
        //         script {
        //             docker.image('backend-image').run('-d -p 3000:3000 --name backend-container')
        //         }
        //     }
        // }
        // stage('Deploy Database') {
        //     steps {
        //         script {
        //             sh 'docker run -d -p 3306:3306 --name db-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=escuela mysql:5.7'
        //             sh 'docker exec db-container mysql -uroot -proot escuela < /docker-entrypoint-initdb.d/init.sql'
        //         }
        //     }
        // }
    }
}
