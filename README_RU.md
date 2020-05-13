# CMS boilerplate

[![CircleCI](https://circleci.com/gh/AntonLukichev/cms.svg?style=shield&circle-token=779bbd5aece403ebff957edba62bacd5bc8b7512)](https://app.circleci.com/pipelines/github/AntonLukichev/cms)
[![codecov](https://codecov.io/gh/AntonLukichev/cms/branch/master/graph/badge.svg?token=5epmUK10kn)](https://codecov.io/gh/AntonLukichev/cms)

## FAQ

#### Как настроить тему сайта?

Настройки находятся [`src/theme/index.ts`](/src/theme/index.ts)

#### Сайт адаптирован под мобильную версию?

Да. Поддерживается 3 версии:

| Тип устройства |    Ширина экрана |
| -------------- | ---------------: |
| мобильный      | меньше **600px** |
| планшет        | меньше **960px** |
| десктоп        | больше **960px** |

#### Как установить язык содержимого HTML страниц?

Измените атрибут `lang` тега `html` в скрипте [`src/pages/_document.tsx`](/src/pages/_document.tsx)

#### Как подключить скрипты со стороннего сайта (JQuery, шрифты и т.д.)?

Необходимо добавить скрипты в шаблон сайта [`src/layouts/index.tsx`](/src/layouts/index.tsx)
Рекомендуется использовать ключевые слова [dns-prefetch/preconnect/prefetch](https://www.w3.org/TR/resource-hints/) [preload](https://www.w3.org/TR/preload/). Они указывают браузеру приоритет загрузки ресурсов, что позволяет оптимизировать производительность веб страниц.
