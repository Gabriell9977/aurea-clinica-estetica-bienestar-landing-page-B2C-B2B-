'use strict';

/**
 * =========================================================================
 * AUREA CLINIC — ARQUITECTURA MODULAR BAJO PRINCIPIOS SOLID
 * =========================================================================
 */

class SecuritySanitizer {
    static escapeHTML(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    static sanitizeText(str, maxLength = 80) {
        return String(str || '').trim().slice(0, maxLength);
    }
}

class ToastNotifier {
    constructor(containerId, textId, duration = 3600) {
        this.container = document.getElementById(containerId);
        this.textEl = document.getElementById(textId);
        this.duration = duration;
        this.timer = null;
    }

    show(message) {
        if (!this.container || !this.textEl) return;
        this.textEl.textContent = message;
        this.container.classList.remove('hidden');
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.container.classList.add('hidden'), this.duration);
    }
}

class ConversionTracker {
    constructor(notifier) {
        this.notifier = notifier;
        this.auditEnabled = false;
    }

    setAuditMode(isActive) {
        this.auditEnabled = Boolean(isActive);
    }

    track(eventName) {
        if (typeof window.fbq === 'function') {
            window.fbq('trackCustom', eventName);
        }
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName);
        }
        if (this.auditEnabled && this.notifier) {
            this.notifier.show(`📡 Evento registrado para Meta Pixel & GA4: [${eventName}]`);
        }
    }
}

class ClinicalCatalogRepository {
    constructor() {
        this.heroRituals = [
            {
                tag: "Sin cirugía • Resultados naturales",
                time: "45 min",
                desc: "Equilibrio delicado de facciones mediante ácido hialurónico de última generación, respetando siempre tu expresión única.",
                img: "img/armonizacion-facial.webp"
            },
            {
                tag: "Firmeza profunda • Efecto tensor",
                time: "40 min",
                desc: "Estimulación natural de tus propios fibroblastos para devolver densidad, elasticidad y juventud progresiva al rostro.",
                img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=85"
            },
            {
                tag: "Tecnología FDA • Luminosidad",
                time: "35 min",
                desc: "Renovación celular suave que atenúa manchas solares y unifica la textura para revelar una piel radiante y sedosa.",
                img: "img/Laser-dermatologico.jpg"
            },
            {
                tag: "Hidratación profunda • Sutileza",
                time: "30 min",
                desc: "Perfilado e hidratación labial con acabado aterciopelado que realza el volumen natural sin rigidez.",
                img: "img/Hidratacion-o-relleno-de-labios.webp"
            },
            {
                tag: "Bienestar integral • Remodelación",
                time: "50 min",
                desc: "Protocolos corporales no invasivos para tonificar, drenar y revitalizar la piel en un ambiente de calma absoluta.",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85"
            }
        ];

        this.showcaseRituals = [
            {
                id: 0,
                number: "01",
                title: "Armonización Facial Sutil",
                subtitle: "Equilibrio y frescura sin alterar tus rasgos",
                badge: "Ritual Estrella",
                price: "Desde $160",
                duration: "45 minutos",
                comfort: "Confort Alto (Anestesia tópica)",
                longevity: "12 a 18 meses",
                description: "Un abordaje médico artístico que repone volúmenes perdidos, suaviza líneas de expresión y redefine el óvalo facial con resultados imperceptibles al ojo ajeno.",
                highlights: [
                    "Ácido hialurónico reticulado de alta pureza",
                    "Evaluación anatómica personalizada en 3D",
                    "Incorporación inmediata a tu rutina diaria"
                ],
                image: "img/armonizacion-facial.webp"
            },
            {
                id: 1,
                number: "02",
                title: "Piel de Porcelana & Láser",
                subtitle: "Luminosidad uniforme y textura aterciopelada",
                badge: "Tecnología FDA",
                price: "Desde $95",
                duration: "35 minutos",
                comfort: "Suave (Crio-enfriamiento)",
                longevity: "Resultados progresivos",
                description: "Combinación de láser dermatológico suave y activos despigmentantes que atenúan manchas solares, poros dilatados y marcas previas sin agredir la barrera cutánea.",
                highlights: [
                    "Atenúa melasma, manchas solares y rojeces",
                    "Estimula la renovación epidérmica natural",
                    "Ideal para pieles sensibles o expuestas al sol"
                ],
                image: "img/Laser-dermatologico.jpg"
            },
            {
                id: 2,
                number: "03",
                title: "Bioestimulación de Colágeno",
                subtitle: "Firmeza estructural desde el interior",
                badge: "Efecto Tensor",
                price: "Desde $220",
                duration: "40 minutos",
                comfort: "Confort Alto (Microcánula)",
                longevity: "18 a 24 meses",
                description: "Reactiva la producción natural de colágeno tipo I y III mediante bioestimuladores biocompatibles (Sculptra / Radiesse), devolviendo tensión y grosor saludable a la piel.",
                highlights: [
                    "Combate la flacidez en rostro, cuello y escote",
                    "Mejora visible en calidad y elasticidad dérmica",
                    "Efecto rejuvenecedor gradual y duradero"
                ],
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85"
            },
            {
                id: 3,
                number: "04",
                title: "Contorno & Bienestar Corporal",
                subtitle: "Armonía corporal y relajación profunda",
                badge: "Bienestar Integral",
                price: "Desde $140",
                duration: "50 minutos",
                comfort: "Experiencia Spa Médico",
                longevity: "Plan personalizado",
                description: "Protocolos corporales médicos que combinan radiofrecuencia multipolar, drenaje linfático y bioactivos reafirmantes para estilizar y devolver tonicidad.",
                highlights: [
                    "Tratamiento no invasivo de flacidez localizada",
                    "Mejora la circulación y textura de la piel",
                    "Sesiones diseñadas como un ritual de calma"
                ],
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85"
            }
        ];
    }

