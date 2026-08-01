/*==================================================
PORTAFOLIO - JAVASCRIPT
Autor: Juan Diego
Versión corregida
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
    LOADER
    ==================================================*/

    const loader = document.getElementById("loader");

    if (loader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                loader.style.opacity = "0";
                loader.style.visibility = "hidden";

                setTimeout(() => {
                    loader.remove();
                }, 800);

            }, 1200);

        });

    }

    /*==================================================
    CURSOR PERSONALIZADO
    ==================================================*/

    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    if (cursor && cursor2) {

        document.addEventListener("mousemove", (e) => {

            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            cursor2.style.left = e.clientX + "px";
            cursor2.style.top = e.clientY + "px";

        });

        const hoverItems = document.querySelectorAll(
            "a, button, .service-card, .portfolio-card, .tool-card"
        );

        hoverItems.forEach(item => {

            item.addEventListener("mouseenter", () => {

                cursor.style.transform = "translate(-50%,-50%) scale(1.8)";
                cursor.style.borderColor = "#63D4FF";

            });

            item.addEventListener("mouseleave", () => {

                cursor.style.transform = "translate(-50%,-50%) scale(1)";
                cursor.style.borderColor = "#63D4FF";

            });

        });

    }

    /*==================================================
    HEADER AL HACER SCROLL
    ==================================================*/

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {

                header.classList.add("active");

            } else {

                header.classList.remove("active");

            }

        });

    }

    /*==================================================
    BOTÓN SUBIR
    ==================================================*/

    const scrollTop = document.querySelector(".scroll-top");

    if (scrollTop) {

        scrollTop.style.opacity = "0";
        scrollTop.style.pointerEvents = "none";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                scrollTop.style.opacity = "1";
                scrollTop.style.pointerEvents = "auto";

            } else {

                scrollTop.style.opacity = "0";
                scrollTop.style.pointerEvents = "none";

            }

        });

        scrollTop.addEventListener("click", (e) => {

            e.preventDefault();

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /*==================================================
    MENÚ RESPONSIVE
    ==================================================*/

    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    if (menu && nav) {

        menu.addEventListener("click", () => {

            nav.classList.toggle("show");

        });

        document.querySelectorAll("nav a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("show");

            });

        });

    }

    /*==================================================
    SCROLL SUAVE
    ==================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

        /*==================================================
    ANIMACIONES AL HACER SCROLL
    ==================================================*/

    const elementos = document.querySelectorAll(
        ".section-title, .about-image, .about-content, .service-card, .portfolio-card, .tool-card, .skill, .stat-box, .testimonial, .contact-info, form"
    );

    if (elementos.length > 0) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "all .8s ease";

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        elementos.forEach(el => {

            el.style.opacity = "0";
            el.style.transform = "translateY(60px)";

            observer.observe(el);

        });

    }

    /*==================================================
    CONTADORES
    ==================================================*/

    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {

        const counterObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const objetivo = parseInt(counter.textContent);

                let numero = 0;

                const velocidad = Math.max(10, 2000 / objetivo);

                function actualizar() {

                    if (numero < objetivo) {

                        numero++;
                        counter.textContent = numero;

                        setTimeout(actualizar, velocidad);

                    } else {

                        counter.textContent = objetivo;

                    }

                }

                actualizar();

                counterObserver.unobserve(counter);

            });

        }, {
            threshold: 0.6
        });

        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }

    /*==================================================
    BARRAS DE HABILIDADES
    ==================================================*/

    const habilidades = document.querySelectorAll(".progress");

    if (habilidades.length > 0) {

        const porcentajes = {

            html: "95%",
            css: "90%",
            js: "80%",
            ai: "95%",
            ps: "90%",
            pr: "85%"

        };

        const skillObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const barra = entry.target;

                barra.style.width = "0";

                Object.keys(porcentajes).forEach(clase => {

                    if (barra.classList.contains(clase)) {

                        setTimeout(() => {

                            barra.style.width = porcentajes[clase];

                        }, 200);

                    }

                });

                skillObserver.unobserve(barra);

            });

        }, {
            threshold: 0.5
        });

        habilidades.forEach(barra => {

            barra.style.width = "0";

            skillObserver.observe(barra);

        });

    }

    /*==================================================
    EFECTO PARALLAX HERO
    ==================================================*/

    const hero = document.querySelector(".hero-image");

    if (hero) {

        window.addEventListener("scroll", () => {

            const scroll = window.pageYOffset;

            hero.style.transform = `translateY(${scroll * 0.08}px)`;

        });

    }

    /*==================================================
    EFECTO 3D TARJETAS
    ==================================================*/

    const cards = document.querySelectorAll(
        ".service-card, .tool-card, .portfolio-card"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 18;
            const rotateY = (centerX - x) / 18;

            card.style.transform =
                `perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        });

    });

    /*==================================================
    EFECTO BOTONES
    ==================================================*/

    const botones = document.querySelectorAll(".btn, .btn2");

    botones.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-8px) scale(1.05)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0) scale(1)";

        });

    });

        /*==================================================
    EFECTO ESCRITURA (TYPING)
    ==================================================*/

    const typingText = document.querySelector(".hero-info h2");

    if (typingText) {

        const textos = [
            "Diseñadora Multimedia",
            "Diseñadora Gráfica",
            "Content Creator",
            "Fotógrafa",
            "Video Editor"
        ];

        let textoActual = 0;
        let letra = 0;
        let borrando = false;

        function escribir() {

            const texto = textos[textoActual];

            if (!borrando) {

                typingText.textContent = texto.substring(0, letra);
                letra++;

                if (letra > texto.length) {

                    borrando = true;

                    setTimeout(escribir, 1800);

                    return;
                }

            } else {

                typingText.textContent = texto.substring(0, letra);
                letra--;

                if (letra < 0) {

                    borrando = false;
                    textoActual++;

                    if (textoActual >= textos.length) {

                        textoActual = 0;

                    }

                }

            }

            setTimeout(escribir, borrando ? 45 : 90);

        }

        escribir();

    }

    /*==================================================
    SLIDER TESTIMONIOS
    ==================================================*/

    const slider = document.querySelector(".testimonial-slider");

    if (slider && window.innerWidth <= 900) {

        let indice = 0;

        const tarjetas = slider.querySelectorAll(".testimonial");

        setInterval(() => {

            indice++;

            if (indice >= tarjetas.length) {

                indice = 0;

            }

            slider.scrollTo({

                left: tarjetas[indice].offsetLeft,

                behavior: "smooth"

            });

        }, 3500);

    }

    /*==================================================
    PARTICULAS
    ==================================================*/

    const particles = document.getElementById("particles");

    if (particles) {

        for (let i = 0; i < 40; i++) {

            const particle = document.createElement("span");

            particle.classList.add("particle");

            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";

            particle.style.width = (3 + Math.random() * 5) + "px";
            particle.style.height = particle.style.width;

            particle.style.animationDuration =
                (5 + Math.random() * 10) + "s";

            particle.style.animationDelay =
                Math.random() * 5 + "s";

            particles.appendChild(particle);

        }

    }

    /*==================================================
    BRILLO TARJETAS
    ==================================================*/

    document.querySelectorAll(
        ".service-card, .portfolio-card, .tool-card"
    ).forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(99,212,255,.18),
                    rgba(255,255,255,.05) 60%
                )
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "rgba(255,255,255,.05)";

        });

    });

    /*==================================================
    AÑO AUTOMÁTICO
    ==================================================*/

    const copy = document.querySelector(".copy");

    if (copy) {

        copy.textContent =
            `© ${new Date().getFullYear()} Todos los derechos reservados.`;

    }

        /*==================================================
    FORMULARIO + EMAILJS
    ==================================================*/

    const formulario = document.getElementById("contactForm");

    if (formulario) {

        formulario.addEventListener("submit", function (e) {

            e.preventDefault();

            const nombre = document.getElementById("name");
            const email = document.getElementById("email");
            const asunto = document.getElementById("subject");
            const mensaje = document.getElementById("message");

            if (!nombre || !email || !asunto || !mensaje) {

                alert("Faltan campos del formulario.");
                return;

            }

            if (
                nombre.value.trim() === "" ||
                email.value.trim() === "" ||
                asunto.value.trim() === "" ||
                mensaje.value.trim() === ""
            ) {

                alert("Por favor completa todos los campos.");
                return;

            }

            if (typeof emailjs === "undefined") {

                alert("EmailJS no está cargado.");
                return;

            }

            emailjs.init("Fz_afZt4iWBFVO95l");

            emailjs.send(
                "service_699ufpi",
                "template_157nuid",
                {
                    from_name: nombre.value,
                    from_email: email.value,
                    subject: asunto.value,
                    message: mensaje.value
                }

            ).then(() => {

                alert("✅ Mensaje enviado correctamente.");

                formulario.reset();

            }).catch((error) => {

                console.error(error);

                alert("❌ No se pudo enviar el mensaje.");

            });

        });

    }

    /*==================================================
    CONSOLA
    ==================================================*/

    console.log("✅ Portafolio cargado correctamente.");

});