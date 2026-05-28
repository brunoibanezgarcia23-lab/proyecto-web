const SECTIONS = [
  {
    label: "Actividades 1 – 5",
    items: [
      {
        num: "Act. 01",
        title: "Preparación del Entorno",
        desc: "Instalación del servidor Ubuntu en un equipo Wyse e instalación y configuración de Windows 11 Pro con tres aplicaciones.",
        file: "manual-1.html"
      },
      {
        num: "Act. 02",
        title: "OCS Inventory",
        desc: "Despliegue del servidor OCS Inventory sobre Ubuntu, configuración de MySQL y Apache, e instalación del agente en Windows 11 Pro.",
        file: "actividad2.html"
      },
      {
        num: "Act. 03",
        title: "Latiguillos CAT 8 RJ45",
        desc: "Proceso completo de crimpado de un latiguillo de red con cable CAT 8: estándares T568A/T568B, materiales y comprobación.",
        file: "manual-3.html"
      },
      {
        num: "Act. 04",
        title: "Switch TP-Link SG3210",
        desc: "Acceso al panel de administración web del switch, configuración de IP y creación de VLANs (802.1Q).",
        file: "manual-4.html"
      },
      {
        num: "Act. 05",
        title: "Servicios Web y FTP",
        desc: "Instalación y configuración de Apache2 y vsftpd en Ubuntu. Gestión de permisos, estructura de directorios y reglas UFW.",
        file: "actividad5.html"
      }
    ]
  },
  {
    label: "Actividad 6 – Investigación NAS",
    items: [
      {
        num: "Act. 06 · I",
        title: "Sistemas Operativos para NAS",
        desc: "Análisis comparativo de TrueNAS SCALE, Synology DSM, OpenMediaVault, Unraid y Proxmox. Criterios de selección y seguridad.",
        file: "A6_sistemas_operativos_nas.html"
      },
      {
        num: "Act. 06 · II",
        title: "Copias de Seguridad en NAS",
        desc: "Regla 3-2-1, tipos de backup (completa, incremental, diferencial), herramientas (Hyper Backup, ZFS, Rsync) y copias en la nube.",
        file: "A6_copias_seguridad_nas.html"
      },
      {
        num: "Act. 06 · III",
        title: "Aplicaciones FTPS para NAS",
        desc: "Comparativa de clientes FTPS: FileZilla, WinSCP, Cyberduck, Beyond Compare y lftp. Configuración en Synology, QNAP y TrueNAS.",
        file: "A6_ftps_nas.html"
      }
    ]
  },
   {
    label: "Actividad 8 – NAS",
    items: [
      {
        num: "Act. 08 · NAS",
        title: "Creación y Configuración del NAS",
        desc: "Creación y Configuración del NAS",
        file: "manual-8.html"
      }
    ]
   }
];

const main = document.getElementById("main");

SECTIONS.forEach(sec => {
  const label = document.createElement("p");
  label.className = "section-label";
  label.textContent = sec.label;
  main.appendChild(label);

  const grid = document.createElement("div");
  grid.className = "cards-grid";

  sec.items.forEach(item => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = item.file;
    a.target = "_blank";
    a.innerHTML = `
      <div class="card-stripe"></div>
      <div class="card-body">
        <div class="card-num">${item.num}</div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-arrow">Abrir manual</div>
      </div>
    `;
    grid.appendChild(a);
  });

  main.appendChild(grid);
});
