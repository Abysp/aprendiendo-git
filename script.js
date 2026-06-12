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
