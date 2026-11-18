/* ==========================================================================
   AURI ESTÉTICA & BIENESTAR - CLIENT-SIDE LOGIC & MICROINTERACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('✨ Auri Estética & Bienestar System Initialized Securely.');

  // Protocol Showcase Interactivity
  const tabs = document.querySelectorAll('.protocol-tab-btn');
  const displayTitle = document.getElementById('display-title');
  const displayDesc = document.getElementById('display-desc');
  const displayDuration = document.getElementById('display-duration');
  const displayRecovery = document.getElementById('display-recovery');
  const displayLongevity = document.getElementById('display-longevity');

  const protocolData = {
    revitalizacion: {
      title: "Revitalización Celular Gold",
      desc: "Infusión profunda de antioxidantes puros y ácido hialurónico reticulado mediante micro-infusión indolora, devolviendo la luminosidad nativa y la elasticidad juvenil a tu rostro en una sola sesión.",
      duration: "60 Minutos",
      recovery: "Inmediata (Cero Downtime)",
      longevity: "6 a 8 Meses"
    },
    tension: {
      title: "Lifting Ultrasónico Estructural",
      desc: "Tecnología de ultrasonido microfocalizado de alta intensidad (HIFU) que estimula la neocolagénesis en el sistema aponeurótico superficial sin incisiones ni marcas visibles.",
      duration: "90 Minutos",
      recovery: "Sin tiempo de reposo",
      longevity: "12 a 18 Meses"
    },
    armonizacion: {
      title: "Armonización Facial Armónica",
      desc: "Diseño antropométrico personalizado para equilibrar los tercios faciales con biopolímeros biocompatibles de máxima gama, realzando tus facciones naturales con absoluta sutileza.",
      duration: "45 - 60 Minutos",
      recovery: "24 horas leves cuidados",
      longevity: "12 a 24 Meses"
    },
    hidratacion: {
      title: "Hidratación Profunda & Seda",
      desc: "Coctel magistral de péptidos biomiméticos, aminoácidos esenciales y vitaminas puras que nutren la matriz extracelular cutánea, combatiendo el estrés oxidativo ambiental.",
      duration: "50 Minutos",
      recovery: "Inmediata",
      longevity: "4 a 6 Meses"
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.getAttribute('data-protocol');
      const data = protocolData[key];

      if (data) {
        displayTitle.textContent = data.title;
        displayDesc.textContent = data.desc;
        displayDuration.textContent = data.duration;
        displayRecovery.textContent = data.recovery;
        displayLongevity.textContent = data.longevity;
      }
    });
  });
});