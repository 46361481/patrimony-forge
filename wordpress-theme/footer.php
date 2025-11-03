    <!-- Footer -->
    <footer id="colophon" class="site-footer" style="background-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 3rem 0 1rem;">
        <div class="container">
            <div class="footer-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                <!-- Footer Column 1 -->
                <div class="footer-column">
                    <h3 style="margin-bottom: 1rem;">Sobre</h3>
                    <p><?php bloginfo('description'); ?></p>
                </div>

                <!-- Footer Column 2 -->
                <div class="footer-column">
                    <h3 style="margin-bottom: 1rem;">Links Rápidos</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;">
                            <a href="<?php echo esc_url(home_url('/')); ?>" style="color: hsl(var(--primary-foreground)); text-decoration: none;">Início</a>
                        </li>
                        <li style="margin-bottom: 0.5rem;">
                            <a href="#sobre" style="color: hsl(var(--primary-foreground)); text-decoration: none;">Sobre o Método</a>
                        </li>
                        <li style="margin-bottom: 0.5rem;">
                            <a href="#depoimentos" style="color: hsl(var(--primary-foreground)); text-decoration: none;">Depoimentos</a>
                        </li>
                        <li style="margin-bottom: 0.5rem;">
                            <a href="#oferta" style="color: hsl(var(--primary-foreground)); text-decoration: none;">Oferta</a>
                        </li>
                    </ul>
                </div>

                <!-- Footer Column 3 - Widget Area -->
                <div class="footer-column">
                    <?php
                    if (is_active_sidebar('footer-1')) :
                        dynamic_sidebar('footer-1');
                    endif;
                    ?>
                </div>

                <!-- Footer Column 4 -->
                <div class="footer-column">
                    <h3 style="margin-bottom: 1rem;">Contato</h3>
                    <p>Email: contato@seusite.com</p>
                    <p>Telefone: (00) 0000-0000</p>
                    <!-- Social Media -->
                    <div class="social-links" style="margin-top: 1rem; display: flex; gap: 1rem;">
                        <a href="#" style="color: hsl(var(--primary-foreground));" aria-label="Instagram">📷</a>
                        <a href="#" style="color: hsl(var(--primary-foreground));" aria-label="YouTube">▶️</a>
                        <a href="#" style="color: hsl(var(--primary-foreground));" aria-label="Facebook">👍</a>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; text-align: center;">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
                <p style="margin-top: 0.5rem; font-size: 0.875rem; opacity: 0.8;">
                    <a href="/politica-de-privacidade" style="color: hsl(var(--primary-foreground)); text-decoration: none;">Política de Privacidade</a> | 
                    <a href="/termos-de-uso" style="color: hsl(var(--primary-foreground)); text-decoration: none;">Termos de Uso</a>
                </p>
            </div>
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
