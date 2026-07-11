// ════════════════════════════════════════════════════════════════
// Presentational slide types for the Lumina e-learning module.
// Each returns the inner content; the Frame supplies chrome + nav.
// window.Slides.*
// ════════════════════════════════════════════════════════════════
(function () {
  const { Button, Card, Badge, BreathWave, Logo } = window.LuminaDesignSystem_f39716;
  const I = window.Icons;

  // Shared eyebrow label
  function Eyebrow({ children, tone }) {
    return <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: tone || 'var(--color-accent)' }}>{children}</div>;
  }

  const SECTION_ICON = { 'Module 1': 'Heart', 'Module 2': 'Brain', 'Module 3': 'Eye', 'Module 4': 'Mic', 'Module 5': 'Dialogue', 'Knowledge Check': 'Award', 'Welcome': 'Home', 'Objectives': 'Star', 'Course Agenda': 'Book', 'Summary': 'Check', 'Complete': 'Award' };
  const sectionIcon = (s) => SECTION_ICON[s] || 'Heart';

  // Brand motif — concentric "breath ripples" + soft amber glow + optional centered icon.
  // Built entirely from Lumina's own visual primitives (no stock imagery).
  function RippleMotif({ icon, size = 132, reversed = true, glow = true, bare = false, rings = [1, 0.7, 0.44], opacity = 1 }) {
    const IconC = (icon && I[icon]) || I.Heart;
    const ringColor = reversed ? 'rgba(247,244,240,0.22)' : 'rgba(42,92,107,0.15)';
    return (
      <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, opacity }} aria-hidden="true">
        {glow && <div style={{ position: 'absolute', width: size * 0.92, height: size * 0.92, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,149,106,0.30) 0%, transparent 68%)' }} />}
        {rings.map((r, i) => (
          <div key={i} className="ripple-ring" style={{ position: 'absolute', width: size * r, height: size * r, borderRadius: '50%', border: `1.5px solid ${ringColor}`, animationDelay: (i * 0.5) + 's' }} />
        ))}
        {!bare && (
          <div style={{ position: 'relative', width: size * 0.32, height: size * 0.32, borderRadius: '50%', background: reversed ? 'rgba(247,244,240,0.14)' : 'var(--color-primary-subtle)', border: `1px solid ${ringColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconC size={size * 0.15} stroke={reversed ? 'var(--color-accent-light)' : 'var(--color-primary)'} />
          </div>
        )}
      </div>
    );
  }

  // A teal "stage" used by cover & section dividers — immersive, with radial glow + breath wave.
  // `photo` (an <image-slot>) renders full-bleed behind everything, under a brand teal wash so
  // white text stays legible and the photograph reads as an on-brand duotone.
  function TealStage({ children, align = 'center', bg, photo }) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 0, background: 'var(--color-primary)', overflow: 'hidden', borderRadius: 'inherit',
        display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', justifyContent: 'center',
        padding: 'clamp(28px, 6vw, 72px)', textAlign: align === 'center' ? 'center' : 'left' }}>
        {photo && <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>{photo}</div>}
        {photo && <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(155deg, rgba(42,92,107,0.72) 0%, rgba(42,92,107,0.80) 42%, rgba(26,46,53,0.90) 100%)' }} />}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 78% 18%, rgba(196,149,106,0.26) 0%, transparent 55%), radial-gradient(ellipse at 12% 92%, rgba(212,237,233,0.12) 0%, transparent 52%)' }} />
        {bg && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>{bg}</div>}
        <div style={{ position: 'relative', width: '100%', maxWidth: 760, display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start' }}>
          {children}
        </div>
      </div>
    );
  }

  // Full-bleed photographic background slot (author fills via `src`; user can drop in preview).
  function PhotoLayer({ id, src, hint }) {
    return React.createElement('image-slot', {
      id: id, src: src || undefined, shape: 'rect', fit: 'cover',
      placeholder: hint || 'Drop a photograph', 'hide-prompt': '',
      style: { position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' },
    });
  }

  // ── COVER ──
  function Cover({ meta, onStart, resumed, story, storyData, onToggleStory, name, onName }) {
    const sd = storyData || {};
    return (
      <TealStage bg={<RippleMotif bare glow={false} size={560} opacity={0.5} rings={[1, 0.76, 0.54, 0.34]} />} photo={<PhotoLayer id="cover-photo" hint="Drop a cover photograph (optional)" />}>
        <div style={{ marginBottom: 'clamp(20px,4vh,40px)' }}><Logo variant="reversed" size={40} /></div>
        <div style={{ color: 'var(--color-accent-light)', fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 18 }}>{story ? sd.eyebrow : 'Empathy Course · Module'}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--color-text-inverse)', lineHeight: 1.16, margin: 0, fontSize: 'clamp(38px, 6.5vw, 70px)' }}>{meta.title}</h1>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(247,244,240,0.78)', fontSize: 'clamp(18px,2.4vw,24px)', margin: '22px 0 0', maxWidth: story ? 560 : 540, lineHeight: 1.4 }}>
          {story ? sd.tagline : 'Empathy is a skill — learnable, practicable, and transformative.'}
        </p>
        <div style={{ width: 'min(360px, 80%)', margin: '30px 0 22px' }}><BreathWave height={30} animated /></div>
        <input value={name} onChange={(e) => onName(e.target.value)} placeholder="What should we call you? (optional)"
          style={{ width: 'min(380px,82%)', padding: '12px 16px', marginBottom: 18, borderRadius: 'var(--radius-lg)', border: '1.5px solid rgba(247,244,240,0.32)', background: 'rgba(247,244,240,0.10)', color: 'var(--color-text-inverse)', fontFamily: 'var(--font-body)', fontSize: 15, textAlign: 'center', outline: 'none' }} />
        <Button variant="accent" size="lg" iconRight={<I.ArrowRight size={18} />} onClick={onStart}>{resumed ? 'Resume' : story ? 'Begin the story' : 'Start module'}</Button>
        {onToggleStory && (
          <button onClick={onToggleStory} style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: '1px solid rgba(247,244,240,0.3)', borderRadius: 'var(--radius-full)', padding: '8px 16px', cursor: 'pointer', color: 'rgba(247,244,240,0.85)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13 }}>
            <I.Book size={15} stroke="var(--color-accent-light)" /> {story ? 'Story mode: on' : 'Read it as a story'}
          </button>
        )}
        <div style={{ marginTop: 'clamp(20px,4vh,38px)', fontSize: 12, color: 'rgba(247,244,240,0.5)', maxWidth: 480, lineHeight: 1.6 }}>
          {story ? sd.footnote : 'This module contains guided reflection and practice prompts. Find a quiet space — about 15–20 minutes is ideal. Your progress is saved on this device.'}
        </div>
      </TealStage>
    );
  }

  // ── OBJECTIVES ──
  function Objectives({ objectives, story, name }) {
    const hi = name ? name + ', ' : '';
    return (
      <div style={{ width: '100%', maxWidth: 760, margin: '0 auto' }}>
        <Eyebrow>{story ? 'Your first month' : 'Learning objectives'}</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(30px,4.5vw,46px)', lineHeight: 1.12, margin: '10px 0 6px' }}>{story ? 'What this story will teach you' : 'By the end, you will be able to…'}</h1>
        <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', margin: '0 0 28px', lineHeight: 1.6 }}>{story ? `Four things ${hi ? hi + 'you' : 'you'}’ll learn the hard way — as a brand-new manager.` : `Four capabilities ${hi ? hi + 'you' : 'you'}’ll build across the five modules ahead.`}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {objectives.map((o, i) => (
            <div key={i} className="lum-card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '18px 22px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: '50%', background: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 22 }}>{i + 1}</div>
              <div style={{ fontSize: 17, color: 'var(--color-text-primary)', lineHeight: 1.5, fontWeight: 500, paddingTop: 4 }}>{o}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── AGENDA ──
  function Agenda({ agenda, story }) {
    return (
      <div style={{ width: '100%', maxWidth: 880, margin: '0 auto' }}>
        <Eyebrow>{story ? 'The story' : 'Course agenda'}</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(30px,4.5vw,46px)', lineHeight: 1.12, margin: '10px 0 6px' }}>{story ? 'Five chapters' : 'Five movements toward understanding'}</h1>
        <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', margin: '0 0 28px', lineHeight: 1.6 }}>{story ? 'A week in your first management role. Read them in order — each one builds on the last.' : 'You’ll move through these in order. Each builds on the one before.'}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
          {agenda.map((m) => {
            const MIcon = I[m.icon] || I.Book;
            return (
              <div key={m.n} className="lum-card" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: 22, boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-lg)', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MIcon size={21} stroke="var(--color-primary)" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-text-muted)' }}>{m.n}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.2 }}>{m.title}</div>
                <div style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{m.blurb}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── SECTION DIVIDER ──
  function SectionDivider({ slide, onContinue, story }) {
    const isQuiz = slide.variant === 'quiz';
    const photo = slide.photo ? <PhotoLayer id={slide.photo.id} src={slide.photo.src} hint={slide.photo.hint} /> : null;
    return (
      <TealStage align="center" photo={photo}>
        <RippleMotif icon={slide.icon || sectionIcon(slide.section)} size={132} />
        <div style={{ color: 'var(--color-accent-light)', fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '22px 0 16px' }}>{slide.n}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--color-text-inverse)', fontSize: 'clamp(36px,6vw,62px)', lineHeight: 1.18, margin: 0 }}>{slide.title}</h1>
        {slide.blurb && <p style={{ color: 'rgba(247,244,240,0.74)', fontSize: 'clamp(16px,2vw,20px)', margin: '20px 0 0', maxWidth: 520, lineHeight: 1.55 }}>{slide.blurb}</p>}
        <div style={{ width: 'min(320px,70%)', margin: '28px 0 30px' }}><BreathWave height={26} animated /></div>
        <Button variant="accent" size="lg" iconRight={<I.ArrowRight size={18} />} onClick={onContinue}>{isQuiz ? 'Begin the check' : story ? 'Read the chapter' : 'Begin'}</Button>
      </TealStage>
    );
  }

  // ── CONTENT ──
  function ContentSlide({ slide }) {
    const SIcon = I[sectionIcon(slide.section)] || I.Heart;
    return (
      <div style={{ width: '100%', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: '50%', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: '1px solid var(--color-border)' }} />
            <SIcon size={21} stroke="var(--color-primary)" />
          </div>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1.1, margin: '0 0 2px' }}>{slide.title}</h1>
        {slide.sub && <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-primary-muted)', fontSize: 'clamp(19px,2.6vw,26px)', marginBottom: 22 }}>{slide.sub}</div>}
        {slide.body.map((p, i) => (
          <p key={i} style={{ fontSize: 'clamp(16px,1.6vw,18px)', lineHeight: 1.78, color: 'var(--color-text-secondary)', margin: '0 0 18px' }}>{p}</p>
        ))}
        {slide.pull && (
          <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: 20, margin: '26px 0 6px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3vw,30px)', color: 'var(--color-primary)', lineHeight: 1.3 }}>{slide.pull}</div>
          </div>
        )}
        <div style={{ marginTop: 28 }}><BreathWave height={18} opacity={0.28} /></div>
      </div>
    );
  }

  // ── SUMMARY ──
  function Summary({ summary, story }) {
    return (
      <div style={{ width: '100%', maxWidth: 760, margin: '0 auto' }}>
        <Eyebrow>{story ? 'One month in' : 'Key takeaways'}</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(30px,4.5vw,46px)', lineHeight: 1.12, margin: '10px 0 24px' }}>{story ? 'What you learned as a leader' : 'What to carry with you'}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {summary.map((s, i) => (
            <div key={i} className="lum-card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-lg)', padding: '16px 20px' }}>
              <I.Check size={20} stroke="var(--color-success)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── COMPLETE ──
  function Complete({ meta, score, onRestart, name, onName, onDownload }) {
    return (
      <TealStage>
        <div style={{ width: 84, height: 84, borderRadius: '50%', background: 'rgba(247,244,240,0.12)', border: '1px solid rgba(247,244,240,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
          <I.Award size={40} stroke="var(--color-accent-light)" />
        </div>
        <Badge tone="amber" dot>Module complete</Badge>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--color-text-inverse)', fontSize: 'clamp(36px,6vw,62px)', lineHeight: 1.14, margin: '16px 0 8px' }}>{name ? 'Beautifully done, ' + name + '.' : 'Beautifully done.'}</h1>
        <p style={{ color: 'rgba(247,244,240,0.78)', fontSize: 'clamp(16px,2vw,19px)', margin: 0, maxWidth: 520, lineHeight: 1.6 }}>
          You’ve completed <em style={{ fontStyle: 'italic', color: 'var(--color-accent-light)' }}>{meta.title}</em>{typeof score === 'number' ? ` with a knowledge-check score of ${score}%` : ''}. That consistency is exactly how empathy is built — one practised habit at a time.
        </p>
        <div style={{ width: 'min(340px,72%)', margin: '28px 0 22px' }}><BreathWave height={28} animated /></div>
        <div style={{ width: 'min(400px,90%)', marginBottom: 18 }}>
          <input value={name} onChange={(e) => onName(e.target.value)} placeholder="Enter your name for the certificate"
            style={{ width: '100%', padding: '13px 18px', borderRadius: 'var(--radius-lg)', border: '1.5px solid rgba(247,244,240,0.35)', background: 'rgba(247,244,240,0.10)', color: 'var(--color-text-inverse)', fontFamily: 'var(--font-body)', fontSize: 15, textAlign: 'center', outline: 'none' }} />
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="accent" size="lg" iconLeft={<I.Download size={17} />} onClick={onDownload}>Download certificate</Button>
          <Button variant="secondary" size="lg" onClick={onRestart} style={{ background: 'transparent', color: 'var(--color-text-inverse)', borderColor: 'rgba(247,244,240,0.4)' }}>Restart module</Button>
        </div>
      </TealStage>
    );
  }

  window.Slides = { Cover, Objectives, Agenda, SectionDivider, ContentSlide, Summary, Complete, Eyebrow, TOCSidebar };

  // ── TABLE OF CONTENTS SIDEBAR ──
  function TOCSidebar({ toc, slides, currentIndex, furthest, onJump, onClose, isDrawer }) {
    // compute first/last slide index for each group
    const groups = toc.map((g) => {
      const idxs = slides.map((s, i) => (g.sections.indexOf(s.section) > -1 ? i : -1)).filter((i) => i >= 0);
      return { ...g, first: Math.min(...idxs), last: Math.max(...idxs), count: idxs.length };
    });
    const totalReached = Math.max(furthest, currentIndex);
    const overall = Math.round((currentIndex / (slides.length - 1)) * 100);

    return (
      <div style={{ width: isDrawer ? 'min(300px, 84vw)' : 264, flexShrink: 0, height: '100%', background: 'var(--color-surface)', borderRight: '1px solid var(--color-border-light)', display: 'flex', flexDirection: 'column', boxShadow: isDrawer ? 'var(--shadow-xl)' : 'none' }}>
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={28} />
          {isDrawer && (
            <button onClick={onClose} aria-label="Close contents" style={{ width: 34, height: 34, borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <I.X size={16} stroke="var(--color-text-secondary)" />
            </button>
          )}
        </div>
        <div style={{ padding: '14px 16px 8px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>Course contents</div>
        </div>
        <nav style={{ flex: 1, overflowY: 'auto', padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {groups.map((g, gi) => {
            const GIcon = I[g.icon] || I.Book;
            const isCurrent = currentIndex >= g.first && currentIndex <= g.last;
            const isDone = totalReached > g.last;
            const reached = g.first <= totalReached;
            const locked = !reached;
            return (
              <button key={g.key} disabled={locked} onClick={() => { if (!locked) { onJump(g.first); if (onClose) onClose(); } }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', borderRadius: 'var(--radius-lg)', border: 'none', width: '100%', textAlign: 'left',
                  background: isCurrent ? 'var(--color-primary-subtle)' : 'transparent', cursor: locked ? 'not-allowed' : 'pointer',
                  opacity: locked ? 0.5 : 1, transition: 'background var(--transition-base)' }}>
                <div style={{ width: 30, height: 30, flexShrink: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: isDone ? 'var(--color-success-sub)' : isCurrent ? 'var(--color-primary)' : 'var(--color-surface-alt)' }}>
                  {isDone ? <I.Check size={15} stroke="var(--color-success)" />
                    : locked ? <I.Lock size={14} stroke="var(--color-text-muted)" />
                    : <GIcon size={15} stroke={isCurrent ? '#fff' : 'var(--color-primary)'} />}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{gi === 0 ? 'Start' : gi === groups.length - 1 ? 'Finish' : 'Section ' + gi}</div>
                  <div style={{ fontSize: 13.5, fontWeight: isCurrent ? 700 : 600, color: isCurrent ? 'var(--color-primary)' : 'var(--color-text-primary)', lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{g.label}</div>
                </div>
              </button>
            );
          })}
        </nav>
        <div style={{ padding: '14px 18px', borderTop: '1px solid var(--color-border-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Progress</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>{overall}%</span>
          </div>
          <div style={{ height: 6, background: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: overall + '%', background: 'linear-gradient(90deg, var(--color-primary-muted), var(--color-primary))', transition: 'width var(--transition-slow)' }} />
          </div>
        </div>
      </div>
    );
  }
})();
