Desafío de Automatización con Playwright
Este proyecto tiene como objetivo automatizar el proceso de creación de un nuevo empleado en la plataforma OrangeHRM utilizando Playwright. Este archivo README proporciona una guía completa para entender, instalar, y ejecutar el proyecto de automatización.

Descripción
Este proyecto utiliza Playwright para automatizar el proceso de creación de un nuevo empleado en la web de OrangeHRM. Se implementan pruebas end-to-end para verificar que la funcionalidad de creación de empleados funciona correctamente.

Casos de Prueba
Casos de Prueba Identificados
Iniciar sesión en OrangeHRM

Descripción: Verificar que el usuario puede iniciar sesión con credenciales válidas.
Técnica de Diseño de Caso de Prueba: Equivalencia de clases y análisis de valores límite.
Navegar a la opción PIM

Descripción: Verificar que después de iniciar sesión, el usuario puede navegar a la sección PIM (Personal Information Management).
Técnica de Diseño de Caso de Prueba: Análisis de flujo de navegación.
Crear un nuevo empleado

Descripción: Verificar que el usuario puede acceder a la página de creación de empleados y agregar un nuevo empleado con datos válidos.
Técnica de Diseño de Caso de Prueba: Diseño basado en datos.
Verificar que el empleado se muestra en la lista de empleados

Descripción: Verificar que el nuevo empleado creado aparece en la lista de empleados.
Técnica de Diseño de Caso de Prueba: Pruebas de integración.


@crear_empleado
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    Then el inicio de sesión es satisfactorio
    When hago clic en la opción PIM en el menú lateral
    Then se muestra la pantalla de la lista de empleados
    When hago clic en el botón ADD EMPLOYEE
    Then se muestra la pantalla de creación de empleado
    When ingreso los datos del empleado en firstName "JOSEP", middleName "TEST" , lastName "QA" y employeeId "99"
    Then la creacion fue exitosa y me muestra la pantalla personalDetails
    When me dirijo a la pantalla employeeList
    Then visualizo los datos del empleado creado


Requisitos
Node.js
Playwright: La versión más reciente
Navegador: Chromium, Firefox, o WebKit (Playwright soporta estos navegadores)

Instalación
npm run clean (al inicio)
npm i
npm install
npx playwright install
comando para ejecutar el proyecto: npm run test-uat

Uso
npx playwright test
npx playwright show-report

Contacto
Para preguntas o soporte, contacta a:
Email: josepdaniel.quintanillamarca@nttdata.com
GitHub: (https://github.com/Josepqm13)

