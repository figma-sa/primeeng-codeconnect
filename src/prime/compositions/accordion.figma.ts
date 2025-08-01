import figma, { html } from "@figma/code-connect/html";

figma.connect("<PRIMENG_ACCORDION_HEADER>", {
  props: {
    label: figma.string("Header"),
    disabled: figma.boolean("Disabled", {
      true: "true",
    }),
    className: figma.className([ 
        'p-accordionheader' 
    ]),
  },
  example: ({ label, disabled, className }) => html`
    <p-accordion-header class=${className} [disabled]=${disabled}>
      ${label}
    </p-accordion-header>
  `,
});

figma.connect("<PRIMENG_ACCORDION_PANEL>", {
  props: {
    header: figma.children("_accordion-header"),
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    className: figma.className([
        'p-accordionpanel',
        figma.enum("Toggle Status", { Expanded: 'p-accordionpanel-active' }),
  ]),
},
  example: ({ header, body, className }) => html`
    <p-accordion-panel class=${className}>
      ${header}
      <p-accordion-content>
        <p>${body}</p>
      </p-accordion-content>
    </p-accordion-panel>
  `,
});

figma.connect("<PRIMENG_ACCORDION>", {
    props: { 
        panels: figma.children("_accordion-panel"),
    },
    example: ({ panels }) => html`
        <p-accordion>
            ${panels}
        </p-accordion>
    `,
});
