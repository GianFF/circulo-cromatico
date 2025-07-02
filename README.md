# Workshop Patrones de Diseño - Círculo Cromático

Este workshop está diseñado para explorar diferentes patrones de diseño a través de la implementación de un sistema de mezcla de colores primarios (rojo, azul y amarillo) para crear colores secundarios.

## Contenido del Workshop

El proyecto contiene tres implementaciones principales:

1. **Implementación Java**
2. **Implementación TypeScript/JavaScript**
3. **Implementación Dart**

Cada implementación contiene su propia carpeta con su respectivo código fuente y archivos de configuración.

## Requisitos Previos

### Java
- JDK 17 o superior
- Maven 3.8.x
- JUnit 5 (incluso en el proyecto)

### JavaScript/TypeScript
- Node.js 18.x o superior
- npm (incluso con Node.js)
- TypeScript 5.x
- Jest

### Dart
- Dart SDK 3.x
- Package manager de Dart

## Instalación de Dependencias

### Java
1. Instalar Java Development Kit (JDK) 17 o superior:
   ```bash
   # En macOS usando Homebrew
   brew install openjdk@17
   ```

2. Instalar Maven:
   ```bash
   brew install maven
   ```

3. Verificar instalación:
   ```bash
   java --version
   mvn --version
   ```

### JavaScript/TypeScript
1. Instalar Node.js (que incluye npm):
   ```bash
   # En macOS usando Homebrew
   brew install node
   ```

2. Verificar instalación:
   ```bash
   node --version
   npm --version
   ```

3. Instalar dependencias del proyecto:
   ```bash
   cd typescript
   npm install
   ```

### Dart
1. Instalar Dart SDK:
   ```bash
   # En macOS usando Homebrew
   brew install dart-sdk
   ```

2. Verificar instalación:
   ```bash
   dart --version
   ```

3. Instalar dependencias del proyecto:
   ```bash
   cd dart
   dart pub get
   ```

## Ejecución de Tests

### Java
```bash
cd java
mvn test
```

### JavaScript/TypeScript
```bash
cd typescript
npm test
# Para modo watch
npm run test:watch
```

### Dart
```bash
cd dart
dart test
```

## Estructura del Workshop

El workshop se desarrollará en varias etapas:

1. **Introducción al Problema**
   - Explicación del círculo cromático
   - Definición de los colores primarios y secundarios
   - Objetivos del sistema

2. **Análisis del Problema**
   - Identificación de los _code smells_ o anti patrones.
   - Determinación de los patrones de diseño aplicables
   - Diseño de la arquitectura

3. **Implementación**
   - Cada asistente eligirá un lenguaje de programación y lo implementará siguiendo los patrones de diseño identificados.
   - Cada implementación debe cumplir con las pruebas unitarias ya escritas.
   - Cada implementación sera realizada en un branch diferente por asistente: `git checkout -b <nombre-del-asistente>`

4. **Pruebas**
   - Cada implementación debe cumplir con las pruebas unitarias ya escritas.

5. **Comparación de Implementaciones**
   - Análisis de las diferentes aproximaciones
   - Ventajas y desventajas de cada implementación
   - Discusión sobre el uso de patrones de diseño

## Objetivos del Workshop

- Aprender a aplicar patrones de diseño en diferentes lenguajes de programación
    - En particular el patrón "Can Handle" (derivado del chain of responsibility) y el patrón "Double Dispatch"
- Comparar enfoques de diseño en diferentes lenguajes
