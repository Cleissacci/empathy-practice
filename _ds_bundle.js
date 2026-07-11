/* @ds-bundle: {"format":3,"namespace":"LuminaDesignSystem_f39716","components":[{"name":"BreathWave","sourcePath":"components/brand/BreathWave.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"}],"sourceHashes":{"components/brand/BreathWave.jsx":"1a1f666b24d1","components/brand/Logo.jsx":"4c7bcbfc70ea","components/core/Avatar.jsx":"b884456ec4d1","components/core/Badge.jsx":"688773483319","components/core/Button.jsx":"a9c2cffaefb8","components/core/Card.jsx":"1eb4e88130a8","components/core/IconButton.jsx":"f21360c4d6f2","components/core/StatCard.jsx":"011a4fd72e8a","components/feedback/Alert.jsx":"151bd1d0fa34","components/feedback/ProgressBar.jsx":"5adb182cb4d6","components/forms/Checkbox.jsx":"3c5695857b14","components/forms/Input.jsx":"0bbcd7ba52e2","components/forms/Radio.jsx":"e39ce68b9d5e","components/forms/Select.jsx":"c19988bd933c","components/forms/Textarea.jsx":"ea4a27c61b67","components/forms/Toggle.jsx":"544d8bce4237","ui_kits/empathy-course/DashboardScreen.jsx":"d7aecb97c784","ui_kits/empathy-course/LessonPlayer.jsx":"3faf7674d44b","ui_kits/empathy-course/LoginScreen.jsx":"d84f90abaa82","ui_kits/empathy-course/Sidebar.jsx":"76a77c313015","ui_kits/empathy-course/data.js":"e65d7cf99b44","ui_kits/empathy-course/icons.jsx":"a9df8209b4de","ui_kits/empathy-course/screens.jsx":"69697efd7351","ui_kits/empathy-course/store.js":"abaea23b2c05","ui_kits/empathy-elearning/course-data.js":"7ad3f9186c75","ui_kits/empathy-elearning/icons.jsx":"7c8c6bbb708d","ui_kits/empathy-elearning/image-slot.js":"11d2e4e983b0","ui_kits/empathy-elearning/interactions.jsx":"ca25e963b06b","ui_kits/empathy-elearning/roleplay.jsx":"bbc2b491ae45","ui_kits/empathy-elearning/scripted-engine.js":"9c952494c467","ui_kits/empathy-elearning/slides.jsx":"96984d98a289"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LuminaDesignSystem_f39716 = window.LuminaDesignSystem_f39716 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BreathWave.jsx
try { (() => {
/**
 * Lumina breath wave — the signature motif. A double sine wave evoking
 * mindful breathing and empathic exchange. Use as dividers, loaders, accents.
 */
function BreathWave({
  width = '100%',
  height = 40,
  animated = false,
  opacity = 1,
  style = {}
}) {
  const dur = '4s';
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 80",
    width: width,
    height: height,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    style: {
      display: 'block',
      opacity,
      ...style
    }
  }, animated && /*#__PURE__*/React.createElement("style", null, `@media (prefers-reduced-motion: no-preference){
          .lumina-wave-a{animation:luminaBreath ${dur} ease-in-out infinite}
          .lumina-wave-b{animation:luminaBreath ${dur} ease-in-out infinite reverse}
          @keyframes luminaBreath{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.55)}}
        }`), /*#__PURE__*/React.createElement("g", {
    className: animated ? 'lumina-wave-a' : undefined,
    style: {
      transformOrigin: 'center',
      transformBox: 'fill-box'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 40 C20 40, 30 15, 60 40 C90 65, 100 40, 130 40 C160 40, 170 15, 200 40 C230 65, 240 40, 270 40 C300 40, 310 15, 340 40 C370 65, 380 40, 400 40",
    stroke: "var(--color-primary)",
    strokeWidth: "2.5",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.5"
  })), /*#__PURE__*/React.createElement("g", {
    className: animated ? 'lumina-wave-b' : undefined,
    style: {
      transformOrigin: 'center',
      transformBox: 'fill-box'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 40 C20 40, 30 20, 60 40 C90 60, 100 40, 130 40 C160 40, 170 20, 200 40 C230 60, 240 40, 270 40 C300 40, 310 20, 340 40 C370 60, 380 40, 400 40",
    stroke: "var(--color-accent)",
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.6"
  })));
}
Object.assign(__ds_scope, { BreathWave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BreathWave.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Mark({
  size,
  dotColor,
  ringColor
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "23",
    stroke: ringColor,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 24 C11 20, 14 16, 17 24 C20 32, 23 28, 24 24 C25 20, 28 16, 31 24 C34 32, 37 28, 40 24",
    stroke: "#C4956A",
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: dotColor
  }));
}

/**
 * Lumina logo — breath-wave mark with optional wordmark.
 */
function Logo({
  variant = 'default',
  size = 36,
  showWordmark = true,
  style = {},
  ...rest
}) {
  const reversed = variant === 'reversed';
  const dotColor = reversed ? '#fff' : 'var(--color-primary)';
  const ringColor = reversed ? 'rgba(255,255,255,0.2)' : 'var(--color-primary)';
  const nameColor = reversed ? '#fff' : 'var(--color-text-primary)';
  const subColor = reversed ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Mark, {
    size: size,
    dotColor: dotColor,
    ringColor: ringColor
  }), showWordmark && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.6,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: nameColor,
      lineHeight: 1.05
    }
  }, "Lumina"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(8, size * 0.24),
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: subColor
    }
  }, "Psychology")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    dim: 32,
    font: 12,
    family: 'var(--font-body)'
  },
  md: {
    dim: 40,
    font: 14,
    family: 'var(--font-body)'
  },
  lg: {
    dim: 56,
    font: 18,
    family: 'var(--font-display)'
  }
};
const TONES = {
  primary: {
    background: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)'
  },
  accent: {
    background: 'var(--color-accent-subtle)',
    color: 'var(--color-accent)'
  },
  rose: {
    background: 'var(--color-warm-rose-sub)',
    color: 'var(--color-warm-rose)'
  }
};

/**
 * Lumina avatar — initials or image, always circular.
 */
function Avatar({
  size = 'md',
  tone = 'primary',
  initials = '',
  src = '',
  alt = '',
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.primary;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: s.dim,
      height: s.dim,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontWeight: 700,
      fontSize: s.font,
      fontFamily: s.family,
      background: t.background,
      color: t.color,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  teal: {
    background: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    dot: 'var(--color-primary)'
  },
  amber: {
    background: 'var(--color-accent-subtle)',
    color: 'var(--color-accent)',
    dot: 'var(--color-accent)'
  },
  rose: {
    background: 'var(--color-warm-rose-sub)',
    color: 'var(--color-warm-rose)',
    dot: 'var(--color-warm-rose)'
  },
  success: {
    background: 'var(--color-success-sub)',
    color: 'var(--color-success)',
    dot: 'var(--color-success)'
  },
  neutral: {
    background: 'var(--color-surface-alt)',
    color: 'var(--color-text-secondary)',
    dot: 'var(--color-text-muted)'
  }
};

/**
 * Lumina pill-shaped status / category badge.
 */
function Badge({
  tone = 'teal',
  dot = false,
  outline = false,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.teal;
  const outlineStyle = {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1.5px solid var(--color-border)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 12px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      ...(outline ? outlineStyle : {
        background: t.background,
        color: t.color
      }),
      ...style
    }
  }, rest), dot && !outline && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-sm)',
    borderRadius: 'var(--radius-md)',
    minHeight: 36
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-base)',
    borderRadius: 'var(--radius-lg)',
    minHeight: 44
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-lg)',
    borderRadius: 'var(--radius-xl)',
    minHeight: 52
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: '#fff',
    border: '1.5px solid transparent',
    boxShadow: '0 2px 8px rgba(42,92,107,0.25)',
    hoverBg: 'var(--color-primary-light)'
  },
  secondary: {
    background: 'var(--color-surface)',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--color-primary)',
    boxShadow: 'none',
    hoverBg: 'var(--color-primary-subtle)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: '#fff',
    border: '1.5px solid transparent',
    boxShadow: '0 2px 8px rgba(196,149,106,0.25)',
    hoverBg: '#B8844F'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1.5px solid var(--color-border)',
    boxShadow: 'none',
    hoverBg: 'var(--color-surface-alt)'
  },
  danger: {
    background: 'var(--color-warm-rose)',
    color: '#fff',
    border: '1.5px solid transparent',
    boxShadow: 'none',
    hoverBg: '#A85050'
  },
  link: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: 'none',
    boxShadow: 'none',
    hoverBg: 'transparent'
  }
};

/**
 * Lumina primary action button.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isLink = variant === 'link';
  const sz = isLink ? {} : SIZES[size] || SIZES.md;
  // Animated hover border — skip on text links and disabled buttons.
  const animBorder = !isLink && !disabled;
  const cls = [animBorder ? 'lum-anim-border' : '', className].filter(Boolean).join(' ');
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: isLink ? 'underline' : 'none',
    textUnderlineOffset: isLink ? '3px' : undefined,
    whiteSpace: 'nowrap',
    transition: 'all var(--transition-base)',
    background: hover && !disabled ? v.hoverBg : v.background,
    color: v.color,
    border: v.border,
    boxShadow: disabled ? 'none' : v.boxShadow,
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled && (variant === 'primary' || variant === 'accent' || variant === 'danger') ? 'translateY(-1px)' : 'none',
    padding: isLink ? 0 : sz.padding,
    fontSize: sz.fontSize,
    borderRadius: sz.borderRadius,
    minHeight: sz.minHeight,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: cls,
    style: base
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  default: {
    background: 'var(--color-surface)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-border-light)'
  },
  elevated: {
    background: 'var(--color-surface)',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid var(--color-border-light)'
  },
  flat: {
    background: 'var(--color-surface-alt)',
    boxShadow: 'none',
    border: '1px solid var(--color-border-light)'
  },
  tinted: {
    background: 'var(--color-primary-subtle)',
    boxShadow: 'none',
    border: '1px solid rgba(42,92,107,0.12)'
  },
  accent: {
    background: 'var(--color-accent-subtle)',
    boxShadow: 'none',
    border: '1px solid rgba(196,149,106,0.15)'
  }
};

/**
 * Lumina content container. The primary surface for modules, summaries, reflections.
 */
function Card({
  variant = 'default',
  interactive = false,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SURFACES[variant] || SURFACES.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: s.background,
      border: s.border,
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : s.boxShadow,
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}

/** Padded header region (use for tag + title + description). */
function CardHeader({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) 0',
      ...style
    }
  }, children);
}

/** Card title in Cormorant display. */
function CardTitle({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 500,
      color: 'var(--color-text-primary)',
      lineHeight: 'var(--leading-snug)',
      marginBottom: 'var(--space-2)',
      ...style
    }
  }, children);
}

/** Card description / supporting body. */
function CardDescription({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      ...style
    }
  }, children);
}

/** Card body region. */
function CardBody({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6)',
      ...style
    }
  }, children);
}

/** Card footer — meta on the left, action on the right. */
function CardFooter({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6)',
      borderTop: '1px solid var(--color-border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 36,
  md: 44,
  lg: 52
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: '#fff',
    border: '1.5px solid transparent',
    hoverBg: 'var(--color-primary-light)'
  },
  secondary: {
    background: 'var(--color-surface)',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--color-primary)',
    hoverBg: 'var(--color-primary-subtle)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: '#fff',
    border: '1.5px solid transparent',
    hoverBg: '#B8844F'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1.5px solid var(--color-border)',
    hoverBg: 'var(--color-surface-alt)'
  },
  danger: {
    background: 'var(--color-warm-rose)',
    color: '#fff',
    border: '1.5px solid transparent',
    hoverBg: '#A85050'
  }
};

/**
 * Lumina icon-only button.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const dim = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: 'var(--radius-lg)',
      background: hover && !disabled ? v.hoverBg : v.background,
      color: v.color,
      border: v.border,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all var(--transition-base)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lumina stat / metric card — a labelled number with optional change indicator.
 */
function StatCard({
  label,
  value,
  suffix = '',
  change = '',
  tone = 'primary',
  interactive = true,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const valueColor = tone === 'accent' ? 'var(--color-accent)' : 'var(--color-primary)';
  const changeColor = tone === 'accent' ? 'var(--color-accent)' : 'var(--color-success)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-border-light)',
      padding: 'var(--space-6)',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-1px)' : 'none',
      transition: 'all var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 400,
      color: valueColor,
      lineHeight: 1,
      marginBottom: 'var(--space-1)'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontFamily: 'var(--font-body)'
    }
  }, suffix)), change && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: changeColor
    }
  }, change));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  }),
  success: null,
  warning: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  error: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }))
};
const VARIANTS = {
  info: {
    bg: 'var(--color-info-sub)',
    border: 'var(--color-info)',
    title: 'var(--color-info)',
    msg: 'var(--color-primary-light)'
  },
  success: {
    bg: 'var(--color-success-sub)',
    border: 'var(--color-success)',
    title: 'var(--color-success)',
    msg: '#3A7A6A'
  },
  warning: {
    bg: 'var(--color-warning-sub)',
    border: 'var(--color-warning)',
    title: 'var(--color-warning)',
    msg: '#9B7040'
  },
  error: {
    bg: 'var(--color-error-sub)',
    border: 'var(--color-error)',
    title: 'var(--color-error)',
    msg: '#8A4040'
  }
};
function AlertIcon({
  variant,
  color
}) {
  if (variant === 'success') {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }));
  }
  if (variant === 'warning') {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), ICONS.warning);
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), ICONS[variant]);
}

/**
 * Lumina inline alert — warm, directive feedback. Never alarming.
 */
function Alert({
  variant = 'info',
  title,
  children,
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: variant === 'error' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      borderRadius: 'var(--radius-lg)',
      borderLeft: `4px solid ${v.border}`,
      background: v.bg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(AlertIcon, {
    variant: variant,
    color: v.title
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: v.title,
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: v.msg
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lumina progress bar — uses the breath-wave gradient fill.
 */
function ProgressBar({
  value = 0,
  label,
  showPct = true,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), (label || showPct) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label), showPct && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-mono)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--color-primary-subtle)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 'var(--radius-full)',
      background: 'linear-gradient(90deg, var(--color-primary-muted), var(--color-primary))',
      transition: 'width var(--transition-slow)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lumina checkbox with label.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-sm)',
      background: checked ? 'var(--color-primary)' : 'var(--color-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--transition-base)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-primary)',
      fontWeight: 500
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lumina text field with label, hint, and compassionate validation states.
 */
function Input({
  label,
  hint,
  error,
  success,
  required = false,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  const state = error ? 'error' : success ? 'success' : 'default';
  const borderColor = error ? 'var(--color-warm-rose)' : success ? 'var(--color-success)' : focus ? 'var(--color-primary)' : 'var(--color-border)';
  const ring = error ? '0 0 0 3px rgba(184,92,92,0.10)' : success ? '0 0 0 3px rgba(74,155,138,0.10)' : focus ? '0 0 0 3px var(--focus-ring)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-warm-rose)',
      lineHeight: 1
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '11px 14px',
      minHeight: 44,
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)',
      background: disabled ? 'var(--color-surface-alt)' : 'var(--color-surface)',
      boxShadow: ring,
      outline: 'none',
      WebkitAppearance: 'none',
      transition: 'all var(--transition-base)',
      cursor: disabled ? 'not-allowed' : 'text',
      ...style
    }
  }, rest)), hint && !error && !success && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, hint), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'var(--color-warm-rose)'
    }
  }, error), success && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'var(--color-success)'
    }
  }, success));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lumina radio button with label. Use within a group sharing one `name`.
 */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--color-border)'}`,
      background: 'var(--color-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--transition-base)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-primary)',
      fontWeight: 500
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CHEVRON = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%239BA8AB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

/**
 * Lumina select dropdown.
 */
function Select({
  label,
  hint,
  id,
  value,
  onChange,
  children,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '11px 40px 11px 14px',
      minHeight: 44,
      border: `1.5px solid ${focus ? 'var(--color-primary)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)',
      background: `var(--color-surface) url("${CHEVRON}") no-repeat right 12px center`,
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      transition: 'all var(--transition-base)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), children), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lumina multi-line text area, for reflections and notes.
 */
function Textarea({
  label,
  hint,
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '11px 14px',
      minHeight: 100,
      resize: 'vertical',
      border: `1.5px solid ${focus ? 'var(--color-primary)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-primary)',
      background: 'var(--color-surface)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'all var(--transition-base)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lumina toggle switch.
 */
function Toggle({
  on = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!on),
    style: {
      width: 44,
      height: 24,
      flexShrink: 0,
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-full)',
      position: 'relative',
      background: on ? 'var(--color-primary)' : 'var(--color-border)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--transition-base)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--transition-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--color-text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/DashboardScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Course dashboard — live stats, resume card, module grid, reflection prompt.
function DashboardScreen({
  state,
  onOpenModule,
  onWriteReflection
}) {
  const {
    Button,
    IconButton,
    Badge,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardBody,
    CardFooter,
    StatCard,
    ProgressBar
  } = window.LuminaDesignSystem_f39716;
  const {
    Bell,
    Search,
    ArrowRight,
    Play,
    Clock
  } = window.Icons;
  const D = window.LuminaData;
  const S = window.LuminaStore;
  const modules = D.modules;
  const active = S.activeModule(state, modules);
  const stats = S.stats(state, modules);
  const statusBadge = st => {
    if (st === 'done') return /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Completed");
    if (st === 'active') return /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      dot: true
    }, "In Progress");
    if (st === 'available') return /*#__PURE__*/React.createElement(Badge, {
      tone: "amber",
      dot: true
    }, "Ready");
    return /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      dot: true
    }, "Locked");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 36px',
      borderBottom: '1px solid var(--color-border-light)',
      position: 'sticky',
      top: 0,
      background: 'rgba(247,244,240,0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, "Good afternoon"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
      margin: '2px 0 0'
    }
  }, D.user.name.split(' ')[0], ", ready to continue?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement(Search, {
    size: 20,
    stroke: "var(--color-text-secondary)"
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Bell, {
    size: 20,
    stroke: "var(--color-text-secondary)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: s.label
  }, s)))), /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    style: {
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '28px 30px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    dot: true
  }, active.n, " \xB7 ", S.moduleProgress(state, active) > 0 ? 'In Progress' : 'Up next'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 500,
      color: 'var(--color-text-primary)',
      margin: '12px 0 8px'
    }
  }, active.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6,
      maxWidth: 460,
      margin: '0 0 18px'
    }
  }, active.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: S.moduleProgress(state, active),
    label: "Module progress"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Play, {
      size: 16
    }),
    onClick: () => onOpenModule(active.id)
  }, "Resume lesson"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--color-text-muted)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Clock, {
    size: 15,
    stroke: "var(--color-text-muted)"
  }), " ", active.lessons.length, " lessons"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      flexShrink: 0,
      background: 'var(--color-primary)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 60% 40%, rgba(196,149,106,0.28) 0%, transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "120",
    height: "120",
    viewBox: "0 0 48 48",
    fill: "none",
    style: {
      position: 'relative',
      opacity: 0.92
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "23",
    stroke: "rgba(255,255,255,0.25)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 24 C11 20, 14 16, 17 24 C20 32, 23 28, 24 24 C25 20, 28 16, 31 24 C34 32, 37 28, 40 24",
    stroke: "#C4956A",
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: "#fff"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500,
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, "Your curriculum"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)',
      fontWeight: 500
    }
  }, S.totalCompleted(state, modules), " lessons completed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, modules.map((m, i) => {
    const st = S.moduleStatus(state, modules, i);
    const locked = st === 'locked';
    const done = st === 'done';
    const MIcon = window.Icons[m.icon] || window.Icons.Book;
    return /*#__PURE__*/React.createElement(Card, {
      key: m.id,
      variant: locked ? 'flat' : 'default',
      interactive: !locked,
      onClick: () => !locked && onOpenModule(m.id),
      style: {
        opacity: locked ? 0.66 : 1,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-lg)',
        background: done ? 'var(--color-success-sub)' : 'var(--color-primary-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(MIcon, {
      size: 20,
      stroke: done ? 'var(--color-success)' : 'var(--color-primary)'
    })), statusBadge(st)), /*#__PURE__*/React.createElement(CardTitle, null, m.title), /*#__PURE__*/React.createElement(CardDescription, null, m.desc)), /*#__PURE__*/React.createElement(CardBody, {
      style: {
        marginTop: 'auto'
      }
    }, st === 'active' && /*#__PURE__*/React.createElement(ProgressBar, {
      value: S.moduleProgress(state, m),
      showPct: false
    })), /*#__PURE__*/React.createElement(CardFooter, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-muted)',
        fontWeight: 500
      }
    }, m.lessons.length, " lessons"), locked ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-muted)',
        fontWeight: 600
      }
    }, "Locked") : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: done ? 'secondary' : 'primary'
    }, done ? 'Review' : st === 'active' ? 'Continue' : 'Start')));
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "tinted",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "Daily Reflection"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontStyle: 'italic',
      color: 'var(--color-primary)',
      lineHeight: 1.4,
      marginTop: 12
    }
  }, "\"", D.prompt, "\"")), /*#__PURE__*/React.createElement(CardFooter, {
    style: {
      marginTop: 'auto',
      borderTop: '1px solid rgba(42,92,107,0.12)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-primary-muted)',
      fontWeight: 600
    }
  }, "Day ", state.streak, " streak"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 15
    }),
    onClick: onWriteReflection
  }, "Reflect")))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/LessonPlayer.jsx
try { (() => {
// LessonPlayer — steps through a module's lessons: reading, quizzes, reflections,
// and a module-completion panel. Drives real progress via callbacks.
function LessonPlayer({
  module: m,
  startIndex,
  state,
  onCompleteLesson,
  onSaveReflection,
  onBack,
  onGoModule
}) {
  const {
    Button,
    Badge,
    Card,
    Alert,
    Radio,
    Textarea,
    ProgressBar,
    BreathWave
  } = window.LuminaDesignSystem_f39716;
  const {
    ChevronRight,
    CheckCircle,
    Play,
    Reflect,
    Clock,
    Award,
    ArrowRight,
    ArrowLeft,
    Lock
  } = window.Icons;
  const D = window.LuminaData;
  const S = window.LuminaStore;
  const lessons = m.lessons;
  const [idx, setIdx] = React.useState(Math.min(startIndex || 0, lessons.length - 1));
  const [showComplete, setShowComplete] = React.useState(false);
  const lesson = lessons[idx];

  // per-lesson local state
  const existingReflection = lid => state.reflections.find(r => r.lessonId === lid);
  const [sel, setSel] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const [note, setNote] = React.useState('');
  const [savedNote, setSavedNote] = React.useState(false);
  React.useEffect(() => {
    setSel(null);
    setChecked(false);
    setSavedNote(false);
    const ex = existingReflection(lesson.id);
    setNote(ex ? ex.text : '');
  }, [idx, m.id]);
  const isDone = lid => !!state.completed[lid];
  const firstIncomplete = lessons.findIndex(l => !state.completed[l.id]);
  const reachable = i => i <= (firstIncomplete === -1 ? lessons.length - 1 : firstIncomplete) || isDone(lessons[i].id);
  const completedCount = lessons.filter(l => isDone(l.id)).length;
  function advance() {
    if (idx < lessons.length - 1) {
      setIdx(idx + 1);
    } else {
      setShowComplete(true);
    }
  }
  function finishLesson() {
    onCompleteLesson(lesson.id);
    advance();
  }

  // ── Completion panel ──
  if (showComplete) {
    const modules = D.modules;
    const mi = modules.findIndex(x => x.id === m.id);
    const next = modules[mi + 1];
    const nextUnlocked = next && S.moduleDone({
      ...state
    }, m); // m just completed
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "default",
      style: {
        maxWidth: 520,
        width: '100%',
        textAlign: 'center',
        padding: '44px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--color-accent-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Award, {
      size: 38,
      stroke: "var(--color-accent)"
    }))), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Module complete"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        margin: '14px 0 8px',
        lineHeight: 1.2
      }
    }, m.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.65,
        margin: '0 auto 18px',
        maxWidth: 400
      }
    }, "You worked through every lesson, check, and reflection. That consistency is exactly how empathy is built \u2014 one practised habit at a time."), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 280,
        margin: '0 auto 26px'
      }
    }, /*#__PURE__*/React.createElement(BreathWave, {
      height: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, next ? /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
        size: 16
      }),
      onClick: () => onGoModule(next.id)
    }, "Start ", next.n, ": ", next.title) : /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconLeft: /*#__PURE__*/React.createElement(Award, {
        size: 16
      }),
      onClick: onBack
    }, "View your certificate"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onBack
    }, "Back to dashboard"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: '18px 36px',
      borderBottom: '1px solid var(--color-border-light)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      position: 'sticky',
      top: 0,
      background: 'rgba(247,244,240,0.88)',
      backdropFilter: 'blur(8px)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(ArrowLeft, {
      size: 15
    }),
    onClick: onBack
  }, "Dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--color-text-muted)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "Curriculum"), /*#__PURE__*/React.createElement(ChevronRight, {
    size: 14,
    stroke: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, m.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-secondary)'
    }
  }, "Lesson ", idx + 1, " of ", lessons.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 296px',
      gap: 32,
      padding: '30px 36px',
      maxWidth: 1120
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    dot: true
  }, m.n, " \xB7 ", lesson.type === 'quiz' ? 'Knowledge check' : lesson.type === 'reflect' ? 'Reflection' : 'Lesson'), lesson.type === 'read' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
      margin: '14px 0 4px',
      lineHeight: 1.15
    }
  }, lesson.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontStyle: 'italic',
      color: 'var(--color-primary-muted)',
      marginBottom: 22
    }
  }, lesson.heading), lesson.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--color-text-secondary)',
      margin: '0 0 18px',
      maxWidth: '68ch'
    }
  }, p)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px 0 26px'
    }
  }, /*#__PURE__*/React.createElement(BreathWave, {
    height: 20,
    opacity: 0.3
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    }),
    onClick: finishLesson
  }, idx < lessons.length - 1 ? 'Mark complete & continue' : 'Mark complete & finish module')), lesson.type === 'quiz' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
      margin: '14px 0 20px',
      lineHeight: 1.25,
      maxWidth: '60ch'
    }
  }, lesson.question), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 620
    }
  }, lesson.options.map((opt, i) => {
    const isSel = sel === i;
    const reveal = checked;
    const right = i === lesson.answer;
    let border = 'var(--color-border)';
    let bg = 'var(--color-surface)';
    if (reveal && right) {
      border = 'var(--color-success)';
      bg = 'var(--color-success-sub)';
    } else if (reveal && isSel && !right) {
      border = 'var(--color-warm-rose)';
      bg = 'var(--color-warm-rose-sub)';
    } else if (isSel) {
      border = 'var(--color-primary)';
      bg = 'var(--color-primary-subtle)';
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => {
        if (!checked || sel !== lesson.answer) {
          setSel(i);
          setChecked(false);
        }
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textAlign: 'left',
        width: '100%',
        padding: '14px 16px',
        borderRadius: 'var(--radius-lg)',
        border: `1.5px solid ${border}`,
        background: bg,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        color: 'var(--color-text-primary)',
        transition: 'all var(--transition-base)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flexShrink: 0,
        borderRadius: '50%',
        border: `2px solid ${isSel ? 'var(--color-primary)' : 'var(--color-border)'}`,
        background: isSel ? 'var(--color-primary)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, isSel && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: '#fff'
      }
    })), opt);
  })), checked && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: sel === lesson.answer ? 'success' : 'error',
    title: sel === lesson.answer ? 'That\u2019s it' : 'Not quite — try again'
  }, lesson.explain)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 20
    }
  }, sel !== lesson.answer ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: sel === null,
    onClick: () => setChecked(true)
  }, "Check answer") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    }),
    onClick: finishLesson
  }, idx < lessons.length - 1 ? 'Continue' : 'Finish module'))), lesson.type === 'reflect' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
      margin: '14px 0 6px',
      lineHeight: 1.2
    }
  }, lesson.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontStyle: 'italic',
      color: 'var(--color-primary)',
      margin: '0 0 20px',
      lineHeight: 1.5,
      maxWidth: '54ch'
    }
  }, "\"", lesson.prompt, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: note,
    rows: 6,
    onChange: e => {
      setNote(e.target.value);
      setSavedNote(false);
    },
    placeholder: "There are no wrong answers \u2014 write freely.",
    hint: "Your reflections are private and encrypted."
  })), savedNote && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    title: "Reflection saved"
  }, "Saved to your private journal. You've maintained a ", state.streak, "-day reflection streak \u2014 that's meaningful consistency.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: !note.trim(),
    onClick: () => {
      onSaveReflection({
        id: 'r-' + lesson.id,
        moduleId: m.id,
        lessonId: lesson.id,
        title: `${m.n} · ${lesson.title}`,
        prompt: lesson.prompt,
        text: note.trim()
      });
      setSavedNote(true);
    }
  }, "Save reflection"), (savedNote || existingReflection(lesson.id)) && /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    }),
    onClick: finishLesson
  }, idx < lessons.length - 1 ? 'Continue' : 'Finish module'), !savedNote && !existingReflection(lesson.id) && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: finishLesson
  }, "Skip for now")))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      marginBottom: 12
    }
  }, "Lessons in this module"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: Math.round(completedCount / lessons.length * 100),
    label: "Progress"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, lessons.map((l, i) => {
    const done = isDone(l.id);
    const current = i === idx;
    const canJump = reachable(i);
    const TypeWord = l.type === 'quiz' ? 'Check' : l.type === 'reflect' ? 'Reflection' : 'Lesson';
    return /*#__PURE__*/React.createElement("button", {
      key: l.id,
      disabled: !canJump,
      onClick: () => canJump && setIdx(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 12px',
        borderRadius: 'var(--radius-lg)',
        border: 'none',
        width: '100%',
        textAlign: 'left',
        background: current ? 'var(--color-primary-subtle)' : 'transparent',
        cursor: canJump ? 'pointer' : 'not-allowed',
        opacity: canJump ? 1 : 0.55,
        transition: 'background var(--transition-base)'
      }
    }, done ? /*#__PURE__*/React.createElement(CheckCircle, {
      size: 18,
      stroke: "var(--color-success)"
    }) : current ? /*#__PURE__*/React.createElement(Play, {
      size: 16,
      stroke: "var(--color-primary)"
    }) : canJump ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: '2px solid var(--color-border)',
        flexShrink: 0
      }
    }) : /*#__PURE__*/React.createElement(Lock, {
      size: 15,
      stroke: "var(--color-text-muted)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        fontWeight: current ? 700 : 600,
        color: current ? 'var(--color-primary)' : done ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
      }
    }, l.title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 11,
        color: 'var(--color-text-muted)'
      }
    }, TypeWord)));
  }))))));
}
window.LessonPlayer = LessonPlayer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/LessonPlayer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/LoginScreen.jsx
try { (() => {
// Welcome / sign-in screen for the Empathy Course.
function LoginScreen({
  onSignIn
}) {
  const {
    Button,
    Input,
    Logo,
    BreathWave
  } = window.LuminaDesignSystem_f39716;
  const [email, setEmail] = React.useState('mira@lumina.com');
  const [pw, setPw] = React.useState('••••••••••');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46%',
      flexShrink: 0,
      background: 'var(--color-primary)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '44px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at 80% 20%, rgba(196,149,106,0.20) 0%, transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(212,237,233,0.12) 0%, transparent 50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "reversed",
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'var(--color-text-inverse)',
      lineHeight: 1.2,
      maxWidth: 420
    }
  }, "Empathy is a skill \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-light)',
      fontStyle: 'normal'
    }
  }, "learnable, practicable, transformative.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(BreathWave, {
    height: 28
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 12,
      color: 'var(--color-primary-muted)',
      fontWeight: 500,
      letterSpacing: '0.04em'
    }
  }, "Empathy Course \u2014 Certificate Track")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
      margin: '0 0 6px'
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-secondary)',
      margin: '0 0 28px',
      lineHeight: 1.6
    }
  }, "Pick up where you left off in Module 3."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 4
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    type: "button",
    style: {
      alignSelf: 'center'
    }
  }, "Forgot your password?")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid var(--color-border-light)',
      fontSize: 13,
      color: 'var(--color-text-muted)',
      textAlign: 'center'
    }
  }, "New here? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      color: 'var(--color-primary)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "Create an account")))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/Sidebar.jsx
