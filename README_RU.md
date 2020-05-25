# CMS boilerplate

[![CircleCI](https://circleci.com/gh/AntonLukichev/cms.svg?style=shield&circle-token=779bbd5aece403ebff957edba62bacd5bc8b7512)](https://app.circleci.com/pipelines/github/AntonLukichev/cms)
[![codecov](https://codecov.io/gh/AntonLukichev/cms/branch/master/graph/badge.svg?token=5epmUK10kn)](https://codecov.io/gh/AntonLukichev/cms)

## Установка

```shell script
# git clone https://github.com/AntonLukichev/cms.git site_folder
# cd site_folder
# npm install
```

### Настройка Wordpress + Nginx
Сначала необходимо установить плагин [WPGraphQL](https://www.wpgraphql.com/) <br>
Инструкция по установке и активации [плагина](https://docs.wpgraphql.com/getting-started/install-and-activate/)

Советую также установить плагин [WPGraphiQL](https://github.com/wp-graphql/wp-graphiql)

#### Nginx CORS
```shell script
location / {
  if ($request_method = 'OPTIONS') {
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    #
    # Custom headers and headers various browsers *should* be OK with but aren't
    #
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
    #
    # Tell client that this pre-flight info is valid for 20 days
    #
    add_header 'Access-Control-Max-Age' 1728000;
    add_header 'Content-Type' 'text/plain; charset=utf-8';
    add_header 'Content-Length' 0;
    return 204;
  }
  if ($request_method = 'POST') {
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
  }
  if ($request_method = 'GET') {
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
  }
}
```

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
