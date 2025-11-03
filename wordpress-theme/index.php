<?php
/**
 * The main template file
 */
get_header();
?>

<main id="main" class="site-main">
    <div class="container">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('animate-fade-in'); ?>>
                    <header class="entry-header">
                        <?php
                        if (is_singular()) :
                            the_title('<h1 class="entry-title">', '</h1>');
                        else :
                            the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '">', '</a></h2>');
                        endif;
                        ?>
                    </header>

                    <?php if (has_post_thumbnail()) : ?>
                        <div class="post-thumbnail mb-4">
                            <?php the_post_thumbnail('large'); ?>
                        </div>
                    <?php endif; ?>

                    <div class="entry-content">
                        <?php
                        if (is_singular()) :
                            the_content();
                        else :
                            the_excerpt();
                            echo '<a href="' . esc_url(get_permalink()) . '" class="btn btn-primary mt-4">Leia Mais</a>';
                        endif;
                        ?>
                    </div>

                    <footer class="entry-footer mt-4">
                        <?php
                        if (!is_singular()) :
                            echo '<div class="entry-meta">';
                            echo '<span class="posted-on">Publicado em ' . get_the_date() . '</span>';
                            echo '</div>';
                        endif;
                        ?>
                    </footer>
                </article>
                <?php
            endwhile;

            // Pagination
            the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => '← Anterior',
                'next_text' => 'Próximo →',
            ));

        else :
            ?>
            <div class="no-posts text-center">
                <h2>Nenhum conteúdo encontrado</h2>
                <p>Desculpe, mas nada foi encontrado. Tente uma busca.</p>
                <?php get_search_form(); ?>
            </div>
            <?php
        endif;
        ?>
    </div>
</main>

<?php
get_footer();
?>
