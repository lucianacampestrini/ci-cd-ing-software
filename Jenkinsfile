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
                echo "Enviando análisis a SonarQube..."
                sh 'npx sonar-scanner \
                  -Dsonar.projectKey=demo-ic \
                  -Dsonar.sources=src/index.js \ 
                  -Dsonar.host.url=http://sonarqube:9000 \
                  -Dsonar.login=sqp_3f472b2620d3eda41a2dc84920e772dd9a7fd65a'
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