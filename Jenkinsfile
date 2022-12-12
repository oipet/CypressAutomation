pipeline {

 
  stages {
    stage('build and test') {
     

      steps {
        sh 'npm ci'
		sh "npx cypress run --record --key d4b196c1-83d9-466d-8b43-9f8bdd176cea"
      }
    }
  }
}