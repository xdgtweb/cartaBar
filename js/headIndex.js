const headHTML = `
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilos1.css">
    <script>
        // Función para ajustar la altura del body
        function ajustarAlturaBody() {
            var windowHeight = window.innerHeight; // Obtiene la altura de la ventana del navegador
            var body = document.body; // Obtiene el elemento body

            // Aplica la altura dinámica al body
            body.style.height = windowHeight + 'px';
        }

        // Ejecuta la función cuando se carga la página y cuando se redimensiona la ventana
        window.addEventListener('load', ajustarAlturaBody);
        window.addEventListener('resize', ajustarAlturaBody);


    </script>
`;