import figma, { html } from "@figma/code-connect/html";

const sharedProps = {
  label: figma.string("Button"),
  severity: figma.enum("Severity", {
    Primary: "primary",
    Secondary: "secondary",
    Success: "success",
    Info: "info",
    Warn: "warn",
    Help: "help",
    Danger: "danger",
    Contrast: "contrast"
  }),
  raised: figma.boolean("⬆️ Raised", {
    true: "true"
  }),
  rounded: figma.boolean("⥰ Rounded", {
    true: "true"
  }),
  outlined: figma.boolean("🔲 Outlined", {
    true: "true"
  }),
  text: figma.boolean("🔤 Text", {
    true: "true"
  }),
  disabled: figma.boolean("Disabled", {
    true: "true"
  }),
  link: figma.boolean("Link", {
    true: "true"
  })
};

// Default button with icons
figma.connect("<PRIMENG_BUTTON>", {
  variant: {
    "Icon Only": false,
    "Show Left Icon": true,
    "Show Right Icon": true
  },
  props: {
    ...sharedProps,
    iconLeft: figma.className([
      'pi',
      'pi-check'
    ]),
    iconRight: figma.className([
      'pi',
      'pi-check'
    ])
  },
  example: ({ label, raised, rounded, outlined, text, link, severity, disabled, iconLeft, iconRight }) => html`
    <button 
      pButton
      type="button"
      label=${label} 
      [link]=${link} 
      [raised]=${raised} 
      [rounded]=${rounded} 
      [outlined]=${outlined} 
      [text]=${text} 
      severity=${severity} 
      [disabled]=${disabled}
    >
      <i class=${iconLeft}></i>
      <span>${label}</span>
      <i class=${iconRight}></i>
    </button>
  `,
  imports: ["import { ButtonModule } from 'primeng/button'"]
});

// Default button without icons
figma.connect("<PRIMENG_BUTTON>", {
  variant: {
    "Icon Only": false,
    "Show Left Icon": false,
    "Show Right Icon": false
  },
  props: {
    ...sharedProps,
  },
  example: ({ label, raised, rounded, outlined, text, link, severity, disabled }) => html`
    <p-button 
      label=${label} 
      [link]=${link} 
      [raised]=${raised} 
      [rounded]=${rounded} 
      [outlined]=${outlined} 
      [text]=${text} 
      severity=${severity} 
      [disabled]=${disabled}
    >
    </p-button>
  `,
  imports: ["import { ButtonModule } from 'primeng/button'"]
});

// Button with left icon
figma.connect("<PRIMENG_BUTTON>", {
  variant: {
    "Icon Only": false,
    "Show Left Icon": true,
    "Show Right Icon": false
  },
  props: {
    ...sharedProps,
    icon: figma.className([
      'pi',
      'pi-check'
    ]),
    iconPosition: figma.boolean("Show Left Icon", {
      true: "left"
    })
  },
  example: ({ label, icon, iconPosition, raised, rounded, outlined, text, link, severity, disabled }) => html`
    <p-button 
      label=${label} 
      iconPos=${iconPosition} 
      icon=${icon} 
      [link]=${link} 
      [raised]=${raised} 
      [rounded]=${rounded} 
      [outlined]=${outlined} 
      [text]=${text} 
      severity=${severity} 
      [disabled]=${disabled}
    >
    </p-button>
  `,
  imports: ["import { ButtonModule } from 'primeng/button'"]
});

// Button with right icon
figma.connect("<PRIMENG_BUTTON>", {
  variant: {
    "Icon Only": false,
    "Show Left Icon": false,
    "Show Right Icon": true
  },
  props: {
    ...sharedProps,
    icon: figma.className([
      'pi',
      'pi-check'
    ]),
    iconPosition: figma.boolean("Show Right Icon", {
      true: "right"
    })
  },
  example: ({ label, icon, iconPosition, raised, rounded, outlined, text, link, severity, disabled }) => html`
    <p-button 
      label=${label} 
      icon=${icon} 
      iconPos=${iconPosition} 
      [link]=${link} 
      [raised]=${raised} 
      [rounded]=${rounded} 
      [outlined]=${outlined} 
      [text]=${text} 
      severity=${severity} 
      [disabled]=${disabled}
    >
    </p-button>
  `,
  imports: ["import { ButtonModule } from 'primeng/button'"]
});

// Icon-only button
figma.connect("<PRIMENG_BUTTON>", {
  variant: {
    "Icon Only": true
  },
  props: {
    ...sharedProps,
    icon: figma.className([
      'pi pi-check'
    ])
  },
  example: ({ icon, raised, rounded, outlined, text, link, severity, disabled }) => html`
    <p-button 
      aria-label=${text}
      icon=${icon} 
      [link]=${link} 
      [raised]=${raised} 
      [rounded]=${rounded} 
      [outlined]=${outlined} 
      [text]=${text} 
      severity=${severity} 
      [disabled]=${disabled}
    >
    </p-button>
  `,
  imports: ["import { ButtonModule } from 'primeng/button'"]
});