    getHeroRitual(index) {
        return this.heroRituals[index] || null;
    }

    getShowcaseRitual(index) {
        return this.showcaseRituals[index] || null;
    }

    getAllShowcaseRituals() {
        return this.showcaseRituals;
    }

    updateShowcaseMetadata(index, { price, badge }) {
        const target = this.showcaseRituals[index];
        if (!target) return null;
        if (price) target.price = SecuritySanitizer.sanitizeText(price, 30);
        if (badge) target.badge = SecuritySanitizer.sanitizeText(badge, 30);
        return target;
    }
}

class HeroRitualController {
    constructor(repository) {
        this.repository = repository;
        this.listContainer = document.getElementById('hero-ritual-list');
        this.tagEl = document.getElementById('hero-cap-tag');
        this.timeEl = document.getElementById('hero-cap-time');
        this.descEl = document.getElementById('hero-cap-desc');
        this.bgImgEl = document.getElementById('hero-bg-image');
    }

    init() {
        if (!this.listContainer) return;
        const buttons = this.listContainer.querySelectorAll('.hero-ritual-item');
        buttons.forEach(btn => {
            const idx = parseInt(btn.getAttribute('data-ritual-index'), 10);
            btn.addEventListener('mouseenter', () => this.select(idx));
            btn.addEventListener('click', () => this.select(idx));
        });
    }

    select(index) {
        const item = this.repository.getHeroRitual(index);
        if (!item) return;

        const buttons = this.listContainer.querySelectorAll('.hero-ritual-item');
        buttons.forEach(btn => {
            const btnIdx = parseInt(btn.getAttribute('data-ritual-index'), 10);
            const isActive = btnIdx === index;
            btn.classList.toggle('active', isActive);
            btn.classList.toggle('text-plum-900', isActive);
            btn.classList.toggle('text-plum-700', !isActive);
        });

        if (this.tagEl) this.tagEl.textContent = item.tag;
        if (this.timeEl) this.timeEl.textContent = item.time;
        if (this.descEl) this.descEl.textContent = item.desc;

        if (this.bgImgEl && !this.bgImgEl.src.endsWith(item.img)) {
            this.bgImgEl.style.opacity = '0.35';
            setTimeout(() => {
                this.bgImgEl.src = item.img;
                this.bgImgEl.style.opacity = window.innerWidth >= 1024 ? '0.85' : '0.55';
            }, 180);
        }
    }
}

