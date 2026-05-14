// wireframes-ab.jsx — Wireframe A (Editorial Magazine) + B (Atelier / Heritage)

const W = 1180; // shared artboard width

// ============================================================
// WIREFRAME A — EDITORIAL MAGAZINE
// Full-bleed photo hero · asymmetric category collage · cinematic
// ============================================================
function WireframeA() {
  const w = W;
  return (
    <div style={{ width: w, background: SK.paper, fontFamily: 'Kalam, cursive', color: SK.ink, position: 'relative' }}>
      {/* margin notes that bleed outside the page */}
      <Note size={12} rotate={-3} style={{ position: 'absolute', left: -180, top: 22, width: 160, color: SK.pencil }}>
        Sticky top bar, very thin. Logo small here — the hero photo carries the brand feeling.
      </Note>

      {/* NAV */}
      <NavStrip variant="split" />

      {/* HERO — full-bleed photo with overlay headline */}
      <SectionDivider label="01 / hero" />
      <div style={{ position: 'relative', padding: '0 24px 32px' }}>
        <ImgPlaceholder w={w - 48} h={720} label="A baby in linen christening gown · soft natural light · held in mother's arms · 3:2 hero" sublabel="lifestyle · cinematic · brand image #1" density={20} />
        {/* Overlay headline */}
        <div style={{ position: 'absolute', left: 80, bottom: 90, color: SK.ink }}>
          <Mono size={11} color={SK.pencil}>EST. PORTO</Mono>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 96, lineHeight: 0.95, marginTop: 8, letterSpacing: '-0.01em', mixBlendMode: 'difference', color: '#fff' }}>
            Cada peça,<br />uma história.
          </div>
          <Note size={16} style={{ marginTop: 14, maxWidth: 460, color: '#fff', mixBlendMode: 'difference' }}>
            Christening, communion & ceremony · handmade in Portugal · est. by four sisters
          </Note>
          <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
            <PillBtn label="Trade enquiries →" w={170} fill={SK.charcoal} />
            <PillBtn label="See the collection" w={170} fill="transparent" color={SK.ink} style={{ border: `1.4px solid ${SK.ink}` }} />
          </div>
        </div>
        <Note size={12} rotate={2} style={{ position: 'absolute', right: -150, top: 200, width: 130, color: SK.pencil }}>
          B2B-first CTA · still welcomes individuals
        </Note>
      </div>

      {/* ABOUT */}
      <SectionDivider label="02 / about · our story" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, padding: '40px 60px 60px' }}>
        <div>
          <Mono size={11}>QUEM SOMOS</Mono>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 56, lineHeight: 1.0, marginTop: 12 }}>
            Four sisters,<br />one atelier.
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 19, lineHeight: 1.55, marginTop: 22, color: SK.ink, maxWidth: 480 }}>
            From a small workshop in Porto, we sew christening gowns, communion dresses, and ceremony pieces the way our grandmothers taught us — by hand, point by point. Every cut of lace, every silk button, every embroidered detail is chosen for the day a family will remember.
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 16, fontStyle: 'italic', lineHeight: 1.5, marginTop: 16, color: SK.pencil, maxWidth: 460 }}>
            Two collections a year — Summer and Winter — each made in small runs, available to stockists across Europe.
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <ImgPlaceholder w={420} h={520} label="four sisters · candid portrait in the atelier" sublabel="brand image #2 · documentary" />
          <Note size={12} rotate={4} style={{ position: 'absolute', right: -10, bottom: -28, color: SK.pencil }}>
            A real founders' portrait — not stock. Worth the photo shoot.
          </Note>
        </div>
      </div>

      {/* PROCESS */}
      <SectionDivider label="03 / our process" />
      <div style={{ padding: '32px 60px 50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 40 }}>Made, point by point.</div>
          <Mono size={11}>04 STEPS · HOVER FOR DETAIL</Mono>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            ['01', 'Cloth + lace', 'Linens, silks, French laces — chosen for hand, not for price.'],
            ['02', 'Pattern', 'Cut to size, every season, in the atelier upstairs.'],
            ['03', 'Hand-sewn', 'Stitched by our small team — no production line.'],
            ['04', 'Finished', 'Pearl buttons, hand-rolled hems, ribbon-tied boxes.'],
          ].map(([n, t, d]) => (
            <div key={n}>
              <ImgPlaceholder w={232} h={232} label={t} density={14} />
              <Mono size={10} style={{ marginTop: 12 }}>STEP {n}</Mono>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 22, marginTop: 4 }}>{t}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 14, color: SK.pencil, marginTop: 4, lineHeight: 1.45 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES — asymmetric magazine layout */}
      <SectionDivider label="04 / collections" />
      <div style={{ padding: '32px 60px 60px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <Mono size={11}>EXPLORE</Mono>
            <div style={{ fontFamily: '"Italiana", serif', fontSize: 56, lineHeight: 1, marginTop: 8 }}>The collections</div>
          </div>
          <Note size={13} style={{ maxWidth: 240, color: SK.pencil }}>
            Asymmetric on purpose — "Girls" leads (largest category) with Boys + Accessories stacked.
          </Note>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24 }}>
          <div style={{ position: 'relative' }}>
            <ImgPlaceholder w={620} h={760} label="girl in communion dress · garden · soft light" />
            <div style={{ position: 'absolute', left: 22, bottom: 22, color: '#fff', mixBlendMode: 'difference' }}>
              <Mono size={11}>01 · MENINA</Mono>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 56, lineHeight: 1 }}>Girls</div>
              <Note size={13} style={{ color: '#fff', mixBlendMode: 'difference', marginTop: 8 }}>Christening gowns, communion dresses, ceremony coats →</Note>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ position: 'relative' }}>
              <ImgPlaceholder w={380} h={360} label="boy in linen suit · christening" />
              <div style={{ position: 'absolute', left: 18, bottom: 14, color: '#fff', mixBlendMode: 'difference' }}>
                <Mono size={10}>02 · MENINO</Mono>
                <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, lineHeight: 1 }}>Boys</div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <ImgPlaceholder w={380} h={376} label="hands holding a hair ribbon · close-up still life" />
              <div style={{ position: 'absolute', left: 18, bottom: 14, color: '#fff', mixBlendMode: 'difference' }}>
                <Mono size={10}>03 · ACESSÓRIOS</Mono>
                <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, lineHeight: 1 }}>Accessories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STOCKISTS */}
      <SectionDivider label="05 / find us in store" />
      <div style={{ padding: '32px 60px 50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
        <div>
          <Mono size={11}>VISIT THE ATELIER</Mono>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 44, lineHeight: 1.0, marginTop: 10 }}>
            Rua João das Regras 95<br />4000-292 Porto
          </div>
          <div style={{ marginTop: 20, fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.7, color: SK.ink }}>
            <div>geral@pontoporponto.pt</div>
            <div>+351 22 208 4002</div>
          </div>
          <Note size={13} style={{ marginTop: 22, color: SK.pencil, maxWidth: 380 }}>
            (Add a small list of stockist boutiques here once we have the list — city · store name · IG link.)
          </Note>
        </div>
        <ImgPlaceholder w={520} h={300} label="map sketch · Porto · pin at Rua João das Regras 95" sublabel="static map · or Mapbox" />
      </div>

      {/* CONTACT */}
      <SectionDivider label="06 / contact" />
      <div style={{ padding: '32px 60px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <Mono size={11}>SAY HELLO</Mono>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 56, lineHeight: 1, marginTop: 10 }}>Get in touch.</div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 18, lineHeight: 1.55, marginTop: 18, color: SK.ink, maxWidth: 420 }}>
            Stockist enquiries, press, or just hello — we read every message.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <FormField label="Name" w={480} />
          <FormField label="Email" w={480} />
          <FormField label="Message" w={480} h={140} />
          <PillBtn label="Send  →" w={140} style={{ marginTop: 6 }} />
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: SK.charcoal, color: SK.paper, padding: '40px 60px 32px', marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <Handwriting size={42} color={SK.paper}>Ponto por Ponto</Handwriting>
            <Mono size={10} color={SK.paper} style={{ color: 'rgba(255,255,255,0.6)', marginTop: 14 }}>
              HANDMADE IN PORTUGAL · ©2026
            </Mono>
          </div>
          <div style={{ display: 'flex', gap: 18, color: SK.paper, fontFamily: 'Kalam, cursive', fontSize: 14 }}>
            <div>Instagram</div><div>Facebook</div><div>Pinterest</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['PT', 'EN', 'ES', 'IT'].map(c => <Flag key={c} code={c} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// WIREFRAME B — ATELIER / HERITAGE (centered, traditional)
// Centered logo, formal symmetry, library-quiet, equal-weight categories
// ============================================================
function WireframeB() {
  const w = W;
  return (
    <div style={{ width: w, background: SK.paper, fontFamily: 'Kalam, cursive', color: SK.ink, position: 'relative' }}>
      <Note size={12} rotate={-3} style={{ position: 'absolute', left: -190, top: 60, width: 170, color: SK.pencil }}>
        Symmetric, formal, heritage-leaning. Logo big & centered — like a museum poster.
      </Note>

      {/* MASTHEAD */}
      <div style={{ position: 'relative', padding: '28px 40px 0' }}>
        <div style={{ position: 'absolute', top: 22, left: 36 }}>
          <Mono size={10}>EST. PORTO · 100% MADE IN PORTUGAL</Mono>
        </div>
        <div style={{ position: 'absolute', top: 22, right: 36, display: 'flex', gap: 6 }}>
          {['PT', 'EN', 'ES', 'IT'].map(c => <Flag key={c} code={c} />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, paddingTop: 42 }}>
          <Handwriting size={88} color={SK.blue}>Ponto por Ponto</Handwriting>
          <div style={{ height: 1, width: 220, background: SK.faint }} />
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 18, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            Cerimónia · Batizado · Comunhão
          </div>
          <div style={{ display: 'flex', gap: 30, marginTop: 14 }}>
            {['Home', 'About', 'Process', 'Collections', 'Stockists', 'Contact'].map(i =>
              <Mono key={i} size={11}>{i}</Mono>
            )}
          </div>
        </div>
      </div>

      {/* HERO — centered single image with framed presentation */}
      <SectionDivider label="01 / opening" />
      <div style={{ padding: '20px 60px 50px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 22 }}>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 72, lineHeight: 1.0 }}>
            For the days that<br />are remembered.
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 19, lineHeight: 1.55, marginTop: 18, color: SK.pencil, maxWidth: 540, margin: '18px auto 0', fontStyle: 'italic' }}>
            Christening, communion & ceremony pieces, hand-sewn in our atelier in Porto.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ImgPlaceholder w={780} h={560} label="centered hero · child in ceremony · symmetric composition · framed" sublabel="brand image #1" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 22 }}>
          <PillBtn label="See collections" w={160} />
          <PillBtn label="Trade access →" w={160} fill="transparent" color={SK.ink} style={{ border: `1.4px solid ${SK.ink}` }} />
        </div>
      </div>

      {/* ABOUT — two perfectly equal columns */}
      <SectionDivider label="02 / about" />
      <div style={{ padding: '36px 100px 50px', textAlign: 'center' }}>
        <Mono size={11}>A NOSSA HISTÓRIA</Mono>
        <div style={{ fontFamily: '"Italiana", serif', fontSize: 48, lineHeight: 1.05, marginTop: 10 }}>
          Four sisters, in one atelier.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 32, textAlign: 'left' }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.7, color: SK.ink }}>
            Somos quatro irmãs — born to a family of seamstresses in Porto. From a small workshop overlooking Rua João das Regras, we make christening gowns, communion dresses, and ceremony pieces the way our grandmothers taught us: slowly, by hand, ponto por ponto.
          </div>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.7, color: SK.ink }}>
            Two collections each year — <em>Verão</em> and <em>Inverno</em> — in small runs, made available to a curated list of stockists across Europe. Each piece carries a hand-rolled hem, a pearl button, and a name embroidered inside the lining.
          </div>
        </div>
      </div>

      {/* CATEGORIES — 3 equal columns */}
      <SectionDivider label="03 / collections" />
      <div style={{ padding: '24px 60px 50px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Mono size={11}>BROWSE</Mono>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 48, marginTop: 8 }}>The collections</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            ['MENINA', 'Girls', 'Christening gowns, communion dresses, coats.', 'communion dress on form · soft natural light'],
            ['MENINO', 'Boys', 'Linen suits, christening shirts, blazers.', 'boy in linen suit · seated · candid'],
            ['ACESSÓRIOS', 'Accessories', 'Bonnets, ribbons, shoes, blankets.', 'still-life flat lay of accessories · top-down'],
          ].map(([k, t, d, img]) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <ImgPlaceholder w={300} h={400} label={img} density={14} />
              <Mono size={10} style={{ marginTop: 16 }}>{k}</Mono>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 32, marginTop: 6 }}>{t}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 14, fontStyle: 'italic', color: SK.pencil, marginTop: 8, maxWidth: 260 }}>{d}</div>
              <div style={{ marginTop: 12, fontFamily: 'Kalam, cursive', fontSize: 14, borderBottom: `1.2px solid ${SK.ink}`, paddingBottom: 1 }}>See pieces →</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS — horizontal timeline */}
      <SectionDivider label="04 / process" />
      <div style={{ padding: '32px 60px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <Mono size={11}>O NOSSO PROCESSO</Mono>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 40, marginTop: 8 }}>Point by point.</div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '40px 20px 0' }}>
          <div style={{ position: 'absolute', left: 60, right: 60, top: 60, height: 1, borderTop: `1.5px dashed ${SK.faint}` }} />
          {[
            ['Cloth', 'Linen, silk, French lace.'],
            ['Cut', 'By the same hands, every season.'],
            ['Sew', 'Ponto por ponto — no machine line.'],
            ['Finish', 'Pearl buttons, hand-rolled hems.'],
          ].map(([t, d], i) => (
            <div key={t} style={{ position: 'relative', width: 200, textAlign: 'center' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 20, background: SK.cream,
                border: `1.4px solid ${SK.ink}`, margin: '0 auto',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Italiana", serif', fontSize: 18,
              }}>{i + 1}</div>
              <div style={{ fontFamily: '"Italiana", serif', fontSize: 22, marginTop: 12 }}>{t}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 14, fontStyle: 'italic', color: SK.pencil, marginTop: 6 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* VISIT */}
      <SectionDivider label="05 / visit" />
      <div style={{ padding: '32px 60px 60px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 40, alignItems: 'center' }}>
        <div>
          <Mono size={11}>VISIT THE ATELIER</Mono>
          <div style={{ fontFamily: '"Italiana", serif', fontSize: 32, lineHeight: 1.15, marginTop: 12 }}>
            Rua João das Regras 95<br />4000-292 Porto<br />Portugal
          </div>
          <div style={{ height: 1, width: 80, background: SK.faint, margin: '20px 0' }} />
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, lineHeight: 1.7 }}>
            geral@pontoporponto.pt<br />+351 22 208 4002
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 16, fontFamily: 'Kalam, cursive', fontSize: 14 }}>
            <div style={{ borderBottom: `1.2px solid ${SK.ink}` }}>Instagram</div>
            <div style={{ borderBottom: `1.2px solid ${SK.ink}` }}>Facebook</div>
          </div>
        </div>
        <ImgPlaceholder w={600} h={340} label="map sketch · Porto · pin · classic style with serifs" />
      </div>

      {/* CONTACT — centered narrow */}
      <SectionDivider label="06 / contact" />
      <div style={{ padding: '32px 60px 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Mono size={11}>SAY HELLO</Mono>
        <div style={{ fontFamily: '"Italiana", serif', fontSize: 48, marginTop: 10 }}>Write to us.</div>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, color: SK.pencil, marginTop: 12, maxWidth: 440, fontStyle: 'italic' }}>
          For stockist enquiries, press, custom orders, or simply to say bom dia.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, alignItems: 'center' }}>
          <FormField label="Name" w={520} />
          <FormField label="Email" w={520} />
          <FormField label="Message" w={520} h={140} />
          <PillBtn label="Send  →" w={140} style={{ marginTop: 8 }} />
        </div>
      </div>

      {/* FOOTER — light, minimal, ribbon-thin */}
      <div style={{ borderTop: `1px solid ${SK.faint}`, padding: '28px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Mono size={10}>©2026 PONTO POR PONTO · PORTO</Mono>
        <Handwriting size={28} color={SK.blue}>Ponto por Ponto</Handwriting>
        <Mono size={10}>HANDMADE · PT</Mono>
      </div>
    </div>
  );
}

Object.assign(window, { WireframeA, WireframeB });
