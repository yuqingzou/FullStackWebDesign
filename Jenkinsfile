node {

    stage('Git') {
        git 'https://github.com/Orbiseed/orbiseed-backend.git'
    }
    stage('Build') {
        sh 'npm install'
    }
    stage('Test') {
        sh 'npm run test'
    }

}
© 2019 GitH