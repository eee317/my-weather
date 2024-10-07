export default {
  accordiontab: {
    root: ({ attrs }) => ({
      class: [
        'dark:border-surface-700',
        'overflow-hidden',
        // Border
        attrs.nav ? ['border-b', 'border-primary-300', 'last:border-b-0'] : ['border', 'border-primary-300', 'rounded-md'] ,
      ],
    }),
    header: ({ props }) => ({
      class: [
        // State
        { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled },
      ],
    }),
    headerAction: ({ context }) => ({
      class: [
        // Alignments
        'flex items-center justify-between flex-row-reverse',
        'relative',

        // Sizing
        'py-3 px-8',

        // Shape
        // 'rounded-b-md',

        // Color
        'border-b',
        { 'border-transparent': !context.active, 'border-primary-300 dark:border-surface-700': context.active },
        'bg-primary-500 dark:bg-surface-800',
        'text-surface-0 dark:text-surface-0/80',
        { 'text-surface-0': context.active },

        // Transition
        'transition-all duration-200 ease-in-out',
        /* 'transition-shadow duration-200', */

        // States
        'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50', // Focus

        // Misc
        'cursor-pointer no-underline select-none',
      ],
    }),
    headerIcon: {
      class: 'inline-block ml-2 text-surface-0',
    },
    headerTitle: ({ attrs }) => ({
      class: ['leading-none', { 'text-xl': attrs.nav }],
    }),
    content: {
      class: [
        // Spacing
        'py-3 px-8',

        // Color
        'bg-primary-800 dark:bg-surface-800',
        'text-surface-0 dark:text-surface-0/80',
      ],
    },
    transition: {
      enterFromClass: 'max-h-0',
      enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
      enterToClass: 'max-h-[1000px]',
      leaveFromClass: 'max-h-[1000px]',
      leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
      leaveToClass: 'max-h-0',
    },
  },
};
