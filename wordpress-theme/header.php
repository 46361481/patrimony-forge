<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <!-- Top Bar -->
    <div class="top-bar" style="background-color: #ef4444; color: white; padding: 0.75rem 0; text-align: center; font-weight: 600;">
        <div class="container">
            🔥 PROMOÇÃO POR TEMPO LIMITADO - Garanta sua vaga com desconto especial!
        </div>
    </div>

    <!-- Header -->
    <header id="masthead" class="site-header" style="background-color: hsl(var(--background)); border-bottom: 1px solid hsl(var(--border)); padding: 1rem 0;">
        <div class="container">
            <nav class="main-navigation" style="display: flex; justify-content: space-between; align-items: center;">
                <!-- Logo -->
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) :
                        the_custom_logo();
                    else :
                        ?>
                        <h1 class="site-title" style="margin: 0; font-size: 1.5rem;">
                            <a href="<?php echo esc_url(home_url('/')); ?>" style="text-decoration: none; color: hsl(var(--foreground));">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                        <?php
                    endif;
                    ?>
                </div>

                <!-- Menu -->
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'primary-menu',
                    'container'      => 'div',
                    'container_class' => 'menu-primary-container',
                    'fallback_cb'    => false,
                ));
                ?>

                <!-- CTA Button -->
                <div class="header-cta">
                    <a href="#oferta" class="btn btn-cta" style="display: inline-block;">
                        QUERO COMEÇAR AGORA
                    </a>
                </div>
            </nav>
        </div>
    </header>
