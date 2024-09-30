export default {
  root: {
    class: [
      //Shape
      // 'shadow-md',

      //Color
      'bg-surface-0',
      'text-surface-700',

      //Padding
      'px-6',
      'py-6',
    ],
  },
  body: {
    class: '',
  },
  title: {
    class: 'text-2xl font-bold',
  },
  subtitle: {
    class: [
      //Font
      'font-normal',

      //Spacing
      'mb-2',

      //Color
      'text-surface-600 dark:text-surface-0/60',
    ],
  },
  content: {
    class: ['flex flex-col'],
  },
  addContent: {
    class: ['bg-primary-20'],
  },
  footer: {
    class: 'pt-5', // Top padding.
  },
};
