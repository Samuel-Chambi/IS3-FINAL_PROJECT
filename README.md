# Proyecto: API de Consultas y Registros de Datos Bancarios

## Equipo de Trabajo: DevFinTech

### Integrantes:

- Samuel Felipe Chambi Ytusaca
- Ancel Alain Cruz Chaiña
- Julio Yauri Ituccayasi
- Juan Manuel Soto Begazo

## Cliente: FinBank Solutions

## Propósito del Proyecto

Este proyecto tiene como objetivo desarrollar una API robusta y segura para la consulta y registro de datos bancarios. La API permitirá a los usuarios realizar diversas operaciones bancarias, incluyendo la consulta de saldos, registros de transacciones, y otros servicios relacionados con la gestión de cuentas bancarias. Nuestro propósito es proporcionar una herramienta eficiente y confiable para mejorar la experiencia del usuario y optimizar las operaciones bancarias.

## Características Principales

- **Consulta de Saldo:** Permite a los usuarios consultar el saldo de sus cuentas bancarias de manera rápida y segura.
- **Registro de Transacciones:** Facilita el registro de transacciones bancarias, asegurando la integridad y precisión de los datos.
- **Gestión de Cuentas:** Ofrece herramientas para la gestión eficiente de cuentas bancarias, incluyendo la creación, actualización y eliminación de cuentas.

# Módulos y Sprints

### Módulo de Autenticación y Autorización

Responsable de centralizar la lógica para manejar el acceso no autorizado en todas las APIs.

### Módulo de Gestión de Tarjetas de Crédito

- **Sprint 1:** Implementar la funcionalidad para obtener todas las tarjetas de crédito registradas en el sistema.
- **Sprint 2:** Desarrollar la funcionalidad para consultar los detalles de una tarjeta de crédito específica por su ID.
- **Sprint 3:** Implementar la funcionalidad para obtener todas las tarjetas de crédito asociadas a un cliente específico.
- **Sprint 4:** Desarrollar la funcionalidad para crear nuevas tarjetas de crédito.

### Módulo de Operaciones de Tarjetas de Crédito

- **Sprint 5:** Implementar la funcionalidad para realizar pagos de deudas de tarjetas de crédito.
- **Sprint 6:** Desarrollar la funcionalidad para cargar montos a tarjetas de crédito.
- **Sprint 7:** Implementar la funcionalidad para consultar el monto disponible en una tarjeta de crédito.

### Módulo de Gestión de Créditos

- **Sprint 8:** Desarrollar la funcionalidad para obtener todos los créditos registrados en el sistema.
- **Sprint 9:** Implementar la funcionalidad para consultar los detalles de un crédito específico por su ID.
- **Sprint 10:** Desarrollar la funcionalidad para obtener todos los créditos asociados a un cliente específico.
- **Sprint 11:** Implementar la funcionalidad para crear nuevos créditos.

### Módulo de Operaciones de Crédito

- **Sprint 12:** Desarrollar la funcionalidad para realizar pagos de deudas de créditos.

# Seguimiento a Cambios: GitHub Issues

### Backlog

Tareas identificadas pero aún no iniciadas. Ejemplos de estas tareas son:

- Gestión de accesos no autorizados.
- Gestión de deudas relacionadas con el envío de datos no válidos o incorrectos.

### Ready

Tareas que están preparadas para comenzar. Estas tareas incluyen:

- Manejo de cantidades con datos no válidos.
- Gestión de problemas de acceso no autorizado.

### In Progress

Tareas en las que se está trabajando activamente. Ejemplos de estas tareas son:

- Cargar importes en una tarjeta de crédito.
- Saldar deudas con datos no válidos.

### Test

Tareas en la fase de pruebas. Estas tareas incluyen:

- Verificación de la creación de nuevas tarjetas de crédito.
- Manejo de diversos escenarios de autorización.

### Done

Tareas que se han completado. Estas incluyen:

- Recuperación satisfactoria de información de tarjetas de crédito.
- Gestión de tarjetas de crédito específicas o inexistentes.
- Gestión de listas vacías.

## Board

![Diagrama del proyecto](assets/board.png)

## RoadMap

![Diagrama del proyecto](assets/roadmap.png)

## Tecnologías Utilizadas

- **Backend:** Spring Boot
- **Base de Datos:** PostgreSQL
- **Documentación:** Swagger

## Uso de la API

Para más detalles sobre el uso de la API, consulta la documentación completa disponible en Swagger.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias y mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
