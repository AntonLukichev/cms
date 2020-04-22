# CMS boilerplate

## FAQ

#### Как настроить тему сайта?

Настройки находятся [`src/theme/index.ts`](/src/theme/index.ts)

#### Как установить язык содержимого HTML страниц?

Измените атрибут `lang` тега `html` в скрипте [`src/pages/_document.tsx`](/src/pages/_document.tsx)

#### Как подключить скрипты со стороннего сайта (JQuery, шрифты и т.д.)?

Необходимо добавить скрипты в шаблон сайта [`src/layouts/index.tsx`](/src/layouts/index.tsx)
Рекомендуется использовать ключевые слова [dns-prefetch/preconnect/prefetch](https://www.w3.org/TR/resource-hints/) [preload](https://www.w3.org/TR/preload/). Они указывают браузеру приоритет загрузки ресурсов, что позволяет оптимизировать производительность веб страниц.