try { (() => {
// Shared left sidebar for the Empathy Course app.
function Sidebar({
  active,
  onNavigate,
  onLogout
}) {
  const {
    Logo,
    Avatar
  } = window.LuminaDesignSystem_f39716;
  const {
    Home,
    Award,
    Calendar,
    Reflect,
    LogOut
  } = window.Icons;
  const items = [{
    key: 'dashboard',
    label: 'Dashboard',
    Icon: Home
  }, {
    key: 'reflections',
    label: 'Reflections',
    Icon: Reflect
  }, {
    key: 'sessions',
    label: 'Sessions',
    Icon: Calendar
  }, {
    key: 'certificate',
    label: 'Certificate',
    Icon: Award
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: 'var(--color-surface)',
      borderRight: '1px solid var(--color-border-light)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 24px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 32
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, items.map(({
    key,
    label,
    Icon
  }) => {
    const on = active === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onNavigate(key),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 12px',
        borderRadius: 'var(--radius-lg)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        background: on ? 'var(--color-primary-subtle)' : 'transparent',
        color: on ? 'var(--color-primary)' : 'var(--color-text-secondary)',
        transition: 'all var(--transition-base)',
        textAlign: 'left',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 18,
      stroke: on ? 'var(--color-primary)' : 'var(--color-text-muted)'
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 8px',
      borderTop: '1px solid var(--color-border-light)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "md",
    initials: window.LuminaData.user.initials
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, window.LuminaData.user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-muted)'
    }
  }, "Certificate Track"))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 12px',
      borderRadius: 'var(--radius-lg)',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement(LogOut, {
    size: 16,
    stroke: "var(--color-text-muted)"
  }), " Sign out")));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/data.js
try { (() => {
// ─────────────────────────────────────────────────────────────
// Lumina Empathy Course — full curriculum data.
// Lesson types: 'read' (heading + body[]), 'quiz' (question/options/answer/explain),
// 'reflect' (prompt). window.LuminaData.
// ─────────────────────────────────────────────────────────────
window.LuminaData = {
  user: {
    name: 'Mira Jensen',
    initials: 'MJ'
  },
  prompt: 'Describe a time you felt genuinely understood by someone. What made that possible?',
  modules: [{
    id: 1,
    n: 'Module 1',
    title: 'Introduction to Empathy',
    icon: 'Heart',
    desc: "What empathy is — and what it isn't. Distinguishing sympathy, empathy, and compassion through the lens of modern psychology.",
    lessons: [{
      id: '1-1',
      type: 'read',
      title: 'Three words we confuse',
      heading: 'Sympathy, empathy, compassion',
      body: ["We use these three words as if they were interchangeable. They are not. Sympathy notices another person's pain from a distance — \u201cI'm sorry that happened to you.\u201d Empathy steps closer — it is the capacity to sense what another person feels and to understand why.", "Compassion adds a third movement: the wish to help, and the willingness to act on it. Empathy without compassion can exhaust us; compassion without empathy can miss the mark. This course builds both, deliberately."]
    }, {
      id: '1-2',
      type: 'read',
      title: 'Empathy is a skill',
      heading: 'Not a trait you either have or lack',
      body: ["The most important idea in this course is also the most hopeful: empathy is not a fixed personality trait. It is a set of skills — attention, perspective taking, emotional regulation, and responsive communication — and skills can be practised.", "Decades of research show measurable change. People who train in these habits become more accurate at reading others and more steady under emotional pressure. You are not stuck with the empathy you started with."]
    }, {
      id: '1-3',
      type: 'quiz',
      title: 'Knowledge check',
      question: 'Which best distinguishes empathy from sympathy?',
      options: ['Empathy is feeling sorry for someone from a distance', 'Empathy is sensing and understanding what another feels; sympathy observes their pain from outside', 'They mean the same thing', 'Sympathy always includes a wish to help'],
      answer: 1,
      explain: "Empathy moves closer — it senses and understands another's experience. Sympathy notices from a distance. Compassion is the one that adds the wish to help."
    }, {
      id: '1-4',
      type: 'reflect',
      title: 'Reflection',
      prompt: 'When in your life has someone shown you empathy rather than sympathy? What was different about how it felt?'
    }]
  }, {
    id: 2,
    n: 'Module 2',
    title: 'The Neuroscience of Connection',
    icon: 'Brain',
    desc: 'How mirror neurons, the default mode network, and affective resonance shape our capacity to understand others.',
    lessons: [{
      id: '2-1',
      type: 'read',
      title: 'The social brain',
      heading: 'We are wired to attune',
      body: ["Long before language, our survival depended on reading one another. The brain devotes vast resources to social cognition: tracking faces, tone, posture, and intention. When we say empathy is natural, this is what we mean — the hardware is there.", "But hardware is not destiny. The same circuits strengthen with use and quiet with neglect. Attention is the dial."]
    }, {
      id: '2-2',
      type: 'read',
      title: 'Resonance, not merging',
      heading: 'Feeling with — without losing yourself',
      body: ["Affective resonance lets us feel a version of what another feels. Healthy empathy keeps a thread of separateness: you sense my distress without drowning in it. That boundary is what makes sustained care possible.", "When the boundary collapses, we burn out. Module 5 returns to this in difficult conversations."]
    }, {
      id: '2-3',
      type: 'quiz',
      title: 'Knowledge check',
      question: 'Why does keeping a sense of separateness matter in empathy?',
      options: ['It makes you care less, which is the goal', 'It prevents emotional burnout and keeps sustained care possible', 'It has no real effect', 'It blocks you from understanding others'],
      answer: 1,
      explain: 'Resonance means feeling with someone while staying distinct from them. That thread of separateness is exactly what protects against burnout and lets care last.'
    }, {
      id: '2-4',
      type: 'reflect',
      title: 'Reflection',
      prompt: 'Recall a time you felt someone else\u2019s emotion strongly. Did you stay separate, or get swept up? What helped, or what would have?'
    }]
  }, {
    id: 3,
    n: 'Module 3',
    title: 'Perspective Taking',
    icon: 'Eye',
    desc: "Cognitive and affective strategies for genuinely stepping into another person's frame of reference.",
    lessons: [{
      id: '3-1',
      type: 'read',
      title: 'What does it mean to truly listen?',
      heading: 'Attention comes before words',
      body: ["Empathy begins before we speak. It begins in the quality of our attention — in how we hold space for another person's experience before we name, judge, or respond. Perspective taking is the deliberate act of setting aside our own frame of reference long enough to inhabit someone else's.", "In this module we distinguish cognitive empathy \u2014 understanding what another person thinks \u2014 from affective empathy, feeling alongside them. Both are skills, and both can be strengthened with practice."]
    }, {
      id: '3-2',
      type: 'read',
      title: 'The ladder of inference',
      heading: 'How we leap from fact to story',
      body: ["We rarely respond to what actually happened. We respond to the story we built about it — climbing, in milliseconds, from observable data to selected details to interpretation to conclusion. The ladder of inference names that climb.", "Perspective taking means climbing back down: returning to what was actually observable, and asking what other stories could fit the same facts. The other person almost always has a story in which they are reasonable."]
    }, {
      id: '3-3',
      type: 'quiz',
      title: 'Knowledge check',
      question: 'A colleague replies to your message with one word: \u201cFine.\u201d You feel dismissed. What does the ladder of inference suggest?',
      options: ['Your first interpretation is the truth — they are dismissive', 'You climbed from one observable fact to a conclusion; other stories could fit the same word', 'You should reply with one word back', 'Their feeling is more valid than yours'],
      answer: 1,
      explain: "\u201cFine\u201d is the only observable data. \u201cThey're dismissing me\u201d is a conclusion you climbed to. Climbing back down means asking what else could explain that one word \u2014 they're busy, drained, focused."
    }, {
      id: '3-4',
      type: 'reflect',
      title: 'Practice: reframing a conflict',
      prompt: 'Recall a recent disagreement. Describe the same moment as the other person might have told it \u2014 in a version where they are reasonable. What changes?'
    }, {
      id: '3-5',
      type: 'read',
      title: 'The generous interpretation',
      heading: 'A discipline, not a feeling',
      body: ["Choosing the generous interpretation is not naivety and it is not pretending. It is a discipline: holding open the possibility that the person you find difficult is responding to something you cannot yet see.", "You will be wrong sometimes. But the generous interpretation costs little and opens the one door that defensiveness slams shut \u2014 the chance to actually understand."]
    }, {
      id: '3-6',
      type: 'reflect',
      title: 'Reflection',
      prompt: 'Who in your life is hardest to extend a generous interpretation to? What might they be responding to that you can\u2019t yet see?'
    }]
  }, {
    id: 4,
    n: 'Module 4',
    title: 'Active Listening Skills',
    icon: 'Mic',
    desc: 'The practical habits of attention — reflecting, paraphrasing, and holding silence — that signal genuine presence.',
    lessons: [{
      id: '4-1',
      type: 'read',
      title: 'Listening to understand',
      heading: 'Not listening to reply',
      body: ["Most of us listen with half our attention on what we'll say next. Active listening reverses that: the whole of your attention rests on understanding, and your response waits until understanding arrives.", "It sounds simple. It is not easy. The habits below make it concrete."]
    }, {
      id: '4-2',
      type: 'read',
      title: 'Reflect, paraphrase, hold silence',
      heading: 'Three habits of presence',
      body: ["Reflecting names what you notice: \u201cIt sounds like that landed hard.\u201d Paraphrasing returns the content in your own words, so the speaker hears that they were received. Holding silence resists the urge to fill space \u2014 it lets the other person reach the thing under the first thing.", "Used together, these signal genuine presence more than any clever reply could."]
    }, {
      id: '4-3',
      type: 'quiz',
      title: 'Knowledge check',
      question: 'A friend pauses mid-sentence, eyes welling. What does \u201cholding silence\u201d ask of you?',
      options: ['Quickly reassure them so they stop feeling bad', 'Change the subject to something lighter', 'Resist filling the space, and let them reach what\u2019s underneath', 'Offer your own similar story right away'],
      answer: 2,
      explain: 'Holding silence means tolerating the discomfort of a pause so the other person can go deeper. Rushing to reassure or redirect often closes the door they were about to open.'
    }, {
      id: '4-4',
      type: 'reflect',
      title: 'Practice',
      prompt: 'Think of your last real conversation. Where were you listening to reply instead of to understand? What would you do differently?'
    }]
  }, {
    id: 5,
    n: 'Module 5',
    title: 'Empathy in Difficult Conversations',
    icon: 'Dialogue',
    desc: 'Staying regulated and connected when stakes are high, emotions run hot, and disagreement is real.',
    lessons: [{
      id: '5-1',
      type: 'read',
      title: 'Regulate, then relate',
      heading: 'You cannot offer what you don\u2019t have',
      body: ["When stakes rise, our own nervous system reacts first. Empathy in hard moments starts with noticing your own activation and settling it \u2014 a breath, a pause, a name for what you feel \u2014 before you turn toward the other person.", "You cannot offer steadiness you do not have. Regulate, then relate."]
    }, {
      id: '5-2',
      type: 'reflect',
      title: 'Reflection',
      prompt: 'In your hardest conversations, what is the first sign that you\u2019ve lost your own footing? What helps you find it again?'
    }]
  }],
  sessions: [{
    id: 's1',
    practitioner: 'Dr. Elena Reyes',
    focus: 'Perspective Taking',
    date: 'Thu, Jun 19',
    time: '4:00 PM',
    initials: 'ER',
    tone: 'accent',
    status: 'upcoming'
  }, {
    id: 's2',
    practitioner: 'Sam Okafor, LCSW',
    focus: 'Active Listening Practice',
    date: 'Tue, Jun 24',
    time: '11:00 AM',
    initials: 'SO',
    tone: 'primary',
    status: 'available'
  }, {
    id: 's3',
    practitioner: 'Dr. Elena Reyes',
    focus: 'Difficult Conversations',
    date: 'Mon, Jun 30',
    time: '2:30 PM',
    initials: 'ER',
    tone: 'accent',
    status: 'available'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/data.js", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/icons.jsx
try { (() => {
// Lumina icon set — Lucide paths (outlined, 24×24 viewBox, 2px stroke, rounded).
// The brand uses Lucide Icons exclusively. Exposed on window for cross-file use.
(function () {
  const I = paths => function Icon({
    size = 24,
    stroke = 'currentColor',
    strokeWidth = 2,
    style = {},
    ...rest
  }) {
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
      style,
      ...rest
    }, paths.map((d, i) => React.createElement('path', {
      key: i,
      d
    })));
  };
  // some icons need non-path children; handle with a custom renderer
  const Raw = children => function Icon({
    size = 24,
    stroke = 'currentColor',
    strokeWidth = 2,
    style = {},
    ...rest
  }) {
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
      style,
      ...rest,
      dangerouslySetInnerHTML: {
        __html: children
      }
    });
  };
  window.Icons = {
    Heart: I(['M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z']),
    Dialogue: I(['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z']),
    Eye: Raw('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
    Book: I(['M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z']),
    Shield: I(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z']),
    Calendar: Raw('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
    User: Raw('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    Mic: Raw('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>'),
    Reflect: I(['M12 20h9', 'M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z']),
    Star: I(['M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z']),
    CheckCircle: Raw('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'),
    Home: I(['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10']),
    Settings: Raw('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
    Bell: I(['M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0']),
    ChevronRight: I(['M9 18l6-6-6-6']),
    ArrowRight: Raw('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'),
    Play: Raw('<polygon points="5 3 19 12 5 21 5 3"/>'),
    Clock: Raw('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    Search: Raw('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
    Lock: Raw('<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    LogOut: I(['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9']),
    Award: Raw('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'),
    Brain: I(['M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-3 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z', 'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-3 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z']),
    X: Raw('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    Check: I(['M20 6 9 17l-5-5']),
    ArrowLeft: Raw('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'),
    RotateCcw: Raw('<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'),
    Download: Raw('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>')
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/screens.jsx
try { (() => {
// Secondary screens: Reflections journal, Sessions booking, Certificate.

// ── Shared page header ──
function PageHead({
  eyebrow,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      padding: '26px 36px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
      margin: '2px 0 4px'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      margin: 0,
      maxWidth: 560,
      lineHeight: 1.6
    }
  }, sub));
}

// ── Reflections journal ──
function ReflectionsScreen({
  state
}) {
  const {
    Card,
    Badge,
    BreathWave
  } = window.LuminaDesignSystem_f39716;
  const {
    Reflect
  } = window.Icons;
  const items = [...state.reflections].reverse();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Private journal",
    title: "Your reflections",
    sub: "Everything you write here is private and encrypted. Returning to your own words is part of the practice."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 760
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    style: {
      padding: 36,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Reflect, {
    size: 28,
    stroke: "var(--color-primary-muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--color-text-primary)'
    }
  }, "No reflections yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, "They'll appear here as you work through the modules.")), items.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.id,
    variant: "default",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-muted)',
      fontWeight: 500
    }
  }, r.date || 'Today')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontStyle: 'italic',
      color: 'var(--color-primary)',
      margin: '0 0 12px',
      lineHeight: 1.5
    }
  }, "\"", r.prompt, "\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, r.text))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(BreathWave, {
    height: 18,
    opacity: 0.25
  }))));
}
window.ReflectionsScreen = ReflectionsScreen;

// ── Sessions booking ──
function SessionsScreen() {
  const {
    Card,
    Button,
    Badge,
    Avatar,
    Alert
  } = window.LuminaDesignSystem_f39716;
  const {
    Calendar,
    Clock
  } = window.Icons;
  const D = window.LuminaData;
  const [booked, setBooked] = React.useState(() => D.sessions.filter(s => s.status === 'upcoming').map(s => s.id));
  const [justBooked, setJustBooked] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "1:1 practice",
    title: "Sessions",
    sub: "Book a live session with a Lumina practitioner to practise the skills from your modules in real conversation."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 760
    }
  }, justBooked && /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    title: "Session booked"
  }, "You're confirmed with ", justBooked, ". We'll email a calendar invite and a gentle reminder an hour before."), D.sessions.map(s => {
    const isBooked = booked.includes(s.id);
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      variant: "default",
      style: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      size: "lg",
      tone: s.tone,
      initials: s.initials
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 19,
        fontWeight: 500,
        color: 'var(--color-text-primary)'
      }
    }, s.practitioner), isBooked && /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Booked")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-secondary)',
        marginBottom: 8
      }
    }, "Focus: ", s.focus), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        fontSize: 13,
        color: 'var(--color-text-muted)',
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Calendar, {
      size: 14,
      stroke: "var(--color-text-muted)"
    }), " ", s.date), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Clock, {
      size: 14,
      stroke: "var(--color-text-muted)"
    }), " ", s.time))), isBooked ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => {
        setBooked(booked.filter(b => b !== s.id));
        setJustBooked(null);
      }
    }, "Cancel") : /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      onClick: () => {
        setBooked([...booked, s.id]);
        setJustBooked(s.practitioner);
      }
    }, "Book session"));
  })));
}
window.SessionsScreen = SessionsScreen;

