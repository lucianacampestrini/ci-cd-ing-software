pipeline {
    agent any
    
    stages {
        stage('Test Local') {
            steps {
                // Instala dependencias y corre tests. Si fallan, el pipeline se detiene aquí.
                sh 'npm install' 
                sh 'npm test'
            }
        }
        
        stage('Inspección de Código') {
            steps {
                echo "Simulando envío de análisis a SonarQube..."
                
                /*
                // Comando para análisis real descomentado si tienes los recursos:
                sh 'npx sonar-scanner \
                  -Dsonar.projectKey=demo-ic \
                  -Dsonar.sources=src/app.js \
                  -Dsonar.host.url=http://sonarqube:9000 \
                  -Dsonar.login=sqp_3f472b2620d3eda41a2dc84920e772dd9a7fd65a'
                */
            }
        }

        // --- SE ELIMINÓ LA ETAPA DE APROBACIÓN MANUAL ---

        stage('Deployment a Producción') {
            steps {
                echo "Iniciando despliegue automatizado..."
                // Copia los archivos al directorio de deploy
                sh 'cp -r src/* /deploy/'
                echo "¡Despliegue exitoso y automatizado!"
            }
        }
    }
    
    // Opcional: Agregar notificaciones post-buid
    post {
        success {
            echo 'El Pipeline terminó correctamente y la aplicación fue desplegada.'
        }
        failure {
            echo 'El Pipeline falló. Revisa los logs. No se realizó el despliegue.'
        }
    }
}