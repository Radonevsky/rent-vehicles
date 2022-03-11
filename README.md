[Ссылка на деплой](https://radonevsky.github.io/rent-vehicles/)

# Техническое задание

## Цель работы
Реализовать интерфейс по аренде транспортных средств

### Технические требования
- При выполнении работы не разрешается использовать UI библиотеки
- Работа должна быть выполнена с использованием фреймворка Nuxt
- Каждый компонент должен являться SFC
- В секции template не разрешается использовать HTML препроцессоры
- В секции script допускается использование только JavaScript
- Секция style должна быть написана с использованием css-modules

## Задачи

### Часть 1
1. Сверстать страницу выбора транспортного средства
![example](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7a5f174e-f48c-4971-bbc8-4fed883c5edf%2FUntitled.png?table=block&id=544da71c-4f22-452a-8630-29dd2ea53abc&spaceId=6503bd3d-21ef-4511-a433-b7c9b86c76dd&width=1920&userId=&cache=v2)
2. Сверстать детальную страницу транспортного средства
![exampleDetail](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6fd04f01-5828-4873-883b-b3e7b815ec9b%2FUntitled.png?table=block&id=8d70352b-5552-4136-af37-6644f5f8b2bb&spaceId=6503bd3d-21ef-4511-a433-b7c9b86c76dd&width=1920&userId=&cache=v2)
3. Реализовать мобильную версию
##
**Пояснения**
- Каждая детальная страница должна иметь свой адрес
- Переключение между типами информации (Specifications, Team, Rent terms) строится на основе вложенных маршрутов
- В фильтре по типу выпадающий список стилизовать не нужно. Это должен быть нативный селект

### Часть 2
1. Интегрировать взаимодействие с api
2. Для всех страниц осуществить связку с данными, полученными из api
3. На страницу выбора транспортного средства реализовать фильтр по типу
##
**Пояснения**
- В папке api проекта имеются два файла: vehicles.json и request.js. Перед загрузкой приложения необходимо предварительно загрузить данных с помощью метода getVehicles из request.js. Результат работы функции getVehicles сохраняется в хранилище Vuex. Метод getVehicles может вернуть ошибку с вероятностью 1/3. В этом случае ошибку необходимо обработать
- Типы для фильтра на странице выбора должны быть сгенерированы из типов полученных транспортных средств
- На странице выбора транспортного средства, данные каждой карточки должны браться из объекта соответствующего т.с.
- На детальной странице транспортного средства из объекта соответствующего т.с. должны браться: заголовок, описания для трех вкладок, цена и изображение. Вся остальная информация хардкодится

### Часть 3
1. Реализовать форму добавления нового транспортного средства
![exampleModal](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc3e1b8c2-5bc6-4879-884a-e56fdc88a80c%2FUntitled.png?table=block&id=f2937326-133f-4e75-b9e2-13afc2fb77b2&spaceId=6503bd3d-21ef-4511-a433-b7c9b86c76dd&width=1920&userId=&cache=v2)
2. Реализовать переключение между светлой и темной темами
##
**Пояснения**
- После добавления нового транспортного средства, оно помещается в хранилище и отображается на странице выбора. Тип добавляемого транспортного средства должен быть custom

### Требования к результату
- Результат работы должен соответствовать макету
- Верстка должна быть резиновой на всех разрешениях до 1440px. После 1440px размеры остаются фиксированными, увеличиваются области справа и слева
- Должна быть реализована мобильная версия
