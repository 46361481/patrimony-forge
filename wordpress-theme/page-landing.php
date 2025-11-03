<?php
/**
 * Template Name: Landing Page
 */
get_header();

while (have_posts()) : the_post();
    $hero_title = get_post_meta(get_the_ID(), '_hero_title', true) ?: "Mecanismo de Alavancagem";
    $hero_subtitle = get_post_meta(get_the_ID(), '_hero_subtitle', true) ?: "3 dias para construir renda passiva vitalícia";
    $hero_button = get_post_meta(get_the_ID(), '_hero_button', true) ?: "QUERO MINHA VAGA";
    $hero_url = get_post_meta(get_the_ID(), '_hero_url', true) ?: "#oferta";
    $offer_price = get_post_meta(get_the_ID(), '_offer_price', true) ?: "997";
    $offer_old = get_post_meta(get_the_ID(), '_offer_old', true) ?: "3.997";
?>

<main>
    <!-- Hero -->
    <section class="hero-section">
        <div class="hero-gradient"></div>
        <div class="container">
            <div class="hero-content animate-fade-in">
                <h1><?php echo esc_html($hero_title); ?></h1>
                <p class="text-gray"><?php echo esc_html($hero_subtitle); ?></p>
                <a href="<?php echo esc_url($hero_url); ?>" class="btn btn-cta"><?php echo esc_html($hero_button); ?></a>
            </div>
        </div>
    </section>

    <!-- Oferta -->
    <section id="oferta" class="bg-card">
        <div class="container max-w-4xl text-center">
            <h2 class="section-title">Garanta Sua Vaga</h2>
            <div class="card">
                <p style="text-decoration:line-through">De R$ <?php echo esc_html($offer_old); ?></p>
                <p style="font-size:3rem;color:hsl(var(--green-primary))">R$ <?php echo esc_html($offer_price); ?></p>
                <a href="#checkout" class="btn btn-cta">GARANTIR MINHA VAGA</a>
            </div>
        </div>
    </section>
</main>

<?php endwhile; get_footer(); ?>
