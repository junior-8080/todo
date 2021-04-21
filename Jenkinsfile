pipeline{
    agent any

    environment {
        imageName = "junior_8080/todo"
        imageTag = "${env.BUILD_ID}"
    }

    stages {
        stage("build - prod"){
            steps{
                 echo 'buidling the app'
            }
        }

        stage("build - dev"){
           when {
               branch 'develop'
           }
           steps {
               sh 'rm env || true'
               sh "docker build -f Dockerfile -t ${imageName}:${imageTag} ."
           }
        }

         stage("testing"){
            steps{
                 echo 'testing  not implemented'
            }
        }
         stage("deploy"){
            steps{
                 echo 'deploying the app'
            }
        }
    }
}