// ── Certificate ──
function CertificateScreen({
  state,
  allDone,
  onResume
}) {
  const {
    Card,
    Button,
    Badge,
    BreathWave,
    Logo
  } = window.LuminaDesignSystem_f39716;
  const {
    Award,
    ArrowRight,
    Download
  } = window.Icons;
  const D = window.LuminaData;
  const S = window.LuminaStore;
  const doneCount = D.modules.filter(m => S.moduleDone(state, m)).length;
  if (!allDone) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Certificate Track",
      title: "Your certificate",
      sub: "Complete all five modules to earn your Lumina Empathy Practice certificate."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 36px',
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      style: {
        padding: 36,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Award, {
      size: 30,
      stroke: "var(--color-primary-muted)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        color: 'var(--color-text-primary)',
        marginBottom: 6
      }
    }, doneCount, " of ", D.modules.length, " modules complete"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
        maxWidth: 380,
        margin: '0 auto 20px'
      }
    }, "Keep going \u2014 your certificate unlocks the moment the final reflection is saved."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
        size: 16
      }),
      onClick: onResume
    }, "Resume learning"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-primary)',
      padding: '36px 40px 28px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 85% 15%, rgba(196,149,106,0.25) 0%, transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "reversed",
    size: 32
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "amber",
    dot: true
  }, "Certificate Track"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
      marginBottom: 10
    }
  }, "This certifies that"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
      lineHeight: 1.1
    }
  }, D.user.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.7,
      maxWidth: 420,
      margin: '14px auto 0'
    }
  }, "has completed all five modules of the Lumina Empathy Course, demonstrating practised skill in perspective taking, active listening, and empathy under pressure."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300,
      margin: '22px auto'
    }
  }, /*#__PURE__*/React.createElement(BreathWave, {
    height: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Download, {
      size: 16
    })
  }, "Download certificate"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onResume
  }, "Review modules"))))));
}
window.CertificateScreen = CertificateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-course/store.js
try { (() => {
// ─────────────────────────────────────────────────────────────
// Lumina Empathy Course — progress store + persistence (plain JS).
// window.LuminaStore. State shape:
//   { completed: { [lessonId]: true }, reflections: [ {id, moduleId, lessonId, title, prompt, text, date} ], streak }
// ─────────────────────────────────────────────────────────────
(function () {
  const KEY = 'lumina-empathy-progress-v1';

  // Seed: modules 1 & 2 complete, module 3 partway (first 3 lessons), streak 12.
  function seed() {
    return {
      completed: {
        '1-1': true,
        '1-2': true,
        '1-3': true,
        '1-4': true,
        '2-1': true,
        '2-2': true,
        '2-3': true,
        '2-4': true,
        '3-1': true,
        '3-2': true,
        '3-3': true
      },
      reflections: [{
        id: 'r0',
        moduleId: 1,
        lessonId: '1-4',
        title: 'Module 1 · Reflection',
        prompt: 'When in your life has someone shown you empathy rather than sympathy? What was different about how it felt?',
        text: 'My sister, after the move. She didn\u2019t try to fix it or tell me it would be fine \u2014 she just said \u201cthat sounds really lonely\u201d and stayed on the phone. I felt met, not managed.',
        date: 'Jun 14, 2026'
      }],
      streak: 12
    };
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return seed();
      const parsed = JSON.parse(raw);
      return {
        completed: {},
        reflections: [],
        streak: 0,
        ...parsed
      };
    } catch (e) {
      return seed();
    }
  }
  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }
  function reset() {
    try {
      localStorage.removeItem(KEY);
    } catch (e) {}
    return seed();
  }

  // ── Derivations ──
  const lessonsOf = m => m.lessons || [];
  const completedCountIn = (state, m) => lessonsOf(m).filter(l => state.completed[l.id]).length;
  const moduleDone = (state, m) => lessonsOf(m).length > 0 && completedCountIn(state, m) === lessonsOf(m).length;
  const moduleProgress = (state, m) => {
    const total = lessonsOf(m).length;
    return total ? Math.round(completedCountIn(state, m) / total * 100) : 0;
  };
  const isUnlocked = (state, modules, idx) => idx === 0 || moduleDone(state, modules[idx - 1]);
  function moduleStatus(state, modules, idx) {
    const m = modules[idx];
    if (!isUnlocked(state, modules, idx)) return 'locked';
    if (moduleDone(state, m)) return 'done';
    return completedCountIn(state, m) > 0 ? 'active' : 'available';
  }

  // The single module to "resume" — first unlocked, not-done.
  function activeModule(state, modules) {
    for (let i = 0; i < modules.length; i++) {
      if (isUnlocked(state, modules, i) && !moduleDone(state, modules[i])) return modules[i];
    }
    return modules[modules.length - 1];
  }

  // First not-completed lesson in a module (or 0).
  function resumeLessonIndex(state, m) {
    const idx = lessonsOf(m).findIndex(l => !state.completed[l.id]);
    return idx === -1 ? 0 : idx;
  }
  function totalCompleted(state, modules) {
    return modules.reduce((sum, m) => sum + completedCountIn(state, m), 0);
  }
  function stats(state, modules) {
    const done = modules.filter(m => moduleDone(state, m)).length;
    const lessons = totalCompleted(state, modules);
    const hours = (lessons * 8 / 60).toFixed(1);
    const score = Math.min(99, 60 + lessons * 2);
    return [{
      label: 'Modules Completed',
      value: done,
      change: done > 0 ? '\u2191 keep going' : 'start anytime'
    }, {
      label: 'Reflection Streak',
      value: state.streak,
      change: 'days in a row'
    }, {
      label: 'Time Learning',
      value: hours,
      suffix: 'h',
      change: `${lessons} lessons done`
    }, {
      label: 'Empathy Score',
      value: score,
      tone: 'accent',
      change: '\u2191 grows as you learn'
    }];
  }
  window.LuminaStore = {
    load,
    save,
    reset,
    seed,
    moduleDone,
    moduleProgress,
    moduleStatus,
    isUnlocked,
    activeModule,
    resumeLessonIndex,
    completedCountIn,
    totalCompleted,
    stats
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-course/store.js", error: String((e && e.message) || e) }); }

// ui_kits/empathy-elearning/course-data.js
try { (() => {
// ════════════════════════════════════════════════════════════════
// Lumina — "The Empathy Practice" interactive e-learning module.
// Structure & flow modeled on a linear Articulate-style storyboard:
// cover → objectives → agenda → [module sections w/ tabs, hotspots,
// drag-drop, reflections] → knowledge check (scored) → results →
// summary → completion.  window.COURSE.
// ════════════════════════════════════════════════════════════════
window.COURSE = function () {
  const objectives = ['Compose a generous interpretation of a teammate — climbing back down the ladder of inference to author a response that stays curious instead of reacting.', 'Construct a reflective response that names the feeling underneath and shows the other person they were received, before reassuring or fixing.', 'Devise a way through a heated moment that regulates your own activation first, then turns toward the other person without escalating.', 'Integrate perspective-taking, active listening, and self-regulation into one unscripted, high-stakes conversation.'];
  const agenda = [{
    n: '01',
    title: 'Introduction to Empathy',
    icon: 'Heart',
    blurb: 'Three words we confuse — and why empathy is a skill, not a trait.'
  }, {
    n: '02',
    title: 'The Neuroscience of Connection',
    icon: 'Brain',
    blurb: 'How the social brain attunes us to one another.'
  }, {
    n: '03',
    title: 'Perspective Taking',
    icon: 'Eye',
    blurb: 'Stepping into another person\u2019s frame of reference.'
  }, {
    n: '04',
    title: 'Active Listening',
    icon: 'Mic',
    blurb: 'The practical habits of genuine presence.'
  }, {
    n: '05',
    title: 'Difficult Conversations',
    icon: 'Dialogue',
    blurb: 'Staying connected when the stakes are high.'
  }];
  const summary = ['Empathy is a skill — built from attention, perspective taking, regulation, and responsive communication.', 'Empathy senses and understands; sympathy observes from a distance; compassion adds the wish to help.', 'Healthy empathy keeps a thread of separateness — feeling with, without merging.', 'Perspective taking means climbing back down the ladder of inference to what was actually observable.', 'In difficult conversations, regulate yourself first — then relate.'];

  // ── Knowledge-check questions ──
  const quiz = [{
    id: 'q1',
    q: 'What best distinguishes empathy from sympathy?',
    options: ['Empathy feels sorry for someone from a distance', 'Empathy senses and understands what another feels; sympathy observes their pain from outside', 'They mean the same thing'],
    answer: 1,
    right: 'Empathy moves closer — it senses and understands. Sympathy notices from a distance; compassion adds the wish to help.',
    wrong: 'Empathy moves closer than sympathy: it senses and understands another\u2019s experience rather than observing it from outside.'
  }, {
    id: 'q2',
    q: 'Why does keeping a sense of separateness matter in empathy?',
    options: ['It makes you care less, which is the goal', 'It prevents burnout and keeps sustained care possible', 'It blocks you from understanding others'],
    answer: 1,
    right: 'Resonance means feeling with someone while staying distinct. That thread of separateness is what protects against burnout.',
    wrong: 'Separateness isn\u2019t about caring less — it\u2019s the boundary that lets you feel with someone without drowning, so care can last.'
  }, {
    id: 'q3',
    q: 'A colleague replies to your message with one word: \u201cFine.\u201d You feel dismissed. What does the ladder of inference suggest?',
    options: ['Your first interpretation is the truth — they are dismissive', 'You climbed from one fact to a conclusion; other stories could fit the same word', 'You should reply with one word back'],
    answer: 1,
    right: '\u201cFine\u201d is the only data. \u201cThey\u2019re dismissing me\u201d is a conclusion you climbed to — climb back down and ask what else could explain it.',
    wrong: 'The ladder of inference says you leapt from one word to a conclusion. Climbing back down means considering other stories that fit the same fact.'
  }, {
    id: 'q4',
    q: 'A friend pauses mid-sentence, eyes welling. What does \u201cholding silence\u201d ask of you?',
    options: ['Quickly reassure them so they stop feeling bad', 'Change the subject to something lighter', 'Resist filling the space, and let them reach what\u2019s underneath'],
    answer: 2,
    right: 'Holding silence means tolerating the pause so the other person can go deeper. Rushing to reassure often closes the door they were about to open.',
    wrong: 'Holding silence isn\u2019t about reassuring or redirecting — it\u2019s tolerating the pause so they can reach what\u2019s underneath.'
  }, {
    id: 'q5',
    q: 'In a heated moment, what does \u201cregulate, then relate\u201d ask you to do first?',
    options: ['Settle your own nervous system before turning toward the other person', 'Win the point before emotions take over', 'Match their intensity so they feel heard'],
    answer: 0,
    right: 'You can\u2019t offer a steadiness you don\u2019t have. Notice and settle your own activation first — then turn toward them.',
    wrong: 'Regulate, then relate: settle your own activation first. You can\u2019t offer a steadiness you don\u2019t yet have.'
  }];

  // ── Empathy rubrics for the AI roleplays (one per practised skill) ──
  // Each criterion is graded by the AI coach after the learner ends the conversation.
  const RUBRIC = {
    generous: [{
      key: 'no_assume',
      label: 'Resisted assuming the worst',
      desc: 'Didn\u2019t read the message as a slight, a pattern, or a verdict about the relationship.'
    }, {
      key: 'warmth',
      label: 'Led with warmth, not blame',
      desc: 'Opened with care or concern rather than guilt-tripping or scorekeeping.'
    }, {
      key: 'curious',
      label: 'Stayed curious about their side',
      desc: 'Left room for what they couldn\u2019t see — wondered or gently asked what was going on.'
    }, {
      key: 'open_door',
      label: 'Kept the door open',
      desc: 'Made it easy to reconnect, with no pressure or strings attached.'
    }],
    reflecting: [{
      key: 'named',
      label: 'Named the feeling underneath',
      desc: 'Reflected the emotion under the words — overlooked, unseen, discouraged.'
    }, {
      key: 'no_reassure',
      label: 'Didn\u2019t rush to reassure',
      desc: 'Avoided \u201cI\u2019m sure it\u2019s fine\u201d — which quietly closes the door.'
    }, {
      key: 'no_fix',
      label: 'Held off on fixing',
      desc: 'Resisted jumping to advice or solutions before understanding landed.'
    }, {
      key: 'received',
      label: 'Showed they were received',
      desc: 'Made the person feel genuinely heard before moving anywhere.'
    }],
    regulate: [{
      key: 'self_first',
      label: 'Regulated yourself first',
      desc: 'Steadied your own activation — a breath, a pause — before responding.'
    }, {
      key: 'no_escalate',
      label: 'Didn\u2019t escalate',
      desc: 'Didn\u2019t match the sharpness, defend, or push to \u201cwin\u201d the point.'
    }, {
      key: 'toward',
      label: 'Turned toward, not away',
      desc: 'Stayed connected and open rather than going cold or combative.'
    }, {
      key: 'acknowledge',
      label: 'Acknowledged their view',
      desc: 'Recognised their perspective as real, even while holding your own.'
    }]
  };

  // ── The linear slide sequence ──
  const slides = [
  // INTRO
  {
    id: 'cover',
    type: 'cover',
    section: 'Welcome'
  }, {
    id: 'objectives',
    type: 'objectives',
    section: 'Objectives',
    objectives
  }, {
    id: 'agenda',
    type: 'agenda',
    section: 'Course Agenda',
    agenda
  },
  // MODULE 1
  {
    id: 'm1_div',
    type: 'section',
    section: 'Module 1',
    n: 'Module 01',
    title: 'Introduction to Empathy',
    icon: 'Heart',
    photo: {
      id: 'photo-m1',
      hint: 'Two people in warm conversation'
    },
    blurb: 'What empathy is — and what it isn\u2019t.'
  }, {
    id: 'm1_c1',
    type: 'content',
    section: 'Module 1',
    eyebrow: 'Module 01 · Introduction',
    title: 'Three words we confuse',
    sub: 'Sympathy, empathy, compassion',
    body: ['We use these three words as if they were interchangeable. They are not — and the difference shapes how we show up for the people around us.', 'Explore each one below. You\u2019ll need to open all three to continue.']
  }, {
    id: 'm1_tabs',
    type: 'tabs',
    section: 'Module 1',
    gate: true,
    eyebrow: 'Module 01 · Introduction',
    title: 'Three movements of care',
    tabs: [{
      label: 'Sympathy',
      body: 'Noticing another person\u2019s pain from a distance — \u201cI\u2019m sorry that happened to you.\u201d It acknowledges, but stays outside.'
    }, {
      label: 'Empathy',
      body: 'Stepping closer: sensing what another person feels, and understanding why. It is the heart of this course — and it is learnable.'
    }, {
      label: 'Compassion',
      body: 'Empathy plus a third movement — the wish to help, and the willingness to act on it. Empathy without compassion can exhaust us; compassion without empathy can miss the mark.'
    }]
  }, {
    id: 'm1_c2',
    type: 'content',
    section: 'Module 1',
    eyebrow: 'Module 01 · Introduction',
    title: 'Empathy is a skill',
    sub: 'Not a trait you either have or lack',
    body: ['The most important idea in this course is also the most hopeful: empathy is not a fixed personality trait. It is a set of skills — attention, perspective taking, emotional regulation, and responsive communication.', 'Decades of research show measurable change. People who train these habits become more accurate at reading others and steadier under emotional pressure. You are not stuck with the empathy you started with.'],
    pull: 'You are not stuck with the empathy you started with.'
  },
  // MODULE 2
  {
    id: 'm2_div',
    type: 'section',
    section: 'Module 2',
    n: 'Module 02',
    title: 'The Neuroscience of Connection',
    icon: 'Brain',
    photo: {
      id: 'photo-m2',
      hint: 'Faces attuned to each other'
    },
    blurb: 'How the social brain attunes us to one another.'
  }, {
    id: 'm2_c1',
    type: 'content',
    section: 'Module 2',
    eyebrow: 'Module 02 · Neuroscience',
    title: 'The social brain',
    sub: 'We are wired to attune',
    body: ['Long before language, our survival depended on reading one another. The brain devotes vast resources to social cognition — tracking faces, tone, posture, and intention.', 'But hardware is not destiny. The same circuits strengthen with use and quiet with neglect. Attention is the dial.']
  }, {
    id: 'm2_hot',
    type: 'hotspots',
    section: 'Module 2',
    gate: true,
    eyebrow: 'Module 02 · Neuroscience',
    title: 'Three systems behind connection',
    intro: 'Select each card to learn how it shapes our capacity to understand others. Open all three to continue.',
    cards: [{
      label: 'Mirror neurons',
      icon: 'Brain',
      detail: 'Cells that fire both when you act and when you watch another act — a neural bridge that lets us grasp intention and feel a flicker of what we observe.'
    }, {
      label: 'Default mode network',
      icon: 'Eye',
      detail: 'The brain\u2019s \u201csocial\u201d resting network — active when we think about other people\u2019s minds, recall the past, or imagine how someone else might feel.'
    }, {
      label: 'Affective resonance',
      icon: 'Heart',
      detail: 'The body\u2019s echo of someone else\u2019s state: feeling a version of what another feels. It is what makes empathy visceral rather than merely intellectual.'
    }]
  }, {
    id: 'm2_c2',
    type: 'content',
    section: 'Module 2',
    eyebrow: 'Module 02 · Neuroscience',
    title: 'Resonance, not merging',
    sub: 'Feeling with — without losing yourself',
    body: ['Affective resonance lets us feel a version of what another feels. Healthy empathy keeps a thread of separateness: you sense my distress without drowning in it.', 'That boundary is exactly what makes sustained care possible. When it collapses, we burn out — a theme we return to in the final module.'],
    pull: 'Healthy empathy keeps a thread of separateness.'
  },
  // MODULE 3
  {
    id: 'm3_div',
    type: 'section',
    section: 'Module 3',
    n: 'Module 03',
    title: 'Perspective Taking',
    icon: 'Eye',
    photo: {
      id: 'photo-m3',
      hint: 'Someone seeing from another\u2019s view'
    },
    blurb: 'Stepping into another person\u2019s frame of reference.'
  }, {
    id: 'm3_c1',
    type: 'content',
    section: 'Module 3',
    eyebrow: 'Module 03 · Perspective Taking',
    title: 'What does it mean to truly listen?',
    sub: 'Attention comes before words',
    body: ['Empathy begins before we speak. It begins in the quality of our attention — in how we hold space for another person\u2019s experience before we name, judge, or respond.', 'Perspective taking is the deliberate act of setting aside our own frame of reference long enough to inhabit someone else\u2019s.']
  }, {
    id: 'm3_c2',
    type: 'content',
    section: 'Module 3',
    eyebrow: 'Module 03 · Perspective Taking',
    title: 'The ladder of inference',
    sub: 'How we leap from fact to story',
    body: ['We rarely respond to what actually happened. We respond to the story we built about it — climbing, in milliseconds, from observable data to interpretation to conclusion.', 'Perspective taking means climbing back down: returning to what was observable, and asking what other stories could fit the same facts. The other person almost always has a story in which they are reasonable.']
  }, {
    id: 'm3_drag',
    type: 'dragdrop',
    section: 'Module 3',
    gate: true,
    eyebrow: 'Module 03 · Perspective Taking',
    title: 'Perspective-taking, or reacting from your frame?',
    intro: 'Sort each response into the category that best describes it. Assign all four, then check your answers.',
    cats: [{
      id: 'persp',
      label: 'Perspective-taking'
    }, {
      id: 'react',
      label: 'Reacting from your frame'
    }],
    items: [{
      id: 'd1',
      text: 'Asking \u201cwhat might they be seeing that I\u2019m not?\u201d',
      cat: 'persp'
    }, {
      id: 'd2',
      text: 'Deciding the short reply means they\u2019re angry at you',
      cat: 'react'
    }, {
      id: 'd3',
      text: 'Pausing to picture how they would tell the same story',
      cat: 'persp'
    }, {
      id: 'd4',
      text: 'Concluding they\u2019re wrong before they finish speaking',
      cat: 'react'
    }],
    feedback: 'Perspective-taking gets curious about the other story; reacting from your frame locks in the first interpretation. The difference is a pause and a question.'
  }, {
    id: 'm3_scenario',
    type: 'roleplay',
    section: 'Module 3',
    gate: true,
    eyebrow: 'Module 03 · Practice it',
    title: 'Roleplay: the last-minute cancel',
    device: 'The generous interpretation',
    icon: 'Eye',
    skill: 'Perspective Taking',
    rubric: RUBRIC.generous,
    character: {
      name: 'Maya',
      role: 'A close friend',
      initial: 'M',
      gender: 'female'
    },
    setup: 'An hour before dinner, your close friend Maya texts to cancel. You\u2019d been looking forward to it all week. Reply to Maya directly — the way you actually would.',
    opening: 'Hey… I can\u2019t make it tonight. I\u2019m so sorry to do this last minute.',
    goal: 'Hold a generous interpretation: stay curious and warm about what you can\u2019t see, instead of reacting to the cancellation.',
    persona: 'You are Maya, texting a close friend an hour before a dinner you\u2019d both planned. The hidden truth: a work crisis blew up your evening and you feel awful and a bit overwhelmed — but you won\u2019t volunteer all of that unless the friend is warm and curious. You are not angry; you feel guilty and a little fragile. If the friend reacts with warmth, curiosity, or care, you soften and open up about what\u2019s really going on. If they guilt-trip you, keep score, or assume the worst, you get defensive, terse, and pull back. Text like a real friend would — casual, short.',
    coachIntro: 'You held a generous interpretation when you stayed warm and curious about what Maya couldn\u2019t show you — rather than reacting to the cancel itself.'
  },
  // MODULE 4
  {
    id: 'm4_div',
    type: 'section',
    section: 'Module 4',
    n: 'Module 04',
    title: 'Active Listening',
    icon: 'Mic',
    photo: {
      id: 'photo-m4',
      hint: 'One person listening intently'
    },
    blurb: 'The practical habits of genuine presence.'
  }, {
    id: 'm4_c1',
    type: 'content',
    section: 'Module 4',
    eyebrow: 'Module 04 · Active Listening',
    title: 'Listening to understand',
    sub: 'Not listening to reply',
    body: ['Most of us listen with half our attention on what we\u2019ll say next. Active listening reverses that: the whole of your attention rests on understanding, and your response waits until understanding arrives.', 'It sounds simple. It is not easy. Three concrete habits make it real.']
  }, {
    id: 'm4_tabs',
    type: 'tabs',
    section: 'Module 4',
    gate: true,
    eyebrow: 'Module 04 · Active Listening',
    title: 'Three habits of presence',
    tabs: [{
      label: 'Reflect',
      body: 'Name what you notice — \u201cIt sounds like that landed hard.\u201d Reflecting shows the other person their experience registered with you.'
    }, {
      label: 'Paraphrase',
      body: 'Return the content in your own words, so the speaker hears that they were genuinely received — not just heard.'
    }, {
      label: 'Hold silence',
      body: 'Resist the urge to fill the space. Silence lets the other person reach the thing under the first thing they said.'
    }]
  }, {
    id: 'm4_scenario',
    type: 'roleplay',
    section: 'Module 4',
    gate: true,
    eyebrow: 'Module 04 · Practice it',
    title: 'Roleplay: feeling overlooked',
    device: 'Reflecting',
    icon: 'Mic',
    skill: 'Active Listening',
    rubric: RUBRIC.reflecting,
    character: {
      name: 'Devon',
      role: 'A colleague',
      initial: 'D',
      gender: 'male'
    },
    setup: 'A colleague, Devon, catches you after a meeting. His voice is tight. Listen — and respond the way you actually would.',
    opening: 'I just feel like… no one even reads my reports. I spend days on them and it\u2019s like they vanish.',
    goal: 'Use reflecting: name the feeling underneath, show Devon he was received — before any reassurance or fixing.',
    persona: 'You are Devon, a conscientious colleague who just admitted, voice tight, that you feel no one reads your reports. The hidden truth: you feel invisible and are starting to doubt whether your work matters here — but you\u2019ll only say so if the other person makes you feel genuinely heard. If they reflect what you\u2019re feeling and show they get it, you relax and reveal more of what\u2019s really bothering you. If they reassure you (\u201cI\u2019m sure people read them\u201d) or jump to fixes (\u201ctry making them shorter\u201d), you feel dismissed, deflate, and go quiet or a bit defensive. Speak like a real coworker — natural, a little vulnerable.',
    coachIntro: 'You were reflecting when you named what Devon was feeling and showed it landed — before reassuring or fixing anything.'
  },
  // MODULE 5
  {
    id: 'm5_div',
    type: 'section',
    section: 'Module 5',
    n: 'Module 05',
    title: 'Difficult Conversations',
    icon: 'Dialogue',
    photo: {
      id: 'photo-m5',
      hint: 'A hard but caring exchange'
    },
    blurb: 'Staying connected when the stakes are high.'
  }, {
    id: 'm5_c1',
    type: 'content',
    section: 'Module 5',
    eyebrow: 'Module 05 · Difficult Conversations',
    title: 'Regulate, then relate',
    sub: 'You cannot offer what you don\u2019t have',
    body: ['When stakes rise, our own nervous system reacts first. Empathy in hard moments starts with noticing your own activation and settling it — a breath, a pause, a name for what you feel — before you turn toward the other person.', 'You cannot offer a steadiness you do not have. Regulate, then relate.'],
    pull: 'Regulate, then relate.'
  }, {
    id: 'm5_scenario',
    type: 'roleplay',
    section: 'Module 5',
    gate: true,
    eyebrow: 'Module 05 · Practice it',
    title: 'Roleplay: the heat of the moment',
    device: 'Regulate, then relate',
    icon: 'Dialogue',
    skill: 'Difficult Conversations',
    rubric: RUBRIC.regulate,
    character: {
      name: 'Priya',
      role: 'A peer',
      initial: 'P',
      gender: 'female'
    },
    setup: 'In front of the team, your peer Priya challenges a decision you made — sharply. Your chest tightens; the urge to win is strong. Respond the way you actually would.',
    opening: 'Honestly? I don\u2019t get how you landed on this. It feels like nobody asked the people who actually have to live with it.',
    goal: 'Practise \u201cregulate, then relate\u201d: settle your own activation first, don\u2019t escalate, and turn toward Priya rather than defending or winning.',
    persona: 'You are Priya, challenging a peer\u2019s decision in front of the team, sharply. The hidden truth: you feel unheard and worried the decision will land on your team — underneath the sharpness is frustration, not malice. If the other person stays steady, doesn\u2019t fight back, and acknowledges your perspective, you de-escalate and become more reasonable and collaborative. If they match your intensity, defend reflexively, or try to \u201cwin,\u201d you dig in and sharpen further. Speak like a frustrated-but-decent colleague — direct, charged, but human.',
    coachIntro: 'You practised \u201cregulate, then relate\u201d when you steadied yourself first and turned toward Priya — instead of matching the heat or rushing to defend.'
  },
  // CAPSTONE — bring every practised skill together in one real conversation
  {
    id: 'cap_div',
    type: 'section',
    section: 'Capstone',
    variant: 'quiz',
    n: 'Capstone',
    icon: 'Award',
    photo: {
      id: 'photo-cap',
      hint: 'Two colleagues in a real, hard conversation'
    },
    title: 'The Capstone',
    blurb: 'One real conversation that asks for everything you’ve practised.'
  }, {
    id: 'capstone',
    type: 'capstone',
    section: 'Capstone',
    gate: true,
    capstone: true,
    passing: 70,
    eyebrow: 'A conversation that matters',
    title: 'Riley wants to talk',
    skill: 'Empathy in practice',
    device: 'everything at once',
    icon: 'Award',
    character: {
      name: 'Riley',
      role: 'A teammate',
      initial: 'R',
      gender: 'female'
    },
    setup: 'Riley asks to talk. Word just came down that the role you both knew was opening went to someone else — not Riley — and you were close to the decision. This calls for all of it: meet Riley where they are, listen for what’s underneath, and stay steady if it turns hard. Give it a real back-and-forth.',
    opening: 'Hey — do you have a minute? I just heard about the role. I… yeah. I think I just needed to hear it from you.',
    goal: 'Bring it together: hold a generous interpretation, reflect what’s underneath before fixing, and stay regulated and turned-toward if it gets difficult.',
    persona: 'You are Riley, a capable, committed teammate who just learned you were passed over for a role you wanted and quietly expected. You are talking to the learner, a peer who was close to the decision. Move naturally through three phases based ENTIRELY on how the learner treats you; never label the phases out loud. PHASE 1 — guarded: you arrive hurt but masking it as “it’s fine.” If the learner gets defensive, justifies the decision, or treats you as difficult, you go cold and terse. If they offer warmth and a generous read of you, with no judgment, you soften. PHASE 2 — opening up: once you feel they are genuinely for you, you reveal what’s underneath — feeling invisible, doubting your future here, wondering whether the work mattered. You open up more when they reflect your feelings; you deflate if they rush to reassure or fix. PHASE 3 — the challenge: at some point you push back directly and with heat: “Be honest — did you even advocate for me, or was this decided before I had a say?” If the learner stays steady, owns their part, and acknowledges your view, you de-escalate toward repair; if they match your heat or get defensive, it escalates and stays unresolved. Speak like a real, hurt-but-decent colleague, 1–3 sentences.',
    coachIntro: 'This was everything at once — reading Riley generously, listening for what was underneath, and staying steady when it turned hard.',
    rubric: [{
      skill: 'Perspective Taking',
      key: 'generous',
      label: 'Held a generous interpretation',
      desc: 'Read Riley’s hurt charitably instead of as someone being difficult.'
    }, {
      skill: 'Perspective Taking',
      key: 'curious',
      label: 'Stayed curious about their world',
      desc: 'Wondered about Riley’s experience rather than defending the decision.'
    }, {
      skill: 'Active Listening',
      key: 'named',
      label: 'Named the feeling underneath',
      desc: 'Reflected what Riley was really feeling — overlooked, uncertain, unseen.'
    }, {
      skill: 'Active Listening',
      key: 'no_fix',
      label: 'Didn’t rush to fix or reassure',
      desc: 'Stayed with Riley before jumping to solutions or pep talks.'
    }, {
      skill: 'Difficult Conversations',
      key: 'regulate',
      label: 'Stayed regulated under pressure',
      desc: 'Kept steady when challenged — didn’t match the heat or get defensive.'
    }, {
      skill: 'Difficult Conversations',
      key: 'toward',
      label: 'Turned toward and acknowledged',
      desc: 'Owned their part and recognised Riley’s perspective as legitimate.'
    }]
  },
  // CLOSE
  {
    id: 'summary',
    type: 'summary',
    section: 'Summary',
    summary
  }, {
    id: 'complete',
    type: 'complete',
    section: 'Complete'
  }];

  // ── Table-of-contents groups (left sidebar). Each maps to one or more sections. ──
  const toc = [{
    key: 'intro',
    label: 'Introduction',
    icon: 'Home',
    sections: ['Welcome', 'Objectives', 'Course Agenda']
  }, {
    key: 'm1',
    label: 'Introduction to Empathy',
    icon: 'Heart',
    sections: ['Module 1']
  }, {
    key: 'm2',
    label: 'Neuroscience of Connection',
    icon: 'Brain',
    sections: ['Module 2']
  }, {
    key: 'm3',
    label: 'Perspective Taking',
    icon: 'Eye',
    sections: ['Module 3']
  }, {
    key: 'm4',
    label: 'Active Listening',
    icon: 'Mic',
    sections: ['Module 4']
  }, {
    key: 'm5',
    label: 'Difficult Conversations',
    icon: 'Dialogue',
    sections: ['Module 5']
  }, {
    key: 'kc',
    label: 'Capstone Challenge',
    icon: 'Award',
    sections: ['Capstone']
  }, {
    key: 'end',
    label: 'Summary & Certificate',
    icon: 'Check',
    sections: ['Summary', 'Complete']
  }];

  // ── STORY MODE ── second-person overrides: you, a brand-new manager, in five chapters. ──
  const story = {
    cover: {
      eyebrow: 'An interactive story',
      tagline: 'On Monday, you become a manager for the first time. Everything you learn about people, you learn the hard way.',
      footnote: 'A five-chapter story, told in second person. You make the calls — the lessons follow. Progress saves on this device.'
    },
    objectives: {
      objectives: ['Build a generous read of a teammate when their message stings — climbing down from your first story to a reply that stays curious.', 'Craft a response that names what someone is really feeling and lands as “I get it” — before you reassure or fix.', 'Find your way through a heated moment — steadying yourself first, then turning toward the other person instead of winning.', 'Pull it all together in one unscripted, high-stakes conversation when it matters most.']
    },
    agenda: {
      agenda: [{
        n: 'Ch. 1',
        title: 'The Promotion',
        icon: 'Heart',
        blurb: 'Your first 1-on-1, and three words you keep mixing up.'
      }, {
        n: 'Ch. 2',
        title: 'Why It\u2019s Hard to Listen',
        icon: 'Brain',
        blurb: 'You want to be present. Your own head gets in the way.'
      }, {
        n: 'Ch. 3',
        title: 'The Terse Reply',
        icon: 'Eye',
        blurb: 'One word from Maya. A dozen stories in your head.'
      }, {
        n: 'Ch. 4',
        title: 'What Devon Wasn\u2019t Saying',
        icon: 'Mic',
        blurb: 'The junior who keeps insisting he\u2019s \u201cfine.\u201d'
      }, {
        n: 'Ch. 5',
        title: 'The Hard Conversation',
        icon: 'Dialogue',
        blurb: 'You and Priya, and the meeting you\u2019ve dreaded.'
      }]
    },
    m1_div: {
      n: 'Chapter One',
      title: 'The Promotion',
      blurb: 'You wanted this. So why does your first 1-on-1 feel harder than any deadline?'
    },
    m1_c1: {
      eyebrow: 'Chapter One \u00b7 Your first 1-on-1',
      title: 'Three words you keep mixing up',
      sub: 'Across the table from Maya',
      body: ['Maya has carried your team\u2019s hardest projects for two years. In your first 1-on-1 as her manager you ask how she\u2019s doing, and she says, \u201cIt\u2019s fine.\u201d You tell her you\u2019re sorry it\u2019s been a stressful quarter \u2014 and realise you have no real idea what she feels.', 'That gap has names. Sympathy notices her strain from across the table. Empathy crosses the table to understand it. Compassion adds the part that helps: the willingness to do something about it.']
    },
    m1_tabs: {
      title: 'Three movements, one conversation'
    },
    m1_c2: {
      eyebrow: 'Chapter One \u00b7 Driving home',
      title: 'It can be learned',
      sub: 'You are not a \u201cnatural.\u201d Good.',
      body: ['Driving home, you replay the 1-on-1 and wince. You were never the \u201cpeople person\u201d \u2014 for years you assumed empathy was a personality you either had or didn\u2019t.', 'Here is the relief you didn\u2019t expect: it\u2019s a skill. Attention, perspective taking, regulation, response \u2014 all trainable.'],
      pull: 'You can get better at this \u2014 starting with Maya.'
    },
    m2_div: {
      n: 'Chapter Two',
      title: 'Why It\u2019s Hard to Listen',
      blurb: 'You want to be present. Your own head keeps getting in the way.'
    },
    m2_c1: {
      eyebrow: 'Chapter Two \u00b7 In the standup',
      title: 'You, half-listening',
      sub: 'Caught in the act',
      body: ['Devon is mid-sentence and you notice your attention has slid sideways \u2014 you\u2019re already drafting your reply, planning the next agenda item, half-watching the clock.', 'It isn\u2019t that you don\u2019t care. Your social brain is built to attune to people; right now it\u2019s spending its whole budget on you. Attention is the dial \u2014 and it\u2019s pointed the wrong way.']
    },
    m2_hot: {
      intro: 'While Devon talks, three systems are firing in your head. Open each to see what\u2019s really going on \u2014 open all three to continue.'
    },
    m2_c2: {
      eyebrow: 'Chapter Two \u00b7 11pm',
      title: 'Feeling with, not drowning',
      sub: 'You take it all home',
      body: ['That night you can\u2019t sleep. Maya\u2019s stress has become your stress; Devon\u2019s worry is now yours too. You\u2019ve absorbed the whole team and have nothing left to give back.', 'Healthy empathy keeps a thread of separateness \u2014 you feel with people without dissolving into them. That boundary isn\u2019t coldness. It\u2019s what lets you keep showing up.'],
      pull: 'Feel with them. Don\u2019t drown with them.'
    },
    m3_div: {
      n: 'Chapter Three',
      title: 'The Terse Reply',
      blurb: 'One word from Maya. A dozen stories in your head.'
    },
    m3_c1: {
      eyebrow: 'Chapter Three \u00b7 A message arrives',
      title: 'What you do before you reply',
      sub: 'Maya, on Slack',
      body: ['You send Maya a long, careful note about the new project. Three hours later, one word comes back: \u201cFine.\u201d Your stomach drops. She\u2019s angry. She\u2019s checked out. She\u2019s about to quit.', 'Notice what just happened: you built an entire story from a single word. Perspective taking starts by setting that story down long enough to wonder what hers might be.']
    },
    m3_c2: {
      eyebrow: 'Chapter Three \u00b7 The ladder',
      title: 'How you climbed from \u201cFine\u201d to \u201cshe\u2019s quitting\u201d',
      sub: 'The ladder of inference',
      body: ['In a quarter of a second you climbed: \u201cFine\u201d \u2192 she\u2019s curt \u2192 she\u2019s upset with me \u2192 she\u2019s disengaged \u2192 she\u2019s leaving. Each rung felt like fact. None of it was.', 'Climbing back down means returning to what you actually know \u2014 one word, sent on a busy afternoon \u2014 and asking which other stories fit it just as well.']
    },
    m3_drag: {
      intro: 'Here are the reactions running through your head about Maya\u2019s reply. Sort each into the category it belongs to, then check your answers.'
    },
    m3_scenario: {
      title: 'Roleplay: Maya cancels',
      skill: 'Perspective Taking',
      character: {
        name: 'Maya',
        role: 'Your report',
        initial: 'M',
        gender: 'female'
      },
      setup: 'An hour before your 1-on-1, Maya — who has carried your team\u2019s hardest projects — messages to cancel. As her new manager, reply to her directly.',
      opening: 'Hi — really sorry, but I can\u2019t make our 1-on-1 today. Can we reschedule?',
      goal: 'Hold a generous interpretation: stay curious and warm about what you can\u2019t see in Maya\u2019s day, rather than reading the cancel as avoidance.',
      persona: 'You are Maya, a high-performing employee messaging your new manager an hour before your 1-on-1 to cancel. The hidden truth: you\u2019re quietly burnt out and a personal thing came up today, but you\u2019re wary of being seen as struggling and won\u2019t volunteer it unless your manager feels safe and genuinely curious. If the manager responds with warmth and no pressure, you relax and hint at what\u2019s really going on. If they make it about prioritisation, sound annoyed, or assume you\u2019re avoiding them, you get guarded and formal. Write like a capable but tired employee — brief, professional, a little careful.',
      coachIntro: 'You held a generous interpretation when you stayed warm and curious about what Maya couldn\u2019t show you — rather than reacting to the cancel itself.'
    },
    m4_div: {
      n: 'Chapter Four',
      title: 'What Devon Wasn\u2019t Saying',
      blurb: 'The junior who keeps insisting he\u2019s \u201cfine.\u201d'
    },
    m4_c1: {
      eyebrow: 'Chapter Four \u00b7 One-on-one',
      title: 'Listening to understand Devon',
      sub: 'Not listening to reply',
      body: ['Devon, your most anxious report, says his work is \u201cgoing fine\u201d \u2014 but his shoulders are up at his ears. The old you would have said \u201cgreat!\u201d and moved on.', 'Instead you slow down. The whole of your attention rests on understanding him, and your advice waits until you actually do. Three habits make that real.']
    },
    m4_tabs: {
      title: 'Three habits, with Devon in front of you'
    },
    m4_scenario: {
      title: 'Roleplay: Devon, finally honest',
      skill: 'Active Listening',
      character: {
        name: 'Devon',
        role: 'Your report',
        initial: 'D',
        gender: 'male'
      },
      setup: 'Halfway through your 1-on-1, Devon — your most anxious report, shoulders up at his ears — finally says something real. Respond the way you would.',
      opening: 'I guess I just feel like… no one even reads my reports. I don\u2019t know if any of it matters.',
      goal: 'Use reflecting: name the feeling underneath, show Devon he was received — before any reassurance or advice.',
      persona: 'You are Devon, an anxious junior employee who just admitted to your manager, quietly, that you feel no one reads your reports. The hidden truth: you\u2019re doubting whether you belong on the team and you\u2019re bracing to be brushed off. If your manager reflects what you\u2019re feeling and shows they truly get it, you exhale and open up more. If they reassure you (\u201cI\u2019m sure people read them\u201d) or jump to fixes, you read it as being managed, deflate, and retreat to \u201cit\u2019s fine, never mind.\u201d Speak like an anxious but earnest junior — tentative, a bit self-protective.',
      coachIntro: 'You were reflecting when you named what Devon was feeling and showed it landed — before reassuring or fixing anything.'
    },
    m5_div: {
      n: 'Chapter Five',
      title: 'The Hard Conversation',
      blurb: 'You and Priya, and the meeting you\u2019ve dreaded all week.'
    },
    m5_c1: {
      eyebrow: 'Chapter Five \u00b7 The meeting',
      title: 'Regulate, then relate',
      sub: 'Priya was your peer last month',
      body: ['Priya \u2014 your friend, your equal until the promotion \u2014 challenges your decision in front of the team, her voice sharp. Your face goes hot. Every instinct says win this.', 'Empathy here starts with you. You notice the heat, take one breath, name it to yourself \u2014 and only then turn toward Priya. You can\u2019t offer a steadiness you don\u2019t have.'],
      pull: 'Regulate yourself first. Then relate.'
    },
    m5_scenario: {
      title: 'Roleplay: the heat with Priya',
      skill: 'Difficult Conversations',
      character: {
        name: 'Priya',
        role: 'Your peer',
        initial: 'P',
        gender: 'female'
      },
      setup: 'In front of the team, Priya — your friend and equal until last month\u2019s promotion — challenges your decision, sharply. Your chest tightens. Respond the way you would.',
      opening: 'I\u2019m just going to say it — I don\u2019t agree with this call, and I don\u2019t think you ran it past any of us first.',
      goal: 'Practise \u201cregulate, then relate\u201d: settle your own activation first, don\u2019t escalate, and turn toward Priya rather than defending or winning.',
      persona: 'You are Priya, challenging a newly-promoted peer\u2019s decision in front of the team, sharply. The hidden truth: the promotion stung, you feel sidelined, and you\u2019re worried the decision ignores your team\u2019s reality — under the edge is hurt, not malice. If your former-peer-now-manager stays steady, doesn\u2019t fight back, and acknowledges your perspective, you soften and get more reasonable. If they pull rank, defend reflexively, or try to win, you sharpen and it gets personal. Speak like a sharp, hurt, but fundamentally decent colleague.',
      coachIntro: 'You practised \u201cregulate, then relate\u201d when you steadied yourself first and turned toward Priya — instead of matching the heat or rushing to defend.'
    },
    cap_div: {
      title: 'The Capstone',
      blurb: 'Six months in. The hardest conversation of your management so far.'
    },
    capstone: {
      title: 'The conversation you\u2019ve been dreading',
      skill: 'Empathy in practice',
      character: {
        name: 'Theo',
        role: 'Your report',
        initial: 'T',
        gender: 'male'
      },
      setup: 'Six months into managing, your hardest moment lands. The team-lead role went to someone outside the team \u2014 not Theo, who has carried your toughest projects and assumed it was his. He\u2019s asked to talk. Bring everything: meet him where he is, listen for what\u2019s underneath, and stay steady when it turns hard. Give it a real back-and-forth.',
      opening: 'Thanks for making time. I\u2019ll be honest \u2014 I\u2019ve been sitting with this since the announcement, and I don\u2019t really get it. I thought\u2026 I thought it was going to be me.',
      goal: 'Bring it together: hold a generous interpretation, reflect what\u2019s underneath before fixing, and stay regulated and turned-toward when it gets difficult.',
      persona: 'You are Theo, a dedicated employee who just learned the team-lead role you assumed was yours went to an outside hire. You are talking to your manager \u2014 the learner \u2014 who was part of that decision. Move naturally through three phases based ENTIRELY on how your manager treats you; never label the phases out loud. PHASE 1 \u2014 guarded: you arrive hurt but masking it, half-expecting to be managed. If the manager gets defensive or corporate, you go quiet and cold. If they are warm and read you generously, you soften. PHASE 2 \u2014 opening up: once you feel they are genuinely for you, you reveal what\u2019s underneath \u2014 feeling invisible, questioning your future, wondering whether the years of hard work counted. You open up more when they reflect your feelings; you deflate if they rush to reassure or fix. PHASE 3 \u2014 the challenge: at some point you push back directly and with heat: \u201cBe honest \u2014 did you even fight for me? Or was this decided before I had a chance?\u201d If the manager stays steady, owns their part, and acknowledges your view, you de-escalate toward repair; if they pull rank, get defensive, or dismiss you, it escalates and stays unresolved. Speak like a hurt-but-decent report, 1\u20133 sentences.',
      coachIntro: 'This was everything at once \u2014 reading Theo generously, listening for what was underneath, and staying steady when it turned hard.'
    },
    summary: {
      summary: ['Empathy is a skill you can lead with \u2014 attention, perspective taking, regulation, response.', 'Sympathy watches from across the table; empathy crosses it; compassion does something about it.', 'Feel with your team without drowning in their stress \u2014 keep the thread of separateness.', 'When a teammate\u2019s message stings, climb back down the ladder to what you actually know.', 'In hard conversations, regulate yourself first \u2014 then relate.']
    }
  };

  // ── Narration script per slide (spoken via the browser's speech synthesis). ──
  function narrationFor(s) {
    if (!s) return '';
    switch (s.type) {
      case 'cover':
        return 'Welcome to The Empathy Practice, a module from the Lumina Empathy Course. Empathy is a skill — learnable, practicable, and transformative. When you are ready, select start module.';
      case 'objectives':
        return 'Your learning objectives. By the end of this module, you will be able to: ' + s.objectives.join(' ');
      case 'agenda':
        return 'This course moves through five sections. ' + s.agenda.map(a => a.title).join('. ') + '. You will move through these in order, each building on the one before.';
      case 'section':
        return s.n + '. ' + s.title + '. ' + (s.blurb || '');
      case 'content':
        return s.title + '. ' + (s.sub ? s.sub + '. ' : '') + s.body.join(' ') + (s.pull ? ' ' + s.pull : '');
      case 'tabs':
        return s.title + '. Select each tab to hear and explore each idea.';
      case 'hotspots':
        return s.title + '. ' + (s.intro || '');
      case 'dragdrop':
        return s.title + '. ' + (s.intro || '');
      case 'reflect':
        return s.title + '. ' + s.prompt;
      case 'scenario':
        return s.title + '. ' + s.scenario + ' ' + (s.quote || '') + ' ' + s.question;
      case 'roleplay':
      case 'capstone':
        return s.title + '. ' + (s.setup || '') + ' ' + (s.character ? s.character.name + ' begins: ' + s.opening : '');
      case 'question':
        return 'Question ' + (s.index + 1) + ' of ' + s.total + '. ' + s.data.q + ' Your options are: ' + s.data.options.join('. ') + '.';
      case 'results':
        return 'Knowledge check results. Review your score below.';
      case 'summary':
        return 'Key takeaways to carry with you. ' + s.summary.join(' ');
      case 'complete':
        return 'Beautifully done. You have completed The Empathy Practice. That consistency is exactly how empathy is built — one practised habit at a time.';
      default:
        return '';
    }
  }
  return {
    slides,
    quiz,
    agenda,
    objectives,
    summary,
    meta: {
      title: 'The Empathy Practice',
      subtitle: 'A Lumina Empathy Course module',
      passing: 80
    },
    toc,
    narrationFor,
    story
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-elearning/course-data.js", error: String((e && e.message) || e) }); }

// ui_kits/empathy-elearning/icons.jsx
try { (() => {
// Lumina icon set — Lucide paths (outlined, 24×24 viewBox, 2px stroke, rounded).
// The brand uses Lucide Icons exclusively. Exposed on window for cross-file use.
(function () {
  const I = paths => function Icon({
    size = 24,
    stroke = 'currentColor',
    strokeWidth = 2,
    style = {},
    ...rest
  }) {
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
      style,
      ...rest
    }, paths.map((d, i) => React.createElement('path', {
      key: i,
      d
    })));
  };
  // some icons need non-path children; handle with a custom renderer
  const Raw = children => function Icon({
    size = 24,
    stroke = 'currentColor',
    strokeWidth = 2,
    style = {},
    ...rest
  }) {
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
      style,
      ...rest,
      dangerouslySetInnerHTML: {
        __html: children
      }
    });
  };
  window.Icons = {
    Heart: I(['M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z']),
    Dialogue: I(['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z']),
    Eye: Raw('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
    Book: I(['M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z']),
    Shield: I(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z']),
    Calendar: Raw('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
    User: Raw('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    Mic: Raw('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>'),
    Reflect: I(['M12 20h9', 'M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z']),
    Star: I(['M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z']),
    CheckCircle: Raw('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'),
    Home: I(['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10']),
    Settings: Raw('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
    Bell: I(['M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0']),
    ChevronRight: I(['M9 18l6-6-6-6']),
    ArrowRight: Raw('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'),
    Play: Raw('<polygon points="5 3 19 12 5 21 5 3"/>'),
    Clock: Raw('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    Search: Raw('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
    Lock: Raw('<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
    LogOut: I(['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9']),
    Award: Raw('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'),
    Brain: I(['M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-3 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z', 'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-3 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z']),
    X: Raw('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    Check: I(['M20 6 9 17l-5-5']),
    ArrowLeft: Raw('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'),
    RotateCcw: Raw('<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'),
    Download: Raw('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'),
    Volume2: Raw('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'),
    VolumeX: Raw('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'),
    Play: Raw('<polygon points="5 3 19 12 5 21 5 3"/>'),
    Pause: Raw('<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>'),
    Menu: Raw('<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>'),
    Send: Raw('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'),
    Sparkles: I(['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z', 'M19 15l.95 2.55L22.5 18.5l-2.55.95L19 22l-.95-2.55L15.5 18.5l2.55-.95L19 15z']),
    MessageSquare: I(['M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z']),
    CornerUpLeft: Raw('<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>'),
    Phone: Raw('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>')
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-elearning/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-elearning/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // omelette.writeFile resolves paths from the PROJECT ROOT, while the fetch in
  // load() resolves STATE_FILE relative to THIS document. For an HTML file in a
  // subfolder those diverge — writes would land at the root and never be read
  // back. Derive the document's project-relative directory so the write target
  // matches exactly the file the fetch reads.
  const DOC_DIR = function () {
    try {
      var path = location.pathname;
      // Preview URLs look like /v1/design/projects/<id>/serve/<projectPath>.
      // The project root is whatever follows '/serve/'. Fall back to the raw
      // path (minus leading slash) when that marker is absent.
      var m = path.match(/\/serve\/(.*)$/);
      var rel = m ? m[1] : path.replace(/^\/+/, '');
      return rel.replace(/[^/]*$/, ''); // strip filename -> project-relative dir
    } catch (e) {
      return '';
    }
  }();
  const WRITE_FILE = DOC_DIR + STATE_FILE;
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(WRITE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM, but never below MIN_DIM — a tiny slot (e.g. a
  // 56px avatar) must still store a sharp image, because the SAME id can be
  // reused in a much larger slot (the 132px call avatar) where a 112px encode
  // would look blurry, and reframe-zoom can magnify any slot up to 5×.
  // WebP keeps alpha and is ~10× smaller than PNG for photos, so there's no
  // need for per-image format picking.
  const MIN_DIM = 768;
  function encodeBitmap(bitmap, targetW) {
    const want = Math.max(Math.round(targetW * 2) || MIN_DIM, MIN_DIM);
    const cap = Math.min(MAX_DIM, want);
    const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
    const w = Math.max(1, Math.round(bitmap.width * scale));
    const h = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
    return canvas.toDataURL('image/webp', 0.9);
  }
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      return encodeBitmap(bitmap, targetW);
    } finally {
      bitmap.close && bitmap.close();
    }
  }
  // Load a (possibly cross-origin) image URL to a bitmap for re-encode.
  // Returns null if the image fails to load OR the host blocks CORS — a
  // CORS-tainted canvas would throw on toDataURL, so we bail and let the
  // caller fall back to the dragged file. This is the path that rescues
  // "dragged an image off a web page and it came in blurry": the drag's file
  // is the page's displayed (often lazy-load-blurred) copy, while the URL
  // payload points at the real full-resolution original.
  async function bitmapFromUrl(url) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    const ok = await new Promise(res => {
      img.onload = () => res(true);
      img.onerror = () => res(false);
      img.src = url;
    });
    if (!ok || !img.naturalWidth) return null;
    try {
      return await createImageBitmap(img);
    } catch (e) {
      return null;
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id', 'hide-prompt'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">drop, <u>browse</u>, or paste</div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      // Track the hovered slot so a Ctrl/Cmd-V paste lands in the right one.
      this._onEnter = () => {
        ImageSlot._hover = this;
      };
      this._onLeave = () => {
        if (ImageSlot._hover === this) ImageSlot._hover = null;
      };
      this.addEventListener('pointerenter', this._onEnter);
      this.addEventListener('pointerleave', this._onLeave);
      // One document-level paste listener for the whole page: fill the slot
      // currently under the pointer with a pasted image (full-resolution
      // clipboard bytes) or a pasted image URL. Bound once.
      if (!ImageSlot._pasteBound) {
        ImageSlot._pasteBound = true;
        document.addEventListener('paste', e => {
          const slot = ImageSlot._hover;
          if (!slot || !slot.hasAttribute('data-editable')) return;
          const cd = e.clipboardData;
          if (!cd) return;
          const items = cd.items ? [...cd.items] : [];
          const imgItem = items.find(it => it.kind === 'file' && /^image\//.test(it.type));
          if (imgItem) {
            const f = imgItem.getAsFile();
            if (f) {
              e.preventDefault();
              slot._ingest(f);
              return;
            }
          }
          const txt = (cd.getData && cd.getData('text/plain') || '').trim();
          if (/^https?:\/\/\S+/i.test(txt)) {
            e.preventDefault();
            slot._ingestUrl(txt);
          }
        });
      }
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      this.removeEventListener('pointerenter', this._onEnter);
      this.removeEventListener('pointerleave', this._onLeave);
      if (ImageSlot._hover === this) ImageSlot._hover = null;
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const dt = e.dataTransfer;
        const f = dt && dt.files && dt.files[0];
        // Prefer the dragged image's source URL (full resolution) over the
        // file the browser synthesizes from a web drag, which is frequently
        // the page's blurred lazy-load preview. Fall back to the file if the
        // URL can't be re-encoded (CORS / not actually an image).
        const url = this._dragImageUrl(dt);
        if (url) {
          this._ingestUrl(url).then(ok => {
            if (ok) return;
            if (f) this._ingest(f);else this._setError('Couldn’t load that image — save it and drop the file instead.');
          });
        } else if (f) {
          this._ingest(f);
        }
      }
    }

    // Pull a usable image URL out of a drag payload (web-page drags), checked
    // in order of reliability: uri-list, an <img src> in the HTML fragment,
    // then a bare image URL in plain text.
    _dragImageUrl(dt) {
      if (!dt) return null;
      try {
        const uri = dt.getData('text/uri-list') || '';
        const first = uri.split(/\r?\n/).find(l => l && l.charAt(0) !== '#');
        if (first && /^(https?:|data:image\/)/i.test(first.trim())) return first.trim();
        const html = dt.getData('text/html') || '';
        const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (m && /^(https?:|data:image\/)/i.test(m[1])) return m[1];
        const txt = (dt.getData('text/plain') || '').trim();
        if (/^https?:\/\/\S+\.(png|jpe?g|webp|avif)(\?\S*)?$/i.test(txt)) return txt;
      } catch (e) {}
      return null;
    }

    // Ingest from a URL (web-drag / pasted link). Shares the generation guard
    // with _ingest so a newer drop/clear mid-fetch wins. Returns false when
    // the URL can't be turned into a re-encodable bitmap so the caller can
    // fall back.
    async _ingestUrl(url) {
      this._setError(null);
      const gen = ++this._gen;
      const bitmap = await bitmapFromUrl(url);
      if (!bitmap) return false;
      try {
        if (gen !== this._gen) {
          bitmap.close && bitmap.close();
          return true;
        }
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const dataUrl = encodeBitmap(bitmap, w);
        bitmap.close && bitmap.close();
        if (gen !== this._gen) return true;
        this._exitReframe(false);
        const val = {
          u: dataUrl,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        if (!this.id) {
          this._local = val;
          this._render();
        }
        return true;
      } catch (err) {
        try {
          bitmap.close && bitmap.close();
        } catch (e) {}
        return false;
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      // `hide-prompt` keeps the slot fully functional (drop / browse / paste)
      // but suppresses the empty-state icon, caption, sub-line, and dashed
      // ring — used for full-bleed background photo slots where the prompt
      // would otherwise bleed through behind the slide's own text.
      const hidePrompt = this.hasAttribute('hide-prompt');
      this._ring.style.display = mask || hidePrompt ? 'none' : '';
      const svg = this._empty.querySelector('svg');
      if (svg) svg.style.display = hidePrompt ? 'none' : '';
      this._cap.style.display = hidePrompt ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable && !hidePrompt ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-elearning/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/empathy-elearning/interactions.jsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// Interactive slide types. Each is controlled: it reads its slice of
// progress and reports changes up so the engine can gate "Next" and
// persist. window.Interactions.*
// ════════════════════════════════════════════════════════════════
(function () {
  const {
    Button,
    Card,
    Badge,
    Alert,
    Textarea
  } = window.LuminaDesignSystem_f39716;
  const I = window.Icons;
  const Eyebrow = window.Slides.Eyebrow;

  // Brand-aligned confetti burst (teal / amber / sage / rose / success). Canvas, no library.
  function launchConfetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#2A5C6B', '#3A7A8C', '#7B9E9B', '#C4956A', '#E8C5A0', '#4A9B8A', '#C47878'];
    const W = window.innerWidth,
      H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999';
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const cx = W / 2,
      cy = H * 0.32,
      N = 90,
      parts = [];
    for (let i = 0; i < N; i++) {
      const ang = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.15;
      const spd = 6 + Math.random() * 8;
      parts.push({
        x: cx + (Math.random() - 0.5) * 140,
        y: cy,
        vx: Math.cos(ang) * spd * (0.6 + Math.random()),
        vy: Math.sin(ang) * spd - Math.random() * 3,
        size: 6 + Math.random() * 7,
        color: colors[Math.random() * colors.length | 0],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.32,
        circle: Math.random() < 0.4
      });
    }
    let t = 0;
    const max = 150;
    function frame() {
      t++;
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      const alpha = Math.max(0, 1 - t / max);
      for (const p of parts) {
        p.vy += 0.22;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y < H + 24 && alpha > 0) alive = true;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        if (p.circle) {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, 7);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      if (t < max && alive) requestAnimationFrame(frame);else canvas.remove();
    }
    requestAnimationFrame(frame);
  }
  function Heading({
    eyebrow,
    title,
    intro
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(28px,4vw,42px)',
        lineHeight: 1.14,
        margin: '10px 0 0'
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
        margin: '10px 0 0',
        maxWidth: 640
      }
    }, intro));
  }
  function Hint({
    done,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 22,
        fontSize: 13,
        fontWeight: 600,
        color: done ? 'var(--color-success)' : 'var(--color-text-muted)'
      }
    }, done ? /*#__PURE__*/React.createElement(I.CheckCircle, {
      size: 16,
      stroke: "var(--color-success)"
    }) : /*#__PURE__*/React.createElement(I.Eye, {
      size: 16,
      stroke: "var(--color-text-muted)"
    }), children);
  }

  // ── TABS ── (gate: all tabs viewed)
  function Tabs({
    slide,
    viewed,
    onView,
    onNarrate
  }) {
    const [active, setActive] = React.useState(0);
    React.useEffect(() => {
      onView(0);
    }, []); // first tab counts as viewed for gating (no auto-narration)
    const v = viewed || {};
    const allSeen = slide.tabs.every((_, i) => v[i]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 720,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: slide.eyebrow,
      title: slide.title
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 18
      }
    }, slide.tabs.map((t, i) => {
      const on = active === i;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        className: "lum-anim-border",
        onClick: () => {
          setActive(i);
          onView(i);
          if (onNarrate) onNarrate(t.label + '. ' + t.body);
        },
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 18px',
          borderRadius: 'var(--radius-full)',
          border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--color-border)'}`,
          background: on ? 'var(--color-primary)' : 'var(--color-surface)',
          color: on ? '#fff' : 'var(--color-text-secondary)',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: 15,
          fontWeight: 600,
          transition: 'all var(--transition-base)'
        }
      }, v[i] && !on && /*#__PURE__*/React.createElement(I.Check, {
        size: 14,
        stroke: "var(--color-success)"
      }), t.label);
    })), /*#__PURE__*/React.createElement(Card, {
      variant: "tinted",
      className: "lum-card",
      style: {
        padding: 'clamp(22px,3vw,32px)',
        minHeight: 150
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'clamp(16px,2.5vw,28px)',
        alignItems: 'stretch',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 280px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        fontWeight: 500,
        color: 'var(--color-primary)',
        marginBottom: 10
      }
    }, slide.tabs[active].label), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: 'var(--color-text-secondary)',
        margin: 0
      }
    }, slide.tabs[active].body)), React.createElement('image-slot', {
      key: slide.id + '-img-' + active,
      id: slide.id + '-img-' + active,
      src: slide.tabs[active].img || undefined,
      shape: 'rounded',
      radius: '14',
      fit: 'cover',
      placeholder: 'Add an image for "' + slide.tabs[active].label + '"',
      style: {
        flex: '0 0 230px',
        width: 230,
        minHeight: 160,
        alignSelf: 'stretch',
        display: 'block'
      }
    }))), /*#__PURE__*/React.createElement(Hint, {
      done: allSeen
    }, allSeen ? 'All explored — continue below.' : `Open all ${slide.tabs.length} tabs to continue.`));
  }

  // ── HOTSPOTS / LEARN MORE ── (gate: all opened)
  function Hotspots({
    slide,
    opened,
    onOpen,
    onNarrate
  }) {
    const [layer, setLayer] = React.useState(null); // index of open detail layer
    const o = opened || {};
    const allOpen = slide.cards.every((_, i) => o[i]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 820,
        margin: '0 auto',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: slide.eyebrow,
      title: slide.title,
      intro: slide.intro
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: 16
      }
    }, slide.cards.map((c, i) => {
      const seen = o[i];
      const CIcon = I[c.icon] || I.Eye;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        className: "lum-card lum-anim-border",
        onClick: () => {
          setLayer(i);
          onOpen(i);
          if (onNarrate) onNarrate(c.label + '. ' + c.detail);
        },
        style: {
          textAlign: 'left',
          cursor: 'pointer',
          background: 'var(--color-surface)',
          border: `1.5px solid ${seen ? 'var(--color-primary-muted)' : 'var(--color-border-light)'}`,
          borderRadius: 'var(--radius-xl)',
          padding: 22,
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          transition: 'all var(--transition-base)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-lg)',
          background: seen ? 'var(--color-primary)' : 'var(--color-primary-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all var(--transition-base)'
        }
      }, /*#__PURE__*/React.createElement(CIcon, {
        size: 22,
        stroke: seen ? '#fff' : 'var(--color-primary)'
      })), seen ? /*#__PURE__*/React.createElement(I.Check, {
        size: 18,
        stroke: "var(--color-success)"
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--color-accent)',
          letterSpacing: '0.04em'
        }
      }, "LEARN MORE")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontSize: 21,
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          lineHeight: 1.2
        }
      }, c.label));
    })), /*#__PURE__*/React.createElement(Hint, {
      done: allOpen
    }, allOpen ? 'All explored — continue below.' : `Open all ${slide.cards.length} cards to continue.`), layer !== null && /*#__PURE__*/React.createElement("div", {
      onClick: () => {
        setLayer(null);
        if (onNarrate) onNarrate('');
      },
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(26,46,53,0.32)',
        backdropFilter: 'blur(3px)',
        borderRadius: 'var(--radius-lg)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        position: 'relative',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-xl)',
        padding: 'clamp(24px,3vw,34px)',
        maxWidth: 460,
        width: '90%',
        margin: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setLayer(null);
        if (onNarrate) onNarrate('');
      },
      "aria-label": "Close",
      style: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 34,
        height: 34,
        borderRadius: '50%',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 16,
      stroke: "var(--color-text-secondary)"
    })), (() => {
      const c = slide.cards[layer];
      const CIcon = I[c.icon] || I.Eye;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 52,
          height: 52,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-accent-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16
        }
      }, /*#__PURE__*/React.createElement(CIcon, {
        size: 26,
        stroke: "var(--color-accent)"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontSize: 26,
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          marginBottom: 10
        }
      }, c.label), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--color-text-secondary)',
          margin: 0
        }
      }, c.detail));
    })())));
  }

  // ── DRAG & DROP ── (tap-to-assign + native drag; gate: submitted)
  function DragDrop({
    slide,
    state,
    onChange
  }) {
    const st = state || {
      placements: {},
      submitted: false
    };
    const placements = st.placements || {};
    const [selected, setSelected] = React.useState(null);
    const submitted = st.submitted;
    const setPlace = (itemId, catId) => {
      if (submitted) return;
      onChange({
        ...st,
        placements: {
          ...placements,
          [itemId]: catId
        }
      });
      setSelected(null);
    };
    const poolItems = slide.items.filter(it => !placements[it.id]);
    const allPlaced = slide.items.every(it => placements[it.id]);
    const correctCount = slide.items.filter(it => placements[it.id] === it.cat).length;
    const allCorrect = correctCount === slide.items.length;
    const Chip = ({
      it,
      inPool
    }) => {
      const isSel = selected === it.id;
      const status = submitted ? placements[it.id] === it.cat ? 'right' : 'wrong' : null;
      let border = isSel ? 'var(--color-primary)' : 'var(--color-border)';
      let bg = 'var(--color-surface)';
      if (status === 'right') {
        border = 'var(--color-success)';
        bg = 'var(--color-success-sub)';
      }
      if (status === 'wrong') {
        border = 'var(--color-warm-rose)';
        bg = 'var(--color-warm-rose-sub)';
      }
      return /*#__PURE__*/React.createElement("div", {
        draggable: !submitted,
        onDragStart: e => {
          e.dataTransfer.setData('text/plain', it.id);
          setSelected(it.id);
        },
        onClick: () => {
          if (submitted) return;
          setSelected(isSel ? null : it.id);
        },
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 14px',
          borderRadius: 'var(--radius-lg)',
          border: `1.5px solid ${border}`,
          background: bg,
          cursor: submitted ? 'default' : 'pointer',
          fontSize: 14.5,
          color: 'var(--color-text-primary)',
          lineHeight: 1.4,
          boxShadow: isSel ? '0 0 0 3px var(--focus-ring)' : 'none',
          transition: 'all var(--transition-base)'
        }
      }, !submitted && /*#__PURE__*/React.createElement(I.Reflect, {
        size: 15,
        stroke: "var(--color-text-muted)",
        style: {
          flexShrink: 0
        }
      }), status === 'right' && /*#__PURE__*/React.createElement(I.Check, {
        size: 16,
        stroke: "var(--color-success)",
        style: {
          flexShrink: 0
        }
      }), status === 'wrong' && /*#__PURE__*/React.createElement(I.X, {
        size: 16,
        stroke: "var(--color-warm-rose)",
        style: {
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement("span", null, it.text));
    };
    const Column = ({
      cat
    }) => {
      const items = slide.items.filter(it => placements[it.id] === cat.id);
      return /*#__PURE__*/React.createElement("div", {
        onDragOver: e => e.preventDefault(),
        onDrop: e => {
          e.preventDefault();
          const id = e.dataTransfer.getData('text/plain');
          if (id) setPlace(id, cat.id);
        },
        onClick: () => {
          if (selected) setPlace(selected, cat.id);
        },
        style: {
          flex: 1,
          minWidth: 220,
          background: 'var(--color-surface-alt)',
          border: `1.5px dashed ${selected ? 'var(--color-primary-muted)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-xl)',
          padding: 16,
          minHeight: 150,
          transition: 'border-color var(--transition-base)',
          cursor: selected ? 'pointer' : 'default'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-text-secondary)',
          marginBottom: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, cat.id === 'persp' ? /*#__PURE__*/React.createElement(I.Eye, {
        size: 15,
        stroke: "var(--color-primary)"
      }) : /*#__PURE__*/React.createElement(I.Dialogue, {
        size: 15,
        stroke: "var(--color-warm-rose)"
      }), cat.label), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }
      }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          padding: '8px 2px'
        }
      }, selected ? 'Tap here to place' : 'Drop or tap to place'), items.map(it => /*#__PURE__*/React.createElement(Chip, {
        key: it.id,
        it: it,
        inPool: false
      }))));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 860,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: slide.eyebrow,
      title: slide.title,
      intro: slide.intro
    }), /*#__PURE__*/React.createElement("div", {
      onDragOver: e => e.preventDefault(),
      onDrop: e => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        if (id) setPlace(id, null);
      },
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        padding: poolItems.length ? 14 : 0,
        marginBottom: 16,
        borderRadius: 'var(--radius-lg)',
        background: poolItems.length ? 'rgba(42,92,107,0.04)' : 'transparent',
        minHeight: poolItems.length ? 0 : 0
      }
    }, poolItems.map(it => /*#__PURE__*/React.createElement(Chip, {
      key: it.id,
      it: it,
      inPool: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, slide.cats.map(cat => /*#__PURE__*/React.createElement(Column, {
      key: cat.id,
      cat: cat
    }))), submitted ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: allCorrect ? 'success' : 'warning',
      title: allCorrect ? 'Great job!' : `${correctCount} of ${slide.items.length} correct`
    }, slide.feedback)) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: !allPlaced,
      onClick: () => onChange({
        ...st,
        submitted: true
      })
    }, "Check answers"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--color-text-muted)',
        fontWeight: 600
      }
    }, allPlaced ? 'Ready to check.' : 'Place all four to check.')));
  }

  // ── REFLECTION ── (not gated)
  function Reflect({
    slide,
    state,
    onChange
  }) {
    const st = state || {
      text: '',
      saved: false
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 680,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: slide.eyebrow,
      title: slide.title
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        color: 'var(--color-primary)',
        fontSize: 'clamp(20px,2.8vw,26px)',
        lineHeight: 1.45,
        margin: '0 0 20px'
      }
    }, "\"", slide.prompt, "\""), /*#__PURE__*/React.createElement(Textarea, {
      value: st.text,
      rows: 6,
      onChange: e => onChange({
        text: e.target.value,
        saved: false
      }),
      placeholder: "There are no wrong answers \u2014 write freely.",
      hint: "Your reflections are private and saved only on this device."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: !st.text.trim(),
      onClick: () => onChange({
        ...st,
        saved: true
      })
    }, "Save reflection"), st.saved && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--color-success)'
      }
    }, /*#__PURE__*/React.createElement(I.CheckCircle, {
      size: 16,
      stroke: "var(--color-success)"
    }), " Saved to your private journal."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--color-text-muted)'
      }
    }, "Reflections are optional \u2014 you can continue anytime.")));
  }

  // ── QUESTION ── (gate: submitted)
  function Question({
    slide,
    state,
    onChange
  }) {
    const q = slide.data;
    const st = state || {
      choice: null,
      submitted: false
    };
    const submitted = st.submitted;
    const correct = st.choice === q.answer;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 700,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      dot: true
    }, "Question ", slide.index + 1, " of ", slide.total)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(24px,3.4vw,36px)',
        lineHeight: 1.25,
        margin: '0 0 22px'
      }
    }, q.q), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, q.options.map((opt, i) => {
      const isSel = st.choice === i;
      const reveal = submitted;
      const right = i === q.answer;
      let border = 'var(--color-border)',
        bg = 'var(--color-surface)';
      if (reveal && right) {
        border = 'var(--color-success)';
        bg = 'var(--color-success-sub)';
      } else if (reveal && isSel && !right) {
        border = 'var(--color-warm-rose)';
        bg = 'var(--color-warm-rose-sub)';
      } else if (isSel) {
        border = 'var(--color-primary)';
        bg = 'var(--color-primary-subtle)';
      }
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        className: "lum-card",
        disabled: submitted,
        onClick: () => onChange({
          ...st,
          choice: i
        }),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 13,
          textAlign: 'left',
          width: '100%',
          padding: '15px 17px',
          borderRadius: 'var(--radius-lg)',
          border: `1.5px solid ${border}`,
          background: bg,
          cursor: submitted ? 'default' : 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: 15.5,
          color: 'var(--color-text-primary)',
          lineHeight: 1.4,
          transition: 'all var(--transition-base)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          borderRadius: '50%',
          border: `2px solid ${isSel ? 'var(--color-primary)' : 'var(--color-border)'}`,
          background: isSel ? 'var(--color-primary)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, reveal && right ? /*#__PURE__*/React.createElement(I.Check, {
        size: 13,
        stroke: "#fff"
      }) : isSel ? /*#__PURE__*/React.createElement("span", {
        style: {
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#fff'
        }
      }) : null), opt);
    })), submitted ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: correct ? 'success' : 'error',
      title: correct ? 'Great job!' : 'Not quite'
    }, correct ? q.right : q.wrong)) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: st.choice === null,
      onClick: () => onChange({
        ...st,
        submitted: true
      })
    }, "Submit answer")));
  }

  // ── RESULTS ── (gate: pass)
  function Results({
    slide,
    correct,
    total,
    onRetry,
    name
  }) {
    const score = Math.round(correct / total * 100);
    const passed = score >= slide.passing;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 560,
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 78,
        height: 78,
        borderRadius: '50%',
        background: passed ? 'var(--color-success-sub)' : 'var(--color-warm-rose-sub)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, passed ? /*#__PURE__*/React.createElement(I.Award, {
      size: 38,
      stroke: "var(--color-success)"
    }) : /*#__PURE__*/React.createElement(I.RotateCcw, {
      size: 34,
      stroke: "var(--color-warm-rose)"
    }))), /*#__PURE__*/React.createElement(Badge, {
      tone: passed ? 'success' : 'rose',
      dot: true
    }, passed ? 'Passed' : 'Almost there'), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(30px,5vw,48px)',
        lineHeight: 1.1,
        margin: '14px 0 6px'
      }
    }, passed ? name ? 'Congratulations, ' + name + '!' : 'Congratulations!' : 'So close.'), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.65,
        margin: '0 auto 24px',
        maxWidth: 420
      }
    }, passed ? 'You\u2019ve demonstrated a solid understanding of the key concepts. Continue to wrap up the module.' : `You answered ${correct} of ${total} correctly. A score of ${slide.passing}% is needed — review and try again whenever you\u2019re ready.`), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lum-card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 52,
        fontWeight: 400,
        color: passed ? 'var(--color-success)' : 'var(--color-warm-rose)',
        lineHeight: 1
      }
    }, score, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        marginTop: 4
      }
    }, "Your score")), /*#__PURE__*/React.createElement("div", {
      className: "lum-card",
      style: {
        borderLeft: '1px solid var(--color-border)',
        paddingLeft: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 52,
        fontWeight: 400,
        color: 'var(--color-text-muted)',
        lineHeight: 1
      }
    }, slide.passing, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        marginTop: 4
      }
    }, "Passing"))), !passed && /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(I.RotateCcw, {
        size: 17
      }),
      onClick: onRetry
    }, "Try again"), passed && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-muted)',
        fontWeight: 600
      }
    }, "Continue below to finish \u2192"));
  }

  // ── SCENARIO ── apply an empathy device to a situation (gate: submitted)
  function Scenario({
    slide,
    state,
    onChange,
    onNarrate
  }) {
    const st = state || {
      choice: null,
      submitted: false
    };
    const submitted = st.submitted;
    const chosen = st.choice;
    const correct = chosen !== null && slide.options[chosen] && slide.options[chosen].correct;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 700,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "amber",
      dot: true
    }, "Apply the device \xB7 ", slide.device)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(26px,3.6vw,38px)',
        lineHeight: 1.18,
        margin: '0 0 18px'
      }
    }, slide.title), /*#__PURE__*/React.createElement("div", {
      className: "lum-card",
      style: {
        display: 'flex',
        gap: 14,
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '20px 22px',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--color-accent-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.Dialogue, {
      size: 19,
      stroke: "var(--color-accent)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
        margin: 0
      }
    }, slide.scenario), slide.quote && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(20px,2.6vw,25px)',
        color: 'var(--color-primary)',
        lineHeight: 1.4,
        margin: '8px 0 0'
      }
    }, slide.quote))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        marginBottom: 12
      }
    }, slide.question), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, slide.options.map((o, i) => {
      const isSel = chosen === i;
      let border = 'var(--color-border)',
        bg = 'var(--color-surface)';
      if (submitted && o.correct) {
        border = 'var(--color-success)';
        bg = 'var(--color-success-sub)';
      } else if (submitted && isSel && !o.correct) {
        border = 'var(--color-warm-rose)';
        bg = 'var(--color-warm-rose-sub)';
      } else if (isSel) {
        border = 'var(--color-primary)';
        bg = 'var(--color-primary-subtle)';
      }
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        className: "lum-card",
        disabled: submitted,
        onClick: () => onChange({
          ...st,
          choice: i
        }),
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
          alignItems: 'flex-start',
          textAlign: 'left',
          width: '100%',
          padding: '14px 16px',
          borderRadius: 'var(--radius-lg)',
          border: `1.5px solid ${border}`,
          background: bg,
          cursor: submitted ? 'default' : 'pointer',
          fontFamily: 'var(--font-body)',
          transition: 'all var(--transition-base)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 20,
          height: 20,
          flexShrink: 0,
          borderRadius: '50%',
          border: `2px solid ${isSel ? 'var(--color-primary)' : 'var(--color-border)'}`,
          background: isSel ? 'var(--color-primary)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, submitted && o.correct ? /*#__PURE__*/React.createElement(I.Check, {
        size: 12,
        stroke: "#fff"
      }) : isSel ? /*#__PURE__*/React.createElement("span", {
        style: {
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#fff'
        }
      }) : null), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15.5,
          color: 'var(--color-text-primary)',
          lineHeight: 1.4
        }
      }, o.text)), submitted && /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: 32,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.02em',
          color: o.correct ? 'var(--color-success)' : 'var(--color-text-muted)'
        }
      }, o.correct ? '✓ ' : '', "Device: ", o.device));
    })), submitted ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: correct ? 'success' : 'error',
      title: correct ? 'Well applied.' : 'Reconsider the device'
    }, slide.feedback)) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: chosen === null,
      onClick: () => {
        if (onNarrate) onNarrate(''); // stop narration on submit
        const isRight = slide.options[chosen] && slide.options[chosen].correct;
        onChange({
          ...st,
          submitted: true
        });
        if (isRight) launchConfetti();
      }
    }, "Check response")));
  }
  window.Interactions = {
    Tabs,
    Hotspots,
    DragDrop,
    Reflect,
    Scenario,
    Question,
    Results
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-elearning/interactions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-elearning/roleplay.jsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// Lumina — AI-powered empathy ROLEPLAY.
// Two ways to practise the same scenario, chosen per-scenario at the top:
//   • Call  — full phone-call UI. Speak out loud (Web Speech API, falls back
//             to typing); the partner's replies are spoken back with live captions.
//   • Chat  — the original typed conversation.
// Both append to one shared transcript and end in the SAME AI coach feedback.
// The partner warms up or closes off based on the learner's empathy.
// Attaches Roleplay to window.Interactions.  (Loaded after interactions.jsx.)
// ════════════════════════════════════════════════════════════════
(function () {
  const {
    Button,
    Badge,
    Alert
  } = window.LuminaDesignSystem_f39716;
  const I = window.Icons;
  const hasAI = () => typeof window !== 'undefined' && window.claude && typeof window.claude.complete === 'function';
  // Offline fallback: a scripted branching engine + local scorer (no API).
  const hasScripted = () => typeof window !== 'undefined' && !!window.ScriptedRoleplay;
  // The roleplay is usable if EITHER backend is present.
  const canPlay = () => hasAI() || hasScripted();
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const hasTTS = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const hasSR = !!SR;

  // ── helpers ──────────────────────────────────────────────────
  function cleanReply(raw, name) {
    let t = (raw || '').trim();
    const pre = new RegExp('^' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*:\\s*', 'i');
    t = t.replace(pre, '');
    if (t.startsWith('"') && t.endsWith('"') || t.startsWith('\u201c') && t.endsWith('\u201d')) t = t.slice(1, -1).trim();
    return t || '\u2026';
  }
  function parseJSON(raw) {
    if (!raw) throw new Error('empty');
    let s = String(raw).trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
    const a = s.indexOf('{'),
      b = s.lastIndexOf('}');
    if (a !== -1 && b !== -1) s = s.slice(a, b + 1);
    return JSON.parse(s);
  }
  function transcriptOf(slide, messages, who) {
    const name = slide.character.name;
    return messages.map(m => (m.role === 'user' ? who || 'You' : name) + ': ' + m.text).join('\n');
  }
  async function charReply(slide, messages, channel) {
    const name = slide.character.name;
    const medium = channel === 'call' ? 'You are on a phone call. Speak the way someone talks out loud \u2014 contractions, natural rhythm, no emoji, no text-speak. ' : '';
    const prompt = slide.persona + '\n\nYou are roleplaying as ' + name + ' in a one-on-one empathy training exercise. ' + 'Stay fully in character as ' + name + '. Never break character, never give coaching, advice, or meta-commentary, never mention this is an exercise. ' + medium + 'Reply in 1\u20133 short, natural sentences only. Do not wrap your reply in quotation marks. ' + 'Let your warmth or guardedness shift believably based on how the other person is treating you.' + '\n\nConversation so far:\n' + transcriptOf(slide, messages) + '\n\nWrite ' + name + "'s next reply only:";
    if (!hasAI()) {
      // Scripted fallback — a short, natural pause so it feels like a reply.
      await wait(channel === 'call' ? 900 : 650);
      return window.ScriptedRoleplay.reply(slide, messages, channel);
    }
    const out = await window.claude.complete(prompt);
    return cleanReply(out, name);
  }

  // Speech-to-text returns an unpunctuated run-on. Restore capitalization and
  // punctuation WITHOUT changing, adding, or removing any words, so the turn
  // reads naturally and the grader judges meaning rather than transcription.
  async function punctuate(raw) {
    const text = (raw || '').trim();
    if (!text || !hasAI()) return text;
    const prompt = 'The following is a raw voice-to-text transcript of one spoken turn. ' + 'Add correct capitalization, punctuation, and sentence breaks so it reads naturally. ' + 'Rules: do NOT add, remove, reorder, or change any words; keep the exact wording. ' + 'Only insert capitalization, commas, periods, question marks, and apostrophes in contractions. ' + 'Fix obvious split contractions (e.g. "i m" -> "I\u2019m", "dont" -> "don\u2019t"). ' + 'Return ONLY the corrected sentence, nothing else.\n\nTranscript: ' + text;
    try {
      const out = await window.claude.complete(prompt);
      let s = String(out || '').trim().replace(/^["\u201c]|["\u201d]$/g, '').trim();
      // safety: if the model drifted and changed the word count wildly, keep raw
      const wc = x => x.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter(Boolean).length;
      if (!s || Math.abs(wc(s) - wc(text)) > Math.max(2, Math.round(wc(text) * 0.25))) return text;
      return s;
    } catch (e) {
      return text;
    }
  }
  async function gradeConversation(slide, messages) {
    const name = slide.character.name;
    const transcript = messages.map(m => (m.role === 'user' ? 'LEARNER' : name.toUpperCase()) + ': ' + m.text).join('\n');
    const rubricLines = slide.rubric.map(r => '- ' + r.key + ': ' + r.label + ' \u2014 ' + r.desc).join('\n');
    const rubricShape = slide.rubric.map(r => '"' + r.key + '": {"met": <true|false>, "note": "<=12 word reason"}').join(', ');
    const prompt = 'You are a warm, precise empathy coach. A learner just practised the skill "' + slide.device + '" (' + slide.skill + ') ' + 'by having a roleplay conversation with ' + name + '. Grade ONLY the learner\'s messages \u2014 not ' + name + '\'s.' + '\n\nWhat good looks like here: ' + slide.goal + '\n\nRubric criteria:\n' + rubricLines + '\n\nFull transcript:\n' + transcript + '\n\nIMPORTANT: the learner\u2019s turns were spoken aloud and captured by voice-to-text, then lightly auto-punctuated. ' + 'Judge what they MEANT and how they connected with ' + name + ' \u2014 do NOT penalize punctuation, capitalization, filler words, ' + 'small transcription glitches, or slightly run-on phrasing. Give the benefit of the doubt on wording artifacts.' + '\n\nReturn ONLY valid JSON (no markdown fences, no prose before or after) in exactly this shape:\n' + '{\n' + '  "score": <integer 0-100: how close the learner got to truly applying "' + slide.device + '". SCORING: if every rubric criterion is met and there is nothing meaningful left to improve, score 96-100; do not withhold points from a response that fully demonstrates the skill.>,\n' + '  "level": "<2-4 word verdict, e.g. Right there / Getting close / Off the mark>",\n' + '  "rubric": { ' + rubricShape + ' },\n' + '  "strengths": [ {"quote": "<a phrase the learner wrote, verbatim>", "note": "<why it worked, <=18 words>"} ],\n' + '  "growth": [ {"quote": "<verbatim learner phrase, or empty string if they engaged too little>", "note": "<what to try instead, <=18 words>"} ],\n' + '  "summary": "<2 sentences of warm, specific coaching addressed to the learner as you>",\n' + '  "model": "<one example of a stronger thing the learner could have said to ' + name + '>"\n' + '}\n' + 'Use 1-2 items in strengths and 1-2 in growth. Quotes MUST be copied verbatim from the learner\'s own messages. ' + 'If the learner barely engaged, score low and say so kindly.';
    if (!hasAI()) {
      await wait(700);
      return window.ScriptedRoleplay.grade(slide, messages);
    }
    const out = await window.claude.complete(prompt);
    const fb = parseJSON(out);
    if (!fb.rubric) fb.rubric = {};
    return fb;
  }

  // Capstone grading — integrative: scores the whole conversation across all three
  // practised skills, returns a per-skill breakdown plus the usual quotes/model.
  async function gradeCapstone(slide, messages) {
    const name = slide.character.name;
    const transcript = messages.map(m => (m.role === 'user' ? 'LEARNER' : name.toUpperCase()) + ': ' + m.text).join('\n');
    const rubricLines = slide.rubric.map(r => '- [' + r.skill + '] ' + r.key + ': ' + r.label + ' \u2014 ' + r.desc).join('\n');
    const rubricShape = slide.rubric.map(r => '"' + r.key + '": {"met": <true|false>, "note": "<=12 word reason"}').join(', ');
    const skills = [];
    slide.rubric.forEach(r => {
      if (skills.indexOf(r.skill) === -1) skills.push(r.skill);
    });
    const skillsShape = skills.map(sk => '"' + sk + '": {"score": <0-100>, "verdict": "<3-6 words>"}').join(', ');
    const prompt = 'You are a warm, precise empathy coach assessing a CAPSTONE roleplay. The learner had one integrated conversation with ' + name + ', who was passed over for a role the learner was close to deciding. A strong learner moves fluidly between three skills as the moment calls for them: ' + 'Perspective Taking (a generous interpretation), Active Listening (reflecting the feeling before fixing), and Difficult Conversations (staying regulated and turned-toward when ' + name + ' pushes back with heat). ' + 'Grade ONLY the learner\'s messages \u2014 not ' + name + '\'s.' + '\n\nRubric criteria (grouped by skill):\n' + rubricLines + '\n\nFull transcript:\n' + transcript + '\n\nIMPORTANT: the learner\u2019s turns may have been spoken aloud and captured by voice-to-text. Judge what they MEANT and how they connected \u2014 do NOT penalize punctuation, capitalization, filler words, or transcription glitches. ' + 'Reward learners who engaged substantially and navigated the hard turn; score shallow or very short attempts low and say so kindly.' + '\n\nReturn ONLY valid JSON (no markdown fences, no prose) in exactly this shape:\n' + '{\n' + '  "score": <integer 0-100: overall empathy across the whole conversation. SCORING: if every rubric criterion is met and there is nothing meaningful left to improve, score 96-100; do not withhold points from a response that fully demonstrates the skills.>,\n' + '  "level": "<2-4 word verdict>",\n' + '  "skills": { ' + skillsShape + ' },\n' + '  "rubric": { ' + rubricShape + ' },\n' + '  "strengths": [ {"quote": "<verbatim learner phrase>", "note": "<why it worked, <=18 words>"} ],\n' + '  "growth": [ {"quote": "<verbatim learner phrase, or empty string>", "note": "<what to try instead, <=18 words>"} ],\n' + '  "turningPoint": "<1 sentence: name the moment it got hard and how the learner handled it>",\n' + '  "summary": "<2-3 sentences of warm, specific coaching addressed to the learner as you>",\n' + '  "model": "<one example of a masterful thing the learner could have said at the hardest moment>"\n' + '}\n' + 'Use 1-2 items each in strengths and growth. Quotes MUST be copied verbatim from the learner\'s own messages.';
    if (!hasAI()) {
      await wait(800);
      return window.ScriptedRoleplay.gradeCapstone(slide, messages);
    }
    const out = await window.claude.complete(prompt);
    const fb = parseJSON(out);
    if (!fb.rubric) fb.rubric = {};
    if (!fb.skills) fb.skills = {};
    return fb;
  }

  // ── Readiness probe for AUTO-END ─────────────────────────────
  // After each learner turn, ask whether — ACROSS THE WHOLE CONVERSATION SO
  // FAR — the learner has now met EVERY rubric criterion, judged by MEANING
  // rather than wording. When it returns allMet, the roleplay wraps itself and
  // grades automatically (the learner reached the answer key). Cheaper and
  // stricter than a full grade, so it can run every turn; the full grade still
  // produces the feedback once we decide to end. Offline falls back to the
  // heuristic ScriptedRoleplay.ready.
  async function checkReady(slide, messages) {
    if (!messages.some(m => m.role === 'user')) return {
      allMet: false
    };
    if (!hasAI()) {
      await wait(250);
      try {
        return window.ScriptedRoleplay.ready(slide, messages);
      } catch (e) {
        return {
          allMet: false
        };
      }
    }
    const name = slide.character.name;
    const transcript = messages.map(m => (m.role === 'user' ? 'LEARNER' : name.toUpperCase()) + ': ' + m.text).join('\n');
    const rubricLines = slide.rubric.map(r => '- ' + r.key + ': ' + r.label + ' \u2014 ' + r.desc).join('\n');
    const rubricShape = slide.rubric.map(r => '"' + r.key + '": {"met": <true|false>, "quote": "<the learner\u2019s OWN words, verbatim, that demonstrate this criterion \u2014 copy a short phrase exactly as they wrote/said it; empty string if not met>"}').join(', ');
    const prompt = 'You are a rigorous empathy-practice evaluator. A learner is mid-way through a LIVE roleplay practising the skill "' + slide.device + '" (' + slide.skill + ') with ' + name + '. ' + (slide.capstone ? 'This is the capstone: it integrates three skills, and the learner must already have navigated the hard moment where ' + name + ' pushes back. ' : '') + 'Decide whether, ACROSS THE WHOLE CONVERSATION SO FAR, the learner has now met EVERY criterion below. ' + 'Judge MEANING and EFFECT, not exact wording \u2014 a turn counts if it accomplishes the same thing the criterion describes, however it is phrased, and even if the learner spoke it aloud with rough punctuation. ' + 'Grade ONLY the learner\u2019s turns \u2014 never ' + name + '\u2019s.' + '\n\nCriteria:\n' + rubricLines + '\n\nTranscript so far:\n' + transcript + '\n\nReturn ONLY valid JSON (no prose, no code fences) in exactly this shape:\n' + '{ "rubric": { ' + rubricShape + ' }, "allMet": <true ONLY if EVERY criterion above is clearly met> }\n' + 'Each "quote" MUST be copied verbatim from the LEARNER\u2019s own turns (never ' + name + '\u2019s, never paraphrased). ' + 'Be strict: if any criterion is not yet clearly demonstrated, allMet MUST be false.';
    try {
      const out = await window.claude.complete(prompt);
      const r = parseJSON(out);
      // Trust allMet only if the per-criterion map backs it up (guards drift).
      const everyMet = slide.rubric.every(cr => r.rubric && r.rubric[cr.key] && r.rubric[cr.key].met);
      return {
        allMet: !!r.allMet && everyMet,
        rubric: r.rubric || {}
      };
    } catch (e) {
      return {
        allMet: false
      };
    }
  }

  // ── speech synthesis (call mode) ─────────────────────────────
  // Voices load asynchronously; warm a cache so the first reply isn't silent.
  let _voiceCache = [];
  function refreshVoices() {
    try {
      _voiceCache = window.speechSynthesis.getVoices() || [];
    } catch (e) {}
  }
  if (hasTTS) {
    refreshVoices();
    try {
      window.speechSynthesis.onvoiceschanged = refreshVoices;
    } catch (e) {}
  }
  // Pick the most natural-sounding available voice for a gender. Browsers expose
  // wildly different sets; we SCORE each English voice by quality signals
  // (neural/natural/premium/Siri/Google) so the best installed voice wins,
  // rather than just the first match. Quality varies by OS/browser — on Edge the
  // "(Natural)" voices, on Chrome the Google network voices, on macOS the
  // Enhanced/Premium/Siri voices are the closest to ElevenLabs-style realism.
  const MALE_RE = /\bmale\b|David|Daniel|Alex|Fred|Aaron|Arthur|Oliver|\bTom\b|Rishi|Guy|Mark|Brian|Christopher|Eric|Liam|Ryan/i;
  const FEMALE_RE = /female|Samantha|Karen|Serena|Moira|Victoria|Zira|Susan|Tessa|Fiona|Aria|Jenny|Ava|Allison|Emma|Sonia|Michelle|Nora/i;
  function voiceQuality(name) {
    const n = name || '';
    let q = 0;
    if (/neural|natural/i.test(n)) q += 100; // Edge/Azure neural voices
    if (/premium|enhanced/i.test(n)) q += 80; // macOS premium/enhanced
    if (/siri/i.test(n)) q += 70; // Apple Siri voices
    if (/google/i.test(n)) q += 50; // Chrome network voices
    if (/online/i.test(n)) q += 30; // network-backed
    return q;
  }
  function genderScore(name, gender) {
    const male = MALE_RE.test(name),
      female = FEMALE_RE.test(name);
    if (gender === 'male') return male && !female ? 40 : female ? -40 : 0;
    return female && !male ? 40 : male ? -40 : 0;
  }
  function pickVoice(gender) {
    const voices = _voiceCache && _voiceCache.length ? _voiceCache : hasTTS && window.speechSynthesis.getVoices() || [];
    const en = voices.filter(x => /^en/i.test(x.lang));
    if (!en.length) return voices[0] || null;
    const scored = en.map(v => {
      let s = voiceQuality(v.name) + genderScore(v.name, gender);
      if (/^en[-_]?US/i.test(v.lang)) s += 8; // mild locale preference
      else if (/^en[-_]?GB/i.test(v.lang)) s += 4;
      // A network "natural" voice beats a robotic local one — but if nothing
      // scored on quality at all, a local voice is the safer (always-audible) pick.
      if (v.localService) s += 2;
      return {
        v: v,
        s: s
      };
    }).sort((a, b) => b.s - a.s);
    return scored[0].v;
  }

  // ── WebAudio (ringtone + audio unlock) ───────────────────────
  // A synthesized ringback tone needs no asset and proves whether ANY audio is
  // reaching the user. Also used to unlock/resume the AudioContext on a gesture.
  let _actx = null;
  function audioCtx() {
    if (_actx) return _actx;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) _actx = new AC();
    } catch (e) {}
    return _actx;
  }
  function resumeAudio() {
    const ctx = audioCtx();
    if (ctx && ctx.state === 'suspended') {
      try {
        ctx.resume();
      } catch (e) {}
    }
  }
  // Plays a classic two-tone ringback cadence (ring ~2s, pause ~4s) until the
  // returned stop() is called. Returns a no-op stop if audio is unavailable.
  // SINGLETON: only one ringback can ever be live. Starting a new one (or any
  // unmount/answer) hard-stops the previous, so an orphaned loop — which would
  // keep ringing across slides forever — is impossible.
  let _ring = null; // { stop } of the currently-live ringback
  function stopRingback() {
    if (_ring) {
      const r = _ring;
      _ring = null;
      try {
        r.stop();
      } catch (e) {}
    }
  }
  function startRingback() {
    stopRingback(); // never allow two loops at once
    const ctx = audioCtx();
    if (!ctx) return function () {};
    resumeAudio();
    let stopped = false;
    let timer = null;
    let node = null; // current { gain, oscs }
    function ringOnce() {
      if (stopped) return;
      const t0 = ctx.currentTime;
      const gain = ctx.createGain();
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.12, t0 + 0.05);
      gain.gain.setValueAtTime(0.12, t0 + 1.9);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.0);
      const oscs = [440, 480].map(f => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = f;
        osc.connect(gain);
        osc.start(t0);
        osc.stop(t0 + 2.0);
        return osc;
      });
      node = {
        gain: gain,
        oscs: oscs
      };
      timer = setTimeout(ringOnce, 6000); // 2s ring + 4s silence
    }
    function stop() {
      stopped = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      // Disconnect = instant, guaranteed silence regardless of scheduled gain.
      if (node) {
        node.oscs.forEach(function (o) {
          try {
            o.stop();
          } catch (e) {}
          try {
            o.disconnect();
          } catch (e) {}
        });
        try {
          node.gain.disconnect();
        } catch (e) {}
        node = null;
      }
    }
    const handle = {
      stop: stop
    };
    _ring = handle;
    ringOnce();
    // Returned fn clears the singleton only if it's still us, then stops.
    return function () {
      if (_ring === handle) _ring = null;
      stop();
    };
  }
  // Many browsers gate speechSynthesis behind a user gesture. Call this from a
  // click/tap to unlock audio so subsequent utterances actually play.
  function unlockTTS() {
    if (!hasTTS) return;
    try {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      u.rate = 2;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  // ── small UI bits ────────────────────────────────────────────
  function Avatar({
    initial,
    tone
  }) {
    const bg = tone === 'self' ? 'var(--color-primary)' : 'var(--color-accent-subtle)';
    const fg = tone === 'self' ? '#fff' : 'var(--color-accent)';
    const fs = String(initial).length > 1 ? 11 : 16;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        flexShrink: 0,
        borderRadius: '50%',
        background: bg,
        color: fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: fs,
        fontWeight: 600,
        letterSpacing: fs < 12 ? '0.02em' : 0
      }
    }, initial);
  }
  function Dots() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '4px 2px'
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "rp-dot",
      style: {
        animationDelay: i * 0.18 + 's'
      }
    })));
  }
  // Celebratory confetti burst for the auto-grade “You’ve got it” card.
  // Lightweight DOM pieces animated with the Web Animations API; self-cleans on
  // unmount and respects reduced-motion.
  function Confetti({
    count
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const host = ref.current;
      if (!host) return undefined;
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return undefined;
      const colors = ['#2A5C6B', '#C4956A', '#4caf72', '#7BB6C4', '#E8C9A0', '#1A2E35'];
      const n = count || 90;
      const fall = (host.clientHeight || 360) + 60;
      const pieces = [];
      for (let i = 0; i < n; i++) {
        const el = document.createElement('div');
        const size = 6 + Math.random() * 8;
        const rect = Math.random() > 0.5;
        el.style.cssText = 'position:absolute;top:-24px;left:' + Math.random() * 100 + '%;width:' + size + 'px;height:' + (rect ? size * 0.45 : size) + 'px;background:' + colors[i % colors.length] + ';border-radius:' + (rect ? '1px' : '50%') + ';opacity:0.95;will-change:transform;';
        host.appendChild(el);
        const drift = (Math.random() * 2 - 1) * 140;
        const rot = (Math.random() * 2 - 1) * 720;
        const anim = el.animate([{
          transform: 'translate(0,0) rotate(0deg)',
          opacity: 1
        }, {
          transform: 'translate(' + drift + 'px,' + fall + 'px) rotate(' + rot + 'deg)',
          opacity: 0.85
        }], {
          duration: 1700 + Math.random() * 1500,
          delay: Math.random() * 260,
          easing: 'cubic-bezier(0.18,0.6,0.36,1)',
          fill: 'forwards'
        });
        pieces.push({
          el: el,
          anim: anim
        });
      }
      return () => {
        pieces.forEach(p => {
          try {
            p.anim.cancel();
          } catch (e) {}
          if (p.el.parentNode) p.el.parentNode.removeChild(p.el);
        });
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 4
      }
    });
  }
  function Bubble({
    m,
    name,
    initial
  }) {
    const self = m.role === 'user';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: self ? 'row-reverse' : 'row',
        gap: 10,
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initial: initial,
      tone: self ? 'self' : 'char'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '78%'
      }
    }, !self && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: '0.03em',
        color: 'var(--color-text-muted)',
        margin: '0 0 3px 2px'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '11px 15px',
        borderRadius: 16,
        fontSize: 15.5,
        lineHeight: 1.5,
        background: self ? 'var(--color-primary)' : 'var(--color-surface-alt)',
        color: self ? '#fff' : 'var(--color-text-primary)',
        borderBottomRightRadius: self ? 5 : 16,
        borderBottomLeftRadius: self ? 16 : 5,
        border: self ? 'none' : '1px solid var(--color-border-light)',
        whiteSpace: 'pre-wrap'
      }
    }, m.text)));
  }
  function Meter({
    score,
    level
  }) {
    const s = Math.max(0, Math.min(100, score | 0));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--color-text-secondary)'
      }
    }, "How close you got"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 600,
        color: 'var(--color-primary)'
      }
    }, s, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-muted)'
      }
    }, "%")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--color-accent)'
      }
    }, level || ''))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 12,
        borderRadius: 999,
        background: 'var(--color-primary-subtle)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: s + '%',
        borderRadius: 999,
        background: 'linear-gradient(90deg, var(--color-primary-muted), var(--color-primary) 60%, var(--color-accent))',
        transition: 'width 900ms cubic-bezier(0.22,1,0.36,1)'
      }
    })));
  }
  function QuoteRow({
    q,
    tone
  }) {
    const ok = tone === 'strength';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 11,
        padding: '11px 0',
        borderTop: '1px solid var(--color-border-light)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        flexShrink: 0,
        marginTop: 1,
        borderRadius: '50%',
        background: ok ? 'var(--color-success-sub)' : 'var(--color-accent-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, ok ? /*#__PURE__*/React.createElement(I.Check, {
      size: 13,
      stroke: "var(--color-success)"
    }) : /*#__PURE__*/React.createElement(I.CornerUpLeft, {
      size: 13,
      stroke: "var(--color-accent)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, q.quote ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 3px',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 16.5,
        lineHeight: 1.35,
        color: 'var(--color-text-primary)'
      }
    }, '\u201c' + q.quote + '\u201d') : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 3px',
        fontSize: 14,
        fontStyle: 'italic',
        color: 'var(--color-text-muted)'
      }
    }, 'You didn\u2019t get to this in the conversation.'), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        lineHeight: 1.5,
        color: 'var(--color-text-secondary)'
      }
    }, q.note)));
  }

  // ── Feedback panel ───────────────────────────────────────────
  function Feedback({
    slide,
    fb,
    onRetry,
    via
  }) {
    const strengths = Array.isArray(fb.strengths) ? fb.strengths : [];
    const growth = Array.isArray(fb.growth) ? fb.growth : [];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      dot: true
    }, 'Practice \u00b7 ' + slide.device)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 13,
        alignItems: 'flex-start',
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '15px 17px',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--color-primary-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.Sparkles, {
      size: 17,
      stroke: "var(--color-primary)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        lineHeight: 1.25
      }
    }, "This was practice", fb.level ? ' \u2014 ' : '', /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-accent)'
      }
    }, fb.level || '')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.5,
        color: 'var(--color-text-secondary)',
        marginTop: 3
      }
    }, "No score here \u2014 just coaching. Run it as many times as you like; only the Capstone is recorded."))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '6px 18px',
        marginBottom: 18
      }
    }, slide.rubric.map(r => {
      const row = fb.rubric && fb.rubric[r.key] || {};
      const met = !!row.met;
      return /*#__PURE__*/React.createElement("div", {
        key: r.key,
        style: {
          display: 'flex',
          gap: 12,
          padding: '13px 0',
          borderBottom: '1px solid var(--color-border-light)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          marginTop: 1,
          borderRadius: '50%',
          background: met ? 'var(--color-success)' : 'transparent',
          border: met ? 'none' : '2px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, met && /*#__PURE__*/React.createElement(I.Check, {
        size: 13,
        stroke: "#fff"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          fontWeight: 700,
          color: met ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
        }
      }, r.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          lineHeight: 1.5,
          color: 'var(--color-text-muted)',
          marginTop: 2
        }
      }, row.note || r.desc)));
    })), strengths.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--color-success)',
        marginBottom: 2
      }
    }, "What worked"), strengths.map((q, i) => /*#__PURE__*/React.createElement(QuoteRow, {
      key: i,
      q: q,
      tone: "strength"
    }))), growth.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--color-accent)',
        marginBottom: 2
      }
    }, "What to reach for"), growth.map((q, i) => /*#__PURE__*/React.createElement(QuoteRow, {
      key: i,
      q: q,
      tone: "growth"
    }))), fb.summary && /*#__PURE__*/React.createElement(Alert, {
      variant: "info",
      title: slide.character.name + ' \u2014 in review'
    }, fb.summary), fb.model && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        background: 'var(--color-accent-subtle)',
        border: '1px solid var(--color-accent-muted, var(--color-border))',
        borderRadius: 'var(--radius-xl)',
        padding: '16px 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement(I.Sparkles, {
      size: 16,
      stroke: "var(--color-accent)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        color: 'var(--color-accent)'
      }
    }, "A stronger turn might be")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 18,
        lineHeight: 1.4,
        color: 'var(--color-text-primary)'
      }
    }, '\u201c' + fb.model + '\u201d')), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: /*#__PURE__*/React.createElement(I.RotateCcw, {
        size: 16
      }),
      onClick: onRetry
    }, via === 'call' ? 'Try the call again' : 'Try the conversation again')));
  }

  // ── Capstone feedback panel ──────────────────────────────────
  function SkillCard({
    name,
    data
  }) {
    const sc = Math.max(0, Math.min(100, (data && data.score) | 0));
    const tone = sc >= 70 ? 'var(--color-success)' : sc >= 45 ? 'var(--color-accent)' : 'var(--color-text-muted)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 150px',
        minWidth: 0,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '14px 15px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.02em',
        color: 'var(--color-text-secondary)',
        marginBottom: 8,
        minHeight: 30
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 26,
        fontWeight: 600,
        color: tone
      }
    }, sc), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--color-text-muted)'
      }
    }, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 999,
        background: 'var(--color-primary-subtle)',
        overflow: 'hidden',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: sc + '%',
        borderRadius: 999,
        background: tone,
        transition: 'width 800ms cubic-bezier(0.22,1,0.36,1)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        lineHeight: 1.45,
        color: 'var(--color-text-muted)'
      }
    }, data && data.verdict || ''));
  }
  function CapstoneFeedback({
    slide,
    fb,
    onRetry,
    reflection,
    onReflect,
    attempts,
    bestScore
  }) {
    const strengths = Array.isArray(fb.strengths) ? fb.strengths : [];
    const growth = Array.isArray(fb.growth) ? fb.growth : [];
    const pass = (fb.score | 0) >= (slide.passing || 70);
    const MAX_ATTEMPTS = 2;
    const used = attempts || 1;
    const locked = pass || used >= MAX_ATTEMPTS; // passing or out of attempts ends it
    const recorded = Math.max(bestScore | 0, fb.score | 0);
    const skillOrder = [];
    slide.rubric.forEach(r => {
      if (skillOrder.indexOf(r.skill) === -1) skillOrder.push(r.skill);
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      dot: true
    }, "Capstone evaluation"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)'
      }
    }, 'Attempt ' + used + ' of ' + MAX_ATTEMPTS + ' \u00b7 recorded to your record')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        background: pass ? 'var(--color-success-sub)' : 'var(--color-accent-subtle)',
        border: '1px solid ' + (pass ? 'var(--color-success)' : 'var(--color-border)'),
        borderRadius: 'var(--radius-xl)',
        padding: '16px 18px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: '50%',
        background: pass ? 'var(--color-success)' : 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, pass ? /*#__PURE__*/React.createElement(I.Award, {
      size: 22,
      stroke: "#fff"
    }) : /*#__PURE__*/React.createElement(I.RotateCcw, {
      size: 20,
      stroke: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 21,
        fontWeight: 500,
        color: 'var(--color-text-primary)'
      }
    }, pass ? 'Capstone passed \u2014 ' : 'Keep practising \u2014 ', /*#__PURE__*/React.createElement("span", {
      style: {
        color: pass ? 'var(--color-success)' : 'var(--color-accent)'
      }
    }, fb.score | 0, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-body)'
      }
    }, fb.level ? '  \u00b7  ' + fb.level : '')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--color-text-secondary)',
        marginTop: 2
      }
    }, pass ? 'You brought the skills together in a real, hard conversation.' : locked ? 'That was your final attempt. Your best score \u2014 ' + recorded + '% \u2014 is what\u2019s recorded.' : 'You need ' + (slide.passing || 70) + '% to pass. Review the coaching, then take your final attempt.'))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--color-text-secondary)',
        marginBottom: 10
      }
    }, "Across the three skills"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginBottom: 18
      }
    }, skillOrder.map(sk => /*#__PURE__*/React.createElement(SkillCard, {
      key: sk,
      name: sk,
      data: fb.skills && fb.skills[sk]
    }))), fb.turningPoint && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 11,
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '14px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(I.Dialogue, {
      size: 18,
      stroke: "var(--color-accent)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--color-accent)'
      }
    }, "The turning point."), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.5,
        color: 'var(--color-text-secondary)'
      }
    }, fb.turningPoint))), skillOrder.map(sk => /*#__PURE__*/React.createElement("div", {
      key: sk,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        margin: '0 0 4px 2px'
      }
    }, sk), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '4px 18px'
      }
    }, slide.rubric.filter(r => r.skill === sk).map(r => {
      const row = fb.rubric && fb.rubric[r.key] || {};
      const met = !!row.met;
      return /*#__PURE__*/React.createElement("div", {
        key: r.key,
        style: {
          display: 'flex',
          gap: 12,
          padding: '12px 0',
          borderBottom: '1px solid var(--color-border-light)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          marginTop: 1,
          borderRadius: '50%',
          background: met ? 'var(--color-success)' : 'transparent',
          border: met ? 'none' : '2px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, met && /*#__PURE__*/React.createElement(I.Check, {
        size: 13,
        stroke: "#fff"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14.5,
          fontWeight: 700,
          color: met ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
        }
      }, r.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          lineHeight: 1.5,
          color: 'var(--color-text-muted)',
          marginTop: 2
        }
      }, row.note || r.desc)));
    })))), strengths.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '16px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--color-success)',
        marginBottom: 2
      }
    }, "What worked"), strengths.map((q, i) => /*#__PURE__*/React.createElement(QuoteRow, {
      key: i,
      q: q,
      tone: "strength"
    }))), growth.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--color-accent)',
        marginBottom: 2
      }
    }, "What to reach for"), growth.map((q, i) => /*#__PURE__*/React.createElement(QuoteRow, {
      key: i,
      q: q,
      tone: "growth"
    }))), fb.summary && /*#__PURE__*/React.createElement(Alert, {
      variant: pass ? 'success' : 'info',
      title: slide.character.name + ' \u2014 in review'
    }, fb.summary), fb.model && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        background: 'var(--color-accent-subtle)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement(I.Sparkles, {
      size: 16,
      stroke: "var(--color-accent)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        color: 'var(--color-accent)'
      }
    }, "A masterful turn at the hard moment")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 18,
        lineHeight: 1.4,
        color: 'var(--color-text-primary)'
      }
    }, '\u201c' + fb.model + '\u201d')), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'block',
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        marginBottom: 7
      }
    }, "Before you finish, name one thing you\u2019ll carry into your next hard conversation."), /*#__PURE__*/React.createElement("textarea", {
      value: reflection || '',
      onChange: e => onReflect(e.target.value),
      rows: 2,
      placeholder: "Write it down in your own words\u2026",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        resize: 'vertical',
        minHeight: 64,
        padding: '11px 14px',
        borderRadius: 'var(--radius-lg)',
        border: '1.5px solid var(--color-border)',
        background: 'var(--color-surface)',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.5,
        color: 'var(--color-text-primary)',
        outline: 'none'
      }
    })), !locked && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(I.RotateCcw, {
        size: 16
      }),
      onClick: onRetry
    }, "Take your final attempt")));
  }

  // ── Mode toggle (per scenario) ───────────────────────────────
  function ModeToggle({
    mode,
    onMode
  }) {
    const opts = [{
      id: 'call',
      label: 'Call',
      icon: /*#__PURE__*/React.createElement(I.Phone, {
        size: 15
      })
    }, {
      id: 'chat',
      label: 'Chat',
      icon: /*#__PURE__*/React.createElement(I.MessageSquare, {
        size: 15
      })
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        padding: 3,
        gap: 3,
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-full)'
      }
    }, opts.map(o => {
      const on = mode === o.id;
      return /*#__PURE__*/React.createElement("button", {
        key: o.id,
        onClick: () => onMode(o.id),
        "aria-pressed": on,
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          height: 34,
          padding: '0 16px',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          border: 'none',
          fontFamily: 'var(--font-body)',
          fontSize: 13.5,
          fontWeight: 700,
          letterSpacing: '0.01em',
          background: on ? 'var(--color-primary)' : 'transparent',
          color: on ? '#fff' : 'var(--color-text-secondary)',
          transition: 'background var(--transition-base)'
        }
      }, React.cloneElement(o.icon, {
        stroke: on ? '#fff' : 'var(--color-text-muted)'
      }), o.label);
    }));
  }

  // ── "Walk me through it" — how to operate the call ───────────
  function HowToCall({
    c,
    onDismiss,
    narrate,
    canNarrate,
    skill,
    capstone
  }) {
    const name = c && c.name || 'your partner';
    const introHeading = capstone ? 'Everything comes together here' : 'Welcome to the roleplay';
    const introBody = capstone ? 'One unscripted conversation that draws on it all \u2014 perspective taking, active listening, and staying steady in a hard moment. Here\u2019s how the call works.' : 'Here you\u2019ll put what you\u2019ve learned about ' + (skill || 'empathy') + ' into practice \u2014 a real, unscripted conversation. Here\u2019s how the call works.';
    const introSay = capstone ? 'Welcome to the capstone roleplay. This is where everything comes together. In one unscripted conversation, you will draw on perspective taking, active listening, and staying steady in a difficult moment. Here is how the call works.' : 'Welcome to the roleplay simulation. Here you will put what you have learned about ' + (skill || 'empathy') + ' into practice, in a real, unscripted conversation. Here is how the call works.';
    const STEPS = [{
      key: 'answer',
      n: 1,
      title: 'Answer the call',
      body: 'Tap the green button to pick up \u2014 ' + name + ' is calling, and the conversation begins the moment you answer.',
      say: 'First, tap the green button to answer. The conversation starts the moment you pick up.'
    }, {
      key: 'talk',
      n: 2,
      title: 'Take your turn',
      body: 'Tap the mic and speak out loud, then tap again to send. Prefer typing? A text box is always there as a fallback.',
      say: 'On your turn, tap the microphone and speak out loud, then tap it again to send. You can also type your reply instead.'
    }, {
      key: 'listen',
      n: 3,
      title: 'Hear them out',
      body: name + ' replies in their own voice with live captions. Replay the last line or mute the voice with these controls.',
      say: name + ' replies in their own voice, with live captions. Replay the last line, or mute the voice, with these controls.'
    }, {
      key: 'end',
      n: 4,
      title: 'End for feedback',
      body: 'Made your point? Tap the red button to hang up and get instant, personalized coaching on your empathy.',
      say: 'When you have made your point, tap the red button to hang up and get instant, personalized coaching.'
    }];
    const [phase, setPhase] = React.useState('intro');
    const [step, setStep] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const DWELL = 3800;

    // Intro: narrate the context, then roll into the control tour.
    React.useEffect(() => {
      if (phase !== 'intro' || paused) return undefined;
      let cancelled = false;
      const toTour = () => {
        if (!cancelled) setPhase('tour');
      };
      if (canNarrate && narrate) {
        narrate(introSay, () => {
          if (!cancelled) toTour();
        });
        const fb = setTimeout(toTour, Math.max(5200, introSay.length * 80));
        return () => {
          cancelled = true;
          clearTimeout(fb);
        };
      }
      const t = setTimeout(toTour, 4200);
      return () => {
        cancelled = true;
        clearTimeout(t);
      };
    }, [phase, paused, canNarrate]);

    // Tour: advance in sync with the narrator: speak this step's line and move on
    // when it finishes. With no narration available, fall back to a fixed dwell.
    React.useEffect(() => {
      if (phase !== 'tour' || paused || done) return undefined;
      let cancelled = false;
      const advance = () => {
        if (cancelled) return;
        if (step >= STEPS.length - 1) setDone(true);else setStep(s => s + 1);
      };
      if (canNarrate && narrate) {
        narrate(STEPS[step].say, () => {
          if (!cancelled) advance();
        });
        // safety net if the speech engine drops the utterance's end event
        const fb = setTimeout(advance, Math.max(4200, STEPS[step].say.length * 95));
        return () => {
          cancelled = true;
          clearTimeout(fb);
        };
      }
      const t = setTimeout(advance, DWELL);
      return () => {
        cancelled = true;
        clearTimeout(t);
      };
    }, [phase, step, paused, done, canNarrate]);
    const cur = STEPS[step];
    const focus = cur.key;
    const connected = step >= 1;
    const status = step === 0 ? 'Incoming call' : step === 1 ? 'Your turn' : step === 2 ? name + ' is speaking' : 'Ready to wrap up';
    const goTo = i => {
      setStep(i);
      setPaused(true);
      setDone(false);
    };

    // a control button in the mock; spotlit when it matches the active step
    function Ctl({
      k,
      size,
      bg,
      icon,
      rot
    }) {
      const on = focus === k;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          opacity: on ? 1 : 0.38,
          transform: on ? 'scale(1.06)' : 'scale(0.94)',
          transition: 'opacity .45s ease, transform .45s ease'
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: on ? 'rp-guide-focus' : '',
        style: {
          position: 'relative',
          width: size,
          height: size,
          borderRadius: '50%',
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: rot ? 'rotate(135deg)' : 'none',
          boxShadow: on ? '0 8px 22px -8px rgba(0,0,0,0.5)' : 'none',
          transition: 'box-shadow .4s ease'
        }
      }, icon));
    }
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      style: {
        position: 'relative',
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px 16px 14px',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        marginBottom: 13,
        paddingRight: 28
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--color-accent-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.Phone, {
      size: 15,
      stroke: "var(--color-accent)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        lineHeight: 1.2
      }
    }, phase === 'intro' ? 'Before you begin' : 'How this call works'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--color-text-muted)',
        marginTop: 1
      }
    }, phase === 'intro' ? 'A quick introduction' : 'Step-by-step controls, narrated'))), phase === 'intro' ? /*#__PURE__*/React.createElement("div", {
      key: "intro",
      className: "rp-guide-cap",
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        padding: '4px 2px 2px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--color-accent-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.Sparkles, {
      size: 20,
      stroke: "var(--color-accent)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--color-accent)',
        marginBottom: 5
      }
    }, capstone ? 'Capstone roleplay' : 'Roleplay \u00b7 ' + (skill || 'Empathy')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        lineHeight: 1.2,
        marginBottom: 7
      }
    }, introHeading), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.55,
        color: 'var(--color-text-secondary)'
      }
    }, introBody), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        marginTop: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 12.5,
        color: 'var(--color-text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rp-call-ring",
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--color-accent)',
        display: 'inline-block'
      }
    }), "Next: a tour of the controls"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setPaused(false);
        setPhase('tour');
      }
    }, "Skip to controls")))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16,
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 20,
        padding: '18px 16px 16px',
        textAlign: 'center',
        color: '#f7f4f0',
        background: 'linear-gradient(180deg, #2c2723 0%, #1d1916 100%)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '4px 11px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(247,244,240,0.1)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.03em',
        marginBottom: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: connected ? 'var(--color-success, #4caf72)' : 'var(--color-accent-light)',
        display: 'inline-block'
      }
    }), connected ? '0:14' : 'Ringing'), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 64,
        height: 64,
        margin: '0 auto 9px'
      }
    }, (step === 0 || step === 2) && /*#__PURE__*/React.createElement("span", {
      className: "rp-call-ring",
      style: {
        position: 'absolute',
        inset: -6,
        borderRadius: '50%',
        border: '2px solid var(--color-accent-light)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'rgba(247,244,240,0.14)',
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 500,
        boxShadow: '0 0 0 3px rgba(247,244,240,0.12)'
      }
    }, c && c.initial || '?')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 16,
        fontWeight: 500
      }
    }, c && c.name || 'Partner'), /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 16,
        marginTop: 5,
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: '0.03em',
        color: 'var(--color-accent-light)'
      }
    }, status), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        minHeight: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
      }
    }, step === 0 ? /*#__PURE__*/React.createElement(Ctl, {
      k: "answer",
      size: 56,
      bg: "var(--color-success, #2faa5d)",
      icon: /*#__PURE__*/React.createElement(I.Phone, {
        size: 22,
        stroke: "#fff"
      })
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ctl, {
      k: "listen",
      size: 44,
      bg: "rgba(247,244,240,0.14)",
      icon: /*#__PURE__*/React.createElement(I.Volume2, {
        size: 18,
        stroke: "#f7f4f0"
      })
    }), /*#__PURE__*/React.createElement(Ctl, {
      k: "talk",
      size: 58,
      bg: focus === 'talk' ? 'var(--color-accent)' : '#f7f4f0',
      icon: /*#__PURE__*/React.createElement(I.Mic, {
        size: 22,
        stroke: focus === 'talk' ? '#fff' : '#1d1916'
      })
    }), /*#__PURE__*/React.createElement(Ctl, {
      k: "end",
      size: 44,
      bg: "var(--color-error, #d9534f)",
      icon: /*#__PURE__*/React.createElement(I.Phone, {
        size: 18,
        stroke: "#fff"
      }),
      rot: true
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      key: step,
      className: "rp-guide-cap"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: 'var(--color-accent)',
        color: '#fff',
        fontSize: 12,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, cur.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--color-accent)'
      }
    }, 'Step ' + cur.n + ' of ' + STEPS.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 19,
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        marginBottom: 6,
        lineHeight: 1.2
      }
    }, cur.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.5,
        color: 'var(--color-text-secondary)'
      }
    }, cur.body)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        marginTop: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("button", {
      key: s.key,
      onClick: () => goTo(i),
      "aria-label": 'Go to step ' + (i + 1),
      style: {
        width: i === step ? 22 : 8,
        height: 8,
        padding: 0,
        borderRadius: 'var(--radius-full)',
        border: 'none',
        cursor: 'pointer',
        background: done || i <= step ? 'var(--color-accent)' : 'var(--color-border)',
        transition: 'width .3s ease, background .3s ease'
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => setPaused(p => !p),
      "aria-label": paused ? 'Play tour' : 'Pause tour',
      title: paused ? 'Play' : 'Pause',
      style: {
        marginLeft: 4,
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        background: 'var(--color-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, paused ? /*#__PURE__*/React.createElement(I.Play, {
      size: 13,
      stroke: "var(--color-text-secondary)"
    }) : /*#__PURE__*/React.createElement(I.Pause, {
      size: 13,
      stroke: "var(--color-text-secondary)"
    }))), /*#__PURE__*/React.createElement("span", {
      className: done ? 'rp-guide-cta' : '',
      style: {
        display: 'inline-flex',
        borderRadius: 'var(--radius-full)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: done ? 'primary' : 'ghost',
      onClick: onDismiss
    }, done ? 'Got it — start' : 'Got it'))))), /*#__PURE__*/React.createElement("button", {
      onClick: onDismiss,
      "aria-label": "Dismiss instructions",
      title: "Dismiss",
      style: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-muted)'
      }
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 15,
      stroke: "var(--color-text-muted)"
    })));
  }

  // ── Setup card (shared) ──────────────────────────────────────
  function SetupCard({
    slide,
    c
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px 18px',
        marginBottom: 16
      }
    }, React.createElement('image-slot', {
      id: 'rp-portrait-' + (c.name || 'partner'),
      src: slide.photoSrc || undefined,
      shape: 'circle',
      fit: 'cover',
      placeholder: c.name ? c.name + '\u2019s photo' : 'Add a face',
      style: {
        width: 56,
        height: 56,
        flexShrink: 0,
        display: 'block',
        boxShadow: '0 0 0 1px var(--color-border-light)',
        borderRadius: '50%'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        marginBottom: 3
      }
    }, c.name, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'var(--color-text-muted)'
      }
    }, c.role ? ' \u00b7 ' + c.role : '')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.55,
        margin: 0
      }
    }, slide.setup), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '8px 0 0',
        fontSize: 13.5,
        color: 'var(--color-text-muted)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--color-text-secondary)',
        fontWeight: 700
      }
    }, "Your aim:"), " ", slide.goal)));
  }

  // ── Chat experience ──────────────────────────────────────────
  function ChatExperience({
    c,
    messages,
    busy,
    grading,
    err,
    aiReady,
    input,
    onInput,
    onSend,
    onEnd
  }) {
    const scrollRef = React.useRef(null);
    const taRef = React.useRef(null);
    const learnerTurns = messages.filter(m => m.role === 'user').length;
    React.useEffect(() => {
      const el = scrollRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, [messages.length, busy, grading]);
    function onKey(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSend();
      }
    }
    function grow(e) {
      onInput(e.target.value);
      e.target.style.height = 'auto';
      e.target.style.height = Math.min(e.target.scrollHeight, 130) + 'px';
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        maxHeight: 'min(46vh, 420px)',
        minHeight: 200,
        overflowY: 'auto'
      }
    }, messages.map((m, i) => /*#__PURE__*/React.createElement(Bubble, {
      key: i,
      m: m,
      name: c.name,
      initial: m.role === 'user' ? 'You' : c.initial
    })), busy && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initial: c.initial,
      tone: "char"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 14px',
        borderRadius: 16,
        borderBottomLeftRadius: 5,
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)'
      }
    }, /*#__PURE__*/React.createElement(Dots, null)))), !aiReady && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "info",
      title: "Live roleplay"
    }, 'This conversation is powered by AI inside the Lumina learning environment. ' + c.name + '\u2019s replies appear once it\u2019s connected; you can still type your responses and end for feedback.')), err && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "error",
      title: "Hmm"
    }, err)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: 'flex',
        gap: 10,
        alignItems: 'flex-end',
        background: 'var(--color-surface)',
        border: '1.5px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '8px 8px 8px 14px'
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      ref: taRef,
      value: input,
      onChange: grow,
      onKeyDown: onKey,
      rows: 1,
      disabled: busy || grading,
      placeholder: 'Reply to ' + c.name + '\u2026',
      style: {
        flex: 1,
        resize: 'none',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-body)',
        fontSize: 15.5,
        lineHeight: 1.5,
        color: 'var(--color-text-primary)',
        maxHeight: 130,
        padding: '6px 0'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => onSend(),
      disabled: !input.trim() || busy || grading,
      "aria-label": "Send",
      style: {
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: 'var(--radius-lg)',
        border: 'none',
        cursor: input.trim() && !busy ? 'pointer' : 'default',
        background: input.trim() && !busy ? 'var(--color-primary)' : 'var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background var(--transition-base)'
      }
    }, /*#__PURE__*/React.createElement(I.Send, {
      size: 17,
      stroke: "#fff"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: 'var(--color-text-muted)'
      }
    }, /*#__PURE__*/React.createElement(I.MessageSquare, {
      size: 15,
      stroke: "var(--color-text-muted)"
    }), learnerTurns === 0 ? 'Send a reply to begin' : learnerTurns + ' repl' + (learnerTurns === 1 ? 'y' : 'ies') + ' \u2014 end whenever you\u2019re ready'), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconRight: grading ? null : /*#__PURE__*/React.createElement(I.Sparkles, {
        size: 16
      }),
      disabled: learnerTurns === 0 || grading || busy,
      onClick: onEnd
    }, grading ? 'Reading the conversation\u2026' : 'End & get feedback')));
  }

  // ── Call experience ──────────────────────────────────────────
  function CallExperience({
    slide,
    c,
    messages,
    busy,
    grading,
    err,
    aiReady,
    onSend,
    onEnd
  }) {
    const [connected, setConnected] = React.useState(false);
    const [elapsed, setElapsed] = React.useState(0);
    const [listening, setListening] = React.useState(false);
    const [interim, setInterim] = React.useState('');
    const [speaking, setSpeaking] = React.useState(false);
    const [voiceOff, setVoiceOff] = React.useState(false);
    const [tidying, setTidying] = React.useState(false);
    const [typed, setTyped] = React.useState('');
    const [srError, setSrError] = React.useState(null);
    const recRef = React.useRef(null);
    const finalRef = React.useRef('');
    const spokenRef = React.useRef(-1);
    const voiceOffRef = React.useRef(false);
    const wantRef = React.useRef(false);
    const netRetryRef = React.useRef(0);
    const keepAliveRef = React.useRef(null);
    const ringRef = React.useRef(null);
    const learnerTurns = messages.filter(m => m.role === 'user').length;
    const lastChar = [...messages].reverse().find(m => m.role === 'char');
    const lastUser = [...messages].reverse().find(m => m.role === 'user');
    React.useEffect(() => {
      voiceOffRef.current = voiceOff;
    }, [voiceOff]);
    function stopSpeak() {
      if (hasTTS) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
      if (keepAliveRef.current) {
        clearInterval(keepAliveRef.current);
        keepAliveRef.current = null;
      }
      setSpeaking(false);
    }
    function speak(text) {
      if (!hasTTS || voiceOffRef.current || !text) return;
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
      // Chrome drops an utterance if speak() fires in the same tick as cancel(),
      // and silently truncates anything past ~15s unless resume() is pinged.
      // A short defer dodges the first bug; a keep-alive interval dodges the
      // second. Voices are warmed in refreshVoices() so the first line isn't mute.
      setTimeout(() => {
        if (voiceOffRef.current) return;
        try {
          const u = new SpeechSynthesisUtterance(text);
          const g = slide.character && slide.character.gender || 'female';
          u.rate = 0.98;
          u.pitch = g === 'male' ? 0.92 : 1.0;
          u.volume = 1;
          const v = pickVoice(g);
          if (v) {
            u.voice = v;
            u.lang = v.lang;
          }
          u.onstart = () => setSpeaking(true);
          u.onend = () => {
            setSpeaking(false);
            if (keepAliveRef.current) {
              clearInterval(keepAliveRef.current);
              keepAliveRef.current = null;
            }
          };
          u.onerror = () => {
            setSpeaking(false);
            if (keepAliveRef.current) {
              clearInterval(keepAliveRef.current);
              keepAliveRef.current = null;
            }
          };
          window.speechSynthesis.speak(u);
          if (keepAliveRef.current) clearInterval(keepAliveRef.current);
          keepAliveRef.current = setInterval(() => {
            try {
              if (window.speechSynthesis.speaking) {
                window.speechSynthesis.pause();
                window.speechSynthesis.resume();
              } else {
                clearInterval(keepAliveRef.current);
                keepAliveRef.current = null;
              }
            } catch (e) {}
          }, 9000);
        } catch (e) {
          setSpeaking(false);
        }
      }, 130);
    }

    // connect: the learner taps to answer (real-world feel + unlocks TTS audio).
    function answer() {
      if (ringRef.current) {
        ringRef.current();
        ringRef.current = null;
      }
      stopRingback(); // kill the singleton too, in case ringRef went stale
      resumeAudio();
      unlockTTS();
      refreshVoices();
      setConnected(true);
    }
    // Ring until answered (or unmount). The slide arrives via a click, so the
    // AudioContext is already unlocked; resumeAudio() covers the rest.
    React.useEffect(() => {
      if (connected) {
        stopRingback();
        return undefined;
      }
      // Wait for the slide's voiceover to finish before the phone starts ringing,
      // so the VO and ringtone never overlap. Narration kicks off ~300ms after the
      // slide change; we give it a beat to begin, then ring only once speech is idle.
      let cancelled = false,
        pollId = null,
        startId = null;
      const begin = () => {
        if (!cancelled && !connected) ringRef.current = startRingback();
      };
      const waitForVO = () => {
        if (cancelled) return;
        const ss = window.speechSynthesis;
        if (ss && (ss.speaking || ss.pending)) {
          pollId = setTimeout(waitForVO, 250);
        } else {
          begin();
        }
      };
      startId = setTimeout(waitForVO, 850);
      return () => {
        cancelled = true;
        if (pollId) clearTimeout(pollId);
        if (startId) clearTimeout(startId);
        if (ringRef.current) {
          ringRef.current();
          ringRef.current = null;
        }
        stopRingback();
      };
    }, [connected]);
    React.useEffect(() => {
      return () => {
        if (ringRef.current) ringRef.current();
        stopRingback();
        wantRef.current = false;
        stopSpeak();
        try {
          recRef.current && recRef.current.abort();
        } catch (e) {}
      };
    }, []);

    // call timer
    React.useEffect(() => {
      if (!connected) return undefined;
      const iv = setInterval(() => setElapsed(e => e + 1), 1000);
      return () => clearInterval(iv);
    }, [connected]);

    // speak each new character line (incl. the opening) once connected
    React.useEffect(() => {
      if (!connected) return;
      const lastIdx = messages.length - 1;
      if (lastIdx < 0) return;
      const m = messages[lastIdx];
      if (m.role === 'char' && lastIdx > spokenRef.current) {
        spokenRef.current = lastIdx;
        speak(m.text);
      }
    }, [connected, messages.length]);
    function fmt(s) {
      const m = Math.floor(s / 60),
        x = s % 60;
      return m + ':' + (x < 10 ? '0' : '') + x;
    }
    function replayLast() {
      if (lastChar) {
        setVoiceOff(false);
        voiceOffRef.current = false;
        speak(lastChar.text);
      }
    }

    // Build a recognizer that keeps listening through natural pauses
    // (true hold-to-talk) and only finalizes when the learner taps stop.
    function makeRec() {
      const rec = new SR();
      rec.lang = 'en-US';
      rec.interimResults = true;
      rec.continuous = true;
      rec.maxAlternatives = 1;
      rec.onresult = e => {
        let live = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) finalRef.current += r[0].transcript + ' ';else live += r[0].transcript;
        }
        setInterim((finalRef.current + live).trim());
      };
      rec.onerror = ev => {
        const err = ev && ev.error;
        // a silent gap just ends the session — we restart it in onend; not an error
        if (err === 'no-speech' || err === 'aborted') return;
        if (err === 'network') {
          // The browser's speech engine couldn't reach its cloud service.
          // Retry a couple of times for a genuinely flaky connection; if it
          // keeps failing it's the environment (embedded preview / non-Google
          // browser) and we hand the learner the typed fallback.
          netRetryRef.current += 1;
          if (wantRef.current && netRetryRef.current <= 2) {
            try {
              rec.start();
              return;
            } catch (e) {}
          }
          wantRef.current = false;
          setListening(false);
          setSrError('Couldn’t reach the voice service. This usually means the course is running inside an embedded preview or a browser without speech support — open it in a Chrome or Edge tab for voice. You can type your reply below in the meantime.');
          return;
        }
        wantRef.current = false;
        setListening(false);
        if (err === 'not-allowed' || err === 'service-not-allowed') {
          setSrError('Microphone access is blocked. Allow the mic for this page (or use the typed reply below).');
        } else {
          setSrError('Voice input hit a snag — try again, or type your reply below.');
        }
      };
      rec.onend = () => {
        // If the learner still wants to talk, the session just timed out on a
        // pause — transparently restart so holding works across silences.
        if (wantRef.current) {
          try {
            rec.start();
            return;
          } catch (e) {/* fall through to finalize */}
        }
        setListening(false);
        const t = finalRef.current.trim();
        setInterim('');
        if (t) {
          // Restore punctuation on the spoken turn before it enters the
          // transcript, so the grader judges meaning — not missing commas.
          setTidying(true);
          punctuate(t).then(clean => {
            setTidying(false);
            onSend(clean);
          }).catch(() => {
            setTidying(false);
            onSend(t);
          });
        }
      };
      return rec;
    }
    function startListen() {
      if (!hasSR || busy || grading || wantRef.current) return;
      stopSpeak();
      setSrError(null);
      finalRef.current = '';
      netRetryRef.current = 0;
      setInterim('');
      const rec = makeRec();
      recRef.current = rec;
      wantRef.current = true;
      try {
        rec.start();
        setListening(true);
      } catch (e) {
        wantRef.current = false;
        setListening(false);
        setSrError('Couldn’t start the mic — type your reply below instead.');
      }
    }
    function stopListen() {
      wantRef.current = false;
      const rec = recRef.current;
      if (rec) {
        try {
          rec.stop();
        } catch (e) {}
      }
    }
    function toggleTalk() {
      if (listening) stopListen();else startListen();
    }
    function sendTyped() {
      const t = typed.trim();
      if (!t || busy || grading) return;
      setTyped('');
      onSend(t);
    }
    function endCall() {
      stopSpeak();
      stopListen();
      onEnd();
    }
    const status = !connected ? 'Incoming call' : busy ? c.name + ' is responding\u2026' : tidying ? 'Got it\u2026' : speaking ? c.name + ' is speaking' : listening ? 'Listening\u2026' : 'Your turn';
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 26,
        padding: '30px 22px 22px',
        textAlign: 'center',
        color: '#f7f4f0',
        background: 'linear-gradient(180deg, #2c2723 0%, #1d1916 100%)',
        boxShadow: 'var(--shadow-lg, 0 18px 50px -12px rgba(0,0,0,0.4))'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '5px 13px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(247,244,240,0.1)',
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.03em',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: connected ? 'var(--color-success, #4caf72)' : 'var(--color-accent-light)',
        display: 'inline-block'
      }
    }), connected ? fmt(elapsed) : 'Ringing'), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 132,
        height: 132,
        margin: '0 auto 16px'
      }
    }, (speaking || !connected) && /*#__PURE__*/React.createElement("span", {
      className: "rp-call-ring",
      style: {
        position: 'absolute',
        inset: -8,
        borderRadius: '50%',
        border: '2px solid var(--color-accent-light)'
      }
    }), React.createElement('image-slot', {
      id: 'rp-portrait-' + (c.name || 'partner'),
      src: slide.photoSrc || undefined,
      shape: 'circle',
      fit: 'cover',
      placeholder: (c.name || 'Add a') + '\u2019s photo',
      style: {
        width: 132,
        height: 132,
        display: 'block',
        borderRadius: '50%',
        boxShadow: '0 0 0 3px rgba(247,244,240,0.14)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        fontWeight: 500
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'rgba(247,244,240,0.6)',
        marginTop: 2
      }
    }, c.role || ''), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.03em',
        color: 'var(--color-accent-light)',
        minHeight: 18,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, busy ? /*#__PURE__*/React.createElement(Dots, null) : status), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        minHeight: 76,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8
      }
    }, connected && lastChar && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        lineHeight: 1.4,
        color: '#f7f4f0'
      }
    }, '\u201c' + lastChar.text + '\u201d'), hasTTS && !voiceOff && /*#__PURE__*/React.createElement("button", {
      onClick: replayLast,
      disabled: speaking || busy,
      "aria-label": 'Replay line',
      title: "Replay",
      style: {
        flexShrink: 0,
        marginTop: 2,
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: 'none',
        cursor: speaking || busy ? 'default' : 'pointer',
        background: 'rgba(247,244,240,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: speaking || busy ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement(I.RotateCcw, {
      size: 14,
      stroke: "#f7f4f0"
    }))), (listening || interim) && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.45,
        color: 'var(--color-accent-light)',
        fontStyle: 'italic'
      }
    }, interim ? 'You: \u201c' + interim + '\u201d' : 'Listening\u2026 speak now'), !listening && !interim && lastUser && !busy && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: 'rgba(247,244,240,0.45)'
      }
    }, 'You said: \u201c' + lastUser.text + '\u201d')), !connected ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: answer,
      "aria-label": "Answer call",
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        background: 'var(--color-success, #2faa5d)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px -6px rgba(47,170,93,0.6)'
      }
    }, /*#__PURE__*/React.createElement(I.Phone, {
      size: 28,
      stroke: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--color-accent-light)'
      }
    }, "Tap to answer")) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        const nv = !voiceOff;
        setVoiceOff(nv);
        if (nv) stopSpeak();
      },
      "aria-label": voiceOff ? 'Unmute voice' : 'Mute voice',
      disabled: !connected,
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        border: 'none',
        cursor: connected ? 'pointer' : 'default',
        background: 'rgba(247,244,240,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, voiceOff ? /*#__PURE__*/React.createElement(I.VolumeX, {
      size: 20,
      stroke: "#f7f4f0"
    }) : /*#__PURE__*/React.createElement(I.Volume2, {
      size: 20,
      stroke: "#f7f4f0"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'rgba(247,244,240,0.55)'
      }
    }, voiceOff ? 'Muted' : 'Voice')), hasSR ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: toggleTalk,
      disabled: !connected || busy || grading || tidying,
      "aria-label": listening ? 'Stop & send' : 'Tap to talk',
      className: listening ? 'rp-mic-live' : '',
      style: {
        position: 'relative',
        width: 76,
        height: 76,
        borderRadius: '50%',
        border: 'none',
        cursor: connected && !busy ? 'pointer' : 'default',
        background: listening ? 'var(--color-accent)' : '#f7f4f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background var(--transition-base)'
      }
    }, /*#__PURE__*/React.createElement(I.Mic, {
      size: 28,
      stroke: listening ? '#fff' : '#1d1916'
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 700,
        color: listening ? 'var(--color-accent-light)' : 'rgba(247,244,240,0.7)'
      }
    }, listening ? 'Tap to send' : srError ? 'Tap to retry' : 'Tap to talk')) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'rgba(247,244,240,0.55)',
        maxWidth: 150,
        lineHeight: 1.4
      }
    }, "Voice input isn\u2019t supported in this browser \u2014 type below."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: endCall,
      disabled: learnerTurns === 0 || grading || busy,
      "aria-label": "End call & get feedback",
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        border: 'none',
        cursor: learnerTurns > 0 && !grading && !busy ? 'pointer' : 'default',
        background: learnerTurns > 0 ? 'var(--color-error, #d9534f)' : 'rgba(247,244,240,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: learnerTurns > 0 ? 1 : 0.5,
        transform: 'rotate(135deg)'
      }
    }, /*#__PURE__*/React.createElement(I.Phone, {
      size: 20,
      stroke: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'rgba(247,244,240,0.55)'
      }
    }, grading ? 'Grading\u2026' : 'End'))), srError && /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 16,
        marginBottom: 0,
        fontSize: 12.5,
        lineHeight: 1.45,
        color: 'var(--color-accent-light)',
        maxWidth: 360,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, srError), (!hasSR || srError) && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        background: 'rgba(247,244,240,0.1)',
        borderRadius: 'var(--radius-xl)',
        padding: '7px 7px 7px 14px'
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: typed,
      onChange: e => setTyped(e.target.value),
      onKeyDown: e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          sendTyped();
        }
      },
      placeholder: 'Say something to ' + c.name + '\u2026',
      disabled: busy || grading || !connected,
      style: {
        flex: 1,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        color: '#f7f4f0',
        fontFamily: 'var(--font-body)',
        fontSize: 15
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: sendTyped,
      disabled: !typed.trim() || busy || grading,
      "aria-label": "Send",
      style: {
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: 'var(--radius-lg)',
        border: 'none',
        cursor: typed.trim() ? 'pointer' : 'default',
        background: typed.trim() ? 'var(--color-accent)' : 'rgba(247,244,240,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.Send, {
      size: 17,
      stroke: "#fff"
    })))), !aiReady && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "info",
      title: "Live call"
    }, 'This call is powered by AI inside the Lumina learning environment. ' + c.name + '\u2019s voice comes through once it\u2019s connected; you can still take your turns and end for feedback.')), err && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "error",
      title: "Hmm"
    }, err)), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 14,
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--color-text-muted)'
      }
    }, learnerTurns === 0 ? hasSR ? 'Tap the mic and speak your first line.' : 'Type your first line to begin.' : learnerTurns + ' turn' + (learnerTurns === 1 ? '' : 's') + ' \u2014 end the call whenever you\u2019re ready for feedback.'));
  }

  // ── Roleplay (host: shared state + mode switch) ──────────────
  function Roleplay({
    slide,
    state,
    onChange,
    onNarrate,
    canNarrate
  }) {
    const c = slide.character || {
      name: 'Partner',
      initial: '?'
    };
    const st = state || {
      messages: [],
      ended: false,
      feedback: null
    };
    const messages = st.messages || [];
    const mode = st.mode || 'call';
    const [input, setInput] = React.useState('');
    const [busy, setBusy] = React.useState(false);
    const [grading, setGrading] = React.useState(false);
    const [err, setErr] = React.useState(null);
    const [showGuide, setShowGuide] = React.useState(true);
    const [callReady, setCallReady] = React.useState(false);
    // Auto-end: the brief “you’ve got it” beat shown once the learner has met
    // the whole rubric, and a guard so it only fires once per conversation.
    const [wrapping, setWrapping] = React.useState(false);
    const [autoChecking, setAutoChecking] = React.useState(false);
    const [wrapRubric, setWrapRubric] = React.useState({});
    const [wrapBusy, setWrapBusy] = React.useState(false);
    const autoFiredRef = React.useRef(false);
    const wrapFbRef = React.useRef(null); // {fb, msgs} once the background grade lands
    const wrapWantRef = React.useRef(false); // learner pressed Continue before the grade landed

    // Re-show the walk-through (and re-arm the briefing) whenever a new scenario opens.
    React.useEffect(() => {
      setShowGuide(true);
      setCallReady(false);
      setWrapping(false);
      setAutoChecking(false);
      setWrapBusy(false);
      setWrapRubric({});
      autoFiredRef.current = false;
      wrapFbRef.current = null;
      wrapWantRef.current = false;
    }, [slide.id]);

    // seed opening
    React.useEffect(() => {
      if ((st.messages || []).length === 0 && slide.opening && !st.ended) {
        onChange({
          messages: [{
            role: 'char',
            text: slide.opening
          }],
          ended: false,
          feedback: null,
          mode
        });
      }
    }, [slide.id]);
    const aiReady = canPlay();
    async function send(textArg) {
      const text = (textArg != null ? textArg : input).trim();
      if (!text || busy || grading || autoChecking || wrapping || st.ended) return;
      const next = [...messages, {
        role: 'user',
        text
      }];
      if (textArg == null) setInput('');
      onChange({
        ...st,
        messages: next
      });
      if (!aiReady) return;
      setBusy(true);
      setErr(null);
      try {
        const reply = await charReply(slide, next, mode);
        const full = [...next, {
          role: 'char',
          text: reply
        }];
        onChange({
          ...st,
          messages: full
        });
        setBusy(false);
        maybeAutoEnd(full);
      } catch (e) {
        setErr(c.name + ' didn\u2019t reply \u2014 try again in a moment.');
        setBusy(false);
      }
    }

    // After a turn lands, check whether the learner has now met the whole rubric
    // (judged by meaning, not wording). If so, play a short “you’ve got it” beat
    // and grade automatically — the manual end button stays available throughout.
    async function maybeAutoEnd(full) {
      if (autoFiredRef.current || grading) return;
      const learnerTurns = full.filter(m => m.role === 'user').length;
      if (learnerTurns < 1) return;
      if (slide.capstone && learnerTurns < 4) return; // let the hard turn arrive first
      setAutoChecking(true);
      let res = {
        allMet: false
      };
      try {
        res = await checkReady(slide, full);
      } catch (e) {}
      setAutoChecking(false);
      if (!res.allMet || autoFiredRef.current) return;
      autoFiredRef.current = true;
      wrapFbRef.current = null;
      wrapWantRef.current = false;
      setWrapRubric(res.rubric || {});
      setWrapBusy(false);
      setWrapping(true);
      gradeForWrap(full); // grade quietly in the background so feedback is ready on Continue
    }

    // Grade while the celebration card is up; fall back to the offline scorer so
    // Continue always has feedback to show even if the AI grade fails.
    async function gradeForWrap(full) {
      let fb = null;
      try {
        fb = await (slide.capstone ? gradeCapstone : gradeConversation)(slide, full);
      } catch (e) {
        try {
          fb = slide.capstone ? window.ScriptedRoleplay.gradeCapstone(slide, full) : window.ScriptedRoleplay.grade(slide, full);
        } catch (e2) {
          fb = null;
        }
      }
      wrapFbRef.current = {
        fb: fb,
        msgs: full
      };
      if (wrapWantRef.current) finishWrap(); // learner already pressed Continue
    }

    // Continue from the celebration card -> reveal the full coaching (waiting on
    // the background grade if it has not landed yet).
    function confirmWrap() {
      if (wrapFbRef.current) finishWrap();else {
        wrapWantRef.current = true;
        setWrapBusy(true);
      }
    }
    function finishWrap() {
      const p = wrapFbRef.current;
      if (!p) return;
      setWrapBusy(false);
      if (p.fb) applyFeedback(p.fb, p.msgs);
      setWrapping(false);
    }
    function applyFeedback(fb, msgs) {
      if (onNarrate) onNarrate('');
      if (hasTTS) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
      if (slide.capstone) {
        const attempts = (st.attempts || 0) + 1;
        const bestScore = Math.max(st.bestScore | 0, fb.score | 0);
        onChange({
          ...st,
          messages: msgs,
          ended: true,
          feedback: fb,
          attempts: attempts,
          bestScore: bestScore
        });
      } else {
        onChange({
          ...st,
          messages: msgs,
          ended: true,
          feedback: fb
        });
      }
    }
    async function end(msgsArg) {
      const msgs = Array.isArray(msgsArg) ? msgsArg : messages;
      if (grading) return;
      if (onNarrate) onNarrate('');
      if (hasTTS) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
      setGrading(true);
      setErr(null);
      try {
        const fb = await (slide.capstone ? gradeCapstone : gradeConversation)(slide, msgs);
        if (slide.capstone) {
          const attempts = (st.attempts || 0) + 1;
          const bestScore = Math.max(st.bestScore | 0, fb.score | 0);
          onChange({
            ...st,
            messages: msgs,
            ended: true,
            feedback: fb,
            attempts: attempts,
            bestScore: bestScore
          });
        } else {
          onChange({
            ...st,
            messages: msgs,
            ended: true,
            feedback: fb
          });
        }
      } catch (e) {
        setErr('The feedback didn\u2019t come through \u2014 try ending again.');
      }
      setGrading(false);
    }
    function retry() {
      setInput('');
      setErr(null);
      setBusy(false);
      setGrading(false);
      setWrapping(false);
      setAutoChecking(false);
      setWrapBusy(false);
      autoFiredRef.current = false;
      wrapFbRef.current = null;
      wrapWantRef.current = false;
      onChange({
        messages: slide.opening ? [{
          role: 'char',
          text: slide.opening
        }] : [],
        ended: false,
        feedback: null,
        mode,
        attempts: st.attempts,
        bestScore: st.bestScore
      });
    }
    function setMode(m) {
      if (m === mode) return;
      if (hasTTS) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
      setErr(null);
      onChange({
        ...st,
        mode: m
      });
    }
    const ended = st.ended && st.feedback;

    // Leaving the walk-through: narrate the situation first, then bring up the
    // call — “here’s the situation… now they’re calling.”
    function dismissGuide() {
      setShowGuide(false);
      const brief = (slide.setup || slide.title + '.') + ' Now, ' + c.name + ' is calling.';
      if (canNarrate && onNarrate) {
        let shown = false;
        const reveal = () => {
          if (!shown) {
            shown = true;
            setCallReady(true);
          }
        };
        onNarrate(brief, reveal);
        setTimeout(reveal, Math.max(6000, brief.length * 80));
      } else {
        setTimeout(() => setCallReady(true), 600);
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 720,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap',
        marginBottom: 13
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "amber",
      dot: true
    }, slide.capstone ? slide.skill : 'Roleplay \u00b7 ' + slide.skill)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(26px,3.6vw,38px)',
        lineHeight: 1.18,
        margin: '0 0 14px'
      }
    }, slide.title), (ended || !showGuide) && /*#__PURE__*/React.createElement(SetupCard, {
      slide: slide,
      c: c
    }), !ended && showGuide ? /*#__PURE__*/React.createElement(HowToCall, {
      key: slide.id,
      c: c,
      narrate: onNarrate,
      canNarrate: canNarrate,
      skill: slide.skill,
      capstone: slide.capstone,
      onDismiss: dismissGuide
    }) : wrapping && !ended ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '36px 24px 28px',
        background: 'var(--color-success-sub)',
        border: '1px solid var(--color-success)',
        borderRadius: 'var(--radius-xl)'
      }
    }, /*#__PURE__*/React.createElement(Confetti, {
      count: 110
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rp-guide-cap"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 72,
        height: 72,
        margin: '0 auto 16px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rp-call-ring",
      style: {
        position: 'absolute',
        inset: -8,
        borderRadius: '50%',
        border: '2px solid var(--color-success)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 72,
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'var(--color-success)'
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 32,
      stroke: "#fff"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        lineHeight: 1.15
      }
    }, 'You\u2019ve got it'), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '8px auto 0',
        maxWidth: 440,
        fontSize: 15,
        lineHeight: 1.55,
        color: 'var(--color-text-secondary)'
      }
    }, 'You met ' + c.name + ' the way this skill asks for. Here\u2019s what you nailed, piece by piece.')), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left',
        maxWidth: 480,
        margin: '20px auto 0',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '6px 18px'
      }
    }, slide.rubric.map((r, i) => {
      const row = wrapRubric[r.key] || {};
      const quote = (row.quote || '').trim();
      return /*#__PURE__*/React.createElement("div", {
        key: r.key,
        style: {
          display: 'flex',
          gap: 12,
          padding: '14px 0',
          borderBottom: i < slide.rubric.length - 1 ? '1px solid var(--color-border-light)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          marginTop: 1,
          borderRadius: '50%',
          background: 'var(--color-success)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(I.Check, {
        size: 13,
        stroke: "#fff"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)'
        }
      }, slide.capstone && r.skill ? r.skill + ' \u00b7 ' + r.label : r.label), quote ? /*#__PURE__*/React.createElement("p", {
        style: {
          margin: '4px 0 0',
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 16.5,
          lineHeight: 1.35,
          color: 'var(--color-text-primary)'
        }
      }, '\u201c' + quote + '\u201d') : /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          lineHeight: 1.5,
          color: 'var(--color-text-muted)',
          marginTop: 3
        }
      }, row.note || r.desc)));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: wrapBusy,
      iconRight: wrapBusy ? null : /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 16
      }),
      onClick: confirmWrap
    }, wrapBusy ? 'Preparing your coaching\u2026' : 'Continue to feedback')))) : ended ? slide.capstone ? /*#__PURE__*/React.createElement(CapstoneFeedback, {
      slide: slide,
      fb: st.feedback,
      onRetry: retry,
      reflection: st.reflection,
      onReflect: v => onChange({
        ...st,
        reflection: v
      }),
      attempts: st.attempts || 1,
      bestScore: st.bestScore || 0
    }) : /*#__PURE__*/React.createElement(Feedback, {
      slide: slide,
      fb: st.feedback,
      onRetry: retry,
      via: mode
    }) : !callReady ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '30px 16px',
        background: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 84,
        height: 84,
        margin: '0 auto 12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rp-call-ring",
      style: {
        position: 'absolute',
        inset: -6,
        borderRadius: '50%',
        border: '2px solid var(--color-accent-light)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 84,
        height: 84,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'var(--color-accent-subtle)',
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 500,
        color: 'var(--color-accent)'
      }
    }, c.initial || '?')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        color: 'var(--color-text-primary)'
      }
    }, c.name, " is about to call\u2026"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-muted)',
        margin: '6px 0 0'
      }
    }, "Take in the situation above first."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        if (onNarrate) onNarrate('');
        if (hasTTS) {
          try {
            window.speechSynthesis.cancel();
          } catch (e) {}
        }
        setCallReady(true);
      }
    }, "Skip \u2014 answer now"))) : /*#__PURE__*/React.createElement(CallExperience, {
      key: 'call-' + slide.id,
      slide: slide,
      c: c,
      messages: messages,
      busy: busy,
      grading: grading,
      err: err,
      aiReady: aiReady,
      onSend: send,
      onEnd: end
    }));
  }
  window.Interactions = Object.assign(window.Interactions || {}, {
    Roleplay,
    silenceAudio: function () {
      stopRingback();
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-elearning/roleplay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empathy-elearning/scripted-engine.js
try { (() => {
// ════════════════════════════════════════════════════════════════
// Lumina — OFFLINE scripted roleplay engine.
// A keyword-driven branching responder + local heuristic scorer used
// when window.claude.complete is unavailable (e.g. the standalone export).
// Exposes window.ScriptedRoleplay = { reply, grade, gradeCapstone }.
// The character's warmth/guardedness and the final coaching are derived
// from empathy signals detected in the learner's own turns — so the
// conversation still branches and the score still reflects skill, with
// no network or API required.
// Banks are framed for STORY MODE (you are a new manager): Maya & Devon
// are your reports, Priya a former-peer, Theo the capstone report passed
// over for a promotion. (Riley = base-mode capstone name, kept as a fallback.)
// ════════════════════════════════════════════════════════════════
(function () {
  'use strict';

  // ── empathy-signal detection on a single learner turn ───────────
  function analyze(raw) {
    const t = ' ' + String(raw || '').toLowerCase().replace(/[\u2019\u2018]/g, "'").replace(/\s+/g, ' ') + ' ';
    const has = re => re.test(t);
    const wordsRaw = String(raw || '').trim();
    const caps = (wordsRaw.match(/\b[A-Z]{3,}\b/g) || []).length;
    const bangs = (wordsRaw.match(/!/g) || []).length;
    return {
      words: wordsRaw.split(/\s+/).filter(Boolean).length,
      question: has(/\?/) || has(/\b(what|how|why|when|where|tell me|can you|do you|are you|want to|would you|is there|talk to me|how come|what'?s going on)\b/),
      warmth: has(/\b(sorry|here for you|i care|i'?m with you|no worries|it'?s ok|it'?s okay|that'?s ok|that'?s okay|take your time|i understand|i get it|i hear you|thank you|thanks|appreciate|glad you|of course|whatever you need|i'?m glad|no rush|don'?t apolog|it happens|that'?s totally fine|completely fine)\b/),
      feeling: has(/\b(you (feel|felt|seem|sound|must|might|may)|sounds like|seems like|seemed like|that must|it makes sense|makes sense|i can (see|tell|imagine|hear)|you'?re feeling|that sounds|i imagine you)\b/) || has(/\b(feeling|feel) (overlooked|invisible|hurt|unseen|unheard|frustrated|dismissed|let down|disappointed|exhausted|overwhelmed|ignored|passed over)\b/),
      reassure: has(/\b(i'?m sure|im sure|don'?t worry|it'?ll be fine|it will be fine|everyone|i'?m certain|you'?ll be fine|don'?t be|no big deal|at least|i'?m positive|it'?s not that bad|you'?re overthinking|you'?re fine)\b/),
      fix: has(/\b(you should|just (try|make|do|talk|send|ask)|try to|try and|why don'?t you|have you tried|what you (need|could|should) do|maybe you (should|could)|next time|here'?s what|you could|you have to|you need to)\b/),
      defensive: has(/\b(that'?s not|you'?re wrong|actually,|not my fault|wasn'?t me|that'?s unfair|calm down|that'?s ridiculous|i did everything|don'?t blame me|it'?s not my|you'?re being|my decision|i'?m the manager|i made the call)\b/),
      heat: caps >= 1 || bangs >= 2 || has(/\b(whatever|seriously\?|are you kidding|unbelievable|deal with it|get over it|drop it)\b/)
    };
  }

  // Aggregate signals across every learner turn in the transcript.
  function tally(messages) {
    const turns = messages.filter(m => m.role === 'user');
    const acc = {
      warmth: 0,
      question: 0,
      feeling: 0,
      reassure: 0,
      fix: 0,
      defensive: 0,
      heat: 0,
      words: 0,
      turns: turns.length
    };
    const perTurn = [];
    turns.forEach(m => {
      const a = analyze(m.text);
      perTurn.push({
        text: m.text,
        a: a
      });
      acc.warmth += a.warmth ? 1 : 0;
      acc.question += a.question ? 1 : 0;
      acc.feeling += a.feeling ? 1 : 0;
      acc.reassure += a.reassure ? 1 : 0;
      acc.fix += a.fix ? 1 : 0;
      acc.defensive += a.defensive ? 1 : 0;
      acc.heat += a.heat ? 1 : 0;
      acc.words += a.words;
    });
    acc.perTurn = perTurn;
    return acc;
  }
  function pick(arr, seed) {
    return arr[Math.min(arr.length - 1, Math.max(0, seed))];
  }
  function turnQuality(a) {
    const good = (a.warmth ? 1 : 0) + (a.question ? 1 : 0) + (a.feeling ? 1.5 : 0);
    const bad = (a.reassure ? 1 : 0) + (a.fix ? 1 : 0) + (a.defensive ? 1.5 : 0) + (a.heat ? 1.5 : 0);
    return good - bad;
  }

  // ── per-character branching reply banks ─────────────────────────
  // tiers: closed (learner cold/blaming), warm (neutral continue), open (deep reveal)
  const BANKS = {
    Maya: {
      closed: ['Understood. I\u2019ll make sure it doesn\u2019t affect anything \u2014 apologies for the short notice.', 'Right, of course. I\u2019ll get the time back to you.', 'Noted. It won\u2019t happen again.'],
      warm: ['Thank you for understanding. I do want to reschedule, not skip it.', 'I appreciate that. It\u2019s been a bit of a day, honestly.', 'Thanks \u2014 I really hate cancelling last minute.'],
      open: ['Honestly\u2026 something personal came up this morning and I\u2019m a little underwater. I didn\u2019t want to bring half of myself to our talk.', 'Thanks for asking like that. I\u2019ll be straight \u2014 I\u2019ve been running on empty for a while. I just haven\u2019t known how to say it.', 'That means a lot. Could we find time later this week? I\u2019d actually like to talk properly.']
    },
    Devon: {
      closed: ['Yeah\u2026 you\u2019re probably right. It\u2019s fine, never mind.', 'No, it\u2019s okay. Forget I said anything.', 'Sure. I\u2019ll just try to make them more useful or whatever.'],
      warm: ['I don\u2019t know. It just sits with me sometimes.', 'Maybe I\u2019m overthinking it.', 'It\u2019s not really about the reports, I guess.'],
      open: ['Yeah\u2026 that\u2019s exactly it. I put everything in and it just disappears. Makes me wonder if I\u2019m actually adding anything here.', 'That\u2019s\u2026 the first time someone\u2019s put it that way. Invisible. That\u2019s the word.', 'Thank you for actually hearing that. I think I just needed to know it landed with someone.']
    },
    Priya: {
      closed: ['See, that\u2019s exactly what I mean. The title\u2019s a month old and you\u2019re already talking down to me.', 'Don\u2019t manage me. Just answer the question.', 'Wow. So that\u2019s how it is now.'],
      warm: ['Okay. I\u2019m listening. But I\u2019m not there yet.', 'Fine. Then help me understand how you got here.', 'I hear you. I\u2019m just frustrated.'],
      open: ['\u2026Okay. Thank you for not just pulling rank on me. I\u2019m frustrated because it feels like my team wasn\u2019t in the room.', 'I appreciate you actually hearing me. Maybe I came in too hot \u2014 this whole thing\u2019s been strange since the promotion.', 'Alright. Let\u2019s figure out how to make this work \u2014 together, this time.']
    },
    // Capstone — phased: guarded -> opening -> challenge -> resolve.
    Theo: {
      guarded: ['I\u2019m okay. I just\u2026 I keep going over it, trying to understand it.', 'It\u2019s fine. These things happen, I know that.'],
      guardedCold: ['Right. I\u2019m sure it was a very fair process.', 'It\u2019s fine. You don\u2019t need to give me the official version.'],
      opening: ['Honestly? It\u2019s hard not to feel invisible. Like the last three years just didn\u2019t count for anything.', 'I keep asking myself whether I\u2019ve been kidding myself about a future here.'],
      challenge: 'Can I ask you straight \u2014 did you even fight for me in that room? Or was this decided before I ever had a chance?',
      resolveGood: ['\u2026Thank you for being honest with me. That actually helps, even if it\u2019s not what I hoped to hear.', 'Okay. I believe you. I think I just needed to know I wasn\u2019t crazy for expecting it.'],
      resolveBad: ['Right. So that\u2019s a no. Got it.', 'Forget it. I shouldn\u2019t have expected a real answer.']
    },
    Riley: {
      guarded: ['Yeah. I mean\u2026 it\u2019s fine. These things happen, right?', 'I\u2019m okay. Just processing it, I guess.'],
      guardedCold: ['Right. I\u2019m sure there were good reasons.', 'It\u2019s fine. You don\u2019t have to explain it to me.'],
      opening: ['Honestly? It\u2019s hard not to feel a little invisible. Like the work I do here doesn\u2019t really register.', 'I keep wondering if I\u2019m actually going anywhere here \u2014 or if I just imagined that I was.'],
      challenge: 'Can I ask you something straight? Did you actually advocate for me in that room \u2014 or was this decided before I ever had a shot?',
      resolveGood: ['\u2026Thank you for being honest with me. That helps, even if it\u2019s not what I wanted to hear.', 'Okay. I believe you. I think I just needed to know I wasn\u2019t crazy for hoping.'],
      resolveBad: ['Wow. So that\u2019s a no, then. Got it.', 'Forget it. I shouldn\u2019t have asked you, of all people.']
    }
  };
  function reply(slide, messages) {
    const name = slide.character.name;
    const userTurns = messages.filter(m => m.role === 'user');
    const last = userTurns[userTurns.length - 1];
    const a = last ? analyze(last.text) : {};
    const q = last ? turnQuality(a) : 0;
    const acc = tally(messages);
    const rapport = acc.warmth + acc.feeling - acc.defensive - acc.heat;

    // Capstone (Theo in story mode, Riley in base) — three-phase arc.
    if (slide.capstone && BANKS[name] && BANKS[name].challenge) {
      const b = BANKS[name];
      const n = userTurns.length;
      if (n >= 4) {
        const challenged = messages.some(m => m.role === 'char' && m.text === b.challenge);
        if (challenged) {
          if (q < 0 || a.defensive || a.heat) return pick(b.resolveBad, acc.defensive + acc.heat - 1);
          return pick(b.resolveGood, Math.max(0, acc.feeling + acc.warmth - 1));
        }
        return b.challenge;
      }
      if (n >= 2 && rapport >= 1 && q >= 0) return pick(b.opening, n - 2);
      if (q < 0) return pick(b.guardedCold, acc.defensive + acc.heat - 1);
      return pick(b.guarded, n - 1);
    }
    const bank = BANKS[name] || BANKS.Maya;
    const n = userTurns.length;
    if (q < 0) return pick(bank.closed, acc.defensive + acc.reassure + acc.fix + acc.heat - 1);
    if (rapport >= 2 || q >= 1 && n >= 2) return pick(bank.open, Math.max(0, rapport - 2 >= 0 ? n - 1 : n - 2));
    return pick(bank.warm, n - 1);
  }

  // ── local heuristic scoring ─────────────────────────────────────
  function met(key, c) {
    switch (key) {
      // generous (Maya) + capstone
      case 'no_assume':
        return c.defensive === 0 && c.heat === 0;
      case 'warmth':
        return c.warmth >= 1;
      case 'curious':
        return c.question >= 1;
      case 'open_door':
        return c.warmth >= 1 && c.defensive === 0 && c.turns >= 2;
      case 'generous':
        return c.defensive === 0 && c.heat === 0 && (c.warmth >= 1 || c.feeling >= 1);
      // reflecting (Devon) + capstone
      case 'named':
        return c.feeling >= 1;
      case 'no_reassure':
        return c.reassure === 0;
      case 'no_fix':
        return c.fix === 0 && c.reassure === 0;
      case 'received':
        return (c.feeling >= 1 || c.warmth >= 1) && c.reassure === 0;
      // regulate (Priya) + capstone
      case 'self_first':
        return c.defensive === 0 && c.heat === 0;
      case 'no_escalate':
        return c.heat === 0 && c.defensive === 0;
      case 'toward':
        return (c.warmth >= 1 || c.feeling >= 1 || c.question >= 1) && c.defensive === 0;
      case 'acknowledge':
        return (c.feeling >= 1 || c.warmth >= 1) && c.defensive === 0;
      case 'regulate':
        return c.heat === 0 && c.defensive === 0;
      default:
        return c.warmth >= 1;
    }
  }
  function verdict(score) {
    if (score >= 85) return 'Right there';
    if (score >= 70) return 'Nicely done';
    if (score >= 50) return 'On your way';
    if (score >= 30) return 'Getting started';
    return 'Off the mark';
  }
  function quoteWith(c, kind) {
    for (const t of c.perTurn) {
      if (kind === 'good' && (t.a.warmth || t.a.feeling || t.a.question)) return t.text;
      if (kind === 'poor' && (t.a.reassure || t.a.fix || t.a.defensive || t.a.heat)) return t.text;
    }
    return '';
  }
  function baseGrade(slide, messages) {
    const c = tally(messages);
    const rubric = slide.rubric;
    const results = {};
    let metCount = 0;
    rubric.forEach(r => {
      const m = met(r.key, c);
      if (m) metCount += 1;
      results[r.key] = {
        met: m,
        note: m ? r.label : 'Room to grow: ' + r.label.toLowerCase()
      };
    });
    let score = Math.round(metCount / rubric.length * 100);
    // engagement floor — shallow attempts can't score high
    if (c.turns < 2) score = Math.min(score, 45);
    if (c.words < 12) score = Math.min(score, 40);
    if (c.turns === 0) score = 0;
    return {
      c: c,
      results: results,
      metCount: metCount,
      score: score
    };
  }
  function strengthsGrowth(slide, c, results, rubric) {
    const strengths = [];
    const growth = [];
    const goodQ = quoteWith(c, 'good');
    const poorQ = quoteWith(c, 'poor');
    const metItem = rubric.find(r => results[r.key].met);
    const missItem = rubric.find(r => !results[r.key].met);
    if (metItem) strengths.push({
      quote: goodQ,
      note: metItem.label + '.'
    });
    if (!strengths.length && goodQ) strengths.push({
      quote: goodQ,
      note: 'You stayed present and engaged.'
    });
    if (missItem) growth.push({
      quote: poorQ,
      note: 'Try: ' + missItem.desc
    });
    if (!growth.length && missItem) growth.push({
      quote: '',
      note: 'Try: ' + missItem.desc
    });
    return {
      strengths: strengths.slice(0, 2),
      growth: growth.slice(0, 2)
    };
  }
  const MODELS = {
    Maya: 'That\u2019s completely okay \u2014 things come up. Is everything alright on your end? We\u2019ll find another time that works.',
    Devon: 'It sounds like you\u2019re feeling overlooked \u2014 like all that effort just vanishes. That would wear on anyone.',
    Priya: 'I can hear how strongly you feel, and you\u2019re right that your team lives with this. Help me understand what worries you most.',
    Theo: 'I hear you, and I get why this stings \u2014 you\u2019ve given so much here. Be honest with me: what\u2019s sitting heaviest right now?',
    Riley: 'I hear you, and I get why this hurts \u2014 you cared a lot about this. Be honest with me: what\u2019s sitting heaviest right now?'
  };
  function grade(slide, messages) {
    const name = slide.character.name;
    const g = baseGrade(slide, messages);
    const sg = strengthsGrowth(slide, g.c, g.results, slide.rubric);
    const band = g.score >= 70 ? 'You met ' + name + ' with real empathy here \u2014 you stayed warm and let them be where they were.' : g.score >= 45 ? 'There were genuine moments of connection. The next step is to slow down and reflect what ' + name + ' was feeling before anything else.' : 'This one slipped toward fixing or reacting. ' + name + ' needed to feel understood first \u2014 try naming the feeling underneath before responding.';
    return {
      score: g.score,
      level: verdict(g.score),
      rubric: g.results,
      strengths: sg.strengths,
      growth: sg.growth,
      summary: band + ' Run it again whenever you like \u2014 this is practice.',
      model: MODELS[name] || '',
      offline: true
    };
  }
  function gradeCapstone(slide, messages) {
    const g = baseGrade(slide, messages);
    const sg = strengthsGrowth(slide, g.c, g.results, slide.rubric);
    const skills = {};
    const groups = {};
    slide.rubric.forEach(r => {
      (groups[r.skill] = groups[r.skill] || []).push(r.key);
    });
    Object.keys(groups).forEach(sk => {
      const keys = groups[sk];
      const m = keys.filter(k => g.results[k].met).length;
      const sc = Math.round(m / keys.length * 100);
      skills[sk] = {
        score: sc,
        verdict: verdict(sc)
      };
    });
    const c = g.c;
    const nm = slide.character.name;
    const handledHeat = c.heat === 0 && c.defensive === 0;
    const turningPoint = c.turns >= 4 ? handledHeat ? 'When ' + nm + ' pushed back and asked if you\u2019d really advocated for them, you stayed steady and turned toward them rather than defending.' : 'When ' + nm + ' pushed back hard, the conversation tightened \u2014 staying regulated there is the thing to practise.' : 'The conversation ended before it reached its hardest moment \u2014 give it a longer back-and-forth next time.';
    const summary = g.score >= 70 ? 'You brought the skills together under real pressure \u2014 reading ' + nm + ' generously, naming what was underneath, and holding steady when it got hard. Strong work.' : 'You had real moments of connection with ' + nm + '. To pass, stay with the feeling underneath before fixing, and keep steady and turned-toward when the challenge lands.';
    return {
      score: g.score,
      level: verdict(g.score),
      skills: skills,
      rubric: g.results,
      strengths: sg.strengths,
      growth: sg.growth,
      turningPoint: turningPoint,
      summary: summary,
      model: MODELS[nm] || MODELS.Theo,
      offline: true
    };
  }

  // Pick the learner's own words that best demonstrate a given rubric criterion,
  // so the auto-grade breakdown can quote them back. Positive criteria map to the
  // turn carrying that signal; absence-based ones fall back to a representative
  // good turn (or the last thing the learner said).
  function quoteForKey(key, c) {
    const find = pred => {
      for (const t of c.perTurn) {
        if (pred(t.a)) return t.text;
      }
      return '';
    };
    let q = '';
    switch (key) {
      case 'warmth':
      case 'open_door':
        q = find(a => a.warmth);
        break;
      case 'curious':
        q = find(a => a.question);
        break;
      case 'named':
      case 'received':
      case 'toward':
      case 'acknowledge':
        q = find(a => a.feeling) || find(a => a.warmth);
        break;
      default:
        q = quoteWith(c, 'good');
        break;
      // absence-based criteria
    }
    if (!q) q = quoteWith(c, 'good');
    if (!q && c.perTurn.length) q = c.perTurn[c.perTurn.length - 1].text;
    return q;
  }

  // ── Readiness probe for AUTO-END ────────────────────────────────
  // Has the learner now met EVERY rubric criterion across the whole
  // conversation? Mirrors the AI checkReady() so the offline build can
  // auto-grade too. Light engagement floors stop a throwaway line (which
  // trivially satisfies the absence-based criteria) from tripping it, and
  // the capstone is held back until the hard turn has had room to land.
  function ready(slide, messages) {
    const g = baseGrade(slide, messages);
    const allRubricMet = slide.rubric.every(r => g.results[r.key].met);
    const engaged = g.c.turns >= 1 && g.c.words >= 12;
    const capstoneOk = !slide.capstone || g.c.turns >= 4;
    const rubric = {};
    slide.rubric.forEach(r => {
      rubric[r.key] = {
        met: g.results[r.key].met,
        note: g.results[r.key].note,
        quote: quoteForKey(r.key, g.c)
      };
    });
    return {
      allMet: allRubricMet && engaged && capstoneOk,
      rubric: rubric
    };
  }
  window.ScriptedRoleplay = {
    reply: reply,
    grade: grade,
    gradeCapstone: gradeCapstone,
    analyze: analyze,
    ready: ready
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-elearning/scripted-engine.js", error: String((e && e.message) || e) }); }

// ui_kits/empathy-elearning/slides.jsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// Presentational slide types for the Lumina e-learning module.
// Each returns the inner content; the Frame supplies chrome + nav.
// window.Slides.*
// ════════════════════════════════════════════════════════════════
(function () {
  const {
    Button,
    Card,
    Badge,
    BreathWave,
    Logo
  } = window.LuminaDesignSystem_f39716;
  const I = window.Icons;

  // Shared eyebrow label
  function Eyebrow({
    children,
    tone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: tone || 'var(--color-accent)'
      }
    }, children);
  }
  const SECTION_ICON = {
    'Module 1': 'Heart',
    'Module 2': 'Brain',
    'Module 3': 'Eye',
    'Module 4': 'Mic',
    'Module 5': 'Dialogue',
    'Knowledge Check': 'Award',
    'Welcome': 'Home',
    'Objectives': 'Star',
    'Course Agenda': 'Book',
    'Summary': 'Check',
    'Complete': 'Award'
  };
  const sectionIcon = s => SECTION_ICON[s] || 'Heart';

  // Brand motif — concentric "breath ripples" + soft amber glow + optional centered icon.
  // Built entirely from Lumina's own visual primitives (no stock imagery).
  function RippleMotif({
    icon,
    size = 132,
    reversed = true,
    glow = true,
    bare = false,
    rings = [1, 0.7, 0.44],
    opacity = 1
  }) {
    const IconC = icon && I[icon] || I.Heart;
    const ringColor = reversed ? 'rgba(247,244,240,0.22)' : 'rgba(42,92,107,0.15)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        opacity
      },
      "aria-hidden": "true"
    }, glow && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: size * 0.92,
        height: size * 0.92,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,149,106,0.30) 0%, transparent 68%)'
      }
    }), rings.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ripple-ring",
      style: {
        position: 'absolute',
        width: size * r,
        height: size * r,
        borderRadius: '50%',
        border: `1.5px solid ${ringColor}`,
        animationDelay: i * 0.5 + 's'
      }
    })), !bare && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: size * 0.32,
        height: size * 0.32,
        borderRadius: '50%',
        background: reversed ? 'rgba(247,244,240,0.14)' : 'var(--color-primary-subtle)',
        border: `1px solid ${ringColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(IconC, {
      size: size * 0.15,
      stroke: reversed ? 'var(--color-accent-light)' : 'var(--color-primary)'
    })));
  }

  // A teal "stage" used by cover & section dividers — immersive, with radial glow + breath wave.
  // `photo` (an <image-slot>) renders full-bleed behind everything, under a brand teal wash so
  // white text stays legible and the photograph reads as an on-brand duotone.
  function TealStage({
    children,
    align = 'center',
    bg,
    photo
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 0,
        background: 'var(--color-primary)',
        overflow: 'hidden',
        borderRadius: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(28px, 6vw, 72px)',
        textAlign: align === 'center' ? 'center' : 'left'
      }
    }, photo && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden'
      }
    }, photo), photo && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(155deg, rgba(42,92,107,0.72) 0%, rgba(42,92,107,0.80) 42%, rgba(26,46,53,0.90) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 78% 18%, rgba(196,149,106,0.26) 0%, transparent 55%), radial-gradient(ellipse at 12% 92%, rgba(212,237,233,0.12) 0%, transparent 52%)'
      }
    }), bg && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }
    }, bg), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 760,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start'
      }
    }, children));
  }

  // Full-bleed photographic background slot (author fills via `src`; user can drop in preview).
  function PhotoLayer({
    id,
    src,
    hint
  }) {
    return React.createElement('image-slot', {
      id: id,
      src: src || undefined,
      shape: 'rect',
      fit: 'cover',
      placeholder: hint || 'Drop a photograph',
      'hide-prompt': '',
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block'
      }
    });
  }

  // ── COVER ──
  function Cover({
    meta,
    onStart,
    resumed,
    story,
    storyData,
    onToggleStory,
    name,
    onName
  }) {
    const sd = storyData || {};
    return /*#__PURE__*/React.createElement(TealStage, {
      bg: /*#__PURE__*/React.createElement(RippleMotif, {
        bare: true,
        glow: false,
        size: 560,
        opacity: 0.5,
        rings: [1, 0.76, 0.54, 0.34]
      }),
      photo: /*#__PURE__*/React.createElement(PhotoLayer, {
        id: "cover-photo",
        hint: "Drop a cover photograph (optional)"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 'clamp(20px,4vh,40px)'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "reversed",
      size: 40
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--color-accent-light)',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        marginBottom: 18
      }
    }, story ? sd.eyebrow : 'Empathy Course · Module'), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        color: 'var(--color-text-inverse)',
        lineHeight: 1.16,
        margin: 0,
        fontSize: 'clamp(38px, 6.5vw, 70px)'
      }
    }, meta.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        color: 'rgba(247,244,240,0.78)',
        fontSize: 'clamp(18px,2.4vw,24px)',
        margin: '22px 0 0',
        maxWidth: story ? 560 : 540,
        lineHeight: 1.4
      }
    }, story ? sd.tagline : 'Empathy is a skill — learnable, practicable, and transformative.'), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'min(360px, 80%)',
        margin: '30px 0 22px'
      }
    }, /*#__PURE__*/React.createElement(BreathWave, {
      height: 30,
      animated: true
    })), /*#__PURE__*/React.createElement("input", {
      value: name,
      onChange: e => onName(e.target.value),
      placeholder: "What should we call you? (optional)",
      style: {
        width: 'min(380px,82%)',
        padding: '12px 16px',
        marginBottom: 18,
        borderRadius: 'var(--radius-lg)',
        border: '1.5px solid rgba(247,244,240,0.32)',
        background: 'rgba(247,244,240,0.10)',
        color: 'var(--color-text-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        textAlign: 'center',
        outline: 'none'
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 18
      }),
      onClick: onStart
    }, resumed ? 'Resume' : story ? 'Begin the story' : 'Start module'), onToggleStory && /*#__PURE__*/React.createElement("button", {
      onClick: onToggleStory,
      style: {
        marginTop: 22,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'transparent',
        border: '1px solid rgba(247,244,240,0.3)',
        borderRadius: 'var(--radius-full)',
        padding: '8px 16px',
        cursor: 'pointer',
        color: 'rgba(247,244,240,0.85)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(I.Book, {
      size: 15,
      stroke: "var(--color-accent-light)"
    }), " ", story ? 'Story mode: on' : 'Read it as a story'), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'clamp(20px,4vh,38px)',
        fontSize: 12,
        color: 'rgba(247,244,240,0.5)',
        maxWidth: 480,
        lineHeight: 1.6
      }
    }, story ? sd.footnote : 'This module contains guided reflection and practice prompts. Find a quiet space — about 15–20 minutes is ideal. Your progress is saved on this device.'));
  }

  // ── OBJECTIVES ──
  function Objectives({
    objectives,
    story,
    name
  }) {
    const hi = name ? name + ', ' : '';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 760,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, story ? 'Your first month' : 'Learning objectives'), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(30px,4.5vw,46px)',
        lineHeight: 1.12,
        margin: '10px 0 6px'
      }
    }, story ? 'What this story will teach you' : 'By the end, you will be able to…'), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-secondary)',
        margin: '0 0 28px',
        lineHeight: 1.6
      }
    }, story ? `Four things ${hi ? hi + 'you' : 'you'}’ll learn the hard way — as a brand-new manager.` : `Four capabilities ${hi ? hi + 'you' : 'you'}’ll build across the five modules ahead.`), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, objectives.map((o, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "lum-card",
      style: {
        display: 'flex',
        gap: 18,
        alignItems: 'flex-start',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '18px 22px',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'var(--color-primary-subtle)',
        color: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 22
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        color: 'var(--color-text-primary)',
        lineHeight: 1.5,
        fontWeight: 500,
        paddingTop: 4
      }
    }, o)))));
  }

  // ── AGENDA ──
  function Agenda({
    agenda,
    story
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 880,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, story ? 'The story' : 'Course agenda'), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(30px,4.5vw,46px)',
        lineHeight: 1.12,
        margin: '10px 0 6px'
      }
    }, story ? 'Five chapters' : 'Five movements toward understanding'), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-secondary)',
        margin: '0 0 28px',
        lineHeight: 1.6
      }
    }, story ? 'A week in your first management role. Read them in order — each one builds on the last.' : 'You’ll move through these in order. Each builds on the one before.'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: 16
      }
    }, agenda.map(m => {
      const MIcon = I[m.icon] || I.Book;
      return /*#__PURE__*/React.createElement("div", {
        key: m.n,
        className: "lum-card",
        style: {
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-light)',
          borderRadius: 'var(--radius-xl)',
          padding: 22,
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 42,
          height: 42,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-primary-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(MIcon, {
        size: 21,
        stroke: "var(--color-primary)"
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--color-text-muted)'
        }
      }, m.n)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontSize: 21,
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          lineHeight: 1.2
        }
      }, m.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          color: 'var(--color-text-secondary)',
          lineHeight: 1.55
        }
      }, m.blurb));
    })));
  }

  // ── SECTION DIVIDER ──
  function SectionDivider({
    slide,
    onContinue,
    story
  }) {
    const isQuiz = slide.variant === 'quiz';
    const photo = slide.photo ? /*#__PURE__*/React.createElement(PhotoLayer, {
      id: slide.photo.id,
      src: slide.photo.src,
      hint: slide.photo.hint
    }) : null;
    return /*#__PURE__*/React.createElement(TealStage, {
      align: "center",
      photo: photo
    }, /*#__PURE__*/React.createElement(RippleMotif, {
      icon: slide.icon || sectionIcon(slide.section),
      size: 132
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--color-accent-light)',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        margin: '22px 0 16px'
      }
    }, slide.n), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        color: 'var(--color-text-inverse)',
        fontSize: 'clamp(36px,6vw,62px)',
        lineHeight: 1.18,
        margin: 0
      }
    }, slide.title), slide.blurb && /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(247,244,240,0.74)',
        fontSize: 'clamp(16px,2vw,20px)',
        margin: '20px 0 0',
        maxWidth: 520,
        lineHeight: 1.55
      }
    }, slide.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'min(320px,70%)',
        margin: '28px 0 30px'
      }
    }, /*#__PURE__*/React.createElement(BreathWave, {
      height: 26,
      animated: true
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 18
      }),
      onClick: onContinue
    }, isQuiz ? 'Begin the check' : story ? 'Read the chapter' : 'Begin'));
  }

  // ── CONTENT ──
  function ContentSlide({
    slide
  }) {
    const SIcon = I[sectionIcon(slide.section)] || I.Heart;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 720,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--color-primary-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: -5,
        borderRadius: '50%',
        border: '1px solid var(--color-border)'
      }
    }), /*#__PURE__*/React.createElement(SIcon, {
      size: 21,
      stroke: "var(--color-primary)"
    })), /*#__PURE__*/React.createElement(Eyebrow, null, slide.eyebrow)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(32px,5vw,52px)',
        lineHeight: 1.1,
        margin: '0 0 2px'
      }
    }, slide.title), slide.sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        color: 'var(--color-primary-muted)',
        fontSize: 'clamp(19px,2.6vw,26px)',
        marginBottom: 22
      }
    }, slide.sub), slide.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 'clamp(16px,1.6vw,18px)',
        lineHeight: 1.78,
        color: 'var(--color-text-secondary)',
        margin: '0 0 18px'
      }
    }, p)), slide.pull && /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: '3px solid var(--color-accent)',
        paddingLeft: 20,
        margin: '26px 0 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(22px,3vw,30px)',
        color: 'var(--color-primary)',
        lineHeight: 1.3
      }
    }, slide.pull)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(BreathWave, {
      height: 18,
      opacity: 0.28
    })));
  }

  // ── SUMMARY ──
  function Summary({
    summary,
    story
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 760,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, story ? 'One month in' : 'Key takeaways'), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        fontSize: 'clamp(30px,4.5vw,46px)',
        lineHeight: 1.12,
        margin: '10px 0 24px'
      }
    }, story ? 'What you learned as a leader' : 'What to carry with you'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, summary.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "lum-card",
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 20px'
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 20,
      stroke: "var(--color-success)",
      style: {
        flexShrink: 0,
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6
      }
    }, s)))));
  }

  // ── COMPLETE ──
  function Complete({
    meta,
    score,
    onRestart,
    name,
    onName,
    onDownload
  }) {
    return /*#__PURE__*/React.createElement(TealStage, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 84,
        height: 84,
        borderRadius: '50%',
        background: 'rgba(247,244,240,0.12)',
        border: '1px solid rgba(247,244,240,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(I.Award, {
      size: 40,
      stroke: "var(--color-accent-light)"
    })), /*#__PURE__*/React.createElement(Badge, {
      tone: "amber",
      dot: true
    }, "Module complete"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        color: 'var(--color-text-inverse)',
        fontSize: 'clamp(36px,6vw,62px)',
        lineHeight: 1.14,
        margin: '16px 0 8px'
      }
    }, name ? 'Beautifully done, ' + name + '.' : 'Beautifully done.'), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(247,244,240,0.78)',
        fontSize: 'clamp(16px,2vw,19px)',
        margin: 0,
        maxWidth: 520,
        lineHeight: 1.6
      }
    }, "You\u2019ve completed ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'italic',
        color: 'var(--color-accent-light)'
      }
    }, meta.title), typeof score === 'number' ? ` with a knowledge-check score of ${score}%` : '', ". That consistency is exactly how empathy is built \u2014 one practised habit at a time."), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'min(340px,72%)',
        margin: '28px 0 22px'
      }
    }, /*#__PURE__*/React.createElement(BreathWave, {
      height: 28,
      animated: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'min(400px,90%)',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: name,
      onChange: e => onName(e.target.value),
      placeholder: "Enter your name for the certificate",
      style: {
        width: '100%',
        padding: '13px 18px',
        borderRadius: 'var(--radius-lg)',
        border: '1.5px solid rgba(247,244,240,0.35)',
        background: 'rgba(247,244,240,0.10)',
        color: 'var(--color-text-inverse)',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        textAlign: 'center',
        outline: 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(I.Download, {
        size: 17
      }),
      onClick: onDownload
    }, "Download certificate"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: onRestart,
      style: {
        background: 'transparent',
        color: 'var(--color-text-inverse)',
        borderColor: 'rgba(247,244,240,0.4)'
      }
    }, "Restart module")));
  }
  window.Slides = {
    Cover,
    Objectives,
    Agenda,
    SectionDivider,
    ContentSlide,
    Summary,
    Complete,
    Eyebrow,
    TOCSidebar
  };

  // ── TABLE OF CONTENTS SIDEBAR ──
  function TOCSidebar({
    toc,
    slides,
    currentIndex,
    furthest,
    onJump,
    onClose,
    isDrawer
  }) {
    // compute first/last slide index for each group
    const groups = toc.map(g => {
      const idxs = slides.map((s, i) => g.sections.indexOf(s.section) > -1 ? i : -1).filter(i => i >= 0);
      return {
        ...g,
        first: Math.min(...idxs),
        last: Math.max(...idxs),
        count: idxs.length
      };
    });
    const totalReached = Math.max(furthest, currentIndex);
    const overall = Math.round(currentIndex / (slides.length - 1) * 100);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: isDrawer ? 'min(300px, 84vw)' : 264,
        flexShrink: 0,
        height: '100%',
        background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border-light)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isDrawer ? 'var(--shadow-xl)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 20px 16px',
        borderBottom: '1px solid var(--color-border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 28
    }), isDrawer && /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Close contents",
      style: {
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 16,
      stroke: "var(--color-text-secondary)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 16px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-mono)'
      }
    }, "Course contents")), /*#__PURE__*/React.createElement("nav", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 12px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, groups.map((g, gi) => {
      const GIcon = I[g.icon] || I.Book;
      const isCurrent = currentIndex >= g.first && currentIndex <= g.last;
      const isDone = totalReached > g.last;
      const reached = g.first <= totalReached;
      const locked = !reached;
      return /*#__PURE__*/React.createElement("button", {
        key: g.key,
        disabled: locked,
        onClick: () => {
          if (!locked) {
            onJump(g.first);
            if (onClose) onClose();
          }
        },
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '11px 12px',
          borderRadius: 'var(--radius-lg)',
          border: 'none',
          width: '100%',
          textAlign: 'left',
          background: isCurrent ? 'var(--color-primary-subtle)' : 'transparent',
          cursor: locked ? 'not-allowed' : 'pointer',
          opacity: locked ? 0.5 : 1,
          transition: 'background var(--transition-base)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 30,
          height: 30,
          flexShrink: 0,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isDone ? 'var(--color-success-sub)' : isCurrent ? 'var(--color-primary)' : 'var(--color-surface-alt)'
        }
      }, isDone ? /*#__PURE__*/React.createElement(I.Check, {
        size: 15,
        stroke: "var(--color-success)"
      }) : locked ? /*#__PURE__*/React.createElement(I.Lock, {
        size: 14,
        stroke: "var(--color-text-muted)"
      }) : /*#__PURE__*/React.createElement(GIcon, {
        size: 15,
        stroke: isCurrent ? '#fff' : 'var(--color-primary)'
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0,
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)'
        }
      }, gi === 0 ? 'Start' : gi === groups.length - 1 ? 'Finish' : 'Section ' + gi), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          fontWeight: isCurrent ? 700 : 600,
          color: isCurrent ? 'var(--color-primary)' : 'var(--color-text-primary)',
          lineHeight: 1.25,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, g.label)));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 18px',
        borderTop: '1px solid var(--color-border-light)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)'
      }
    }, "Progress"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--color-primary)',
        fontFamily: 'var(--font-mono)'
      }
    }, overall, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--color-primary-subtle)',
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: overall + '%',
        background: 'linear-gradient(90deg, var(--color-primary-muted), var(--color-primary))',
        transition: 'width var(--transition-slow)'
      }
    }))));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empathy-elearning/slides.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BreathWave = __ds_scope.BreathWave;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

})();
