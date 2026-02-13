import React, { useEffect, useRef } from "react";

/**
 * Particles Component - Animated floating particles/sparkles
 * Creates a dreamy background effect with glowing dots
 */
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
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
        this.type = Math.random() > 0.75 ? "heart" : "sparkle"; // 25% hearts
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy =
          this.type === "heart"
            ? Math.random() * 0.3 + 0.15
            : Math.random() * 0.6 + 0.3;

        this.size =
          this.type === "heart"
            ? Math.random() * 6 + 6
            : Math.random() * 2.5 + 1;

        this.opacity = Math.random() * 0.6 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;
        this.opacity = 0.4 + Math.sin(this.pulsePhase) * 0.3;

        if (
          this.y > canvas.height + 20 ||
          this.x < -20 ||
          this.x > canvas.width + 20
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);

        if (this.type === "heart") {
          this.drawHeart();
        } else {
          this.drawSparkle();
        }

        ctx.restore();
      }

      drawSparkle() {
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 3);

        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.5, "rgba(255,180,255,0.6)");
        gradient.addColorStop(1, "rgba(255,120,200,0)");

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      drawHeart() {
        const s = this.size;
        ctx.beginPath();
        ctx.moveTo(0, s / 4);
        ctx.bezierCurveTo(-s, -s / 2, -s, s / 2, 0, s);
        ctx.bezierCurveTo(s, s / 2, s, -s / 2, 0, s / 4);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 2);

        gradient.addColorStop(0, "rgba(255,80,120,1)");
        gradient.addColorStop(0.6, "rgba(255,120,160,0.8)");
        gradient.addColorStop(1, "rgba(255,150,200,0)");

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

      particles.forEach((particle) => {
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
      const newParticleCount = Math.floor(
        (canvas.width * canvas.height) / 15000,
      );
      for (let i = 0; i < newParticleCount; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

export default Particles;
