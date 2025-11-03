<?php
function alavancagem_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    register_nav_menus(array('primary' => 'Menu Principal'));
}
add_action('after_setup_theme', 'alavancagem_setup');

function alavancagem_scripts() {
    wp_enqueue_style('alavancagem-style', get_stylesheet_uri());
    wp_enqueue_script('alavancagem-main', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'alavancagem_scripts');

function alavancagem_custom_fields() {
    add_meta_box('hero_section', 'Seção Hero', 'alavancagem_hero_callback', 'page');
    add_meta_box('offer_section', 'Seção Oferta', 'alavancagem_offer_callback', 'page');
}
add_action('add_meta_boxes', 'alavancagem_custom_fields');

function alavancagem_hero_callback($post) {
    wp_nonce_field('alavancagem_save', 'alavancagem_nonce');
    $title = get_post_meta($post->ID, '_hero_title', true);
    $subtitle = get_post_meta($post->ID, '_hero_subtitle', true);
    $button = get_post_meta($post->ID, '_hero_button', true);
    $url = get_post_meta($post->ID, '_hero_url', true);
    ?>
    <p><label>Título:</label><br><input type="text" name="hero_title" value="<?php echo esc_attr($title); ?>" style="width:100%"></p>
    <p><label>Subtítulo:</label><br><textarea name="hero_subtitle" style="width:100%"><?php echo esc_textarea($subtitle); ?></textarea></p>
    <p><label>Botão:</label><br><input type="text" name="hero_button" value="<?php echo esc_attr($button); ?>" style="width:100%"></p>
    <p><label>URL:</label><br><input type="text" name="hero_url" value="<?php echo esc_attr($url); ?>" style="width:100%"></p>
    <?php
}

function alavancagem_offer_callback($post) {
    $price = get_post_meta($post->ID, '_offer_price', true);
    $old = get_post_meta($post->ID, '_offer_old', true);
    ?>
    <p><label>Preço:</label><br><input type="text" name="offer_price" value="<?php echo esc_attr($price); ?>"></p>
    <p><label>Preço Antigo:</label><br><input type="text" name="offer_old" value="<?php echo esc_attr($old); ?>"></p>
    <?php
}

function alavancagem_save_meta($post_id) {
    if (!isset($_POST['alavancagem_nonce']) || !wp_verify_nonce($_POST['alavancagem_nonce'], 'alavancagem_save')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    
    $fields = array('hero_title', 'hero_subtitle', 'hero_button', 'hero_url', 'offer_price', 'offer_old');
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'alavancagem_save_meta');
