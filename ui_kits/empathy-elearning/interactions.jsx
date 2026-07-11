// ════════════════════════════════════════════════════════════════
// Interactive slide types. Each is controlled: it reads its slice of
// progress and reports changes up so the engine can gate "Next" and
// persist. window.Interactions.*
// ════════════════════════════════════════════════════════════════
(function () {
  const { Button, Card, Badge, Alert, Textarea } = window.LuminaDesignSystem_f39716;
  const I = window.Icons;
  const Eyebrow = window.Slides.Eyebrow;

  // Brand-aligned confetti burst (teal / amber / sage / rose / success). Canvas, no library.
  function launchConfetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#2A5C6B', '#3A7A8C', '#7B9E9B', '#C4956A', '#E8C5A0', '#4A9B8A', '#C47878'];
    const W = window.innerWidth, H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999';
    canvas.width = W * dpr; canvas.height = H * dpr;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
    const cx = W / 2, cy = H * 0.32, N = 90, parts = [];
    for (let i = 0; i < N; i++) {
      const ang = (-Math.PI / 2) + (Math.random() - 0.5) * Math.PI * 1.15;
      const spd = 6 + Math.random() * 8;
      parts.push({ x: cx + (Math.random() - 0.5) * 140, y: cy, vx: Math.cos(ang) * spd * (0.6 + Math.random()), vy: Math.sin(ang) * spd - Math.random() * 3,
        size: 6 + Math.random() * 7, color: colors[(Math.random() * colors.length) | 0], rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.32, circle: Math.random() < 0.4 });
    }
    let t = 0; const max = 150;
    function frame() {
      t++; ctx.clearRect(0, 0, W, H);
      let alive = false;
      const alpha = Math.max(0, 1 - (t / max));
      for (const p of parts) {
        p.vy += 0.22; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        if (p.y < H + 24 && alpha > 0) alive = true;
        ctx.globalAlpha = alpha; ctx.fillStyle = p.color;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        if (p.circle) { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, 7); ctx.fill(); }
        else { ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66); }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      if (t < max && alive) requestAnimationFrame(frame); else canvas.remove();
    }
    requestAnimationFrame(frame);
  }

  function Heading({ eyebrow, title, intro }) {
    return (
      <div style={{ marginBottom: 22 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(28px,4vw,42px)', lineHeight: 1.14, margin: '10px 0 0' }}>{title}</h1>
        {intro && <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '10px 0 0', maxWidth: 640 }}>{intro}</p>}
      </div>
    );
  }

  function Hint({ done, children }) {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, fontSize: 13, fontWeight: 600,
        color: done ? 'var(--color-success)' : 'var(--color-text-muted)' }}>
        {done ? <I.CheckCircle size={16} stroke="var(--color-success)" /> : <I.Eye size={16} stroke="var(--color-text-muted)" />}
        {children}
      </div>
    );
  }

  // ── TABS ── (gate: all tabs viewed)
  function Tabs({ slide, viewed, onView, onNarrate }) {
    const [active, setActive] = React.useState(0);
    React.useEffect(() => { onView(0); }, []); // first tab counts as viewed for gating (no auto-narration)
    const v = viewed || {};
    const allSeen = slide.tabs.every((_, i) => v[i]);
    return (
      <div style={{ width: '100%', maxWidth: 720, margin: '0 auto' }}>
        <Heading eyebrow={slide.eyebrow} title={slide.title} />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
          {slide.tabs.map((t, i) => {
            const on = active === i;
            return (
              <button key={i} className="lum-anim-border" onClick={() => { setActive(i); onView(i); if (onNarrate) onNarrate(t.label + '. ' + t.body); }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 'var(--radius-full)',
                  border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: on ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: on ? '#fff' : 'var(--color-text-secondary)', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, transition: 'all var(--transition-base)' }}>
                {v[i] && !on && <I.Check size={14} stroke="var(--color-success)" />}
                {t.label}
              </button>
            );
          })}
        </div>
        <Card variant="tinted" className="lum-card" style={{ padding: 'clamp(22px,3vw,32px)', minHeight: 150 }}>
          <div style={{ display: 'flex', gap: 'clamp(16px,2.5vw,28px)', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-primary)', marginBottom: 10 }}>{slide.tabs[active].label}</div>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>{slide.tabs[active].body}</p>
            </div>
            {React.createElement('image-slot', {
              key: slide.id + '-img-' + active,
              id: slide.id + '-img-' + active,
              src: slide.tabs[active].img || undefined, shape: 'rounded', radius: '14', fit: 'cover',
              placeholder: 'Add an image for "' + slide.tabs[active].label + '"',
              style: { flex: '0 0 230px', width: 230, minHeight: 160, alignSelf: 'stretch', display: 'block' },
            })}
          </div>
        </Card>
        <Hint done={allSeen}>{allSeen ? 'All explored — continue below.' : `Open all ${slide.tabs.length} tabs to continue.`}</Hint>
      </div>
    );
  }

  // ── HOTSPOTS / LEARN MORE ── (gate: all opened)
  function Hotspots({ slide, opened, onOpen, onNarrate }) {
    const [layer, setLayer] = React.useState(null); // index of open detail layer
    const o = opened || {};
    const allOpen = slide.cards.every((_, i) => o[i]);
    return (
      <div style={{ width: '100%', maxWidth: 820, margin: '0 auto', position: 'relative' }}>
        <Heading eyebrow={slide.eyebrow} title={slide.title} intro={slide.intro} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 16 }}>
          {slide.cards.map((c, i) => {
            const seen = o[i];
            const CIcon = I[c.icon] || I.Eye;
            return (
              <button key={i} className="lum-card lum-anim-border" onClick={() => { setLayer(i); onOpen(i); if (onNarrate) onNarrate(c.label + '. ' + c.detail); }}
                style={{ textAlign: 'left', cursor: 'pointer', background: 'var(--color-surface)',
                  border: `1.5px solid ${seen ? 'var(--color-primary-muted)' : 'var(--color-border-light)'}`,
                  borderRadius: 'var(--radius-xl)', padding: 22, boxShadow: 'var(--shadow-sm)',
                  display: 'flex', flexDirection: 'column', gap: 12, transition: 'all var(--transition-base)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: seen ? 'var(--color-primary)' : 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--transition-base)' }}>
                    <CIcon size={22} stroke={seen ? '#fff' : 'var(--color-primary)'} />
                  </div>
                  {seen ? <I.Check size={18} stroke="var(--color-success)" /> : <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.04em' }}>LEARN MORE</span>}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.2 }}>{c.label}</div>
              </button>
            );
          })}
        </div>
        <Hint done={allOpen}>{allOpen ? 'All explored — continue below.' : `Open all ${slide.cards.length} cards to continue.`}</Hint>

        {/* Detail layer */}
        {layer !== null && (
          <div onClick={() => { setLayer(null); if (onNarrate) onNarrate(''); }} style={{ position: 'absolute', inset: 0, zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,46,53,0.32)', backdropFilter: 'blur(3px)', borderRadius: 'var(--radius-lg)' }} />
            <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', background: 'var(--color-surface)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', padding: 'clamp(24px,3vw,34px)', maxWidth: 460, width: '90%', margin: 20 }}>
              <button onClick={() => { setLayer(null); if (onNarrate) onNarrate(''); }} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16, width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--color-border)', background: 'var(--color-surface)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <I.X size={16} stroke="var(--color-text-secondary)" />
              </button>
              {(() => { const c = slide.cards[layer]; const CIcon = I[c.icon] || I.Eye; return (
                <>
                  <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-lg)', background: 'var(--color-accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <CIcon size={26} stroke="var(--color-accent)" />
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 10 }}>{c.label}</div>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>{c.detail}</p>
                </>
              ); })()}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── DRAG & DROP ── (tap-to-assign + native drag; gate: submitted)
  function DragDrop({ slide, state, onChange }) {
    const st = state || { placements: {}, submitted: false };
    const placements = st.placements || {};
    const [selected, setSelected] = React.useState(null);
    const submitted = st.submitted;

    const setPlace = (itemId, catId) => {
      if (submitted) return;
      onChange({ ...st, placements: { ...placements, [itemId]: catId } });
      setSelected(null);
    };
    const poolItems = slide.items.filter((it) => !placements[it.id]);
    const allPlaced = slide.items.every((it) => placements[it.id]);
    const correctCount = slide.items.filter((it) => placements[it.id] === it.cat).length;
    const allCorrect = correctCount === slide.items.length;

    const Chip = ({ it, inPool }) => {
      const isSel = selected === it.id;
      const status = submitted ? (placements[it.id] === it.cat ? 'right' : 'wrong') : null;
      let border = isSel ? 'var(--color-primary)' : 'var(--color-border)';
      let bg = 'var(--color-surface)';
      if (status === 'right') { border = 'var(--color-success)'; bg = 'var(--color-success-sub)'; }
      if (status === 'wrong') { border = 'var(--color-warm-rose)'; bg = 'var(--color-warm-rose-sub)'; }
      return (
        <div draggable={!submitted}
          onDragStart={(e) => { e.dataTransfer.setData('text/plain', it.id); setSelected(it.id); }}
          onClick={() => { if (submitted) return; setSelected(isSel ? null : it.id); }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 'var(--radius-lg)',
            border: `1.5px solid ${border}`, background: bg, cursor: submitted ? 'default' : 'pointer',
            fontSize: 14.5, color: 'var(--color-text-primary)', lineHeight: 1.4, boxShadow: isSel ? '0 0 0 3px var(--focus-ring)' : 'none',
            transition: 'all var(--transition-base)' }}>
          {!submitted && <I.Reflect size={15} stroke="var(--color-text-muted)" style={{ flexShrink: 0 }} />}
          {status === 'right' && <I.Check size={16} stroke="var(--color-success)" style={{ flexShrink: 0 }} />}
          {status === 'wrong' && <I.X size={16} stroke="var(--color-warm-rose)" style={{ flexShrink: 0 }} />}
          <span>{it.text}</span>
        </div>
      );
    };

    const Column = ({ cat }) => {
      const items = slide.items.filter((it) => placements[it.id] === cat.id);
      return (
        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const id = e.dataTransfer.getData('text/plain'); if (id) setPlace(id, cat.id); }}
          onClick={() => { if (selected) setPlace(selected, cat.id); }}
          style={{ flex: 1, minWidth: 220, background: 'var(--color-surface-alt)', border: `1.5px dashed ${selected ? 'var(--color-primary-muted)' : 'var(--color-border)'}`,
            borderRadius: 'var(--radius-xl)', padding: 16, minHeight: 150, transition: 'border-color var(--transition-base)', cursor: selected ? 'pointer' : 'default' }}>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            {cat.id === 'persp' ? <I.Eye size={15} stroke="var(--color-primary)" /> : <I.Dialogue size={15} stroke="var(--color-warm-rose)" />}
            {cat.label}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {items.length === 0 && <div style={{ fontSize: 13, color: 'var(--color-text-muted)', fontStyle: 'italic', padding: '8px 2px' }}>{selected ? 'Tap here to place' : 'Drop or tap to place'}</div>}
            {items.map((it) => <Chip key={it.id} it={it} inPool={false} />)}
          </div>
        </div>
      );
    };

    return (
      <div style={{ width: '100%', maxWidth: 860, margin: '0 auto' }}>
        <Heading eyebrow={slide.eyebrow} title={slide.title} intro={slide.intro} />
        {/* Pool */}
        <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const id = e.dataTransfer.getData('text/plain'); if (id) setPlace(id, null); }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, padding: poolItems.length ? 14 : 0, marginBottom: 16, borderRadius: 'var(--radius-lg)', background: poolItems.length ? 'rgba(42,92,107,0.04)' : 'transparent', minHeight: poolItems.length ? 0 : 0 }}>
          {poolItems.map((it) => <Chip key={it.id} it={it} inPool />)}
        </div>
        {/* Columns */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {slide.cats.map((cat) => <Column key={cat.id} cat={cat} />)}
        </div>

        {submitted ? (
          <div style={{ marginTop: 18 }}>
            <Alert variant={allCorrect ? 'success' : 'warning'} title={allCorrect ? 'Great job!' : `${correctCount} of ${slide.items.length} correct`}>{slide.feedback}</Alert>
          </div>
        ) : (
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Button variant="primary" disabled={!allPlaced} onClick={() => onChange({ ...st, submitted: true })}>Check answers</Button>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 600 }}>{allPlaced ? 'Ready to check.' : 'Place all four to check.'}</span>
          </div>
        )}
      </div>
    );
  }

  // ── REFLECTION ── (not gated)
  function Reflect({ slide, state, onChange }) {
    const st = state || { text: '', saved: false };
    return (
      <div style={{ width: '100%', maxWidth: 680, margin: '0 auto' }}>
        <Heading eyebrow={slide.eyebrow} title={slide.title} />
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-primary)', fontSize: 'clamp(20px,2.8vw,26px)', lineHeight: 1.45, margin: '0 0 20px' }}>"{slide.prompt}"</p>
        <Textarea value={st.text} rows={6} onChange={(e) => onChange({ text: e.target.value, saved: false })}
          placeholder="There are no wrong answers — write freely." hint="Your reflections are private and saved only on this device." />
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Button variant="primary" disabled={!st.text.trim()} onClick={() => onChange({ ...st, saved: true })}>Save reflection</Button>
          {st.saved && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 600, color: 'var(--color-success)' }}><I.CheckCircle size={16} stroke="var(--color-success)" /> Saved to your private journal.</span>}
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Reflections are optional — you can continue anytime.</span>
        </div>
      </div>
    );
  }

  // ── QUESTION ── (gate: submitted)
  function Question({ slide, state, onChange }) {
    const q = slide.data;
    const st = state || { choice: null, submitted: false };
    const submitted = st.submitted;
    const correct = st.choice === q.answer;
    return (
      <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Badge tone="teal" dot>Question {slide.index + 1} of {slide.total}</Badge>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(24px,3.4vw,36px)', lineHeight: 1.25, margin: '0 0 22px' }}>{q.q}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.options.map((opt, i) => {
            const isSel = st.choice === i;
            const reveal = submitted;
            const right = i === q.answer;
            let border = 'var(--color-border)', bg = 'var(--color-surface)';
            if (reveal && right) { border = 'var(--color-success)'; bg = 'var(--color-success-sub)'; }
            else if (reveal && isSel && !right) { border = 'var(--color-warm-rose)'; bg = 'var(--color-warm-rose-sub)'; }
            else if (isSel) { border = 'var(--color-primary)'; bg = 'var(--color-primary-subtle)'; }
            return (
              <button key={i} className="lum-card" disabled={submitted} onClick={() => onChange({ ...st, choice: i })}
                style={{ display: 'flex', alignItems: 'center', gap: 13, textAlign: 'left', width: '100%', padding: '15px 17px',
                  borderRadius: 'var(--radius-lg)', border: `1.5px solid ${border}`, background: bg, cursor: submitted ? 'default' : 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--color-text-primary)', lineHeight: 1.4, transition: 'all var(--transition-base)' }}>
                <span style={{ width: 22, height: 22, flexShrink: 0, borderRadius: '50%', border: `2px solid ${isSel ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: isSel ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {reveal && right ? <I.Check size={13} stroke="#fff" /> : isSel ? <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} /> : null}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
        {submitted ? (
          <div style={{ marginTop: 18 }}>
            <Alert variant={correct ? 'success' : 'error'} title={correct ? 'Great job!' : 'Not quite'}>{correct ? q.right : q.wrong}</Alert>
          </div>
        ) : (
          <div style={{ marginTop: 18 }}>
            <Button variant="primary" disabled={st.choice === null} onClick={() => onChange({ ...st, submitted: true })}>Submit answer</Button>
          </div>
        )}
      </div>
    );
  }

  // ── RESULTS ── (gate: pass)
  function Results({ slide, correct, total, onRetry, name }) {
    const score = Math.round((correct / total) * 100);
    const passed = score >= slide.passing;
    return (
      <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
          <div style={{ width: 78, height: 78, borderRadius: '50%', background: passed ? 'var(--color-success-sub)' : 'var(--color-warm-rose-sub)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {passed ? <I.Award size={38} stroke="var(--color-success)" /> : <I.RotateCcw size={34} stroke="var(--color-warm-rose)" />}
          </div>
        </div>
        <Badge tone={passed ? 'success' : 'rose'} dot>{passed ? 'Passed' : 'Almost there'}</Badge>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(30px,5vw,48px)', lineHeight: 1.1, margin: '14px 0 6px' }}>{passed ? (name ? 'Congratulations, ' + name + '!' : 'Congratulations!') : 'So close.'}</h1>
        <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: '0 auto 24px', maxWidth: 420 }}>
          {passed
            ? 'You\u2019ve demonstrated a solid understanding of the key concepts. Continue to wrap up the module.'
            : `You answered ${correct} of ${total} correctly. A score of ${slide.passing}% is needed — review and try again whenever you\u2019re ready.`}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 26 }}>
          <div className="lum-card">
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 400, color: passed ? 'var(--color-success)' : 'var(--color-warm-rose)', lineHeight: 1 }}>{score}%</div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginTop: 4 }}>Your score</div>
          </div>
          <div className="lum-card" style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: 40 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 400, color: 'var(--color-text-muted)', lineHeight: 1 }}>{slide.passing}%</div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginTop: 4 }}>Passing</div>
          </div>
        </div>
        {!passed && <Button variant="primary" size="lg" iconLeft={<I.RotateCcw size={17} />} onClick={onRetry}>Try again</Button>}
        {passed && <div style={{ fontSize: 14, color: 'var(--color-text-muted)', fontWeight: 600 }}>Continue below to finish →</div>}
      </div>
    );
  }

  // ── SCENARIO ── apply an empathy device to a situation (gate: submitted)
  function Scenario({ slide, state, onChange, onNarrate }) {
    const st = state || { choice: null, submitted: false };
    const submitted = st.submitted;
    const chosen = st.choice;
    const correct = chosen !== null && slide.options[chosen] && slide.options[chosen].correct;
    return (
      <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
        <div style={{ marginBottom: 14 }}><Badge tone="amber" dot>Apply the device · {slide.device}</Badge></div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(26px,3.6vw,38px)', lineHeight: 1.18, margin: '0 0 18px' }}>{slide.title}</h1>
        <div className="lum-card" style={{ display: 'flex', gap: 14, background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '20px 22px', marginBottom: 22 }}>
          <div style={{ width: 38, height: 38, flexShrink: 0, borderRadius: '50%', background: 'var(--color-accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <I.Dialogue size={19} stroke="var(--color-accent)" />
          </div>
          <div>
            <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{slide.scenario}</p>
            {slide.quote && <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(20px,2.6vw,25px)', color: 'var(--color-primary)', lineHeight: 1.4, margin: '8px 0 0' }}>{slide.quote}</p>}
          </div>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 12 }}>{slide.question}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {slide.options.map((o, i) => {
            const isSel = chosen === i;
            let border = 'var(--color-border)', bg = 'var(--color-surface)';
            if (submitted && o.correct) { border = 'var(--color-success)'; bg = 'var(--color-success-sub)'; }
            else if (submitted && isSel && !o.correct) { border = 'var(--color-warm-rose)'; bg = 'var(--color-warm-rose-sub)'; }
            else if (isSel) { border = 'var(--color-primary)'; bg = 'var(--color-primary-subtle)'; }
            return (
              <button key={i} className="lum-card" disabled={submitted} onClick={() => onChange({ ...st, choice: i })}
                style={{ display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'flex-start', textAlign: 'left', width: '100%', padding: '14px 16px', borderRadius: 'var(--radius-lg)', border: `1.5px solid ${border}`, background: bg, cursor: submitted ? 'default' : 'pointer', fontFamily: 'var(--font-body)', transition: 'all var(--transition-base)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 20, height: 20, flexShrink: 0, borderRadius: '50%', border: `2px solid ${isSel ? 'var(--color-primary)' : 'var(--color-border)'}`, background: isSel ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {submitted && o.correct ? <I.Check size={12} stroke="#fff" /> : isSel ? <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} /> : null}
                  </span>
                  <span style={{ fontSize: 15.5, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>{o.text}</span>
                </div>
                {submitted && (
                  <span style={{ marginLeft: 32, fontSize: 12, fontWeight: 700, letterSpacing: '0.02em', color: o.correct ? 'var(--color-success)' : 'var(--color-text-muted)' }}>{o.correct ? '✓ ' : ''}Device: {o.device}</span>
                )}
              </button>
            );
          })}
        </div>
        {submitted ? (
          <div style={{ marginTop: 18 }}>
            <Alert variant={correct ? 'success' : 'error'} title={correct ? 'Well applied.' : 'Reconsider the device'}>{slide.feedback}</Alert>
          </div>
        ) : (
          <div style={{ marginTop: 18 }}>
            <Button variant="primary" disabled={chosen === null} onClick={() => {
              if (onNarrate) onNarrate(''); // stop narration on submit
              const isRight = slide.options[chosen] && slide.options[chosen].correct;
              onChange({ ...st, submitted: true });
              if (isRight) launchConfetti();
            }}>Check response</Button>
          </div>
        )}
      </div>
    );
  }

  window.Interactions = { Tabs, Hotspots, DragDrop, Reflect, Scenario, Question, Results };
})();
