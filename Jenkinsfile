pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:latest'
    }
  }
 
  stages {
    stage('build and test') {
     

      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}