<template>
    <div class="home page-template-default header-layout-minimal footer-layout-minimal header-layout-boxed content-layout-boxed footer-layout-boxed blog-default position-fullwidth sidebar-1-3">
        <div class="site">
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
            <header id="masthead" class="site-header minimal" role="banner">
                <div class="top-panel">
                    <div class="top-panel__wrap"></div>
                </div>

                <div class="header-container">
                    <div class="header-container_wrap">
                        <div class="header-container__flex">
                            <div class="site-branding">
                                <a class="site-logo__link" href="/" rel="home">
                                    <div class="site-logo image">
                                        <img src="~assets/logo.png"
                                             alt="UPBUILD" class="site-link__img"
                                             srcset="~assetsretina-logo.png 2x">
                                    </div>
                                </a>
                            </div>
                            <nav id="site-navigation" class="main-navigation" role="navigation">
                                <button class="menu-toggle" aria-controls="main-menu" aria-expanded="false">
                                    <i class="menu-toggle__icon material-icons">subject</i>
                                </button>
                                <ul id="main-menu" class="menu">
                                    <li class="menu-item">
                                        <nuxt-link to="/">Главная</nuxt-link>
                                        <a href="#" class="mobile-sublink"><i class="material-icons">keyboard_arrow_down</i></a>
                                    </li>
                                    <li class="menu-item">
                                        <nuxt-link to="/portfolio">Портфолио</nuxt-link>
                                    </li>
                                    <li class="menu-item">
                                        <nuxt-link to="/about">Обо мне</nuxt-link>
                                        <a href="#" class="mobile-sublink"><i class="material-icons">keyboard_arrow_down</i></a>
                                    </li>
                                    <li class="menu-item">
                                        <nuxt-link to="/price">Прайс</nuxt-link>
                                        <a href="#" class="mobile-sublink"><i class="material-icons">keyboard_arrow_down</i></a>
                                    </li>
                                    <li class="menu-item">
                                        <nuxt-link to="/contact">Контакты</nuxt-link>
                                        <a href="#" class="mobile-sublink"><i class="material-icons">keyboard_arrow_down</i></a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="top-panel__search">
                                <div class="search-form_wrap">
                                    <form role="search" method="get" class="search-form" action="">
                                        <label>
                                            <span class="screen-reader-text">Search...</span>
                                            <input type="search" class="search-form__field"
                                                   placeholder="Search..."
                                                   value="" name="s"
                                                   title="Search..."/>
                                        </label>
                                        <button type="submit" class="search-form__submit btn"></button>
                                    </form>

                                    <span class="close-btn">
                                        <a href="#" class="close-btn-link"><i class="material-icons">close</i></a>
                                    </span>
                                    <span class="open-btn">
                                        <a href="#" class="open-btn-link"><i class="material-icons">search</i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="site-content">
                <nuxt/>
            </div>

            <footer class="site-footer minimal" role="contentinfo">
                <div class="footer-container">
                    <div class="site-info">
                        <div class="site-info__flex">

                            <div class="site-info__mid-box">
                                <div class="footer-copyright"> &#169; 2017 Irina Sukhova</div>
                            </div>

                            <div class="site-info__right-box">

                                <nav id="footer-navigation" class="footer-menu" role="navigation">
                                    <ul id="footer-menu-items" class="footer-menu__items">
                                        <li class="menu-item">
                                            <nuxt-link to="/">Главная</nuxt-link>
                                        </li>
                                        <li class="menu-item">
                                            <nuxt-link to="/portfolio">Портфолио</nuxt-link>
                                        </li>
                                        <li class="menu-item">
                                            <nuxt-link to="/about">Обо мне</nuxt-link>
                                        </li>
                                        <li class="menu-item">
                                            <nuxt-link to="/price">Прайс</nuxt-link>
                                        </li>
                                        <li class="menu-item">
                                            <nuxt-link to="/contact">Контакты</nuxt-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
