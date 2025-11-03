<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            🔥 EVENTO AO VIVO: 01 a 03/12 — Vagas Limitadas! Garanta sua vaga agora
        </div>
    </div>

    <!-- Header -->
    <header id="masthead" class="site-header">
        <div class="container">
            <nav class="main-navigation">
                <!-- Logo -->
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) :
                        the_custom_logo();
                    else :
                        ?>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                        <?php
                    endif;
                    ?>
                </div>

                <!-- CTA Button -->
                <div class="header-cta">
                    <a href="#oferta" class="btn btn-cta">
                        QUERO MINHA VAGA
                    </a>
                </div>
            </nav>
        </div>
    </header>
