## SPA-TS

#### Создание Проекта 
`npm init -y` Инициализация проекта (Создаться файл `package.json`)

Устанавливаем TypeScript

`npm i typescript --save-dev`

Инициализируем TypeScript

`npx tsc --init`

Установка пакетов для Webpack

`npm i html-webpack-plugin webpack-dev-server webpack ts-loader css-loader style-loader`

Добавляем в файл `package.json` в раздел `scripts` ниже после `test`

`"start": "npx webpack serve"`

### Пришлось все снести из-за проблемы

нельзя нормальный делать импорт возникает ошибка в браузере, при export'е других модулей из приложения. 

Поэтому было принято решение все удалить, и воспользоваться готовым шаблоном. от 

`npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force` Флаг `--force` для установки иначе не получится установить шаблон.

`package.json` из него удалены строчки -

```
    "test": "echo \"This template does not include a test runner by default.\" && exit 1",
    "format": "prettier --write \"src/**/*.{ts,js}\"",
    "lint": "prettier --check \"src/**/*.{ts,js}\""
```

Для запуска шаблона : нужно прописать 'npm start'