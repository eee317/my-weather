export default {
  root: ({ attrs }) => ({
    class: [{ 'overflow-x-auto': !attrs.layout }, { 'overflow-y-hidden overflow-x-auto': attrs.layout }],
    style: {
      'scrollbar-width': 'none'
    }
  }),
  menu: ({ attrs }) => ({
    class: [
      // Colors
      attrs.layout ? [
        'text-surface-0',
        'gap-4',
        'mx-4',
      ] : [
        'bg-surface-0 dark:bg-surface-800',
        'border-b-2 border-surface-200 dark:border-surface-700',
        'text-surface-900 dark:text-surface-0/80',
      ],
      // Flexbox
      'flex flex-1',

      // Spacing
      'list-none',
      'p-0 m-0',
    ],
  }),
  menuitem: {
    class: 'mr-0 flex-none',
  },
  action: ({ context, state, attrs }) => ({
    class: [
      'relative',

      // Font
      'font-bold',

      // Flexbox and Alignment
      'flex items-center',

      // Spacing
      attrs.layout ? [
        'px-4 py-2',
      ] : [
        'p-5',
        'border-b-2',
      ],
      '-mb-[2px]',

      // Shape
      'rounded-t-md',

      // Colors and Conditions
      state.d_activeIndex !== context.index && !attrs.layout && [
        'border-surface-200 dark:border-surface-700',
        'bg-surface-0 dark:bg-red',
        'text-surface-700 dark:text-surface-0/80',

        // States
        'hover:bg-surface-0 dark:hover:bg-surface-800/80',
        'hover:border-surface-400 dark:hover:border-primary-400',
        'hover:text-surface-900 dark:hover:text-surface-0',
      ],

      state.d_activeIndex === context.index && !attrs.layout && [
        'bg-surface-0 dark:bg-surface-800',
        'border-primary-500 dark:border-primary-400',
        'text-primary-500 dark:text-primary-400',
      ],

      state.d_activeIndex !== context.index && attrs.layout && [
        'border-surface-200',
        'bg-primary-200',
        'text-primary-900',
        'before:absolute before:inset-x-0 before:bottom-0 before:w-full before:h-1.5 before:bg-primary-800',

        // States
        'hover:bg-surface-0 dark:hover:bg-surface-800/80',
        'hover:border-surface-400 dark:hover:border-primary-400',
        'hover:text-primary-700 dark:hover:text-surface-0',
      ],

      state.d_activeIndex === context.index && attrs.layout && [
        'bg-primary-50',
        'border-primary-500',
        'text-primary-700',

        //Round Out Borders
        'before:absolute before:bottom-0 before:size-3 before:rounded-none before:border-transparent before:shadow-primary-50',
        'after:absolute after:bottom-0 after:size-3 after:rounded-none after:border-transparent after:shadow-primary-50',
        'before:-left-3 before:rounded-br-full before:border-r before:border-b before:shadow-[4px_4px_0]',
        'after:-right-3 after:rounded-bl-full after:border-l after:border-b after:shadow-[-4px_4px_0]',
      ],

      // States
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset',
      'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

      // Transitions
      'transition-all duration-200',

      // Misc
      'cursor-pointer select-none text-decoration-none',
      //'overflow-hidden',
      'user-select-none',
    ],
  }),
  icon: {
    class: 'mr-2',
  },
  inkbar: {
    class: 'hidden',
  }
};
