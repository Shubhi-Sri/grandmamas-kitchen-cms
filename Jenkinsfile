pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage("code"){
            steps{
                echo "this is cloning the code"
                git url: "https://github.com/Shubhi-Sri/grandmamas-kitchen-cms/",
                branch:"main"
                echo "code clone successfull"
            }
        }
        

        stage('Deploy') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d --build'
            }
        }
    }

    post {
        success {
            echo "App is running on port 5000"
        }
        failure {
            echo "Build failed!"
        }
    }
}
