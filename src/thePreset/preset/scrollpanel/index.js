export default {
  root: {
    class: 'group',
  },
  wrapper: {
    class: [
      // Size & Position
      'h-full w-full',

      // Layering
      'z-[1]',

      // Spacing
      'overflow-hidden',

      // Misc
      'relative float-left',
    ],
  },
  content: {
    class: [
      // Size & Spacing
      'h-[calc(100%+18px)] w-[calc(100%+18px)] pr-[18px] pb-[18px] pl-0 pt-0',

      // Overflow & Scrollbar
      'overflow-scroll scrollbar-none',

      // Box Model
      'box-border',

      // Position
      'relative',

      // Webkit Specific
      '[&::-webkit-scrollbar]:hidden',
    ],
  },
  barX: {
    class: [
      // Size & Position
      'h-2 bottom-0',

      // Interactivity
      'cursor-pointer',

      // Visibility & Layering
      'z-20',

      // Transition
      'transition duration-[250ms] ease-linear',

      // Misc
      'relative',

      'before:bg-primary-300 dark:before:bg-primary-700',
      'before:opacity-50 group-hover:before:opacity-100',
      'before:absolute before:inset-x-0 before:top-0 before:h-1 group-hover:before:h-2',
      'before:transition-all duration-200',
      'data-[p-scrollpanel-hidden=true]:invisible',
    ],
  },
  barY: {
    class: [
      // Size & Position
      'w-2 top-0',

      // Interactivity
      'cursor-pointer',

      // Visibility & Layering
      'z-20',

      // Transition
      'transition duration-[250ms] ease-linear',

      // Misc
      'relative',

      'before:bg-primary-300 dark:before:bg-primary-700',
      'before:opacity-50 group-hover:before:opacity-100',
      'before:absolute before:inset-y-0 before:right-0 before:w-1 group-hover:before:w-2',
      'before:transition-all duration-200',
      'data-[p-scrollpanel-hidden=true]:invisible',
    ],
  },
};
