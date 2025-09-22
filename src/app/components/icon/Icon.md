# IconComponent

Componente Angular para mostrar íconos personalizables.

## Propiedades

- `iconSize`: Tamaño del ícono. Valores posibles: `sm`, `md`, `lg`, `xl`. Valor por defecto: `md`.
- `backgroundColor`: Color de fondo del ícono. Valor por defecto: `transparent`.
- `iconColor`: Color del ícono. Valor por defecto: `white`.
- `borderRadius`: Radio de borde del ícono. Valor por defecto: `.5rem`.
- `margin`: Margen alrededor del ícono. Valor por defecto: `4px`.

## Uso

```html
<app-icon
  [iconSize]="'lg'"
  [backgroundColor]="'#f0f0f0'"
  [iconColor]="'#333'"
  [borderRadius]="'1rem'"
  [margin]="'8px'"
>
  <mat-icon>menu</mat-icon>
</app-icon>