class RitualShowcaseView {
    constructor(repository, onBookCallback) {
        this.repository = repository;
        this.onBookCallback = onBookCallback;
        this.tabsContainer = document.getElementById('ritual-selector-tabs');
        this.panelContainer = document.getElementById('ritual-showcase-panel');
        this.activeIndex = 0;
    }

    render(index = this.activeIndex) {
        if (!this.tabsContainer || !this.panelContainer) return;
        this.activeIndex = index;

        const rituals = this.repository.getAllShowcaseRituals();
        this.tabsContainer.innerHTML = rituals.map((r, idx) => {
            const isSelected = idx === index;
            return `
                <button 
                    type="button" 
                    data-ritual-idx="${idx}"
                    class="ritual-tab-trigger w-full text-left p-5 rounded-3xl transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected 
                        ? 'liquid-glass-rose translate-x-2' 
                        : 'bg-white/45 hover:bg-white/75 border border-blush-100'
                    }"
                >
                    <div class="flex items-center gap-4">
                        <span class="font-serif italic text-2xl ${isSelected ? 'text-blush-600' : 'text-plum-300'}">${SecuritySanitizer.escapeHTML(r.number)}</span>
                        <div>
                            <h3 class="font-serif text-xl sm:text-2xl font-normal text-plum-900 leading-snug">${SecuritySanitizer.escapeHTML(r.title)}</h3>
                            <p class="text-xs text-plum-500 font-light mt-0.5">${SecuritySanitizer.escapeHTML(r.subtitle)}</p>
                        </div>
                    </div>
                    <span class="text-xs px-3 py-1 rounded-full ${isSelected ? 'bg-white/80 text-blush-600' : 'text-plum-500'} shrink-0">
                        ${SecuritySanitizer.escapeHTML(r.price)}
                    </span>
                </button>
            `;
        }).join('');

        this.tabsContainer.querySelectorAll('.ritual-tab-trigger').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-ritual-idx'), 10);
                this.render(idx);
            });
        });

        const current = this.repository.getShowcaseRitual(index);
        if (!current) return;

        this.panelContainer.innerHTML = `
            <div class="ritual-fade grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div class="md:col-span-5">
                    <div class="rounded-[1.75rem] overflow-hidden aspect-[4/5] bg-blush-100 relative shadow-soft">
                        <img 
                            src="${SecuritySanitizer.escapeHTML(current.image)}" 
                            alt="${SecuritySanitizer.escapeHTML(current.title)}"
                            loading="lazy"
                            class="w-full h-full object-cover"
                        >
                        <span class="liquid-glass absolute top-3.5 left-3.5 text-[10px] uppercase tracking-widest text-plum-900 px-3 py-1 rounded-full">
                            ${SecuritySanitizer.escapeHTML(current.badge)}
                        </span>
                    </div>
                </div>

                <div class="md:col-span-7 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-2">
                            <span class="text-xs uppercase tracking-[0.22em] text-blush-500">Protocolo ${SecuritySanitizer.escapeHTML(current.number)}</span>
                            <span class="text-xs font-medium text-blush-600 bg-blush-100/80 px-3 py-1 rounded-full">${SecuritySanitizer.escapeHTML(current.price)}</span>
                        </div>

                        <h3 class="font-serif text-3xl sm:text-4xl font-light text-plum-900 leading-tight mb-3">
                            ${SecuritySanitizer.escapeHTML(current.title)}
                        </h3>

                        <p class="text-sm text-plum-700 font-light leading-relaxed mb-5">
                            ${SecuritySanitizer.escapeHTML(current.description)}
                        </p>

                        <div class="grid grid-cols-3 gap-2.5 mb-5">
                            <div class="bg-white/65 rounded-2xl p-3 border border-white">
                                <span class="block text-[10px] uppercase tracking-wider text-plum-500">Sesión</span>
                                <span class="text-xs font-medium text-plum-900 mt-0.5 block">${SecuritySanitizer.escapeHTML(current.duration)}</span>
                            </div>
                            <div class="bg-white/65 rounded-2xl p-3 border border-white">
                                <span class="block text-[10px] uppercase tracking-wider text-plum-500">Sensación</span>
                                <span class="text-xs font-medium text-plum-900 mt-0.5 block">${SecuritySanitizer.escapeHTML(current.comfort.split(' ')[0])}</span>
                            </div>
                            <div class="bg-white/65 rounded-2xl p-3 border border-white">
                                <span class="block text-[10px] uppercase tracking-wider text-plum-500">Duración</span>
                                <span class="text-xs font-medium text-plum-900 mt-0.5 block">${SecuritySanitizer.escapeHTML(current.longevity)}</span>
                            </div>
                        </div>

                        <ul class="space-y-2 mb-6">
                            ${current.highlights.map(h => `
                                <li class="flex items-center gap-2.5 text-xs sm:text-sm text-plum-700 font-light">
                                    <span class="text-blush-500 text-sm font-bold" aria-hidden="true">•</span>
                                    <span>${SecuritySanitizer.escapeHTML(h)}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="flex flex-wrap items-center gap-3 pt-2">
                        <button type="button" id="btn-book-specific-ritual" class="liquid-btn px-6 py-3.5 rounded-full text-plum-900 text-xs uppercase tracking-[0.16em] inline-flex items-center gap-2 cursor-pointer">
                            <span>Reservar este protocolo</span>
                            <svg class="w-4 h-4 text-blush-600" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const bookBtn = document.getElementById('btn-book-specific-ritual');
        if (bookBtn && typeof this.onBookCallback === 'function') {
            bookBtn.addEventListener('click', () => this.onBookCallback(current.title));
        }
    }
}

