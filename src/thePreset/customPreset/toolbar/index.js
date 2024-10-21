export default {
  root: {
    class: [
      // Flex & Alignment
      'flex items-center justify-between flex-wrap max-w-screen-xl',
      'gap-2',

      // Spacing
      'p-5',

      // Shape
      'rounded-md',

      // Color
      // bg-surface-50
      ' dark:bg-surface-800',
      'border border-surface-200 dark:border-surface-700',
    ],
  },
  start: {
    class: 'flex items-center',
  },
  center: {
    class: 'flex items-center',
  },
  end: {
    class: 'flex items-center justify-end',
  },
};
