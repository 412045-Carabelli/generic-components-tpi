# Botón Genérico Angular - Guía de Uso

Un componente de botón altamente personalizable y reutilizable construido con Angular Material Design que ofrece múltiples opciones de estilo, iconos, estados de carga y temas predefinidos.

## 🚀 Características Principales

- **Totalmente personalizable**: Colores, tamaños, bordes, esquinas redondeadas
- **Integración Material Design**: Iconos y estilos de Material UI
- **Temas predefinidos**: Sistema de colores consistente
- **Estados avanzados**: Habilitado, deshabilitado, cargando
- **Iconos flexibles**: Posicionamiento izquierda/derecha con espaciado personalizable
- **Efectos hover**: Animaciones suaves y feedback visual
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **Responsive**: Adaptable a dispositivos móviles

## 📦 Instalación y Setup

### Dependencias Requeridas

```bash
npm install @angular/material @angular/cdk
```

### Importación en tu Módulo

```typescript
import { ButtonComponent } from './path/to/button.component';

@Component({
  // ...
  imports: [ButtonComponent] // Para standalone components
})
export class YourComponent {}
```

## 🎨 Uso Básico

### Botón Simple
```html
<app-button 
  text="Guardar"
  (clicked)="onSave()">
</app-button>
```

### Botón con Icono
```html
<app-button 
  text="Eliminar"
  icon="delete"
  bgType="state-warn"
  (clicked)="onDelete()">
</app-button>
```

### Botón Personalizado
```html
<app-button 
  text="Mi Botón"
  bgColor="#FF5722"
  txtColor="white"
  width="250px"
  height="50px"
  rounded="25px"
  (clicked)="onCustomAction()">
</app-button>
```

## 🔧 Propiedades de Entrada (@Input)

### Texto y Contenido

| Propiedad | Tipo | Valor por Defecto | Descripción |
|-----------|------|-------------------|-------------|
| `text` | `string` | `'place holder'` | Texto mostrado en el botón |
| `txtColor` | `string` | `'white'` | Color del texto (hex, rgb, nombres) |
| `txtSize` | `string` | `'large'` | Tamaño de fuente (px, em, rem, keywords) |

### Dimensiones y Espaciado

| Propiedad | Tipo | Valor por Defecto | Descripción |
|-----------|------|-------------------|-------------|
| `width` | `string` | `'20%'` | Ancho total del botón |
| `height` | `string` | `'10%'` | Alto total del botón |
| `xPad` | `string` | `'6%'` | Padding horizontal interno |
| `yPad` | `string` | `'4%'` | Padding vertical interno |

### Estilos y Apariencia

| Propiedad | Tipo | Valor por Defecto | Descripción |
|-----------|------|-------------------|-------------|
| `bgType` | `'white' \| 'primary' \| 'primary-700' \| 'secondary' \| 'accent' \| 'state-warn' \| 'state-success'` | `'primary'` | Tema de color predefinido |
| `bgColor` | `string` | `undefined` | Color de fondo personalizado (override bgType) |
| `rounded` | `string` | `'10px'` | Radio de esquinas redondeadas |
| `borderSize` | `string` | `undefined` | Grosor del borde |
| `borderColor` | `string` | `'black'` | Color del borde |

### Iconos

| Propiedad | Tipo | Valor por Defecto | Descripción |
|-----------|------|-------------------|-------------|
| `icon` | `string` | `undefined` | Nombre del icono Material Design |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Posición del icono relativa al texto |
| `iconSpacing` | `string` | `'3px'` | Espaciado entre icono y texto |

### Estados

| Propiedad | Tipo | Valor por Defecto | Descripción |
|-----------|------|-------------------|-------------|
| `disable` | `boolean` | `false` | Deshabilita el botón |
| `loading` | `boolean` | `false` | Activa estado de carga |
| `loadingText` | `string` | `undefined` | Texto mostrado durante carga |
| `loadingIcon` | `string` | `'sync'` | Icono mostrado durante carga |

## 📤 Eventos de Salida (@Output)

### clicked
```typescript
@Output() clicked: EventEmitter<boolean> = new EventEmitter();
```

Emitido cuando el botón es clickeado exitosamente (no deshabilitado ni cargando).

```html
<app-button 
  text="Procesar"
  (clicked)="handleClick($event)">
</app-button>
```

