# Componente: Generic Card

Este componente define una **tarjeta genérica reutilizable** para Angular, con opciones de layout, hover y padding personalizable.  
Su objetivo es estandarizar el diseño de tarjetas en la aplicación, manteniendo consistencia visual y flexibilidad.

---

## 🔧 Inputs disponibles

### `layout`
- **Tipo:** `'row' | 'column'`
- **Por defecto:** `'row'`
- **Descripción:** Define la orientación de la tarjeta.
  - `'row'`: organiza los elementos en una fila.
  - `'column'`: organiza los elementos en columna.

---

### `hovereable`
- **Tipo:** `boolean`
- **Por defecto:** `true`
- **Descripción:** Activa o desactiva el estilo hover.  
  Cuando está en `true`, la tarjeta cambia su borde/color al pasar el mouse.

---

### `paddingY`
- **Por defecto:** `1rem`
- **Descripción:** Define el padding vertical (arriba/abajo).
- **Tamaño personalizable**
  -  `0.25rem`
  -  `30px`
  -  `3rem`
  -  `30vw`


---

### `paddingX`
- **Por defecto:** `4rem`
- **Descripción:** Define el padding horizontal (izquierda/derecha).
- **Tamaño personalizable**
  -  `0.25rem`
  -  `30px`
  -  `3rem`
  -  `30vw`

---

### `marginY`
- **Por defecto:** `0px`
- **Descripción:** Define el margen horizontal vertical (arriba/abajo).
- **Tamaño personalizable**
  -  `0.25rem`
  -  `30px`
  -  `3rem`
  -  `30vw`

---

### `marginX`
- **Por defecto:** `0px`
- **Descripción:** Define el margen horizontal (izquierda/derecha).
- **Tamaño personalizable**
  -  `0.25rem`
  -  `30px`
  -  `3rem`
  -  `30vw`

---

### `Background color Tailwind`
- **Por defecto:** `bg-[#f7f9fa]`
- **Descripción:** Define el background del color de la tarjeta.
- **Color personalizable**
  -  `bg-red-500`
  -  `bg-cian-300`
  -  `bg-[#fffff]`

---

El componente expone tres áreas a través de ng-content:

[card-header] → Sección de encabezado.

[card-content] → Sección principal de contenido.

[card-actions] → Sección de acciones o botones.

---

##  Ejemplo de uso 1 - ANGULAR + TAILWIND

```html
<app-card class="app-body cursor-pointer"
          [layout]="'row'"
          [paddingX]="'2rem'"
          [paddingY]="'2rem'"
          [hovereable]="true">

  <!-- HEADER (icono a la izquierda) -->
  <div card-header class="flex items-center gap-3">
    <div class="flex align-middle p-3 rounded-lg bg-teal-100 text-teal-600">
      <mat-icon>event</mat-icon>
    </div>
    <div class="flex flex-col">
      <h2 class="font-bold text-gray-800 self-start">MIS TURNOS</h2>
      <span class="text-gray-500 text-sm">Ver y solicitar citas médicas</span>
    </div>
  </div>

  <!-- CONTENT vacío en este caso -->
  <div card-content></div>

  <!-- ACTIONS (flecha a la derecha) -->
  <div card-actions class="ml-auto">
    <mat-icon>chevron_right</mat-icon>
  </div>

  >
</app-card>
```

##  Ejemplo de uso 2 - ANGULAR + TAILWIND
```html
<app-card
      [layout]="'column'"
      [paddingX]="'2rem'"
      [paddingY]="'2rem'"
      [hovereable]="false">

      <!-- HEADER -->
      <div card-header class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="flex align-middle p-2 rounded-md bg-green-100 text-green-600">
            <mat-icon>person</mat-icon>
          </div>
          <div class="text-start flex flex-col">
            <h2 class="font-semibold text-gray-800">Juan Pérez</h2>
            <p class="text-xs">Esposo</p>
          </div>
        </div>
      </div>

      <!-- CONTENT -->
      <div card-content class="w-full text-gray-700 text-sm flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <h1 class="font-bold">DNI:</h1>
          <span>00000000</span>
        </div>
        <div class="flex items-center gap-2">
          <h1 class="font-bold">Teléfono:</h1>
          <span>00000000</span>
        </div>
      </div>


      <!-- ACTIONS -->
      <div card-actions class="w-full flex flex-wrap gap-3">
        <button
          class="justify-center w-full flex items-center gap-3 rounded-lg border border-gray-300
           bg-white px-4 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50">
          <mat-icon class="flex-none -mt-px">visibility</mat-icon>
          <p class="leading-none">Ver Datos Completos</p>
        </button>

        <button
          class="justify-center w-full flex items-center gap-3 rounded-lg border border-gray-300
           bg-white px-4 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50">
          <mat-icon class="flex-none -mt-px">edit</mat-icon>
          <p class="leading-none">Editar Información</p>
        </button>
      </div>

    </app-card>
```
