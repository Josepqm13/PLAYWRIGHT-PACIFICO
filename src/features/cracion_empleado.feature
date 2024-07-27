Feature: Creación de Empleado

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