```typescript
handleClick(clicked: boolean) {
  if (clicked) {
    console.log('¡Botón clickeado!');
    // Lógica de negocio aquí
  }
}
```

## 🎨 Temas de Color Disponibles

### Temas Predefinidos

```html
<!-- Tema primario (por defecto) -->
<app-button text="Primario" bgType="primary"></app-button>

<!-- Tema primario oscuro -->
<app-button text="Primario 700" bgType="primary-700"></app-button>

<!-- Tema secundario -->
<app-button text="Secundario" bgType="secondary"></app-button>

<!-- Tema de acento -->
<app-button text="Acento" bgType="accent"></app-button>

<!-- Tema de advertencia -->
<app-button text="Advertencia" bgType="state-warn"></app-button>

<!-- Tema de éxito -->
<app-button text="Éxito" bgType="state-success"></app-button>

<!-- Tema blanco -->
<app-button text="Blanco" bgType="white"></app-button>
```

### Variables CSS Requeridas

Asegúrate de definir estas variables CSS en tu aplicación:

```css
:root {
  --brand-primary: #00BBB8;
  --brand-primary-700: #008A87;
  --brand-secondary: #6C757D;
  --brand-accent: #FFC107;
  --brand-warn: #DC3545;
  --brand-success: #28A745;
  --on-surface: #333333;
}
```

## 🔄 Estados del Botón

### Estado Normal
```html
<app-button text="Botón Normal" (clicked)="normalAction()"></app-button>
```

### Estado Deshabilitado
```html
<app-button 
  text="Deshabilitado" 
  [disable]="true"
  (clicked)="noAction()">
</app-button>
```

### Estado de Carga
```html
<app-button 
  text="Guardar"
  [loading]="isLoading"
  loadingText="Guardando..."
  loadingIcon="hourglass_empty"
  (clicked)="saveData()">
</app-button>
```

```typescript
export class MyComponent {
  isLoading = false;

  async saveData() {
    this.isLoading = true;
    try {
      await this.dataService.save();
    } finally {
      this.isLoading = false;
    }
  }
}
```

## 📱 Ejemplos Prácticos

### Botón de Acción Principal
```html
<app-button 
  text="Crear Cuenta"
  bgType="primary"
  icon="person_add"
  width="200px"
  height="45px"
  (clicked)="createAccount()">
</app-button>
```

### Botón de Confirmación
```html
<app-button 
  text="Confirmar Eliminación"
  bgType="state-warn"
  icon="warning"
  iconPosition="left"
  txtColor="white"
  rounded="5px"
  (clicked)="confirmDelete()">
</app-button>
```

### Botón Personalizado con Gradiente
```html
<app-button 
  text="Botón Especial"
  bgColor="linear-gradient(45deg, #FF6B6B, #4ECDC4)"
  txtColor="white"
  txtSize="18px"
  width="300px"
  height="60px"
  rounded="30px"
  borderSize="2px"
  borderColor="#FF6B6B"
  (clicked)="specialAction()">
</app-button>
```

### Grupo de Botones
```html
<div class="button-group">
  <app-button 
    text="Cancelar"
    bgType="white"
    txtColor="#666"
    borderSize="1px"
    borderColor="#ddd"
    width="120px"
    (clicked)="cancel()">
  </app-button>
  
  <app-button 
    text="Confirmar"
    bgType="primary"
    width="120px"
    (clicked)="confirm()">
  </app-button>
</div>
```

## 🔍 Resolución de Problemas

### Problema: Los iconos no se muestran
**Solución**: Verifica que Material Icons esté incluido en tu index.html:

### Problema: Los colores del tema no funcionan
**Solución**: Define las variables CSS requeridas en tu styles.css global.

### Problema: El botón no responde a clicks
**Solución**: Verifica que `disable` y `loading` estén en `false`.

### Problema: Estilos no se aplican correctamente
**Solución**: Asegúrate de que los estilos CSS del componente estén correctamente importados.

## 📋 Mejores Prácticas

1. **Consistencia**: Usa `bgType` para mantener consistencia con el sistema de diseño
2. **Accesibilidad**: Siempre proporciona texto descriptivo
3. **Estados de carga**: Implementa feedback visual durante operaciones asíncronas
4. **Responsive**: Considera el comportamiento en dispositivos móviles
5. **Performance**: Evita re-renderizados innecesarios usando `OnPush` change detection

---
