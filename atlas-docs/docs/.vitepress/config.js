export default {
  title: 'Atlas',
  description: 'Atlas design system for OSM',
  themeConfig: {
    nav: [
      { text: 'Using Atlas', link: '/using-atlas/about', activeMatch: '/using-codex/' },
      { text: 'Contributing', link: '/contributing/overview', activeMatch: '/contributing/' },
      { text: 'Style Guide', link: '/style-guide/overview', activeMatch: '/style-guide/' },
      { 
        text: 'Toolkit', 
        items: [
          { text: 'Design tokens', link: '/design-tokens/overview', activeMatch: '/design-tokens/' },
          { text: 'Components', link: '/components/overview', activeMatch: '/components/' },
          { text: 'Icons', link: '/icons/overview', activeMatch: '/icons/' },
          { text: 'Composables', link: '/composables/overview', activeMatch: '/composables/' }
        ] 
      }
    ],

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/wikimedia/design-codex', 
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
            { text: 'Overview', link: '/using-codex/adrs/overview' },
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
            { text: 'Overview', link: '/style-guide/overview' }
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
        },
        {
          text: 'Platforms',
          items: [
            { text: 'Wikipedia Apps', link: '/style-guide/wikipedia-apps' }
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
            { text: 'Animation', link: '/design-tokens/animation' },
            { text: 'Border', link: '/design-tokens/border' },
            { text: 'Box-shadow', link: '/design-tokens/box-shadow' },
            { text: 'Box-sizing', link: '/design-tokens/box-sizing' },
            { text: 'Breakpoint', link: '/design-tokens/breakpoint' },
            { text: 'Colors', link: '/design-tokens/colors' },
            { text: 'Cursor', link: '/design-tokens/cursor' },
            { text: 'Font', link: '/design-tokens/font' },
            { text: 'Opacity', link: '/design-tokens/opacity' },
            { text: 'Outline', link: '/design-tokens/outline' },
            { text: 'Position', link: '/design-tokens/position' },
            { text: 'Size', link: '/design-tokens/size' },
            { text: 'Spacing', link: '/design-tokens/spacing' },
            { text: 'Transition', link: '/design-tokens/transition' },
            { text: 'Z-Index', link: '/design-tokens/z-index' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/overview' },
            { text: 'Types and constants', link: '/components/types-and-constants' }
          ]
        },
        {
          text: '',
          items: [
            {
              text: 'Buttons',
              collapsed: true,
              items: [
                { text: 'Button', link: '/components/demos/button' },
                { text: 'ButtonGroup', link: '/components/demos/button-group' },
                { text: 'MenuButton', link: '/components/demos/menu-button' },
                { text: 'ToggleButton', link: '/components/demos/toggle-button' },
                { text: 'ToggleButtonGroup', link: '/components/demos/toggle-button-group' }
              ]
            },
            {
              text: 'Form elements',
              collapsed: true,
              items: [
                { text: 'Checkbox', link: '/components/demos/checkbox' },
                { text: 'ChipInput', link: '/components/demos/chip-input' },
                { text: 'Combobox', link: '/components/demos/combobox' },
                { text: 'Field', link: '/components/demos/field' },
                { text: 'Label', link: '/components/demos/label' },
                { text: 'Lookup', link: '/components/demos/lookup' },
                { text: 'MultiselectLookup', link: '/components/demos/multiselect-lookup' },
                { text: 'Radio', link: '/components/demos/radio' },
                { text: 'Select', link: '/components/demos/select' },
                { text: 'TextArea', link: '/components/demos/text-area' },
                { text: 'TextInput', link: '/components/demos/text-input' },
                { text: 'ToggleSwitch', link: '/components/demos/toggle-switch' }
              ]
            },
            {
              text: 'Content & data',
              collapsed: true,
              items: [
                { text: 'Accordion', link: '/components/demos/accordion' },
                { text: 'Card', link: '/components/demos/card' },
                { text: 'Dialog', link: '/components/demos/dialog' },
                { text: 'Menu', link: '/components/demos/menu' },
                { text: 'MenuItem', link: '/components/demos/menu-item' },
                { text: 'Popover', link: '/components/demos/popover' },
                { text: 'Table', link: '/components/demos/table' },
                { text: 'Tooltip', link: '/components/directives/tooltip' }
              ]
            },
            {
              text: 'Feedback',
              collapsed: true,
              items: [
                { text: 'InfoChip', link: '/components/demos/info-chip' },
                { text: 'Message', link: '/components/demos/message' },
                { text: 'ProgressBar', link: '/components/demos/progress-bar' }
              ]
            },
            {
              text: 'Media',
              collapsed: true,
              items: [
                { text: 'Icon', link: '/components/demos/icon' },
                { text: 'Image', link: '/components/demos/image' },
                { text: 'Thumbnail', link: '/components/demos/thumbnail' }
              ]
            },
            {
              text: 'Navigation',
              collapsed: true,
              items: [
                { text: 'Link', link: '/components/mixins/link' },
                { text: 'Tabs', link: '/components/demos/tabs' },
                { text: 'Tab', link: '/components/demos/tab' }
              ]
            },
            {
              text: 'Search',
              collapsed: true,
              items: [
                { text: 'SearchInput', link: '/components/demos/search-input' },
                { text: 'TypeaheadSearch', link: '/components/demos/typeahead-search' }
              ]
            }
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