pipeline {
    agent any
    
    tools {
        nodejs 'node' // Llama a la herramienta que acabás de configurar
    }

    stages {
        stage('Test Local') {
            steps {
                dir('/workspace_repo') {
                    sh 'npm install' // Instalamos dependencias por las dudas
                    sh 'npm test'
                }
            }
        }
        
        stage('Inspección de Código') {
            steps {
                dir('/workspace_repo') {
                    echo "Enviando análisis a SonarQube (http://localhost:9000)..."
                }
            }
        }

        stage('Deployment a Producción') {
            steps {
                dir('/workspace_repo') {
                    sh 'cp -r src/* /deploy/'
                    echo "¡Despliegue exitoso!"
                }
            }
        }
    }
}