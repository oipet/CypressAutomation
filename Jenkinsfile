pipeline {
  agent none

  stages {
    stage("Fix the permission issue") {

            agent any

            steps {
                sh "chown root:jenkins /run/docker.sock"
            }

        }
    stage('build and test') {
	agent {
    docker {
      image 'cypress/base:latest'
    }
            }
      environment {
        // we will be recording test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('d4b196c1-83d9-466d-8b43-9f8bdd176cea')
      }
	 

      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}