class BeforeAfterSlider {
    constructor(containerId, wrapperId, handleId, beforeImgId) {
        this.container = document.getElementById(containerId);
        this.afterWrapper = document.getElementById(wrapperId);
        this.handle = document.getElementById(handleId);
        this.beforeImg = document.getElementById(beforeImgId);
        this.isDragging = false;
    }

    init() {
        if (!this.container || !this.afterWrapper || !this.handle || !this.beforeImg) return;

        const syncImageWidth = () => {
            this.beforeImg.style.width = `${this.container.offsetWidth}px`;
        };
        syncImageWidth();
        window.addEventListener('resize', syncImageWidth);

        const moveSlider = (clientX) => {
            const rect = this.container.getBoundingClientRect();
            let pos = ((clientX - rect.left) / rect.width) * 100;
            pos = Math.max(5, Math.min(95, pos));
            this.afterWrapper.style.width = `${pos}%`;
            this.handle.style.left = `${pos}%`;
        };

        this.container.addEventListener('mousedown', (e) => { this.isDragging = true; moveSlider(e.clientX); });
        window.addEventListener('mouseup', () => { this.isDragging = false; });
        window.addEventListener('mousemove', (e) => { if (this.isDragging) moveSlider(e.clientX); });

        this.container.addEventListener('touchstart', (e) => { this.isDragging = true; moveSlider(e.touches[0].clientX); }, { passive: true });
        window.addEventListener('touchend', () => { this.isDragging = false; });
        this.container.addEventListener('touchmove', (e) => { if (this.isDragging) moveSlider(e.touches[0].clientX); }, { passive: true });
    }
}

class FaqAccordion {
    constructor(accordionId) {
        this.accordion = document.getElementById(accordionId);
    }

