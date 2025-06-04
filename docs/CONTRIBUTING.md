# Guía de Contribución

## Estructura de Commits

Usamos la convención de commits semánticos:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de errores
- `docs:` Documentación
- `style:` Cambios de formato
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

## Desarrollo

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Inicia desarrollo: `npm run dev`
4. Ejecuta tests: `npm test`
5. Ejecuta linter: `npm run lint`

## Componentes

Sigue la metodología Atomic Design:

- **Atoms**: Componentes básicos
- **Molecules**: Combinación de átomos
- **Organisms**: Secciones complejas
- **Templates**: Layouts de página
- **Pages**: Páginas completas

## Testing

- Cada componente debe tener tests
- Cobertura mínima del 80%
- Usar `@testing-library/react`

## Storybook

- Documenta al menos 3 componentes
- Incluye todas las variantes
- Agrega controles interactivos
