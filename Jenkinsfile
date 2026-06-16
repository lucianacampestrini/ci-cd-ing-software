pipeline {
    agent any
    
    tools {
        nodejs 'node' 
    }

    stages {
        stage('Test Local') {
            steps {
                // Quitamos el dir('/workspace_repo'). Jenkins ya está posicionado en tu código.
                sh 'npm install' 
                sh 'npm test'
            }
        }
        
        stage('Inspección de Código') {
            steps {
                echo "Enviando análisis a SonarQube (http://localhost:9000)..."
            }
        }

        // --- LA NUEVA ETAPA DE APROBACIÓN MANUAL ---
        stage('Aprobación Manual para Prod') {
            steps {
                input message: '¿Desplegar los cambios en Producción?', ok: '¡Desplegar ahora!'
            }
        }

        stage('Deployment a Producción') {
            steps {
                // Copia los archivos al volumen de Nginx
                sh 'cp -r src/* /deploy/'
                echo "¡Despliegue exitoso!"
            }
        }
    }
}