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
               any0f{branch 'develop'}
           }
           steps {
               sh 'rm env || true'
               sh "docker build -f Dockerfile -t ${imageName}:${imageTag} ."
           }
        }

         stage("testing"){
            steps{
                 echo 'buidling the app'
            }
        }
         stage("deploy"){
            steps{
                 echo 'buidling the app'
            }
        }
    }
}