export default {
  panel: {
    class: '',
  },
  header: {
    class: ['rounded', 'outline-none'],
  },
  headercontent: ({ context, instance }) => ({
    class: [
      // Flex & Alignments
      'flex items-center',

      // Shape
      'rounded-t-md',
      { 'rounded-br-md rounded-bl-md': !context.active || instance.activeItem?.items === undefined, 'rounded-br-0 rounded-bl-0': context.active && instance.activeItem?.items !== undefined },

      // Color
      'border border-[#A3BBA1]',
      'bg-primary-400',
      'text-surface-700',
      { 'text-surface-900': context.active },

      // Transition
      'transition duration-200 ease-in-out',
      'transition-shadow duration-200',

      // Spacing
      'gap-2',
    ],
  }),
  headeraction: {
    class: [
      'relative',

      // Font
      'leading-none',

      // Flex & Alignments
      'flex items-center',

      // Spacing
      'p-3',

      // Misc
      'select-none cursor-pointer no-underline',
    ],
  },
  headerlabel: {
    class: 'leading-none w-full text-primary-700',
  },
  headerIcon: {
    class: 'mr-2',
  },
  submenuicon: {
    class: 'mr-2 text-primary-600 order-1',
  },
  menucontent: {
    class: [
      // Spacing
      'py-2',

      // Shape
      'border border-t-0',
      'rounded-t-none rounded-br-md rounded-bl-md',

      // Color
      'text-surface-700 dark:text-white/80',
      'bg-surface-0 dark:bg-surface-800',
      'border-[#A3BBA1]',
    ],
  },
  menu: {
    class: ['outline-none', 'm-0 p-0 list-none'],
  },
  content: {
    class: [
      // Shape
      'border-none rounded-none',

      // Color
      'text-surface-700 dark:text-white/80',

      // Transition
      'transition-shadow duration-200',
    ],
  },
  action: ({ context }) => ({
    class: [
      'relative',

      // Font
      'leading-none',

      // Flex & Alignments
      'flex items-center',

      // Spacing
      'py-2 px-5',

      // Color
      'text-surface-700 dark:text-white/80',

      // Misc
      'no-underline',
      'select-none overflow-hidden',
    ],
  }),
  icon: {
    class: 'mr-2',
  },
  submenu: {
    class: 'p-0 pl-4 m-0 list-none',
  },
  transition: {
    enterFromClass: 'max-h-0',
    enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
    enterToClass: 'max-h-[1000px]',
    leaveFromClass: 'max-h-[1000px]',
    leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
    leaveToClass: 'max-h-0',
  },
};