    init() {
        if (!this.accordion) return;
        this.accordion.querySelectorAll('.faq-trigger').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.closest('.faq-item');
                const isOpen = item.classList.contains('open');

                this.accordion.querySelectorAll('.faq-item').forEach(el => {
                    el.classList.remove('open');
                    el.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
                });

                if (!isOpen) {
                    item.classList.add('open');
                    button.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }
}

class LeadCaptureForm {
    constructor(tracker, whatsappPhone = '584120000000') {
        this.tracker = tracker;
        this.whatsappPhone = whatsappPhone;
        this.form = document.getElementById('lead-form');
        this.nameInput = document.getElementById('lead-name');
        this.phoneInput = document.getElementById('lead-phone');
        this.treatmentSelect = document.getElementById('lead-treatment');
        this.successBox = document.getElementById('form-success-box');
        this.successDetail = document.getElementById('success-message-detail');
        this.waDirectLink = document.getElementById('whatsapp-direct-link');
        this.resetBtn = document.getElementById('btn-reset-form');
    }

    init() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.nameInput?.addEventListener('input', () => this.validateField(this.nameInput, 'name'));
        this.phoneInput?.addEventListener('input', () => this.validateField(this.phoneInput, 'phone'));
        this.resetBtn?.addEventListener('click', () => this.reset());
    }

    preselectTreatment(ritualTitle) {
        if (!this.treatmentSelect) return;
        for (let i = 0; i < this.treatmentSelect.options.length; i++) {
            if (this.treatmentSelect.options[i].value.toLowerCase().includes(ritualTitle.toLowerCase().slice(0, 12))) {
                this.treatmentSelect.selectedIndex = i;
                break;
            }
        }
        document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
    }

    validateField(input, type) {
        const val = input.value.trim();
        let valid = false;

        if (type === 'name') {
            valid = val.length >= 3 && val.length <= 80;
            document.getElementById('error-name')?.classList.toggle('hidden', valid);
        } else if (type === 'phone') {
            const digits = val.replace(/\D/g, '');
            valid = digits.length >= 10 && digits.length <= 15;
            document.getElementById('error-phone')?.classList.toggle('hidden', valid);
        }

        input.classList.remove('border-white', 'border-blush-400', 'border-blush-600');
        input.classList.add(valid ? 'border-blush-400' : 'border-blush-600');
        return valid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.validateField(this.nameInput, 'name') || !this.validateField(this.phoneInput, 'phone')) return;

        const name = SecuritySanitizer.sanitizeText(this.nameInput.value, 80);
        const phone = SecuritySanitizer.sanitizeText(this.phoneInput.value, 18);
        const treatment = this.treatmentSelect.value;

        const waText = encodeURIComponent(
            `Hola AUREA, soy *${name}* (${phone}). Me gustaría agendar una valoración para: *${treatment}*.`
        );
        const waUrl = `https://wa.me/${this.whatsappPhone}?text=${waText}`;

        this.form.classList.add('hidden');
        this.successBox?.classList.remove('hidden');
        if (this.successDetail) {
            this.successDetail.innerHTML = `Gracias <strong>${SecuritySanitizer.escapeHTML(name)}</strong>. Tu solicitud para <strong>${SecuritySanitizer.escapeHTML(treatment)}</strong> está preparada para confirmarse por WhatsApp:`;
        }
        if (this.waDirectLink) this.waDirectLink.href = waUrl;

        this.tracker.track('Form_Lead_Submitted');
    }

    reset() {
        this.form.reset();
        this.successBox?.classList.add('hidden');
        this.form.classList.remove('hidden');
    }
}

class B2BExecutiveSuite {
    constructor(repository, showcaseView, notifier, tracker) {
        this.repository = repository;
        this.showcaseView = showcaseView;
        this.notifier = notifier;
        this.tracker = tracker;
        this.isActive = false;

        this.drawer = document.getElementById('b2b-executive-drawer');
        this.adSpendInput = document.getElementById('roi-adspend');
        this.ticketInput = document.getElementById('roi-ticket');
        this.cmsSelect = document.getElementById('cms-treatment-select');
        this.cmsPriceInput = document.getElementById('cms-price-input');
        this.cmsBadgeInput = document.getElementById('cms-badge-input');
    }

