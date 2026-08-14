/**
 * LightRayBackground
 * A performant, subtle light ray effect inspired by MAE Spirit but tailored to IONITY's brand.
 * Uses CSS radial gradients and JS for subtle mouse tracking.
 */

class LightRayBackground {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    // Default configuration
    this.config = {
      rays: 3, // Number of light rays
      baseColor: '184, 255, 0', // IONITY Fluorescent Lime rgb
      minSize: 300,
      maxSize: 800,
      minOpacity: 0.05,
      maxOpacity: 0.15,
      interactionFactor: 0.03, // How much the mouse affects movement
      ...options
    };

    // State
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.targetMouseX = this.mouseX;
    this.targetMouseY = this.mouseY;
    this.rays = [];
    
    // Check for reduced motion preference
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    // Create rays
    for (let i = 0; i < this.config.rays; i++) {
      this.createRay(i);
    }

    if (!this.prefersReducedMotion) {
      this.addEventListeners();
      this.animate();
    }
  }

  createRay(index) {
    const ray = document.createElement('div');
    ray.className = 'light-ray float-anim';
    
    // Randomize properties
    const size = this.config.minSize + Math.random() * (this.config.maxSize - this.config.minSize);
    const opacity = this.config.minOpacity + Math.random() * (this.config.maxOpacity - this.config.minOpacity);
    
    // Base positions (scattered)
    const posX = Math.random() * 100; // vw
    const posY = Math.random() * 100; // vh
    
    // Styling
    ray.style.width = `${size}px`;
    ray.style.height = `${size}px`;
    ray.style.left = `calc(${posX}% - ${size/2}px)`;
    ray.style.top = `calc(${posY}% - ${size/2}px)`;
    ray.style.opacity = opacity;
    ray.style.background = `radial-gradient(circle, rgba(${this.config.baseColor}, 0.8) 0%, rgba(${this.config.baseColor}, 0) 70%)`;
    
    // Stagger animations
    ray.style.animationDelay = `${index * -2.5}s`;
    
    // Save for interaction logic
    this.rays.push({
      element: ray,
      baseX: posX,
      baseY: posY,
      speed: 0.5 + Math.random() * 1.5 // Parallax speed multiplier
    });
    
    this.container.appendChild(ray);
  }

  addEventListeners() {
    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = e.clientX;
      this.targetMouseY = e.clientY;
    });
  }

  animate() {
    // Smooth interpolation (lerp) for mouse movement
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    // Calculate offset from center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (this.mouseX - centerX) * this.config.interactionFactor;
    const offsetY = (this.mouseY - centerY) * this.config.interactionFactor;

    // Apply parallax to rays
    this.rays.forEach(ray => {
      const moveX = offsetX * ray.speed * -1; // Move opposite to mouse
      const moveY = offsetY * ray.speed * -1;
      
      // We use a CSS transform variable which will be picked up by CSS,
      // or set it directly. Let's set it directly for simplicity, but wrapped in a requestAnimationFrame.
      ray.element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Export to global scope
window.LightRayBackground = LightRayBackground;
