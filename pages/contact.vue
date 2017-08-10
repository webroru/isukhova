<template>
    <div class="container">
        <div class="row">
            <div id="primary" class="col-xs-12 col-md-12">
                <main id="main" class="site-main" role="main">
                    <article class="page type-page status-publish hentry no-thumb">
                        <header class="entry-header">
                            <h1 class="entry-title">Контакты</h1>
                        </header>

                        <div class="entry-content">
                            <p class="text">
                                Для того, чтобы заказать фотосессию, узнать о свободных датах или задать интересующие вопросы, свяжитесь со мной по контактам, указанным ниже:
                            </p>
                            <p class="contact" style="text-align: center;">
                                <a href="tel:+79198840474">
                                    <object type="image/svg+xml" data="/phone.svg" class="phone"></object>
                                    +7-919-884-04-74 (whatsapp)</a>
                                <a href="mailto:isukhova@yandex.ru">
                                    <object type="image/svg+xml" data="/email.svg" class="email"></object>
                                    isukhova@yandex.ru</a>
                                <a>
                                    <object type="image/svg+xml" data="/city.svg" class="city"></object>
                                    г. Ростов-на-Дону
                                </a>
                            </p>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
   head () {
    return {
     title: 'Контакты',
    }
   }
  }
</script>

<style lang="css" scoped>
    .city {
        vertical-align: middle;
        width: 36px;
    }

    .contact a {
        display: block;
        margin: 0 0 36px;
    }

    .email {
        vertical-align: middle;
        width: 30px;
    }

    .text {
        color: #0b0b0b;
        display: block;
        font-size: 20px;
        padding: 0 0 36px;
        text-align: center;
    }

    .phone {
        vertical-align: middle;
        width: 20px;
    }
</style>