    init() {
        document.getElementById('btn-toggle-b2b-header')?.addEventListener('click', () => this.toggle());
        document.getElementById('btn-close-b2b')?.addEventListener('click', () => this.toggle(false));
        document.getElementById('btn-footer-roi')?.addEventListener('click', () => {
            this.toggle(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        this.adSpendInput?.addEventListener('input', () => this.calculateROI());
        this.ticketInput?.addEventListener('input', () => this.calculateROI());
        this.cmsSelect?.addEventListener('change', () => this.loadTreatmentToCMS());
        document.getElementById('btn-apply-cms')?.addEventListener('click', () => this.applyCMSChanges());

        this.calculateROI();
    }

    toggle(forceState) {
        this.isActive = typeof forceState === 'boolean' ? forceState : !this.isActive;
        this.tracker.setAuditMode(this.isActive);

        if (this.isActive) {
            document.body.classList.add('b2b-mode');
            this.drawer?.classList.remove('hidden');
            this.notifier.show("Modo Clínica (B2B) activado: Simula tu ROI y edita protocolos.");
        } else {
            document.body.classList.remove('b2b-mode');
            this.drawer?.classList.add('hidden');
        }
    }

    calculateROI() {
        if (!this.adSpendInput || !this.ticketInput) return;
        const adSpend = parseInt(this.adSpendInput.value, 10);
        const avgTicket = parseInt(this.ticketInput.value, 10);

        document.getElementById('roi-adspend-label').textContent = `$${adSpend.toLocaleString()} USD`;
        document.getElementById('roi-ticket-label').textContent = `$${avgTicket.toLocaleString()} USD`;

        const leads = Math.round(adSpend / 4.2);
        const patients = Math.max(1, Math.round(leads * 0.25));
        const revenue = patients * avgTicket;

        document.getElementById('roi-leads').textContent = leads;
        document.getElementById('roi-patients').textContent = patients;
        document.getElementById('roi-revenue').textContent = `$${revenue.toLocaleString()}`;
    }

    loadTreatmentToCMS() {
        const idx = parseInt(this.cmsSelect.value, 10);
        const ritual = this.repository.getShowcaseRitual(idx);
        if (!ritual) return;
        this.cmsPriceInput.value = ritual.price;
        this.cmsBadgeInput.value = ritual.badge;
    }

    applyCMSChanges() {
        const idx = parseInt(this.cmsSelect.value, 10);
        const updated = this.repository.updateShowcaseMetadata(idx, {
            price: this.cmsPriceInput.value,
            badge: this.cmsBadgeInput.value
        });
        if (!updated) return;

        this.showcaseView.render(idx);
        this.notifier.show(`Actualizado: "${updated.title}" ahora muestra "${updated.price}".`);
        document.getElementById('rituales')?.scrollIntoView({ behavior: 'smooth' });
    }
}

class AureaLandingApp {
    constructor() {
        this.notifier = new ToastNotifier('toast-notification', 'toast-text');
        this.tracker = new ConversionTracker(this.notifier);
        this.repository = new ClinicalCatalogRepository();

        this.leadForm = new LeadCaptureForm(this.tracker, '584120000000');
        this.heroController = new HeroRitualController(this.repository);
        this.showcaseView = new RitualShowcaseView(
            this.repository,
            (title) => this.leadForm.preselectTreatment(title)
        );
        this.baSlider = new BeforeAfterSlider('ba-slider', 'ba-after-wrapper', 'ba-handle', 'ba-before-img');
        this.faqAccordion = new FaqAccordion('faq-accordion');
        this.b2bSuite = new B2BExecutiveSuite(
            this.repository,
            this.showcaseView,
            this.notifier,
            this.tracker
        );
    }

    initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    bindGlobalTracking() {
        document.querySelectorAll('[data-track]').forEach(el => {
            el.addEventListener('click', () => {
                this.tracker.track(el.getAttribute('data-track'));
            });
        });
    }

    boot() {
        this.heroController.init();
        this.showcaseView.render(0);
        this.baSlider.init();
        this.faqAccordion.init();
        this.leadForm.init();
        this.b2bSuite.init();
        this.initScrollReveal();
        this.bindGlobalTracking();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const app = new AureaLandingApp();
    app.boot();
});