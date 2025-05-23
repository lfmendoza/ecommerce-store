# E-Commerce React con Atomic Design

## 📱 Descripción del Proyecto

Aplicación de e-commerce desarrollada con React siguiendo los principios de **Atomic Design** y buenas prácticas de desarrollo frontend. Este proyecto forma parte del curso universitario de Programación Web.

## 🎯 Objetivos del Ejercicio

- ✅ Fomentar el uso de componentes reutilizables
- ⏳ Implementar hooks importantes (useRef, useMemo, useContext)
- ⏳ Integrar buenas prácticas de testing y linting
- ⏳ Documentar componentes con Storybook
- ✅ Seguir restricciones claras y medibles

## 🚀 Demo

- **Aplicación en vivo**: _[Pendiente de despliegue]_
- **Repositorio**: [https://github.com/lfmendoza/ecommerce-store](https://github.com/lfmendoza/ecommerce-store)

## ✨ Características Implementadas

### 📋 Funcionalidades Principales

- [x] Lista de productos (10 productos disponibles)
- [x] Detalle de producto con galería de imágenes
- [x] Carrito de compras funcional
- [x] Sistema de calificaciones con estrellas
- [x] Productos con descuentos y precios tachados
- [x] Botón de favoritos
- [x] Recomendaciones de productos
- [x] Control de cantidad (máximo 9 unidades)
- [x] Validación de total máximo ($999.99)

### 🏗️ Arquitectura

- **Metodología**: Atomic Design
- **Framework**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Componentes**: Totalmente modulares y reutilizables

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/                  # Componentes básicos
│   │   ├── Button/
│   │   ├── Image/
│   │   ├── Text/
│   │   ├── Input/
│   │   └── Icon/
│   ├── molecules/              # Combinaciones de átomos
│   │   ├── ProductCard/
│   │   ├── StarRating/
│   │   ├── PriceDisplay/
│   │   ├── QuantityControl/
│   │   ├── SearchBar/
│   │   ├── CartItem/
│   │   └── CartSummary/
│   ├── organisms/              # Secciones completas
│   │   ├── Header/
│   │   ├── ProductGrid/
│   │   ├── ProductDetail/
│   │   ├── CartList/
│   │   └── RecommendationList/
│   └── templates/              # Layouts de página
│       ├── ProductsTemplate/
│       ├── ProductDetailTemplate/
│       └── CartTemplate/
├── pages/                      # Páginas completas
│   ├── ProductsPage.jsx
│   ├── ProductDetailPage.jsx
│   └── CartPage.jsx
├── data/                       # Datos hardcodeados
│   └── products.json
├── utils/                      # Utilidades
│   └── helpers.js
├── App.jsx
└── main.jsx
```

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca de JavaScript para UI
- **Vite** - Herramienta de desarrollo y build
- **Tailwind CSS 3.4.0** - Framework de CSS utility-first
- **React Router DOM** - Navegación entre páginas
- **Picsum Photos** - Servicio de imágenes placeholder

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/lfmendoza/ecommerce-store
cd ecommerce-react-atomic
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar Tailwind CSS** (si no está configurado)

```bash
npm install -D tailwindcss@3.4.0 postcss@8.4.33 autoprefixer@10.4.17
npx tailwindcss init -p
```

4. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

5. **Abrir en el navegador**

```
http://localhost:5173
```

## 🧩 Componentes Principales

### Atoms (Componentes Básicos)

- **Button**: Botón reutilizable con variantes y tamaños
- **Text**: Componente de texto con tipografías consistentes
- **Image**: Imagen con fallback automático
- **Icon**: Iconos usando emojis
- **Input**: Campo de entrada básico

### Molecules (Combinaciones)

- **ProductCard**: Tarjeta de producto completa
- **StarRating**: Sistema de calificación con estrellas
- **PriceDisplay**: Muestra precios con descuentos
- **QuantityControl**: Control de cantidad con botones +/-
- **CartItem**: Elemento individual del carrito

### Organisms (Secciones)

- **Header**: Cabecera con navegación y carrito
- **ProductGrid**: Grilla responsive de productos
- **ProductDetail**: Vista detallada del producto
- **CartList**: Lista completa del carrito

### Templates (Layouts)

- **ProductsTemplate**: Layout de página principal
- **ProductDetailTemplate**: Layout de detalle
- **CartTemplate**: Layout del carrito

## 📊 Datos del Proyecto

### Productos Disponibles

- 10 productos con información completa
- Categorías: electronics, wearables, accessories
- Precios desde $79.99 hasta $1299.99
- Sistema de descuentos implementado
- Calificaciones de 4.1 a 4.8 estrellas

### Estructura de Datos

```javascript
{
  "id": 1,
  "name": "Smartphone Pro Max",
  "price": 899.99,
  "originalPrice": 999.99,
  "image": "URL_de_imagen",
  "images": ["URL1", "URL2", "URL3"],
  "description": "Descripción del producto",
  "rating": 4.5,
  "reviews": 128,
  "category": "electronics",
  "hasDiscount": true
}
```

## 🎨 Guía de Estilos

### Colores Principales

- **Primario**: `text-blue-600`, `bg-blue-500`
- **Secundario**: `text-gray-600`, `bg-gray-200`
- **Éxito**: `text-green-600`
- **Peligro**: `text-red-600`

### Tipografías

- **H1**: `text-3xl font-bold`
- **H2**: `text-2xl font-semibold`
- **H3**: `text-xl font-semibold`
- **Body**: `text-base`
- **Small**: `text-sm`

## 📋 Restricciones del Proyecto

- ✅ **Máximo 3 vistas**: Productos, Detalle, Carrito
- ✅ **Máximo 20 líneas por componente**
- ⏳ **Hooks requeridos**: useRef, useMemo, useContext
- ✅ **Solo interacciones con botones** (no inputs libres)
- ⏳ **Storybook**: Mínimo 3 componentes documentados

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting (pendiente configurar)
npm run lint

# Testing (pendiente configurar)
npm test

# Storybook (pendiente configurar)
npm run storybook
```

## 📅 Cronograma de Entregas

### ✅ Semana 1 (Jueves 15) - Wireframes (5pts)

- [x] Mockup visual del sitio
- [x] Wireframes de las 3 vistas principales

### 🔄 Semana 2 (Jueves 22) - Estructura (5pts)

- [x] Estructura de carpetas implementada
- [x] Componentes base creados
- [x] Atomic Design aplicado

### ⏳ Semana 3 (Jueves 29) - useContext (5pts)

- [ ] Context para manejo del carrito
- [ ] Context para favoritos
- [ ] Estado global implementado

## 🔮 Próximos Pasos

### Semana 3

1. **Implementar useContext**

   - CartContext para estado global del carrito
   - FavoritesContext para productos favoritos
   - ProductContext para historial de navegación

2. **Agregar useRef y useMemo**

   - useRef para referencias DOM y historial
   - useMemo para optimización de cálculos

3. **Configurar Storybook**

   - Documentar Button, ProductCard, PriceDisplay
   - Crear stories interactivas

4. **Testing y Linting**
   - Configurar ESLint y Prettier
   - Implementar tests básicos

### Entrega Final

- [ ] Despliegue en Netlify/Vercel
- [ ] Documentación completa
- [ ] Tests funcionando
- [ ] Linting configurado

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es parte de un ejercicio académico para el curso de Sistemas y Tecnologías Web.

## 📞 Contacto

- **Estudiante**: Fernando Mendoza
- **Carné**: 19644
- **Curso**: Sistemas y Tecnologías Web
- **Universidad**: Universidad del Valle de Guatemala

## 🙏 Agradecimientos

- Curso de Sistemas y Tecnologías Web
- Picsum Photos por las imágenes placeholder
- Comunidad de React y Tailwind CSS

---

**Estado del Proyecto**: 🚧 En Desarrollo - Semana 2/3 completada
