export default {
  base: '/docs/',
  title: 'Atlas',
  description: 'Atlas design system for OSM',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Using Atlas', link: '/using-atlas/about', activeMatch: '/using-atlas/' },
      { text: 'Contributing', link: '/contributing/overview', activeMatch: '/contributing/' },
      { text: 'Style Guide', link: '/style-guide/overview', activeMatch: '/style-guide/' },
      { 
        text: 'Toolkit', 
        items: [
          { text: 'Design tokens', link: '/design-tokens/overview', activeMatch: '/design-tokens/' },
          { text: 'Components', link: '/components/overview', activeMatch: '/components/' },
        ] 
      }
    ],

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/Gustavo22Soaresh/Design-Atlas', 
        ariaLabel: 'Atlas on GitHub' 
      }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {
              title: 50,
              text: 2,
              titles: 1
            }
          }
        }
      }
    },

    sidebar: {
      '/using-atlas/': [
        {
          text: 'Using Atlas',
          items: [
            { text: 'About Atlas', link: '/using-atlas/about' }
          ]
        },
        {
          text: 'Developing',
          items: [
            { text: 'Usage', link: '/using-atlas/usage' },
            { text: 'Packages', link: '/using-atlas/packages' }
          ]
        },
        {
          text: 'Architecture Decisions',
          items: [
            { text: 'Overview', link: '/using-atlas/adrs/overview' },
            { text: 'ADR-01 - Design Tokens', link: '/using-atlas/adrs/01-adr-design-tokens.md' },
            { text: 'ADR-02 - Adoption of Svelte as Frontend Framework', link: '/using-atlas/adrs/02-svelte.md' },
            { text: 'ADR-03 - Adoption of the class-first approach in CSS', link: '/using-atlas/adrs/03-adr-adoption-of-class-first-approach-in-css.md'}
          ]
        }
      ],
      '/contributing/': [
        {
          text: 'Contributing',
          items: [
            { text: 'Overview', link: '/contributing/overview' }
          ]
        },
        {
          text: 'Contributing design',
          items: [
            { text: 'Designing tokens', link: '/contributing/designing-tokens' },
            { text: 'Designing new components', link: '/contributing/designing-new-components' },
            { text: 'Redesigning existing components', link: '/contributing/redesigning-existing-components' },
          ]
        },
        {
          text: 'Contributing code',
          items: [
            { text: 'Introduction', link: '/contributing/contributing-code/introduction' },
            { text: 'Developing components', link: '/contributing/contributing-code/developing-components' },
            { text: 'Testing components', link: '/contributing/contributing-code/testing-components' },
            { text: 'Component demos', link: '/contributing/contributing-code/component-demos' }
          ]
        }
      ],
      '/style-guide/': [
        {
          text: 'Style Guide',
          items: [
            { text: 'Overview', link: '/style-guide/overview' },
            { text: 'Statement of Purpose', link: '/style-guide/statement-of-purpose' }
          ]
        },
        {
          text: 'Design Principles',
          items: [
            { text: 'Overview', link: '/style-guide/design-principles-overview' },
            { text: 'Accessibility', link: '/style-guide/accessibility' },
            { text: 'Bidirectionality', link: '/style-guide/bidirectionality' }
          ]
        },
        {
          text: 'Visual Styles',
          items: [
            { text: 'Theme', link: '/style-guide/theme' },
            { text: 'Typography', link: '/style-guide/typography' },
            { text: 'Icons', link: '/style-guide/icons' },
            { text: 'Images', link: '/style-guide/images' },
            { text: 'Illustrations', link: '/style-guide/illustrations' }
          ]
        },
        {
          text: 'Layout Guidelines',
          items: [
            { text: 'Content overflow', link: '/style-guide/content-overflow' },
            { text: 'Using links and buttons', link: '/style-guide/using-links-and-buttons' },
            { text: 'Constructing forms', link: '/style-guide/constructing-forms' }
          ]
        },
        {
          text: 'Content Guidelines',
          items: [
            { text: 'Voice and tone', link: '/style-guide/voice-and-tone' },
            { text: 'Writing for copy', link: '/style-guide/writing-for-copy' },
            { text: 'Additional resources', link: '/style-guide/additional-resources' }
          ]
        }
      ],
      '/design-tokens/': [
        {
          text: 'Design tokens',
          items: [
            { text: 'Overview', link: '/design-tokens/overview' },
            { text: 'Definition and structure', link: '/design-tokens/definition-and-structure' }
          ]
        },
        {
          text: '',
          items: [
            { text: 'Border', link: '/design-tokens/border' },
            { text: 'Box-shadow', link: '/design-tokens/box-shadow' },
            { text: 'Colors', link: '/design-tokens/colors' },
            { text: 'Cursor', link: '/design-tokens/cursor' },
            { text: 'Font', link: '/design-tokens/font' },
            { text: 'Opacity', link: '/design-tokens/opacity' },
            { text: 'Size', link: '/design-tokens/size' },
            { text: 'Spacing', link: '/design-tokens/spacing' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/overview' }
          ]
        },
        {
          text: '',
          items: [
              { text: 'Accordion', link: '/components/demos/accordion' },
              { text: 'Alert', link: '/components/demos/alert' },
              { text: 'Buttons', link: '/components/demos/buttons' },
              { text: 'Button-Group', link: '/components/demos/button-group' },
              { text: 'Checkbox', link: '/components/demos/checkbox' },
              { text: 'Field', link: '/components/demos/field' },
              { text: 'Label', link: '/components/demos/label' },
              { text: 'Link', link: '/components/demos/link' },
              { text: 'Menu', link: '/components/demos/menu' },
              { text: 'Modals', link: '/components/demos/modals' },
              { text: 'Pagination', link: '/components/demos/pagination' },
              { text: 'Radio', link: '/components/demos/radio' },
              { text: 'Select', link: '/components/demos/select' },
              { text: 'Tabs', link: '/components/demos/tabs' },
              { text: 'TextArea', link: '/components/demos/text-area' },
              { text: 'TextInput', link: '/components/demos/textinput' },
              { text: 'ToggleSwitch', link: '/components/demos/toggleswitch' },
              { text: 'Tooltip', link: '/components/demos/tooltip' },
      ]
    }
  ],
      '/icons/': [
        {
          text: 'Icons',
          items: [
            { text: 'Overview', link: '/icons/overview' },
            { text: 'List of all icons', link: '/icons/all-icons' }
          ]
        }
      ],
      '/composables/': [
        {
          text: 'Composables',
          items: [
            { text: 'Overview', link: '/composables/overview' }
          ]
        },
        {
          text: '',
          items: [
            { text: 'useComputedDirection', link: '/composables/demos/use-computed-direction' },
            { text: 'useComputedLanguage', link: '/composables/demos/use-computed-language' },
            { text: 'useFloatingMenu', link: '/composables/demos/use-floating-menu' },
            { text: 'useIntersectionObserver', link: '/composables/demos/use-intersection-observer' },
            { text: 'useModelWrapper', link: '/composables/demos/use-model-wrapper' },
            { text: 'useResizeObserver', link: '/composables/demos/use-resize-observer' }
          ]
        }
      ]
    }
  }
};
