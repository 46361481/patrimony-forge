<?php
/**
 * Tema Rhuan Christo - Método VSL
 * Functions and definitions
 */

// Theme Setup
function rhuan_vsl_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'rhuan-vsl'),
    ));
}
add_action('after_setup_theme', 'rhuan_vsl_setup');

// Enqueue scripts and styles
function rhuan_vsl_scripts() {
    // Main stylesheet
    wp_enqueue_style('rhuan-vsl-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom scripts
    wp_enqueue_script('rhuan-vsl-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'rhuan_vsl_scripts');

// Register widget areas
function rhuan_vsl_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'rhuan-vsl'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'rhuan-vsl'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer', 'rhuan-vsl'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'rhuan-vsl'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'rhuan_vsl_widgets_init');

// Custom excerpt length
function rhuan_vsl_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'rhuan_vsl_excerpt_length');

// Custom excerpt more
function rhuan_vsl_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'rhuan_vsl_excerpt_more');

// Add custom fields for landing page sections
function rhuan_vsl_custom_fields() {
    // Hero Section
    add_meta_box(
        'hero_section',
        'Seção Hero',
        'rhuan_vsl_hero_callback',
        'page',
        'normal',
        'high'
    );
    
    // CTA Section
    add_meta_box(
        'cta_section',
        'Seção CTA',
        'rhuan_vsl_cta_callback',
        'page',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'rhuan_vsl_custom_fields');

// Hero section callback
function rhuan_vsl_hero_callback($post) {
    wp_nonce_field('rhuan_vsl_save_meta', 'rhuan_vsl_meta_nonce');
    
    $hero_title = get_post_meta($post->ID, '_hero_title', true);
    $hero_subtitle = get_post_meta($post->ID, '_hero_subtitle', true);
    $hero_button_text = get_post_meta($post->ID, '_hero_button_text', true);
    $hero_button_url = get_post_meta($post->ID, '_hero_button_url', true);
    
    echo '<p><label>Título:</label><br/>';
    echo '<input type="text" name="hero_title" value="' . esc_attr($hero_title) . '" style="width:100%;" /></p>';
    
    echo '<p><label>Subtítulo:</label><br/>';
    echo '<textarea name="hero_subtitle" rows="3" style="width:100%;">' . esc_textarea($hero_subtitle) . '</textarea></p>';
    
    echo '<p><label>Texto do Botão:</label><br/>';
    echo '<input type="text" name="hero_button_text" value="' . esc_attr($hero_button_text) . '" style="width:100%;" /></p>';
    
    echo '<p><label>URL do Botão:</label><br/>';
    echo '<input type="url" name="hero_button_url" value="' . esc_attr($hero_button_url) . '" style="width:100%;" /></p>';
}

// CTA section callback
function rhuan_vsl_cta_callback($post) {
    $cta_title = get_post_meta($post->ID, '_cta_title', true);
    $cta_text = get_post_meta($post->ID, '_cta_text', true);
    $cta_button_text = get_post_meta($post->ID, '_cta_button_text', true);
    $cta_button_url = get_post_meta($post->ID, '_cta_button_url', true);
    
    echo '<p><label>Título CTA:</label><br/>';
    echo '<input type="text" name="cta_title" value="' . esc_attr($cta_title) . '" style="width:100%;" /></p>';
    
    echo '<p><label>Texto CTA:</label><br/>';
    echo '<textarea name="cta_text" rows="3" style="width:100%;">' . esc_textarea($cta_text) . '</textarea></p>';
    
    echo '<p><label>Texto do Botão:</label><br/>';
    echo '<input type="text" name="cta_button_text" value="' . esc_attr($cta_button_text) . '" style="width:100%;" /></p>';
    
    echo '<p><label>URL do Botão:</label><br/>';
    echo '<input type="url" name="cta_button_url" value="' . esc_attr($cta_button_url) . '" style="width:100%;" /></p>';
}

// Save custom fields
function rhuan_vsl_save_meta($post_id) {
    if (!isset($_POST['rhuan_vsl_meta_nonce']) || !wp_verify_nonce($_POST['rhuan_vsl_meta_nonce'], 'rhuan_vsl_save_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Save hero fields
    if (isset($_POST['hero_title'])) {
        update_post_meta($post_id, '_hero_title', sanitize_text_field($_POST['hero_title']));
    }
    if (isset($_POST['hero_subtitle'])) {
        update_post_meta($post_id, '_hero_subtitle', sanitize_textarea_field($_POST['hero_subtitle']));
    }
    if (isset($_POST['hero_button_text'])) {
        update_post_meta($post_id, '_hero_button_text', sanitize_text_field($_POST['hero_button_text']));
    }
    if (isset($_POST['hero_button_url'])) {
        update_post_meta($post_id, '_hero_button_url', esc_url_raw($_POST['hero_button_url']));
    }
    
    // Save CTA fields
    if (isset($_POST['cta_title'])) {
        update_post_meta($post_id, '_cta_title', sanitize_text_field($_POST['cta_title']));
    }
    if (isset($_POST['cta_text'])) {
        update_post_meta($post_id, '_cta_text', sanitize_textarea_field($_POST['cta_text']));
    }
    if (isset($_POST['cta_button_text'])) {
        update_post_meta($post_id, '_cta_button_text', sanitize_text_field($_POST['cta_button_text']));
    }
    if (isset($_POST['cta_button_url'])) {
        update_post_meta($post_id, '_cta_button_url', esc_url_raw($_POST['cta_button_url']));
    }
}
add_action('save_post', 'rhuan_vsl_save_meta');

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');
