pipeline {
    agent any
    
    // ¡Adiós bloque tools! Jenkins ahora usará el Node.js nativo que instalaste a mano.

    stages {
        stage('Test Local') {
            steps {
                sh 'npm install' 
                sh 'npm test'
            }
        }
        
        stage('Inspección de Código') {
            steps {
                echo "Enviando análisis a SonarQube (http://localhost:9000)..."
            }
        }

        stage('Aprobación Manual para Prod') {
            steps {
                input message: '¿Desplegar los cambios en Producción?', ok: '¡Desplegar ahora!'
            }
        }

        stage('Deployment a Producción') {
            steps {
                sh 'cp -r src/* /deploy/'
                echo "¡Despliegue exitoso!"
            }
        }
    }
}