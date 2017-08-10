<template>
    <div class="container">
        <div class="row">
            <div id="primary" class="col-xs-12 col-md-8">
                <main id="main" class="site-main" role="main">
                    <article class="page type-page status-publish hentry no-thumb">
                        <header class="entry-header">
                            <h1 class="entry-title">Обо мне</h1>
                        </header>

                        <div class="entry-content">
                            <p>Добрый день. Меня зовут Ирина Сухова. Я живу и работаю в солнечном г.Ростов-на-Дону.</p>
                            <p>Основным направлением в моей работе являются детская и семейная фотосессия.</p>
                            <p>Самое главное для меня в фотографии — это живые эмоции, чтобы получились те самые снимки, которые вы будете рассматривать с удовольствием спустя много лет.</p>
                            <p>На моем сайте вы можете ознакомиться с моим <nuxt-link to="/portfolio">портфолио</nuxt-link>, изучить <nuxt-link to="/price">пакеты услуг</nuxt-link>, почитать <nuxt-link to="/tips">рекомендации для съемок</nuxt-link>.</p>
                            <p>Если вам понравились мои работы, не стесняйтесь, пишите и я буду рада познакомиться и сохранить историю в фотографиях для вашей семьи!!!</p>
                            <p>ps. Есть интересные предложения по съемке беременных девушек. Присылайте свои фотографии на почту и может именно вы поучаствуете в <nuxt-link to="/price">tfp</nuxt-link> съемке :)</p>
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
     title: 'Обо мне',
    }
   }
  }
</script>
