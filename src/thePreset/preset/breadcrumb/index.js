export default {
  root: ({ attrs }) => ({
    class: [
      // Shape
      'rounded-md',

      !attrs.layout && [
        // Spacing
        'p-4',

        // Color
        'bg-surface-0 dark:bg-surface-700',
        'border border-surface-200 dark:border-surface-700',

        // Misc
        'overflow-x-auto'
      ],
    ],
  }),
  menu: {
    class: [
      // Flex & Alignment
      'flex items-center flex-nowrap',

      // Spacing
      'm-0 p-0 list-none leading-none',
    ],
  },
  menuitem: {
    class: 'text-primary-700',
  },
  action: {
    class: [
      // Flex & Alignment
      'flex items-center',

      // Shape
      'rounded-md',

      // States
      'focus-visible:outline-none focus-visible:outline-offset-0',
      'focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

      'transition duration-200',

      // Misc
      'text-decoration-none',
    ],
  },
  separator: ({ attrs }) => ({
    class: [
      // Flex & Alignment
      'flex items-center',

      // Spacing
      ' mx-2',

      // Color
      attrs.layout ? [
        'text-primary-400',
      ] : [
        'text-surface-600 dark:text-white/70',
      ]
    ],
  }),
};
