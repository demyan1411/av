# Project name

### Демо проекта

### Участники проекта

### Установка
```
1. git clone
2. cd
2. bower install
3. npm install
4. для сборки проекта в папку dist:
   gulp build
5. для проверки получившейся папки dist:
   gulp server-dist
6. для автоматической компиляции изменений в проекте:
   gulp
```
Внимание, если после команды gulp происходит ошибка, посмотреть, какой плагин не скачался, и установить его:
`npm install <имя-плагина>`

### Cтруктура проекта
```
|\
| |node_modules - node-пакеты (появятся после их установки)
| |dist - папка с дистрибутивом сайта
| |app  - папка с исходным кодом
| |\
| | |bower - bower-пакеты (появятся после их установки)
| | |css   - скомпилированные css-файлы
| | |fonts - шрифты
| | |img   - картинки и иконки
| | |js    - javascript-файлы
| | |php   - php-файлы
| | |scss  - sass-шаблоны
| | |templates - jade-шаблоны
| | 
| |
| |index.html  - основная страница (компилируется из шаблонов)
|
|bower.json  - пакеты bower
|gulpfile.js - скрипты для потокового сборщика gulp
|package.json - пакеты node.js
|README.md - этот файл
```