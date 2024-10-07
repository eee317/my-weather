export default {
  navContainer: ({ props }) => ({
    class: [
      // Position
      'relative',

      // Misc
      { 'overflow-hidden': props.scrollable },
    ],
  }),
  navContent: {
    class: [
      // Overflow and Scrolling
      'overflow-y-hidden overscroll-contain',
      'overscroll-auto',
      'scroll-smooth',
      '[&::-webkit-scrollbar]:hidden',
    ],
  },
  previousButton: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-center',

      // Position
      '!absolute',
      'top-0 left-0',
      'z-20',

      // Size and Shape
      'h-full w-12',
      'rounded-none',

      // Colors
      'text-primary-500 dark:text-primary-400',
      'shadow-md',
    ],
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-center',

      // Position
      '!absolute',
      'top-0 right-0',
      'z-20',

      // Size and Shape
      'h-full w-12',
      'rounded-none',

      // Colors
      'text-primary-500 dark:text-primary-400',
      'shadow-md',
    ],
  },
  nav: {
    class: [
      // Flexbox
      'flex flex-1',

      // Spacing
      'list-none',
      'p-0 m-0',

      // Colors
      'border-b-2 border-primary-50',
      'text-surface-900',
    ],
  },
  tabpanel: {
    header: ({ props }) => ({
      class: [
        // Spacing
        'mr-0',

        // Misc
        {
          'opacity-60 cursor-default user-select-none select-none pointer-events-none': props?.disabled,
        },
      ],
    }),
    headerAction: ({ parent, context }) => ({
      class: [
        'relative',

        // Font
        'font-bold',

        // Flexbox and Alignment
        'flex items-center',

        // Spacing
        'px-4 py-1.5',
        '-mb-[2px]',

        // Shape
        'border-b-2',
        'rounded-t-md',

        // Colors and Conditions
        parent.state.d_activeIndex !== context.index && [
          'border-primary-50',
          'text-surface-300',

          // States
          'hover:border-primary-200',
          'hover:text-surface-500',
        ],
        parent.state.d_activeIndex === context.index && [
          'border-primary-500',
          'text-primary-500',
        ],

        // States
        'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset',
        'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

        // Transitions
        'transition-all duration-200',

        // Misc
        'cursor-pointer select-none text-decoration-none',
        'overflow-hidden',
        'user-select-none',
      ],
    }),
    headerTitle: {
      class: [
        // Text
        'leading-none',
        'whitespace-nowrap',
      ],
    },
    content: {
      class: 'pt-4'
    },
  },
};
