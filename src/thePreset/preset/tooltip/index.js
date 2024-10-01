export default {
  root: ({ context, props }) => ({
    class: [
      // Position and Shadows
      'absolute',
      'p-fadein',
      // Spacing
      {
        'py-0 px-1': context?.right || context?.left || (!context?.right && !context?.left && !context?.top && !context?.bottom),
        'py-1 px-0': context?.top || context?.bottom,
      },
    ],
  }),
  arrow: ({ context, props }) => ({
    class: [
      // Position

      'absolute',

      // Size
      'size-0',

      // Shape
      'border-transparent',
      'border-solid',
      {
        'border-y-4 border-r-4 border-l-0 border-r-primary-250 dark:border-r-primary-300': context?.right || (!context?.right && !context?.left && !context?.top && !context?.bottom),
        'border-y-4 border-l-4 border-r-0 border-l-primary-250 dark:border-l-primary-300': context?.left,
        'border-x-4 border-t-4 border-b-0 border-t-primary-250 dark:border-t-primary-300': context?.top,
        'border-x-4 border-b-4 border-t-0 border-b-primary-250 dark:border-b-primary-300': context?.bottom,
      },

      // Spacing
      {
        '-mt-1 ': context?.right || (!context?.right && !context?.left && !context?.top && !context?.bottom),
        '-mt-1': context?.left,
        '-ml-1': context?.top || context?.bottom,
      },
    ],
  }),
  text: {
    class: ['px-3 py-2', 'bg-surface-800/80 dark:bg-primary-300', 'text-surface-0', 'leading-none', 'rounded-md', 'whitespace-pre-line', 'break-words'],
  },
};
