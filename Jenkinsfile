pipeline {
    agent any
    
    stages {
        stage('Test Local') {
            steps {
                sh 'npm install' 
                sh 'npm test'
            }
        }
        
        stage('Inspección de Código') {
            steps {
                echo "Simulando envío de análisis a SonarQube..."
            }
        }

        stage('Deployment a Producción') {
            steps {
                sh 'cp -r src/* /deploy/'
                echo "¡Despliegue exitoso!"
            }
        }
    }
    
    // El bloque post se ejecuta al finalizar el pipeline
    post {
        success {
            mail to: 'lucianacampestrini11@gmail.com',
                 subject: "✅ ÉXITO: Despliegue de Demo IC",
                 body: "¡Felicitaciones! El pipeline se ejecutó correctamente y los cambios están en producción.\n\nPodés ver los detalles acá: ${env.BUILD_URL}"
        }
        failure {
            mail to: 'lucianacampestrini11@gmail.com',
                 subject: "❌ ERROR: Fallo en el Pipeline de Demo IC",
                 body: "Atención: El pipeline ha fallado en alguna de sus etapas (Test, Inspección o Deploy).\n\nRevisá los logs de la consola acá para ver qué pasó: ${env.BUILD_URL}"
        }
    }
}