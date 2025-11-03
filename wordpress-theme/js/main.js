/**
 * Main JavaScript File
 */

(function($) {
    'use strict';

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Animate elements on scroll
    function animateOnScroll() {
        $('.animate-fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    // Initialize animations
    $('.animate-fade-in').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.6s ease-out'
    });

    $(window).on('scroll', function() {
        animateOnScroll();
    });

    // Trigger animation on page load
    $(document).ready(function() {
        animateOnScroll();
    });

    // Mobile menu toggle
    $('.menu-toggle').on('click', function() {
        $('.primary-menu').toggleClass('active');
    });

    // Countdown timer (if needed)
    function startCountdown(endTime) {
        function updateCountdown() {
            var now = new Date().getTime();
            var distance = endTime - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                $('.countdown').html('<span>Oferta Encerrada!</span>');
                return;
            }

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $('.countdown').html(
                '<span>' + days + 'd </span>' +
                '<span>' + hours + 'h </span>' +
                '<span>' + minutes + 'm </span>' +
                '<span>' + seconds + 's</span>'
            );
        }

        var countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Initialize countdown (set your end time)
    if ($('.countdown').length) {
        var endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
        startCountdown(endTime);
    }

    // Form validation
    $('form').on('submit', function(e) {
        var isValid = true;
        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    // Video player autoplay on scroll
    function checkVideoPosition() {
        $('video').each(function() {
            var video = $(this)[0];
            var rect = video.getBoundingClientRect();
            
            if (rect.top >= 0 && rect.bottom <= $(window).height()) {
                if (video.paused) {
                    video.play();
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }

    $(window).on('scroll', function() {
        checkVideoPosition();
    });

})(jQuery);
