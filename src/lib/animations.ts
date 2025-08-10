import { animate, stagger } from 'animejs';

// Animation configuration
export const ANIMATION_CONFIG = {
    duration: {
        fast: 400,
        normal: 600,
        slow: 800,
    },
    easing: {
        smooth: 'easeOutExpo',
        bounce: 'easeOutElastic(1, .8)',
        overshoot: 'easeOutBack(1.7)',
    },
    stagger: {
        nav: 150,
        text: 100,
    },
};

// Navigation items entrance animation
export const animateNavItems = (selector: string) => {
    return animate( selector, {
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: ANIMATION_CONFIG.duration.normal,
        easing: ANIMATION_CONFIG.easing.overshoot,
        delay: stagger(ANIMATION_CONFIG.stagger.nav),
    });
};

// Navigation hover effects
export const navHoverIn = (element: HTMLElement) => {
        animate(element, {
        translateX: [0, 8],
        duration: ANIMATION_CONFIG.duration.fast,
        easing: ANIMATION_CONFIG.easing.smooth,
    });
};

export const navHoverOut = (element: HTMLElement) => {
    animate(element, {
        translateX: [8, 0],
        duration: ANIMATION_CONFIG.duration.fast,
        easing: ANIMATION_CONFIG.easing.smooth,
    });
};

// Section heading animation
export const animateHeading = (selector: string) => {
    return animate(selector, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: ANIMATION_CONFIG.duration.slow,
        easing: ANIMATION_CONFIG.easing.smooth,
    });
};

// Paragraph text animation
export const animateParagraphs = (selector: string) => {
    return animate(selector, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: ANIMATION_CONFIG.duration.normal,
        easing: ANIMATION_CONFIG.easing.smooth,
        delay: stagger(ANIMATION_CONFIG.stagger.text),
    });
};

// Mobile menu animations
export const toggleMobileMenu = (
    menuSelector: string,
    isOpen: boolean
) => {
    if (isOpen) {
        return animate(menuSelector, {
            opacity: [0, 1],
            translateY: [-10, 0],
            duration: ANIMATION_CONFIG.duration.fast,
            easing: ANIMATION_CONFIG.easing.smooth,
            complete: () => {
                // Animate menu items
                animate(`${menuSelector} .nav-item`, {
                    opacity: [0, 1],
                    translateX: [-20, 0],
                    duration: ANIMATION_CONFIG.duration.fast,
                    easing: ANIMATION_CONFIG.easing.overshoot,
                    delay: stagger(50),
                });
            },
        });
    } else {
        return animate(menuSelector, {
            opacity: [1, 0],
            translateY: [0, -10],
            duration: ANIMATION_CONFIG.duration.fast,
            easing: ANIMATION_CONFIG.easing.smooth,
        });
    }
};

// Global title manager
class TitleManager {
    private static instance: TitleManager;
    private activeController: ScrollAnimationController | null = null;
    private allControllers: ScrollAnimationController[] = [];

    static getInstance(): TitleManager {
        if (!TitleManager.instance) {
            TitleManager.instance = new TitleManager();
        }
        return TitleManager.instance;
    }

    registerController(controller: ScrollAnimationController) {
        this.allControllers.push(controller);
    }

    setActiveController(controller: ScrollAnimationController) {
        // Hide all other titles
        this.allControllers.forEach(ctrl => {
            if (ctrl !== controller) {
                ctrl.hideTitle();
            }
        });
        this.activeController = controller;
    }

    cleanup() {
        this.allControllers = [];
        this.activeController = null;
    }
}

// Intersection Observer utility for scroll animations
export class ScrollAnimationController {
    private observer: IntersectionObserver;
    private animatedElements = new Set<Element>();
    private scrollListener?: () => void;
    private titleElement?: HTMLElement;
    private sectionElement?: HTMLElement;
    private titleAnimated: boolean = false;
    private isActive: boolean = false;

    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const intersectionRatio = entry.intersectionRatio;
                    const isIntersecting = entry.isIntersecting;

                    // Handle title visibility
                    if (isIntersecting && intersectionRatio > 0.1) {
                        TitleManager.getInstance().setActiveController(this);
                        this.isActive = true;
                    } else if (!isIntersecting) {
                        this.isActive = false;
                        this.hideTitle();
                    }

                    // Handle content animation
                    if (
                        isIntersecting &&
                        intersectionRatio > 0.3 &&
                        !this.animatedElements.has(entry.target)
                    ) {
                        this.animateSection(entry.target);
                        this.animatedElements.add(entry.target);
                    }
                });
            },
            {
                threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
                rootMargin: '-10% 0px -10% 0px',
            }
        );

        // Register with global manager
        TitleManager.getInstance().registerController(this);
    }

    observe(element: Element) {
        this.observer.observe(element);
    }

    setupTitleAnimation(titleElement: HTMLElement, sectionElement: HTMLElement) {
        this.titleElement = titleElement;
        this.sectionElement = sectionElement;
        
        // Set up scroll listener for continuous title animation
        this.scrollListener = () => this.handleTitleScroll();
        window.addEventListener('scroll', this.scrollListener, { passive: true });
    }

    unobserve(element: Element) {
        this.observer.unobserve(element);
    }

    disconnect() {
        this.observer.disconnect();
        if (this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener);
        }
    }

    hideTitle() {
        if (this.titleElement) {
            this.titleElement.style.opacity = '0';
            this.titleAnimated = false;
            this.isActive = false;
        }
    }

    private handleTitleScroll() {
        if (!this.titleElement || !this.sectionElement || !this.isActive) return;

        const sectionRect = this.sectionElement.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const windowHeight = window.innerHeight;

        // Calculate progress: 0 when section enters viewport, 1 when section is scrolled through
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.8)));

        if (progress > 0 && this.isActive) {
            if (!this.titleAnimated) {
                // Show title when section enters viewport
                this.titleElement.style.opacity = '1';
                this.titleAnimated = true;
            }

            // Calculate transforms based on scroll progress
            const scale = 1 - (progress * 0.4); // Scale from 1 to 0.6
            const translateX = progress * -40; // Move left
            const translateY = progress * -35; // Move up
            
            // Apply transforms
            this.titleElement.style.transform = `translate(${translateX}vw, ${translateY}vh) scale(${scale})`;
            
            // Update position context
            if (progress > 0.7) {
                this.titleElement.style.position = 'absolute';
                this.titleElement.style.top = '2rem';
                this.titleElement.style.left = '2rem';
                this.titleElement.style.transform = `scale(0.6)`;
                this.titleElement.style.transformOrigin = 'top left';
            } else {
                this.titleElement.style.position = 'fixed';
                this.titleElement.style.transformOrigin = 'center center';
            }
        } else {
            // Reset when section is out of view or not active
            this.hideTitle();
        }
    }

    private animateSection(section: Element) {
        // Animate content when section comes into view
        const content = section.querySelector('.section-content');
        if (content) {
            animate(content, {
                opacity: [0, 1],
                translateY: [30, 0],
                duration: ANIMATION_CONFIG.duration.slow,
                easing: ANIMATION_CONFIG.easing.smooth,
                delay: 500, // Delay to let title animation settle
            });
        }

        // Animate paragraphs within content
        const paragraphs = section.querySelectorAll('p, .animate-text, h1');
        if (paragraphs.length > 0) {
            animate(paragraphs, {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: ANIMATION_CONFIG.duration.normal,
                easing: ANIMATION_CONFIG.easing.smooth,
                delay: stagger(ANIMATION_CONFIG.stagger.text, { start: 700 }),
            });
        }
    }
}
