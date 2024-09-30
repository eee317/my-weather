export default {
  root: {
    class: [
      'fixed top-0 inset-x-0',

      // Flexbox
      'flex',
      'items-center',

      // Spacing
      'py-2 px-3 h-16',

      // Color
      'bg-gradient-to-r from-primary-700 via-primary-500 to-primary-600',
      'text-surface-0 dark:text-surface-100',
    ],
  },
  menu: ({ props }) => ({
    class: [
      // Flexbox
      'lg:flex',
      'flex-wrap',
      'flex-col lg:flex-row',
      { hidden: !props?.mobileActive, flex: props?.mobileActive },

      // Position
      'absolute lg:relative',
      'top-full left-0',
      'lg:top-auto lg:left-auto',

      // Size
      'w-full lg:w-auto',

      // Spacing
      'mx-auto lg:ml-2 xl:ml-5 2xl:ml-10 lg:mr-auto my-0',
      'p-0',
      'list-none',

      // Shape
      'shadow-md lg:shadow-none',
      'border-0',

      // Color
      'bg-surface-0 lg:bg-transparent dark:bg-primary-900 lg:dark:bg-transparent',

      // Misc
      'outline-none',

      'divide-y-2 lg:divide-y-0 divide-surface-100 dark:divide-primary-800',
    ],
  }),
  menuitem: ({ props, context }) => ({
    class: [
      'lg:relative lg:w-auto w-full static',

      // Space
      {
        'lg:mx-3': !props.root,
        'lg:mx-1.5 xl:mx-3': props.root,
      },

      // Border
      'border-primary-400 dark:border-primary-dark-100',
      {
        'lg:border-b last:lg:border-b-0': !props.root,
      },
    ],
  }),
  content: ({ props, context }) => ({
    class: [
      // Focus (primevue menubar have bug)
      //{ 'ring ring-primary-200/50 dark:ring-primary-500/50': context.focused },
      //  Colors
      {
        // no active
        'text-surface-900 hover:text-primary-600 dark:text-primary-dark dark:hover:text-white': !context.active,
        'hover:bg-primary-50 lg:hover:bg-transparent dark:hover:bg-primary-800 dark:lg:hover:bg-transparent': !context.active,

        // active
        'text-primary-800 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300': context.active,
      },
      // Root
      {
        'lg:text-surface-900 lg:hover:text-primary-800 lg:dark:text-surface-100 lg:dark:hover:text-surface-300': props.root,
        'lg:text-primary-800 lg:hover:text-primary-600 lg:dark:text-surface-50 lg:dark:hover:text-surface-200': props.root && context.active,
      },

      // Transitions
      'transition-all',
      'duration-200',
    ],
  }),
  action: ({ context }) => ({
    class: [
      'relative',

      // Flexbox
      'flex',
      'lg:items-center',
      'lg:justify-center',

      // Spacing
      'py-3 lg:py-2',
      'px-8 lg:px-0',

      // Size
      {
        'pl-12 lg:pl-0': context.level === 1,
        'pl-16 lg:pl-0': context.level === 2,
      },
      'leading-none',

      // Misc
      'select-none',
      'cursor-pointer',
      'no-underline',
      'overflow-hidden',
    ],
  }),
  icon: {
    class: 'mr-2',
  },
  submenuicon: ({ props }) => ({
    class: [
      {
        'ml-auto lg:ml-2': props.root,
        'ml-auto': !props.root,
      },
    ],
  }),
  submenu: ({ props }) => ({
    class: [
      // Size
      'w-full lg:min-w-36 lg:w-max',

      // Spacing
      'py-1',
      'm-0',
      'list-none',

      // Shape
      'rounded-lg',
      'shadow-none lg:shadow-md',
      'border border-1 border-primary-400 dark:border-primary-dark-100',

      // Position
      'static lg:absolute',
      'z-10',

      {
        'lg:absolute lg:left-full lg:top-0 lg:-mt-1': props.level > 1,
        'lg:mt-0 lg:left-1/2 lg:-translate-x-1/2': props.level === 1,
      },

      // Color
      'bg-surface-0 dark:bg-primary-900',
    ],
  }),
  separator: {
    class: 'my-1 border-t border-surface-200 dark:border-surface-800',
  },
  button: {
    class: [
      // Flexbox
      'flex lg:hidden order-last',
      'items-center justify-center',

      // Size
      'size-10',

      // Spacing
      'ml-3',

      // Shape
      'rounded-md',

      // States
      'hover:text-primary-600',
      'hover:bg-surface-50/80',
      'focus:outline-none focus:outline-offset-0',
      'focus:ring focus:ring-primary-400/50',

      // Transitions
      'transition duration-200 ease-in-out',

      // Misc
      'cursor-pointer',
      'no-underline',
    ],
  },
  end: {
    class: ['flex flex-none', 'ml-auto lg:ml-0', 'self-center'],
  },
};
