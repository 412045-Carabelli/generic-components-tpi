# Componente Icon

## Descripción
Componente genérico de Angular para mostrar íconos con diferentes tamaños, colores y estilos de fondo. Utiliza proyección de contenido (`ng-content`) para renderizar cualquier tipo de ícono.

## Uso Básico
```html
<!-- Ícono básico -->
<app-icon>
  <i class="fas fa-home"></i>
</app-icon>

<!-- Ícono con tamaño personalizado -->
<app-icon iconSize="lg">
  <svg>...</svg>
</app-icon>

<!-- Ícono con fondo y colores personalizados -->
<app-icon 
  iconSize="xl"
  backgroundColor="#007bff"
  iconColor="white"
  borderRadius="50%">
  <i class="material-icons">favorite</i>
</app-icon>
```

## Propiedades (inputs)
| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| iconSize | 'sm', 'md', 'lg, 'xl' | 'md' | Tamaño del ícono |
| backgroundColor | string | 'transparent' | Color de fondo del contenedor | 
| iconColor | string | 'white' | Color del ícono | 
| borderRadius | string | '.5rem' | Radio del borde |
| margin | string | '4px' | Margen exterior |