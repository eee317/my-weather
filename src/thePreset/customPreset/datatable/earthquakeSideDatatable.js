export default {
  root: ({ props }) => ({
    class: [
      'relative',

      // Flex & Alignment
      { 'flex flex-col': props.scrollable && props.scrollHeight === 'flex' },

      // Size
      { 'h-full': props.scrollable && props.scrollHeight === 'flex' },
    ],
  }),
  loadingoverlay: {
    class: [
      // Position
      'absolute',
      'top-0 left-0',
      'z-20',

      // Flex & Alignment
      'flex items-center justify-center',

      // Size
      'w-full h-full',

      // Color
      'bg-surface-100/40 dark:bg-surface-800/40',

      // Transition
      'transition duration-200',
    ],
  },
  loadingicon: {
    class: 'w-8 h-8 animate-spin',
  },
  wrapper: ({ props }) => ({
    class: [
      { relative: props.scrollable, 'flex flex-col grow': props.scrollable && props.scrollHeight === 'flex' },

      // Size
      { 'h-full': props.scrollable && props.scrollHeight === 'flex' },
    ],
  }),
  header: ({ props }) => ({
    class: [
      'font-bold ',

      // Shape
      props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0',

      // Color
      'bg-surface-50 dark:bg-surface-800',
      'border-surface-200 dark:border-surface-700',
      'text-surface-700 dark:text-white/80',
    ],
  }),
  table: {
    class: 'w-full border-spacing-0 border-separate bg-surface-0 dark:bg-primary-dark-300',
  },
  thead: ({ context }) => ({
    class: [
      {
        'bg-surface-50 top-0 z-40 sticky': context.scrollable,
      },
    ],
  }),
  tbody: ({ instance, context }) => ({
    class: [
      {
        'sticky z-20': instance.frozenRow && context.scrollable,
      },
    ],
  }),
  tfoot: ({ context }) => ({
    class: [
      {
        'bg-surface-50 bottom-0 z-0': context.scrollable,
      },
    ],
  }),
  footer: {
    class: [
      'font-bold',

      // Shape
      'border-t-0 border-b border-x-0',

      // Color
      'bg-surface-50 dark:bg-surface-800',
      'border-surface-200 dark:border-surface-700',
      'text-surface-700 dark:text-white/80',
    ],
  },
  column: {
    headercell: ({ context, props }) => ({
      class: [
        'hidden', //關閉 headercell
        'font-normal',

        // Position
        { 'sticky z-20 border-b': props.frozen || props.frozen === '' },

        { relative: context.resizable },

        // Alignment
        'text-center',

        // Shape
        { 'first:border-l border-y border-r': context?.showGridlines },
        'border-0 border-b border-solid',

        // Spacing
        context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'px-4 py-2',

        // Color
        'bg-primary-50 text-primary-700 dark:bg-primary-dark-500',
        'border-surface-200 dark:border-[#393E46] border-t-0 py-3',
        

        // States
        'hover:bg-primary-200 dark:hover:bg-[#20252B]',
        'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

        // Transition
        { 'transition duration-200': props.sortable === '' || props.sortable },

        // Misc
        { 'cursor-pointer': props.sortable === '' || props.sortable },
        {
          'overflow-hidden space-nowrap border-y bg-clip-padding': context.resizable, // Resizable
        },
      ],
    }),
    headercontent: {
      class: 'flex items-center justify-center gap-2 ',
    },
    sort: ({ context }) => ({
      class: [context.sorted ? 'text-primary-500' : 'text-surface-0'],
    }),
    bodycell: ({ props, context, state, parent }) => ({
      class: [
        //Position
        { 'sticky z-20 box-border border-b': parent.instance.frozenRow || props.frozen || props.frozen === '' },

        // Alignment
        'text-left',

        // Shape
        'border-0 border-b border-solid',
        { 'first:border-l border-r border-b': context?.showGridlines },
        { 'bg-surface-0 dark:bg-primary-dark-300': parent.instance.frozenRow || props.frozen || props.frozen === '' },

        // Spacing
        { 'py-2': context?.size === 'small' && !state['d_editing'] },
        { 'py-5': context?.size === 'large' && !state['d_editing'] },
        { 'py-2': context?.size !== 'large' && context?.size !== 'small' && !state['d_editing'] },
        { 'py-[0.6rem]': state['d_editing'] },
        { 'px-4': !(parent.instance.frozenRow || props.frozen || props.frozen === '') },

        // Color
        'border-surface-200 dark:border-[#48505D]',
        //'border-surface-200 dark:border-[#48505D]',
      ],
    }),
    footercell: ({ context }) => ({
      class: [
        // Font
        'font-bold',

        // Alignment
        'text-left flex',

        // Shape
        'border-0 border-b border-solid',
        { 'border-x border-y': context?.showGridlines },

        // Spacing
        context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4',

        // Color
        'border-surface-200 dark:border-surface-700',
        'text-surface-700 dark:text-white/80',
        'bg-surface-50 dark:bg-surface-800',
      ],
    }),
    sorticon: ({ context }) => ({
      class: ['text-primary-700'],
    }),
    sortbadge: {
      class: [
        // Flex & Alignment
        'flex items-center justify-center align-middle',

        // Shape
        'rounded-full',

        // Size
        'w-[1.143rem] leading-[1.143rem]',

        // Spacing
        'ml-2',

        // Color
        'text-primary-700 dark:text-white',
        'bg-primary-50 dark:bg-primary-400/30',
      ],
    },
    columnfilter: {
      class: 'inline-flex items-center ml-auto',
    },
    filteroverlay: {
      class: [
        // Position
        'absolute top-0 left-0',

        // Shape
        'border-0 dark:border',
        'rounded-md',
        'shadow-md',

        // Size
        'min-w-[12.5rem]',

        // Color
        'bg-surface-0 dark:bg-surface-800',
        'text-surface-800 dark:text-white/80',
        'dark:border-surface-700',
      ],
    },
    filtermatchmodedropdown: {
      root: ({ state }) => ({
        class: [
          // Display and Position
          'flex',
          'relative',

          // Spacing
          'my-2',

          // Shape
          'w-full',
          'rounded-md',

          // Color and Background
          'bg-surface-0 dark:bg-surface-900',
          'border border-surface-300 dark:border-surface-700',
          'text-surface-800 dark:text-white/80',
          'placeholder:text-surface-400 dark:placeholder:text-surface-500',

          // Transitions
          'transition-all',
          'duration-200',

          // States
          'hover:border-primary-500 dark:hover:border-primary-300',
          { 'outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50': state.focused },

          // Misc
          'cursor-pointer',
          'select-none',
        ],
      }),
    },
    filterrowitems: {
      class: 'm-0 p-0 py-3 list-none',
    },
    filterrowitem: ({ context }) => ({
      class: [
        // Font
        'font-normal',
        'leading-none',

        // Position
        'relative',

        // Shape
        'border-0',
        'rounded-none',

        // Spacing
        'm-0',
        'py-3 px-5',

        // Color
        { 'text-surface-700 dark:text-white/80': !context?.highlighted },
        { 'bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80': !context?.highlighted },
        { 'bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': context?.highlighted },
        { 'bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': context?.highlighted },

        //States
        { 'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context?.highlighted },
        { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80': !context?.highlighted },
        'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

        // Transitions
        'transition-shadow',
        'duration-200',

        // Misc
        'cursor-pointer',
        'overflow-hidden',
        'whitespace-nowrap',
      ],
    }),
    filteroperator: {
      class: [
        // Spacing
        'px-5 py-3',

        // Shape
        'border-b border-solid',
        'rounded-t-md',

        // Color
        'text-surface-700 dark:text-white/80',
        'border-surface-200 dark:border-surface-800',
        'bg-surface-0 dark:bg-surface-700',
      ],
    },
    filteroperatordropdown: {
      root: ({ state }) => ({
        class: [
          // Display and Position
          'inline-flex',
          'relative',

          // Shape
          'w-full',
          'rounded-md',

          // Color and Background
          'bg-surface-0 dark:bg-surface-900',
          'border border-surface-300 dark:border-surface-700',

          // Transitions
          'transition-all',
          'duration-200',

          // States
          'hover:border-primary-500 dark:hover:border-primary-300',
          { 'outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50': state.focused },

          // Misc
          'cursor-pointer',
          'select-none',
        ],
      }),
      input: ({ props }) => ({
        class: [
          //Font
          'font-sans',
          'leading-none',

          // Display
          'block',
          'flex-auto',

          // Color and Background
          'bg-transparent',
          'border-0',
          { 'text-surface-800 dark:text-white/80': props.modelValue, 'text-surface-400 dark:text-surface-500': !props.modelValue },
          'placeholder:text-surface-400 dark:placeholder:text-surface-500',

          // Sizing and Spacing
          'w-[1%]',
          'p-3',

          //Shape
          'rounded-none',

          // Transitions
          'transition',
          'duration-200',

          // States
          'focus:outline-none focus:shadow-none',

          // Misc
          'relative',
          'cursor-pointer',
          'overflow-hidden overflow-ellipsis',
          'whitespace-nowrap',
          'appearance-none',
        ],
      }),
      trigger: {
        class: [
          // Flexbox
          'flex items-center justify-center',
          'shrink-0',

          // Color and Background
          'bg-transparent',
          'text-surface-500',

          // Size
          'w-12',

          // Shape
          'rounded-tr-md',
          'rounded-br-md',
        ],
      },
      panel: {
        class: [
          // Position
          'absolute top-0 left-0',

          // Shape
          'border-0 dark:border',
          'rounded-md',
          'shadow-md',

          // Color
          'bg-surface-0 dark:bg-surface-800',
          'text-surface-800 dark:text-white/80',
          'dark:border-surface-700',
        ],
      },
      item: ({ context }) => ({
        class: [
          // Font
          'font-normal',
          'leading-none',

          // Position
          'relative',

          // Shape
          'border-0',
          'rounded-none',

          // Spacing
          'm-0',
          'py-3 px-5',

          // Color
          { 'text-surface-700 dark:text-white/80': !context.focused && !context.selected },
          { 'bg-surface-50 dark:bg-surface-600/60 text-surface-700 dark:text-white/80': context.focused && !context.selected },
          { 'bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': context.focused && context.selected },
          { 'bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': !context.focused && context.selected },

          //States
          { 'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.focused && !context.selected },
          { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80': context.focused && !context.selected },

          // Transitions
          'transition-shadow',
          'duration-200',

          // Misc
          'cursor-pointer',
          'overflow-hidden',
          'whitespace-nowrap',
        ],
      }),
    },
    filterconstraint: {
      class: [
        // Spacing
        'py-3 px-5',

        // Shape
        'border-b border-solid',

        // Color
        'border-surface-200 dark:border-surface-700',
      ],
    },
    filteraddrule: {
      class: 'py-3 px-5',
    },
    filteraddrulebutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-sm py-1 px-2 w-full',

          // Shape
          'rounded-md',

          'bg-transparent border-transparent',
          'text-primary-500 dark:text-primary-400',
          'hover:bg-primary-300/20',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none',
        ],
      },
      label: {
        class: 'flex-auto grow-0',
      },
      icon: {
        class: 'mr-2',
      },
    },
    filterremovebutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-sm py-2 px-3 w-full mt-2',

          // Shape
          'rounded-md',

          'bg-transparent border-transparent',
          'text-red-500 dark:text-red-400',
          'hover:bg-red-300/20',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none',
        ],
      },
      label: {
        class: 'flex-auto grow-0',
      },
      icon: {
        class: 'mr-2',
      },
    },
    filterbuttonbar: {
      class: [
        // Flex & Alignment
        'flex items-center justify-between',

        // Space
        'py-3 px-5',
      ],
    },
    filterclearbutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-sm py-2 px-3',

          // Shape
          'rounded-md',

          'text-primary-500 border border-primary-500',
          'hover:bg-primary-300/20',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none',
        ],
      },
    },
    filterapplybutton: {
      root: {
        class: [
          'relative',

          // Alignments
          'items-center inline-flex text-center align-bottom justify-center',

          // Sizes & Spacing
          'text-sm py-2 px-3',

          // Shape
          'rounded-md',

          'text-white dark:text-surface-900',
          'bg-primary-500 dark:bg-primary-400',
          'hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300',

          // Transitions
          'transition duration-200 ease-in-out',

          // Misc
          'cursor-pointer overflow-hidden select-none',
        ],
      },
    },
    filtermenubutton: ({ context }) => ({
      class: [
        'relative',
        // Flex & Alignment
        'inline-flex items-center justify-center',

        // Size
        'w-8 h-8',

        // Spacing
        'ml-2',

        // Shape
        'rounded-full',

        // Color
        { 'bg-primary-50 text-primary-700': context.active },
        'dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-800',

        // States
        'hover:text-surface-700 hover:bg-surface-300/20',
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

        // Transition
        'transition duration-200',

        // Misc
        'cursor-pointer no-underline overflow-hidden',
      ],
    }),
    headerfilterclearbutton: ({ context }) => ({
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Shape
        'border-none',

        // Spacing
        'm-0 p-0 ml-2',

        // Color
        'bg-transparent',

        // Misc
        'cursor-pointer no-underline overflow-hidden select-none',
        {
          invisible: !context.hidden,
        },
      ],
    }),
    rowtoggler: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Spacing
        'm-0 p-0',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-500 dark:text-white/70',
        'bg-transparent',
        'focus-visible:outline-none focus-visible:outline-offset-0',
        'focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none',
      ],
    },
    columnresizer: {
      class: [
        'block',

        // Position
        'absolute top-0 right-0',

        // Sizing
        'w-2 h-full',

        // Spacing
        'm-0 p-0',

        // Color
        'border border-transparent',

        // Misc
        'cursor-col-resize',
      ],
    },
    rowreordericon: {
      class: 'cursor-move',
    },
    roweditorinitbutton: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-700 dark:text-white/70',
        'border-transparent',

        // States
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
        'hover:text-surface-700 hover:bg-surface-300/20',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none',
      ],
    },
    roweditorsavebutton: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-700 dark:text-white/70',
        'border-transparent',

        // States
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
        'hover:text-surface-700 hover:bg-surface-300/20',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none',
      ],
    },
    roweditorcancelbutton: {
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',
        'text-left',

        // Size
        'w-8 h-8',

        // Shape
        'border-0 rounded-full',

        // Color
        'text-surface-700 dark:text-white/70',
        'border-transparent',

        // States
        'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
        'hover:text-surface-700 hover:bg-surface-300/20',

        // Transition
        'transition duration-200',

        // Misc
        'overflow-hidden',
        'cursor-pointer select-none',
      ],
    },
    rowRadiobutton: {
      root: {
        class: [
          'relative',

          // Flexbox & Alignment
          'inline-flex',
          'align-bottom',

          // Size
          'w-[1.571rem] h-[1.571rem]',

          // Misc
          'cursor-pointer',
          'select-none',
        ],
      },
      box: ({ props }) => ({
        class: [
          // Flexbox
          'flex justify-center items-center',

          // Size
          'w-[1.571rem] h-[1.571rem]',

          // Shape
          'border-2',
          'rounded-full',

          // Transition
          'transition duration-200 ease-in-out',

          // Colors
          {
            'text-surface-700 dark:text-white/80': !props.modelValue,
            'bg-surface-0 dark:bg-surface-900': !props.modelValue,
            'border-surface-300 dark:border-surface-700': !props.modelValue,
            'border-primary-500 dark:border-primary-400': props.modelValue,
            'bg-primary-500 dark:bg-primary-400': props.modelValue,
          },

          // States
          {
            'peer-hover:border-primary-500 dark:peer-hover:border-primary-400': !props.disabled,
            'peer-hover:border-primary-600 dark:peer-hover:border-primary-300 peer-hover:bg-primary-600 dark:peer-hover:bg-primary-300': !props.disabled && props.modelValue,
            'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20':
              !props.disabled,
            'opacity-60 cursor-default': props.disabled,
          },
        ],
      }),
      input: {
        class: [
          'peer',

          // Size
          'w-full ',
          'h-full',

          // Position
          'absolute',
          'top-0 left-0',
          'z-10',

          // Spacing
          'p-0',
          'm-0',

          // Shape
          'opacity-0',
          'rounded-md',
          'outline-none',
          'border-2 border-surface-200 dark:border-surface-700',

          // Misc
          'appearance-none',
          'cursor-pointer',
        ],
      },
      icon: ({ props }) => ({
        class: [
          'block',

          // Shape
          'rounded-full',

          // Size
          'w-[0.857rem] h-[0.857rem]',

          // Colors
          'bg-surface-0 dark:bg-surface-900',

          // Conditions
          {
            'backface-hidden scale-10 invisible': !props.modelValue,
            'transform visible scale-[1.1]': props.modelValue,
          },

          // Transition
          'transition duration-200',
        ],
      }),
    },
    headercheckbox: {
      root: {
        class: [
          'relative',

          // Alignment
          'inline-flex',
          'align-bottom',

          // Size
          'w-6',
          'h-6',

          // Misc
          'cursor-pointer',
          'select-none',
        ],
      },
      box: ({ props, context }) => ({
        class: [
          // Alignment
          'flex',
          'items-center',
          'justify-center',

          // Size
          'w-6',
          'h-6',

          // Shape
          'rounded-md',
          'border-2',

          // Colors
          {
            'border-surface-200 bg-surface-0 dark:border-surface-600 dark:bg-primary-dark-300': !context.checked,
            'border-primary-500 bg-primary-600 dark:border-primary-400 dark:bg-primary-400': context.checked,
          },

          // States
          {
            'peer-hover:border-primary-500 dark:peer-hover:border-primary-500': !props.disabled && !context.checked,
            'peer-hover:bg-primary-700 dark:peer-hover:bg-primary-400 peer-hover:border-primary-500 dark:peer-hover:border-primary-300': !props.disabled && context.checked,
            'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20':
              !props.disabled,
            'cursor-default opacity-60': props.disabled,
          },

          // Transitions
          'transition-colors',
          'duration-200',
        ],
      }),
      input: {
        class: [
          'peer',

          // Size
          'w-full ',
          'h-full',

          // Position
          'absolute',
          'top-0 left-0',
          'z-10',

          // Spacing
          'p-0',
          'm-0',

          // Shape
          'opacity-0',
          'rounded-md',
          'outline-none',
          'border-2 border-surface-200 dark:border-surface-700',

          // Misc
          'appearance-none',
          'cursor-pointer',
        ],
      },
      icon: {
        class: [
          // Font
          'text-base leading-none',

          // Size
          'w-4',
          'h-4',

          // Colors
          'text-white dark:text-surface-900',

          // Transitions
          'transition-all',
          'duration-200',
        ],
      },
    },
    rowCheckbox: {
      root: {
        class: [
          'relative',

          // Alignment
          'inline-flex',
          'align-bottom',

          // Size
          'w-6',
          'h-6',

          // Misc
          'cursor-pointer',
          'select-none',
        ],
      },
      box: ({ props, context }) => ({
        class: [
          // Alignment
          'flex',
          'items-center',
          'justify-center',

          // Size
          'w-6',
          'h-6',

          // Shape
          'rounded-md',
          'border-2',

          // Colors
          {
            'border-surface-200 bg-surface-0 dark:border-surface-600 dark:bg-primary-dark-300': !context.checked,
            'border-primary-400 bg-primary-600 dark:border-primary-dark-50 dark:bg-primary-400': context.checked,
          },

          // States
          {
            'peer-hover:border-primary-400 dark:peer-hover:border-primary-500': !props.disabled && !context.checked,
            'peer-hover:bg-primary-600 dark:peer-hover:bg-primary-400 peer-hover:border-primary-700 dark:peer-hover:border-primary-300': !props.disabled && context.checked,
            'peer-focus-visible:border-primary-400 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20':
              !props.disabled,
            'cursor-default opacity-60': props.disabled,
          },

          // Transitions
          'transition-colors',
          'duration-200',
        ],
      }),
      input: {
        class: [
          'peer',

          // Size
          'w-full ',
          'h-full',

          // Position
          'absolute',
          'top-0 left-0',
          'z-10',

          // Spacing
          'p-0',
          'm-0',

          // Shape
          'opacity-0',
          'rounded-md',
          'outline-none',
          'border-2 border-surface-200 dark:border-surface-700',

          // Misc
          'appearance-none',
          'cursor-pointer',
        ],
      },
      icon: {
        class: [
          // Font
          'text-base leading-none',

          // Size
          'w-4',
          'h-4',

          // Colors
          'text-white dark:text-surface-900',

          // Transitions
          'transition-all',
          'duration-200',
        ],
      },
    },
    transition: {
      enterFromClass: 'opacity-0 scale-y-[0.8]',
      enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
      leaveActiveClass: 'transition-opacity duration-100 ease-linear',
      leaveToClass: 'opacity-0',
    },
  },
  bodyrow: ({ context, props }) => ({
    class: [
      // Color
      'dark:text-white/80',
      { 'bg-surface-50 text-primary-700 dark:bg-surface-700': context.selected },
      { 'bg-surface-0 text-surface-600 dark:bg-primary-dark-300': !context.selected },
      { 'font-bold bg-surface-0': props.frozenRow },
      { 'odd:bg-surface-0 odd:text-surface-600 even:bg-surface-50 even:text-surface-600': context.stripedRows },

      // State
      { 'focus:outline-none focus:outline-offset-0 focus:ring-0 focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': context.selectable },
      { 'hover:bg-surface-300/20 hover:text-surface-600': props.selectionMode && !context.selected },

      // Transition
      { 'transition duration-200': (props.selectionMode && !context.selected) || props.rowHover },

      // Misc
      { 'cursor-pointer': props.selectionMode },
    ],
  }),
  rowexpansion: {
    class: 'bg-primary-50 dark:bg-surface-800 text-surface-600 dark:text-white/80',
  },
  rowgroupheader: {
    class: ['sticky z-20', 'bg-surface-0 text-surface-600 dark:text-white/70', 'dark:bg-surface-800'],
  },
  rowgroupfooter: {
    class: ['sticky z-20', 'bg-surface-0 text-surface-600 dark:text-white/70', 'dark:bg-surface-800'],
  },
  rowgrouptoggler: {
    class: [
      'relative',

      // Flex & Alignment
      'inline-flex items-center justify-center',
      'text-left',

      // Spacing
      'm-0 p-0',

      // Size
      'w-8 h-8',

      // Shape
      'border-0 rounded-full',

      // Color
      'text-surface-500 dark:text-white/70',
      'bg-transparent',
      'focus-visible:outline-none focus-visible:outline-offset-0',
      'focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

      // Transition
      'transition duration-200',

      // Misc
      'overflow-hidden',
      'cursor-pointer select-none',
    ],
  },
  rowgrouptogglericon: {
    class: 'inline-block w-4 h-4',
  },
  resizehelper: {
    class: 'absolute hidden w-[2px] z-20 bg-primary-500 dark:bg-primary-400',
  },
  paginator: {
    root: {
      class: [
        'relative',
        // Flex & Alignment
        'flex items-center justify-center flex-wrap',

        'min-h-11',

        // Spacing
        'md:px-4 py-1',

        // Shape
        'border-0',

        // Color
        'bg-surface-0 dark:bg-primary-dark-500',
        'text-primary-600 dark:text-surface-100',
        'mt-12',
      ],
    },
    firstpagebutton: ({ context }) => ({
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',

        // Shape
        'border-0 rounded dark:rounded-md',

        // Size
        'size-8 m-[0.143rem]',
        'leading-none',

        // Color
        'text-primary-400 bg-primary-50',

        // State
        {
          'hover:bg-primary-600 hover:text-surface-0': !context.disabled,
          'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled,
        },

        // Transition
        'transition duration-200',

        // Misc
        'user-none overflow-hidden',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
      ],
    }),
    previouspagebutton: ({ context }) => ({
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',

        // Shape
        'border-0 rounded dark:rounded-md',

        // Size
        'size-8 m-[0.143rem]',
        'leading-none',

        // Color
        'text-primary-400 bg-primary-50',

        // State
        {
          'hover:bg-primary-400 hover:text-surface-0': !context.disabled,
          'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled,
        },

        // Transition
        'transition duration-200',

        // Misc
        'user-none overflow-hidden',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
      ],
    }),
    nextpagebutton: ({ context }) => ({
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',

        // Shape
        'border-0 rounded dark:rounded-md',

        // Size
        'size-8 m-[0.143rem]',
        'leading-none',

        // Color
        'text-primary-400 bg-primary-50',

        // State
        {
          'hover:bg-primary-400 hover:text-surface-0': !context.disabled,
          'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled,
        },

        // Transition
        'transition duration-200',

        // Misc
        'user-none overflow-hidden',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
      ],
    }),
    lastpagebutton: ({ context }) => ({
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',

        // Shape
        'border-0 rounded dark:rounded-md',

        // Size
        // 'mr-auto',
        'size-8 m-[0.143rem]',
        'leading-none',

        // Color
        'text-primary-400 bg-primary-50',

        // State
        {
          'hover:bg-primary-400 hover:text-surface-0': !context.disabled,
          'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled,
        },

        // Transition
        'transition duration-200',

        // Misc
        'user-none overflow-hidden',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
      ],
    }),
    pagebutton: ({ context }) => ({
      class: [
        'relative',

        // Flex & Alignment
        'inline-flex items-center justify-center',

        // Shape
        'border-0 rounded dark:rounded-md',

        // Size
        'size-8 m-[0.143rem]',
        'leading-none',

        // Color
        {
          'text-white bg-primary-600': context.active,
          'text-primary-600 bg-primary-50': !context.active
        },
        // State
        {
          'hover:bg-primary-400 hover:text-surface-0': !context.disabled,
          'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled,
        },

        // Transition
        'transition duration-200',

        // Misc
        'user-none overflow-hidden',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
      ],
    }),
    rowperpagedropdown: {
      root: ({ props, state }) => ({
        class: [
          // Display and Position
          'inline-flex',
          'relative',

          // Shape
          'h-8',
          'rounded-md',

          // Spacing
          'mx-2',

          // Color and Background
          'bg-surface-0 dark:bg-primary-dark-300',
          'border border-surface-300 dark:border-0',

          // Transitions
          'transition-all',
          'duration-200',

          // States
          'hover:border-primary-500 dark:hover:border-primary-300',
          { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !state.focused },

          // Misc
          'cursor-pointer',
          'select-none',
          { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled },
        ],
      }),
      input: {
        class: [
          //Font
          'font-sans',
          'leading-5',

          // Display
          'block',
          'flex-auto',

          // Color and Background
          'bg-transparent',
          'border-0',
          'text-surface-800 dark:text-white/80',

          // Sizing and Spacing
          'w-[1%]',
          'px-2 py-1 pr-0',

          //Shape
          'rounded-none',

          // Transitions
          'transition',
          'duration-200',

          // States
          'focus:outline-none focus:shadow-none',

          // Misc
          'relative',
          'cursor-pointer',
          'overflow-hidden overflow-ellipsis',
          'whitespace-nowrap',
          'appearance-none',
        ],
      },
      trigger: {
        class: [
          // Flexbox
          'flex items-center justify-center',
          'shrink-0',

          // Color and Background
          'bg-transparent',
          'text-surface-500',

          // Size
          'w-8',

          // Shape
          'rounded-tr-md',
          'rounded-br-md',
        ],
      },
      panel: {
        class: [
          // Position
          'absolute top-0 left-0',

          // Shape
          'border-0 dark:border',
          'rounded-md',
          'shadow-md',

          // Color
          'bg-surface-0 dark:bg-surface-800',
          'text-surface-800 dark:text-white/80',
          'dark:border-surface-700',
        ],
      },
      wrapper: {
        class: [
          // Sizing
          'max-h-[200px]',

          // Misc
          'overflow-auto',
        ],
      },
      list: {
        //py-3
        class: 'p-[unset] list-none m-0',
      },
      item: ({ context }) => ({
        class: [
          // Font
          'font-normal',
          'leading-none',
          'first-of-type:hover:rounded-t first-of-type:rounded-t last:hover:rounded-b last:rounded-b', //新增 border-radius

          // Position
          'relative',

          // Shape
          'border-0',
          'rounded-none',

          // Spacing
          'm-0',
          'py-3 px-5',

          // Color
          { 'text-surface-700 dark:text-white/80': !context.focused && !context.selected },
          { 'bg-surface-50 dark:bg-surface-600/60 text-surface-700 dark:text-white/80': context.focused && !context.selected },
          { 'bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': context.focused && context.selected },
          { 'bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': !context.focused && context.selected },

          //States
          { 'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.focused && !context.selected },
          { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80': context.focused && !context.selected },

          // Transitions
          'transition-shadow',
          'duration-200',

          // Misc
          'cursor-pointer',
          'overflow-hidden',
          'whitespace-nowrap',
        ],
      }),
    },
    jumptopageinput: {
      root: {
        class: 'inline-flex mx-2',
      },
      input: {
        root: {
          class: [
            'relative',

            //Font
            'font-sans text-center',
            'leading-none',

            // Display
            'block',
            'flex-auto',

            // Colors
            'text-surface-600 dark:text-white',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-primary-dark-300',
            'border border-surface-300 dark:border-0',

            // Sizing and Spacing
            'min-w-[1%] h-8 max-w-10',
            'px-1 py-1 m-0',

            //Shape
            'rounded-md',

            // Transitions
            'transition',
            'duration-200',

            // States
            'hover:border-primary-500 dark:hover:border-primary-400',
            'focus:outline-none focus:shadow-none',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50',

            // Misc
            'cursor-pointer',
            'overflow-hidden overflow-ellipsis',
            'whitespace-nowrap',
            'appearance-none',
          ],
        },
      },
    },
    jumptopagedropdown: {
      root: ({ props, state }) => ({
        class: [
          // Display and Position
          'inline-flex',
          'relative',

          // Shape
          'h-8',
          'rounded-md',

          // Color and Background
          'bg-surface-0 dark:bg-surface-900',
          'border border-surface-300 dark:border-surface-700',

          // Transitions
          'transition-all',
          'duration-200',

          // States
          'hover:border-primary-500 dark:hover:border-primary-300',
          { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !state.focused },

          // Misc
          'cursor-pointer',
          'select-none',
          { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled },
        ],
      }),
      input: {
        class: [
          //Font
          'font-sans',
          'leading-none',

          // Display
          'block',
          'flex-auto',

          // Color and Background
          'bg-transparent',
          'border-0',
          'text-surface-800 dark:text-white/80',

          // Sizing and Spacing
          'w-[1%]',
          'px-2 py-1',

          //Shape
          'rounded-none',

          // Transitions
          'transition',
          'duration-200',

          // States
          'focus:outline-none focus:shadow-none',

          // Misc
          'relative',
          'cursor-pointer',
          'overflow-hidden overflow-ellipsis',
          'whitespace-nowrap',
          'appearance-none',
        ],
      },
      trigger: {
        class: [
          // Flexbox
          'flex items-center justify-center',
          'shrink-0',

          // Color and Background
          'bg-transparent',
          'text-surface-500',

          // Size
          'w-12',

          // Shape
          'rounded-tr-md',
          'rounded-br-md',
        ],
      },
      panel: {
        class: [
          // Position
          'absolute top-0 left-0',

          // Shape
          'border-0 dark:border',
          'rounded-md',
          'shadow-md',

          // Color
          'bg-surface-0 dark:bg-surface-800',
          'text-surface-800 dark:text-white/80',
          'dark:border-surface-700',
        ],
      },
      wrapper: {
        class: [
          // Sizing
          'max-h-[200px]',

          // Misc
          'overflow-auto',
        ],
      },
      list: {
        class: 'py-3 list-none m-0',
      },
      item: ({ context }) => ({
        class: [
          // Font
          'font-normal',
          'leading-none',

          // Position
          'relative',

          // Shape
          'border-0',
          'rounded-none',

          // Spacing
          'm-0',
          'py-3 px-5',

          // Color
          { 'text-surface-700 dark:text-white/80': !context.focused && !context.selected },
          { 'bg-surface-50 dark:bg-surface-600/60 text-surface-700 dark:text-white/80': context.focused && !context.selected },
          { 'bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': context.focused && context.selected },
          { 'bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80 ': !context.focused && context.selected },

          //States
          { 'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.focused && !context.selected },
          { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80': context.focused && !context.selected },

          // Transitions
          'transition-shadow',
          'duration-200',

          // Misc
          'cursor-pointer',
          'overflow-hidden',
          'whitespace-nowrap',
        ],
      }),
    },
    end: {
      class: [
        'lg:absolute right-0 inset-y-0 flex items-center',
        'lg:w-auto w-full justify-center p-2'
      ]
    }
  },
  emptyMessage: {
    class: 'h-60',
  },
  emptyMessageCell: {
    class: ['absolute inset-0', 'p-12 pt-24 text-center'],
  },
};
