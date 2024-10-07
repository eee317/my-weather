export default {
  root: ({ props, state }) => ({
    class: [
      // Shape
      'rounded-lg',
      'shadow-lg',
      'border-0',

      // Size
      'max-h-[90vh]',
      'max-w-full pt-6 px-6 pb-10 bg-white',
      { 'm-5': !state.maximized },

      // Color
      'dark:border',
      'dark:border-surface-700',

      // Transitions
      'transform',
      'scale-100',

      // Maximized State
      state.maximized ? ['transition-none', 'transform-none', '!w-screen', '!h-screen', '!max-h-full', '!top-0', '!left-0'] : '',
    ],
  }),
  header: ({ props }) => ({
    class: [
      'relative',
      // Flexbox and Alignment
      'flex items-center justify-center w-full',
      'shrink-0',

      {
        'pt-8 pb-3 px-6': props.header,
        'pt-4': !props.header
      },

      // Shape
      'border-t-0',
      'rounded-tl-lg',
      'rounded-tr-lg',

      // Colors
      'bg-white dark:bg-primary-dark-200',
      'text-neutral-700 dark:text-neutral-300',
    ],
  }),
  title: {
    class: ['text-3xl font-bold tracking-widest'],
  },
  icons: {
    class: ['flex items-center'],
  },
  closeButton: {
    class: [
      'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',

      // Flexbox and Alignment
      'flex items-center justify-center',

      // Size and Spacing
      'mr-2 ',
      'last:mr-0',
      'w-8 h-8',

      // Shape
      'border-0',
      'rounded-full',

      // Colors
      'text-surface-100 dark:text-surface-600',
      'bg-gray-100 dark:bg-surface-100',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:text-surface-100 dark:hover:text-surface-100',
      'hover:gray-200',
      'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset',
      'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

      // Misc
      'overflow-hidden',
    ],
  },
  maximizablebutton: {
    class: [
      'relative',

      // Flexbox and Alignment
      'flex items-center justify-center',

      // Size and Spacing
      'mr-2',
      'last:mr-0',
      'w-8 h-8',

      // Shape
      'border-0',
      'rounded-full',

      // Colors
      'text-surface-500',
      'bg-transparent',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:text-surface-700 dark:hover:text-white/80',
      'hover:bg-surface-100 dark:hover:bg-surface-800/80',
      'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset',
      'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

      // Misc
      'overflow-hidden',
    ],
  },
  closeButtonIcon: {
    class: [
      // Display
      'inline-block',

      // Size
      'w-4',
      'h-4',

      // Color
      'text-surface-500',
    ],
  },
  maximizableicon: {
    class: [
      // Display
      'inline-block',

      // Size
      'w-4',
      'h-4',
    ],
  },
  content: ({ state, instance }) => ({
    class: [
      // Spacing
      'px-6',

      // Shape
      {
        grow: state.maximized,
        'rounded-bl-lg': !instance.$slots.footer,
        'rounded-br-lg': !instance.$slots.footer,
      },

      // Colors
      'bg-white dark:bg-primary-dark-200',
      'text-surface-700 dark:text-surface-0/80',

      // Misc
      'overflow-y-auto',
    ],
  }),
  footer: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-center',
      'shrink-0',
      'text-right',
      'gap-2',

      // Spacing
      'pt-3 pb-8 px-6',

      // Shape
      'border-t-0',
      'rounded-b-lg',

      // Colors
      'bg-white dark:bg-primary-dark-200',
      'text-surface-700 dark:text-surface-0/80',
    ],
  },
  mask: ({ props }) => ({
    class: [
      // Transitions
      'transition-all',
      'duration-300',
      { 'p-5': !props.position == 'full' },

      // Background and Effects
      { 'has-[.mask-active]:bg-transparent bg-black/40': props.modal, 'has-[.mask-active]:backdrop-blur-none backdrop-blur-sm': props.modal },
    ],
  }),
  transition: ({ props }) => {
    return props.position === 'top'
      ? {
        enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveActiveClass: 'transition-all duration-200 ease-out',
        leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
      }
      : props.position === 'bottom'
        ? {
          enterFromClass: 'opacity-0 scale-75 translate-y-full mask-active',
          enterActiveClass: 'transition-all duration-200 ease-out',
          leaveActiveClass: 'transition-all duration-200 ease-out',
          leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active',
        }
        : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
          ? {
            enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active',
            enterActiveClass: 'transition-all duration-200 ease-out',
            leaveActiveClass: 'transition-all duration-200 ease-out',
            leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active',
          }
          : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
            ? {
              enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active',
            }
            : {
              enterFromClass: 'opacity-0 scale-75 mask-active',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75 mask-active',
            };
  },
};
