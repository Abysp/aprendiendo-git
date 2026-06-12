/* ── i18n ── */
const i18n = {
  en: {
    'hero-label': 'AI &amp; Design Systems Course',
    'hero-desc': 'An interactive guide to the essential Git and GitHub concepts — with animated visuals to help you see how each one works.',
    'nav-clone': 'Clone', 'nav-branch': 'Branch', 'nav-commit': 'Commit',
    'nav-diff': 'Diff', 'nav-merge': 'Merge', 'nav-rebase': 'Rebase',
    'nav-conflict': 'Conflict', 'nav-pr': 'Pull Request', 'nav-issue': 'Issue',
    'h3-what': 'What it does', 'h3-cons': 'Considerations', 'h3-res': 'Resources',
    // repo
    'repo-h2': 'Repository (repo)',
    'repo-tagline': 'The project folder, tracked by Git and hosted on GitHub et al.',
    'repo-what': 'A repository is the central storage for your project. It contains every file, folder, and the full history of every change ever made. Git tracks it locally on your machine; platforms like GitHub host a remote copy so teams can collaborate.',
    'repo-cons-1': 'Initialize with <code>git init</code> for new projects, or clone an existing one.',
    'repo-cons-2': 'Never commit secrets (.env, API keys) — use <code>.gitignore</code>.',
    'repo-cons-3': 'Keep repos focused: one project per repo is the standard.',
    'repo-cons-4': 'README, license, and .gitignore should be set up early.',
    'repo-res-1': 'GitHub — Creating repositories', 'repo-res-2': 'Pro Git — Getting a Git Repository', 'repo-res-3': 'github/gitignore templates',
    // clone
    'clone-h2': 'Clone',
    'clone-tagline': 'Download a copy of the code to your machine.',
    'clone-what': '<code>git clone</code> creates a full local copy of a remote repository — including all branches, commits, and history. It also sets up a connection to the remote (usually called <code>origin</code>) so you can push and pull later.',
    'clone-cons-1': 'Cloning is a one-time setup step when joining a project.',
    'clone-cons-2': 'Use SSH keys or a personal access token for private repos.',
    'clone-cons-3': 'Large repos can take time — consider shallow clones (<code>--depth 1</code>) for CI.',
    'clone-cons-4': 'After cloning, always create a feature branch before making changes.',
    'clone-res-1': 'git-clone documentation', 'clone-res-2': 'GitHub — Cloning a repository', 'clone-res-3': 'Connecting with SSH',
    // branch
    'branch-h2': 'Branch',
    'branch-tagline': 'A safe parallel timeline to the main codebase.',
    'branch-what': 'A branch is an independent line of development. You create one to work on a feature or fix without affecting <code>main</code>. When done, you merge it back. Branches are lightweight — Git just moves a pointer.',
    'branch-cons-1': 'Use descriptive names: <code>feature/dark-mode</code>, <code>fix/login-bug</code>.',
    'branch-cons-2': 'Keep branches short-lived — merge or delete them regularly.',
    'branch-cons-3': 'Never commit directly to <code>main</code> in team projects.',
    'branch-cons-4': 'Pull latest <code>main</code> before creating a new branch.',
    'branch-res-1': 'Pro Git — Branches in a Nutshell', 'branch-res-2': 'Atlassian — Using branches', 'branch-res-3': 'Git Flow branching model',
    // commit
    'commit-h2': 'Commit',
    'commit-tagline': 'A snapshot + message describing your changes.',
    'commit-what': 'A commit records a snapshot of your staged changes with a descriptive message. Each commit has a unique hash and links to its parent, forming an immutable history chain. Commits are local until you push them.',
    'commit-cons-1': 'Write clear messages: imperative mood, ~50 char subject line.',
    'commit-cons-2': 'Commit often, in small logical units — not one giant commit.',
    'commit-cons-3': 'Stage selectively with <code>git add -p</code> for clean history.',
    'commit-cons-4': 'Commits are permanent in shared history — avoid force-pushing shared branches.',
    'commit-res-1': 'How to Write a Git Commit Message', 'commit-res-2': 'git-commit documentation', 'commit-res-3': 'Conventional Commits',
    // push-pull
    'pp-h2': 'Push / Pull',
    'pp-tagline': 'Upload to / download from the hosted repository.',
    'pp-what': '<code>git push</code> uploads your local commits to the remote repository. <code>git pull</code> downloads new commits from the remote and merges them into your current branch. Together they keep local and remote in sync.',
    'pp-cons-1': 'Always pull before pushing to avoid rejected pushes.',
    'pp-cons-2': 'Push feature branches early and often for backup and visibility.',
    'pp-cons-3': 'Use <code>git pull --rebase</code> for a cleaner history on shared branches.',
    'pp-cons-4': 'Never force-push to shared branches without team agreement.',
    'pp-res-1': 'git-push documentation', 'pp-res-2': 'git-pull documentation', 'pp-res-3': 'Atlassian — Syncing',
    // diff
    'diff-h2': 'Diff',
    'diff-tagline': 'The visual difference between two versions of code from two different branches.',
    'diff-what': 'A diff shows line-by-line changes between two states — files, commits, or branches. Added lines appear in green, removed in red. Diffs are essential for code review, debugging, and understanding what changed before merging.',
    'diff-cons-1': 'Review diffs before every commit and PR — catch mistakes early.',
    'diff-cons-2': '<code>git diff</code> shows unstaged changes; <code>git diff --staged</code> shows staged.',
    'diff-cons-3': 'Large diffs are hard to review — keep PRs small.',
    'diff-cons-4': 'IDEs and GitHub provide side-by-side and unified diff views.',
    'diff-res-1': 'git-diff documentation', 'diff-res-2': 'GitHub — Reviewing PR changes', 'diff-res-3': 'Tower — Understanding diffs',
    // merge
    'merge-h2': 'Merge',
    'merge-tagline': 'Combine a branch back into another branch.',
    'merge-what': 'Merging integrates changes from one branch into another, creating a merge commit that joins both histories. It\'s the standard way to bring a completed feature branch back into <code>main</code> after review.',
    'merge-cons-1': 'Merge after PR approval — not before review.',
    'merge-cons-2': 'Prefer "Squash and merge" for clean history on feature work.',
    'merge-cons-3': 'Update your branch with latest <code>main</code> before merging to reduce conflicts.',
    'merge-cons-4': 'Merge commits preserve full history; squash merges flatten it.',
    'merge-res-1': 'Pro Git — Basic Branching and Merging', 'merge-res-2': 'GitHub — Merge methods', 'merge-res-3': 'Atlassian — git merge',
    // rebase
    'rebase-h2': 'Rebase',
    'rebase-tagline': 'Replay your commits on top of the latest <code>main</code>.',
    'rebase-what': 'Rebase moves your branch\'s commits to sit on top of another branch\'s tip, rewriting history to appear as if you started from the latest point. The result is a linear, cleaner history without merge commits.',
    'rebase-cons-1': 'Never rebase commits that have already been pushed and shared.',
    'rebase-cons-2': 'Great for updating feature branches before opening a PR.',
    'rebase-cons-3': 'Conflicts must be resolved commit-by-commit during rebase.',
    'rebase-cons-4': 'Use <code>git rebase -i</code> to squash or reorder local commits.',
    'rebase-res-1': 'Pro Git — Rebasing', 'rebase-res-2': 'Atlassian — git rebase', 'rebase-res-3': 'git-rebase documentation',
    // conflict
    'conflict-h2': 'Merge Conflict',
    'conflict-tagline': 'Two changes touched the same lines; you choose.',
    'conflict-what': 'A merge conflict occurs when Git can\'t automatically reconcile overlapping changes in the same file. Git pauses the merge and marks the conflicting sections with <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> markers. You manually edit the file, choose the correct code, then continue the merge.',
    'conflict-cons-1': 'Don\'t panic — conflicts are normal in active projects.',
    'conflict-cons-2': 'Communicate with teammates when the same files are being edited.',
    'conflict-cons-3': 'Use your IDE\'s merge tool or VS Code\'s conflict resolver.',
    'conflict-cons-4': 'After resolving, always test before completing the merge.',
    'conflict-res-1': 'GitHub — Addressing merge conflicts', 'conflict-res-2': 'Pro Git — Basic merge conflicts', 'conflict-res-3': 'Atlassian — Merge conflicts',
    // pr
    'pr-h2': 'Pull Request (PR)',
    'pr-tagline': '"Please review and merge my branch."',
    'pr-what': 'A Pull Request is a request to merge your branch into another (usually <code>main</code>). It shows the diff, enables code review, runs CI checks, and documents the discussion before changes land in the main codebase.',
    'pr-cons-1': 'Write a clear PR description: what, why, and how to test.',
    'pr-cons-2': 'Keep PRs small and focused — one concern per PR.',
    'pr-cons-3': 'Link related issues with "Closes #123".',
    'pr-cons-4': 'Request reviews from relevant teammates; address feedback promptly.',
    'pr-res-1': 'GitHub Pull Requests docs', 'pr-res-2': 'GitHub Code Review', 'pr-res-3': 'Atlassian — Making a pull request',
    // issue
    'issue-h2': 'Issue',
    'issue-tagline': 'A ticket: bug, feature, or task.',
    'issue-what': 'Issues are GitHub\'s task tracker. Each issue represents a bug report, feature request, or todo item. They can be labeled, assigned, linked to PRs, and organized into milestones or project boards.',
    'issue-cons-1': 'Use labels consistently: <code>bug</code>, <code>enhancement</code>, <code>good first issue</code>.',
    'issue-cons-2': 'Write reproducible steps for bug reports.',
    'issue-cons-3': 'Link PRs to issues so they auto-close on merge.',
    'issue-cons-4': 'Break large features into smaller, trackable issues.',
    'issue-res-1': 'GitHub Issues documentation', 'issue-res-2': 'GitHub Projects', 'issue-res-3': 'GitHub Guides — Mastering Issues',
    // footer & SVG
    'footer': 'Built for the AI &amp; Design Systems course — vanilla HTML, CSS, JS &amp; GSAP.',
    'svg-repo-local': 'local repo',
    'svg-clone-remote': 'Remote repo', 'svg-clone-machine': 'Your machine',
    'svg-branch-feat': 'feature branch',
    'svg-commit-msg': 'feat: add dark mode', 'svg-commit-sub': 'Toggle in settings panel',
    'svg-pp-remote': 'Remote',
    'svg-diff-feature': 'feature', 'svg-diff-label': 'changed line highlighted',
    'svg-merge-label': 'merge commit',
    'svg-rebase-label': 'commits replayed on main',
    'svg-conflict-done': '✓ conflict resolved',
    'svg-pr-branch': 'your branch', 'svg-pr-approved': 'Approved ✓',
    'svg-issue-board': 'Project Board', 'svg-issue-todo': 'To Do',
    'svg-issue-inprogress': 'In Progress', 'svg-issue-done': 'Done',
    'svg-issue-title': 'Fix nav on mobile',
  },
  es: {
    'hero-label': 'Curso de IA y Sistemas de Diseño',
    'hero-desc': 'Una guía interactiva sobre los conceptos esenciales de Git y GitHub — con visualizaciones animadas para ver cómo funciona cada uno.',
    'nav-clone': 'Clonar', 'nav-branch': 'Rama', 'nav-commit': 'Commit',
    'nav-diff': 'Diff', 'nav-merge': 'Fusionar', 'nav-rebase': 'Rebase',
    'nav-conflict': 'Conflicto', 'nav-pr': 'Pull Request', 'nav-issue': 'Issue',
    'h3-what': 'Qué hace', 'h3-cons': 'Consideraciones', 'h3-res': 'Recursos',
    // repo
    'repo-h2': 'Repositorio (repo)',
    'repo-tagline': 'La carpeta del proyecto, rastreada por Git y alojada en GitHub y similares.',
    'repo-what': 'Un repositorio es el almacén central de tu proyecto. Contiene cada archivo, carpeta y el historial completo de cada cambio realizado. Git lo rastrea localmente en tu máquina; plataformas como GitHub alojan una copia remota para que los equipos colaboren.',
    'repo-cons-1': 'Inicializa con <code>git init</code> para proyectos nuevos, o clona uno existente.',
    'repo-cons-2': 'Nunca hagas commit de secretos (.env, API keys) — usa <code>.gitignore</code>.',
    'repo-cons-3': 'Mantén los repos enfocados: un proyecto por repo es el estándar.',
    'repo-cons-4': 'README, licencia y .gitignore deben configurarse desde el principio.',
    'repo-res-1': 'GitHub — Crear repositorios', 'repo-res-2': 'Pro Git — Obtener un repositorio', 'repo-res-3': 'Plantillas de github/gitignore',
    // clone
    'clone-h2': 'Clonar',
    'clone-tagline': 'Descarga una copia del código en tu máquina.',
    'clone-what': '<code>git clone</code> crea una copia local completa de un repositorio remoto — incluyendo todas las ramas, commits e historial. También establece una conexión con el remoto (normalmente llamado <code>origin</code>) para poder hacer push y pull después.',
    'clone-cons-1': 'Clonar es un paso inicial único al unirse a un proyecto.',
    'clone-cons-2': 'Usa claves SSH o un token de acceso personal para repos privados.',
    'clone-cons-3': 'Los repos grandes pueden tardar — considera clones superficiales (<code>--depth 1</code>) para CI.',
    'clone-cons-4': 'Tras clonar, crea siempre una rama de funcionalidad antes de hacer cambios.',
    'clone-res-1': 'Documentación de git-clone', 'clone-res-2': 'GitHub — Clonar un repositorio', 'clone-res-3': 'Conectar con SSH',
    // branch
    'branch-h2': 'Rama',
    'branch-tagline': 'Una línea temporal paralela y segura del código principal.',
    'branch-what': 'Una rama es una línea de desarrollo independiente. La creas para trabajar en una funcionalidad o corrección sin afectar a <code>main</code>. Cuando terminas, la fusionas de vuelta. Las ramas son ligeras — Git solo mueve un puntero.',
    'branch-cons-1': 'Usa nombres descriptivos: <code>feature/modo-oscuro</code>, <code>fix/bug-login</code>.',
    'branch-cons-2': 'Mantén las ramas de vida corta — fusiénalas o elimínalas con regularidad.',
    'branch-cons-3': 'Nunca hagas commit directamente en <code>main</code> en proyectos de equipo.',
    'branch-cons-4': 'Haz pull del último <code>main</code> antes de crear una nueva rama.',
    'branch-res-1': 'Pro Git — Las ramas en pocas palabras', 'branch-res-2': 'Atlassian — Uso de ramas', 'branch-res-3': 'Modelo de ramas Git Flow',
    // commit
    'commit-h2': 'Commit',
    'commit-tagline': 'Una instantánea + mensaje que describe tus cambios.',
    'commit-what': 'Un commit registra una instantánea de tus cambios preparados con un mensaje descriptivo. Cada commit tiene un hash único y apunta a su padre, formando una cadena de historial inmutable. Los commits son locales hasta que los envías.',
    'commit-cons-1': 'Escribe mensajes claros: modo imperativo, ~50 caracteres en el asunto.',
    'commit-cons-2': 'Haz commits frecuentes, en unidades lógicas pequeñas — no un commit gigante.',
    'commit-cons-3': 'Prepara selectivamente con <code>git add -p</code> para un historial limpio.',
    'commit-cons-4': 'Los commits son permanentes en el historial compartido — evita el force-push en ramas compartidas.',
    'commit-res-1': 'Cómo escribir un mensaje de commit', 'commit-res-2': 'Documentación de git-commit', 'commit-res-3': 'Conventional Commits',
    // push-pull
    'pp-h2': 'Push / Pull',
    'pp-tagline': 'Subir a / descargar del repositorio remoto.',
    'pp-what': '<code>git push</code> sube tus commits locales al repositorio remoto. <code>git pull</code> descarga nuevos commits del remoto y los fusiona en tu rama actual. Juntos mantienen el local y el remoto sincronizados.',
    'pp-cons-1': 'Haz siempre pull antes de push para evitar rechazos.',
    'pp-cons-2': 'Sube las ramas de funcionalidad pronto y con frecuencia para copias de seguridad y visibilidad.',
    'pp-cons-3': 'Usa <code>git pull --rebase</code> para un historial más limpio en ramas compartidas.',
    'pp-cons-4': 'Nunca hagas force-push en ramas compartidas sin acuerdo del equipo.',
    'pp-res-1': 'Documentación de git-push', 'pp-res-2': 'Documentación de git-pull', 'pp-res-3': 'Atlassian — Sincronización',
    // diff
    'diff-h2': 'Diff',
    'diff-tagline': 'La diferencia visual entre dos versiones del código de dos ramas distintas.',
    'diff-what': 'Un diff muestra los cambios línea por línea entre dos estados — archivos, commits o ramas. Las líneas añadidas aparecen en verde, las eliminadas en rojo. Los diffs son esenciales para la revisión de código, depuración y comprender qué cambió antes de fusionar.',
    'diff-cons-1': 'Revisa los diffs antes de cada commit y PR — detecta errores a tiempo.',
    'diff-cons-2': '<code>git diff</code> muestra cambios no preparados; <code>git diff --staged</code> muestra los preparados.',
    'diff-cons-3': 'Los diffs grandes son difíciles de revisar — mantén los PRs pequeños.',
    'diff-cons-4': 'Los IDEs y GitHub ofrecen vistas de diff lado a lado y unificada.',
    'diff-res-1': 'Documentación de git-diff', 'diff-res-2': 'GitHub — Revisar cambios en PRs', 'diff-res-3': 'Tower — Comprender los diffs',
    // merge
    'merge-h2': 'Fusionar',
    'merge-tagline': 'Combinar una rama de vuelta en otra rama.',
    'merge-what': 'La fusión integra los cambios de una rama en otra, creando un commit de fusión que une ambos historiales. Es la forma estándar de incorporar una rama de funcionalidad completa de vuelta en <code>main</code> tras la revisión.',
    'merge-cons-1': 'Fusiona después de la aprobación del PR — no antes de la revisión.',
    'merge-cons-2': 'Prefiere "Squash and merge" para un historial limpio en trabajo de funcionalidades.',
    'merge-cons-3': 'Actualiza tu rama con el último <code>main</code> antes de fusionar para reducir conflictos.',
    'merge-cons-4': 'Los commits de fusión preservan el historial completo; squash merge lo aplana.',
    'merge-res-1': 'Pro Git — Ramas y fusión básica', 'merge-res-2': 'GitHub — Métodos de fusión', 'merge-res-3': 'Atlassian — git merge',
    // rebase
    'rebase-h2': 'Rebase',
    'rebase-tagline': 'Replica tus commits encima del último <code>main</code>.',
    'rebase-what': 'Rebase mueve los commits de tu rama para que queden encima del extremo de otra rama, reescribiendo el historial como si hubieras empezado desde el punto más reciente. El resultado es un historial lineal y más limpio sin commits de fusión.',
    'rebase-cons-1': 'Nunca hagas rebase de commits que ya han sido enviados y compartidos.',
    'rebase-cons-2': 'Ideal para actualizar ramas de funcionalidad antes de abrir un PR.',
    'rebase-cons-3': 'Los conflictos deben resolverse commit a commit durante el rebase.',
    'rebase-cons-4': 'Usa <code>git rebase -i</code> para aplastar o reordenar commits locales.',
    'rebase-res-1': 'Pro Git — Rebase', 'rebase-res-2': 'Atlassian — git rebase', 'rebase-res-3': 'Documentación de git-rebase',
    // conflict
    'conflict-h2': 'Conflicto de Fusión',
    'conflict-tagline': 'Dos cambios tocaron las mismas líneas; tú decides.',
    'conflict-what': 'Un conflicto de fusión ocurre cuando Git no puede reconciliar automáticamente los cambios superpuestos en el mismo archivo. Git pausa la fusión y marca las secciones en conflicto con marcadores <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>. Editas el archivo manualmente, eliges el código correcto y continúas la fusión.',
    'conflict-cons-1': 'No entres en pánico — los conflictos son normales en proyectos activos.',
    'conflict-cons-2': 'Comunícate con tus compañeros cuando se estén editando los mismos archivos.',
    'conflict-cons-3': 'Usa la herramienta de fusión de tu IDE o el resolutor de conflictos de VS Code.',
    'conflict-cons-4': 'Tras resolver, prueba siempre antes de completar la fusión.',
    'conflict-res-1': 'GitHub — Resolver conflictos de fusión', 'conflict-res-2': 'Pro Git — Conflictos básicos de fusión', 'conflict-res-3': 'Atlassian — Conflictos de fusión',
    // pr
    'pr-h2': 'Pull Request (PR)',
    'pr-tagline': '"Por favor, revisa y fusiona mi rama."',
    'pr-what': 'Un Pull Request es una solicitud para fusionar tu rama en otra (normalmente <code>main</code>). Muestra el diff, permite la revisión de código, ejecuta pruebas de CI y documenta la discusión antes de que los cambios lleguen a la base de código principal.',
    'pr-cons-1': 'Escribe una descripción clara del PR: qué, por qué y cómo probar.',
    'pr-cons-2': 'Mantén los PRs pequeños y enfocados — un tema por PR.',
    'pr-cons-3': 'Vincula issues relacionados con "Closes #123".',
    'pr-cons-4': 'Solicita revisiones de compañeros relevantes; responde al feedback con prontitud.',
    'pr-res-1': 'Documentación de Pull Requests de GitHub', 'pr-res-2': 'Revisión de código en GitHub', 'pr-res-3': 'Atlassian — Crear un pull request',
    // issue
    'issue-h2': 'Issue',
    'issue-tagline': 'Un ticket: bug, funcionalidad o tarea.',
    'issue-what': 'Los issues son el gestor de tareas de GitHub. Cada issue representa un reporte de bug, solicitud de funcionalidad o tarea pendiente. Se pueden etiquetar, asignar, vincular a PRs y organizar en hitos o tableros de proyecto.',
    'issue-cons-1': 'Usa etiquetas de forma consistente: <code>bug</code>, <code>enhancement</code>, <code>good first issue</code>.',
    'issue-cons-2': 'Escribe pasos reproducibles para los reportes de bugs.',
    'issue-cons-3': 'Vincula los PRs a issues para que se cierren automáticamente al fusionar.',
    'issue-cons-4': 'Divide las funcionalidades grandes en issues más pequeños y rastreables.',
    'issue-res-1': 'Documentación de Issues de GitHub', 'issue-res-2': 'GitHub Projects', 'issue-res-3': 'GitHub Guides — Dominar los Issues',
    // footer & SVG
    'footer': 'Hecho para el curso de IA y Sistemas de Diseño — HTML, CSS, JS y GSAP.',
    'svg-repo-local': 'repositorio local',
    'svg-clone-remote': 'Repositorio remoto', 'svg-clone-machine': 'Tu máquina',
    'svg-branch-feat': 'rama de funcionalidad',
    'svg-commit-msg': 'feat: añadir modo oscuro', 'svg-commit-sub': 'Activar en ajustes',
    'svg-pp-remote': 'Remoto',
    'svg-diff-feature': 'funcionalidad', 'svg-diff-label': 'línea modificada resaltada',
    'svg-merge-label': 'commit de fusión',
    'svg-rebase-label': 'commits replicados en main',
    'svg-conflict-done': '✓ conflicto resuelto',
    'svg-pr-branch': 'tu rama', 'svg-pr-approved': 'Aprobado ✓',
    'svg-issue-board': 'Tablero de Proyecto', 'svg-issue-todo': 'Por Hacer',
    'svg-issue-inprogress': 'En Progreso', 'svg-issue-done': 'Hecho',
    'svg-issue-title': 'Arreglar nav en móvil',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = lang === 'es' ? 'Git Cheat Sheet — Guía Interactiva' : 'Git Cheat Sheet — Interactive Guide';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = (i18n[lang] && i18n[lang][key] !== undefined) ? i18n[lang][key] : i18n.en[key];
        if (val === undefined) return;
        // SVG <text> elements don't support innerHTML
        if (el.ownerSVGElement !== undefined || el.tagName === 'text') {
            el.textContent = val;
        } else {
            el.innerHTML = val;
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    localStorage.setItem('lang', lang);
}

gsap.registerPlugin(ScrollTrigger);

const animators = {
    repo(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.fromTo('.repo-file', { opacity: 0, x: -10 }, { opacity: 1, x: 0, stagger: 0.2, duration: 0.4 }, 0)
          .fromTo('.repo-dot', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, stagger: 0.15, duration: 0.3 }, 0.6)
          .to('.repo-cloud, .repo-cloud-label', { opacity: 1, duration: 0.5 }, 1)
          .to('.repo-sync-line, .repo-sync-arrow', { opacity: 1, duration: 0.3 }, 1.2)
          .fromTo('.repo-sync-line', { strokeDashoffset: 80 }, { strokeDashoffset: 0, duration: 0.6 }, 1.2);
        return tl;
    },

    clone(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        const fly = (sel, delay) => {
            tl.fromTo(sel,
                { attr: { cx: 610, cy: 97 }, opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.inOut',
                    keyframes: [
                        { attr: { cx: 390, cy: 128 }, duration: 0.33 },
                        { attr: { cx: 240, cy: 150 }, duration: 0.33 },
                        { attr: { cx: 149, cy: 165 }, duration: 0.34 }
                    ]
                },
                delay
            );
        };
        tl.to('.clone-arrow-path', { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, 0)
          .to('.clone-label', { opacity: 1, duration: 0.3 }, 0.2);
        fly('.clone-p-1', 0);
        fly('.clone-p-2', 0.3);
        fly('.clone-p-3', 0.6);
        tl.to('.clone-lfile-1', { opacity: 1, duration: 0.3 }, 0.8)
          .to('.clone-lfile-2', { opacity: 1, duration: 0.3 }, 1);
        return tl;
    },

    branch(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.to('.branch-fork', { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, 0)
          .to('.branch-feat-label', { opacity: 1, duration: 0.3 }, 0.5)
          .to('.bc-feat-1', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 0.8)
          .to('.bc-feat-2', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 1.1)
          .to('.bc-feat-3', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 1.4)
          .to('.bc-main-4', { opacity: 1, duration: 0.3 }, 1.7);
        gsap.set('.bc-feat-1, .bc-feat-2, .bc-feat-3', { scale: 0, transformOrigin: 'center' });
        return tl;
    },

    commit(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.to('.commit-staging, .commit-staging-text', { opacity: 1, duration: 0.4 }, 0)
          .to('.commit-flash', { opacity: 0.4, scale: 2, duration: 0.4, ease: 'power2.out' }, 0.6)
          .to('.commit-flash', { opacity: 0, duration: 0.2 }, 1)
          .to('.cn-3', { opacity: 1, duration: 0.3, ease: 'back.out(2)' }, 0.7)
          .to('.commit-msg-box, .commit-msg-text, .commit-msg-sub, .commit-msg-line', { opacity: 1, duration: 0.4, stagger: 0.1 }, 1);
        return tl;
    },

    'push-pull'(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to('.pp-push-arrow, .pp-push-label', { opacity: 1, duration: 0.3 }, 0)
          .fromTo('.push-dot', { attr: { cx: 257 }, opacity: 0 }, { attr: { cx: 643 }, opacity: 1, duration: 0.8, ease: 'power2.inOut' }, 0.2)
          .to('.pp-lc-3', { opacity: 1, duration: 0.2 }, 0.2)
          .to('.pp-rc-3', { opacity: 1, duration: 0.2 }, 1)
          .to('.push-dot', { opacity: 0, duration: 0.1 }, 1)
          .to('.pp-pull-arrow, .pp-pull-label', { opacity: 1, duration: 0.3 }, 1.2)
          .fromTo('.pull-dot', { attr: { cx: 643 }, opacity: 0 }, { attr: { cx: 257 }, opacity: 1, duration: 0.8, ease: 'power2.inOut' }, 1.4)
          .to('.pull-dot', { opacity: 0, duration: 0.1 }, 2.2)
          .to('.pp-push-arrow, .pp-push-label, .pp-pull-arrow, .pp-pull-label', { opacity: 0, duration: 0.2 }, 2.3);
        return tl;
    },

    diff(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.fromTo('.diff-old-3', { fill: '#EEE' }, { fill: '#FFEBEE', duration: 0.5 }, 0)
          .fromTo('.diff-new-3', { fill: '#EEE' }, { fill: '#E8F5E9', duration: 0.5 }, 0)
          .to('.diff-minus, .diff-plus', { opacity: 1, duration: 0.3 }, 0.3)
          .to('.diff-connector, .diff-label', { opacity: 1, duration: 0.4 }, 0.5)
          .to('.diff-old-3, .diff-new-3', { scale: 1.02, transformOrigin: 'center', duration: 0.3, yoyo: true, repeat: 1 }, 0.8);
        return tl;
    },

    merge(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.fromTo('.mn-feat-2', { attr: { cy: 90 } }, { attr: { cy: 210 }, duration: 0.8, ease: 'power2.inOut' }, 0)
          .to('.merge-feat-path', { opacity: 0.3, duration: 0.3 }, 0.8)
          .to('.merge-pulse', { opacity: 0.5, scale: 1.5, duration: 0.4 }, 0.8)
          .to('.merge-pulse', { opacity: 0, duration: 0.3 }, 1.2)
          .to('.mn-merge', { opacity: 1, duration: 0.3, ease: 'back.out(2)' }, 0.9)
          .to('.mn-main-3', { opacity: 1, duration: 0.3 }, 1.1)
          .to('.merge-label', { opacity: 1, duration: 0.3 }, 1.2);
        return tl;
    },

    rebase(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.to('.rb-m3', { opacity: 1, duration: 0.3 }, 0)
          .fromTo('.rb-f1', { attr: { cx: 270, cy: 100 } }, { attr: { cx: 590, cy: 200 }, duration: 0.8, ease: 'power2.inOut' }, 0.3)
          .fromTo('.rb-f2', { attr: { cx: 430, cy: 100 } }, { attr: { cx: 750, cy: 200 }, duration: 0.8, ease: 'power2.inOut' }, 0.5)
          .to('.rb-f1-new, .rb-f2-new', { opacity: 1, duration: 0.2, stagger: 0.1 }, 1)
          .to('.rb-m4, .rb-m5', { opacity: 1, duration: 0.2, stagger: 0.1 }, 1)
          .to('.rb-f1, .rb-f2', { opacity: 0, duration: 0.2 }, 1)
          .to('.rb-label', { opacity: 1, duration: 0.3 }, 1.2);
        return tl;
    },

    conflict(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
        tl.to('.cf-marker-head, .cf-marker-mid, .cf-marker-end', { opacity: 1, duration: 0.3, stagger: 0.15 }, 0)
          .to('.cf-ours-text, .cf-theirs-text', { opacity: 1, duration: 0.3 }, 0.3)
          .to('.cf-head, .cf-ours, .cf-theirs, .cf-marker-head, .cf-marker-mid, .cf-marker-end, .cf-ours-text, .cf-theirs-text', { opacity: 0, duration: 0.4 }, 2)
          .to('.cf-resolved, .cf-resolved-text, .cf-done-label', { opacity: 1, duration: 0.5 }, 2.5);
        return tl;
    },

    pr(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.to('.pr-arrow', { strokeDashoffset: 0, duration: 0.6 }, 0)
          .to('.pr-arrow-head', { opacity: 1, duration: 0.2 }, 0.5)
          .to('.pr-card, .pr-card-title', { opacity: 1, duration: 0.4 }, 0.6)
          .to('.pr-r1, .pr-r2', { opacity: 1, duration: 0.3, stagger: 0.15 }, 1)
          .to('.pr-check, .pr-check-text', { opacity: 1, duration: 0.4 }, 1.5)
          .to('.pr-merge-down', { opacity: 1, duration: 0.3 }, 2)
          .to('.pr-main-box', { fill: '#2D6A4F', duration: 0.4 }, 2.2);
        return tl;
    },

    issue(svg) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.to('.issue-card-new, .issue-num, .issue-title, .issue-label, .issue-label-text', { opacity: 1, duration: 0.4, stagger: 0.1 }, 0)
          .to('.issue-card-new', { attr: { x: 316 }, duration: 0.8, ease: 'power2.inOut' }, 1)
          .to('.issue-card-new', { opacity: 0, duration: 0.1 }, 1.8)
          .to('.issue-card-move', { opacity: 1, attr: { x: 316 }, duration: 0.01 }, 1.8)
          .to('.issue-card-move', { attr: { x: 592 }, duration: 0.8, ease: 'power2.inOut' }, 2)
          .to('.issue-card-move', { opacity: 0, duration: 0.1 }, 2.8)
          .to('.issue-card-done, .issue-done-check', { opacity: 1, duration: 0.4 }, 2.9);
        return tl;
    }
};

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});
if (currentLang !== 'en') setLanguage(currentLang);

document.querySelectorAll('.anim-svg').forEach(svg => {
    const type = svg.dataset.anim;
    const article = svg.closest('.concept');

    ScrollTrigger.create({
        trigger: article,
        start: 'top 75%',
        once: true,
        onEnter: () => {
            if (animators[type]) {
                const tl = animators[type](svg);
                svg._timeline = tl;
            }
        }
    });
});
