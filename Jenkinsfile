pipeline{
    agent any

    environment {
        devImageName = "dtr.esoko.com:5000/esoko/todo-app-dev"
        imageTag = "${env.BUILD_ID}"
        // DOCKERHUB_CRED = credentials('DOCKERHUB_CRED')
        // TAG = sh(returnStdout: true, script: "git tag --points-at=HEAD")
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
               sh "docker build -f Dockerfile -t ${devImageName}:${imageTag} ."
            //    sh "docker tag ${devImageName}:${imageTag} ${devImageName}:alpha"
               sh "docker push ${devImageName}:${imageTag}"
            //    sh "docker push ${devImageName}:alpha"
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

        stage("release") {
            when {
                tag 'v*'
            }
            steps {
                // sh "docker tag ${imageName}:${imageTag} ${imageName}:${TAG}"
                // sh "docker login --username ${DOCKERHUB_CRED_USR} --password '${DOCKERHUB_CRED_PSW}'"
                // sh "docker push ${imageName}:${TAG}"
                echo 'release'
            }
        }
    }
}