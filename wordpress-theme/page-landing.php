<?php
/**
 * Template Name: Landing Page
 * Template Post Type: page
 */
get_header();
?>

<main id="main" class="landing-page">
    <?php
    while (have_posts()) :
        the_post();
        
        // Get custom fields
        $hero_title = get_post_meta(get_the_ID(), '_hero_title', true);
        $hero_subtitle = get_post_meta(get_the_ID(), '_hero_subtitle', true);
        $hero_button_text = get_post_meta(get_the_ID(), '_hero_button_text', true);
        $hero_button_url = get_post_meta(get_the_ID(), '_hero_button_url', true);
        
        $cta_title = get_post_meta(get_the_ID(), '_cta_title', true);
        $cta_text = get_post_meta(get_the_ID(), '_cta_text', true);
        $cta_button_text = get_post_meta(get_the_ID(), '_cta_button_text', true);
        $cta_button_url = get_post_meta(get_the_ID(), '_cta_button_url', true);
        ?>
        
        <!-- Hero Section -->
        <section class="hero-section" style="min-height: 600px; display: flex; align-items: center; background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary))); color: white; padding: 4rem 0;">
            <div class="container">
                <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                    <?php if ($hero_title) : ?>
                        <h1 class="animate-fade-in" style="font-size: 3rem; margin-bottom: 1.5rem; line-height: 1.2;">
                            <?php echo esc_html($hero_title); ?>
                        </h1>
                    <?php endif; ?>
                    
                    <?php if ($hero_subtitle) : ?>
                        <p class="animate-fade-in" style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">
                            <?php echo esc_html($hero_subtitle); ?>
                        </p>
                    <?php endif; ?>
                    
                    <?php if ($hero_button_text && $hero_button_url) : ?>
                        <a href="<?php echo esc_url($hero_button_url); ?>" class="btn btn-cta animate-fade-in">
                            <?php echo esc_html($hero_button_text); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="content-section" style="padding: 4rem 0;">
            <div class="container">
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <?php if ($cta_title || $cta_text) : ?>
        <section class="cta-section" id="oferta" style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 4rem 0; text-align: center;">
            <div class="container">
                <?php if ($cta_title) : ?>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">
                        <?php echo esc_html($cta_title); ?>
                    </h2>
                <?php endif; ?>
                
                <?php if ($cta_text) : ?>
                    <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.95;">
                        <?php echo esc_html($cta_text); ?>
                    </p>
                <?php endif; ?>
                
                <?php if ($cta_button_text && $cta_button_url) : ?>
                    <a href="<?php echo esc_url($cta_button_url); ?>" class="btn" style="background: white; color: #ef4444; font-size: 1.25rem; padding: 1rem 2rem; font-weight: 700;">
                        <?php echo esc_html($cta_button_text); ?>
                    </a>
                <?php endif; ?>
            </div>
        </section>
        <?php endif; ?>

        <!-- Testimonials Section -->
        <section class="testimonials-section" style="padding: 4rem 0; background-color: hsl(var(--secondary));">
            <div class="container">
                <h2 class="text-center mb-8">O Que Nossos Alunos Dizem</h2>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="card animate-fade-in">
                        <div class="testimonial-stars" style="color: #fbbf24; margin-bottom: 1rem;">★★★★★</div>
                        <p>"Transformou completamente minha vida! Resultados incríveis em poucos meses."</p>
                        <div style="margin-top: 1rem; font-weight: 600;">- João Silva</div>
                    </div>
                    
                    <div class="card animate-fade-in">
                        <div class="testimonial-stars" style="color: #fbbf24; margin-bottom: 1rem;">★★★★★</div>
                        <p>"Método simples e eficaz. Recomendo para todos que querem resultados reais."</p>
                        <div style="margin-top: 1rem; font-weight: 600;">- Maria Santos</div>
                    </div>
                    
                    <div class="card animate-fade-in">
                        <div class="testimonial-stars" style="color: #fbbf24; margin-bottom: 1rem;">★★★★★</div>
                        <p>"Investimento que realmente vale a pena. Mudou minha perspectiva totalmente."</p>
                        <div style="margin-top: 1rem; font-weight: 600;">- Carlos Oliveira</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section" style="padding: 4rem 0;">
            <div class="container">
                <h2 class="text-center mb-8">Perguntas Frequentes</h2>
                
                <div style="max-width: 800px; margin: 0 auto;">
                    <div class="card mb-4">
                        <h3 style="margin-bottom: 0.5rem;">Como funciona o método?</h3>
                        <p>O método é baseado em técnicas comprovadas e aplicadas por milhares de pessoas com sucesso.</p>
                    </div>
                    
                    <div class="card mb-4">
                        <h3 style="margin-bottom: 0.5rem;">Quanto tempo leva para ver resultados?</h3>
                        <p>Os primeiros resultados podem ser vistos em poucas semanas, dependendo da sua dedicação.</p>
                    </div>
                    
                    <div class="card mb-4">
                        <h3 style="margin-bottom: 0.5rem;">Existe garantia?</h3>
                        <p>Sim! Oferecemos garantia de 7 dias. Se não estiver satisfeito, devolvemos 100% do seu investimento.</p>
                    </div>
                </div>
            </div>
        </section>

    <?php endwhile; ?>
</main>

<?php
get_footer();
?>
