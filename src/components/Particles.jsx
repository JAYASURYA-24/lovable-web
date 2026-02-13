import React, { useEffect, useRef } from 'react';

/**
 * Particles Component - Animated floating particles/sparkles
 * Creates a dreamy background effect with glowing dots
 */
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    setCanvasSize();

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = Math.random() * 0.5 + 0.2;
        this.radius = Math.random() * 2.5 + 1;
        this.opacity = Math.random();
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;
        this.opacity = 0.3 + Math.sin(this.pulsePhase) * 0.3;

        // Reset if out of bounds
        if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Create gradient glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 200, 255, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 150, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      particles = [];
      const newParticleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < newParticleCount; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

export default Particles;
