export default {
  root: ({ props, context, parent }) => {
    let severity = [];
    switch (props.severity) {
      case 'secondary':
        severity = [
          {
            'bg-secondary-500 dark:bg-secondary-600 text-secondary-font': !(props.text || props.outlined || props.link),
            'hover:bg-secondary-600 dark:hover:bg-secondary-700': !(props.text || props.outlined || props.link),
          },
          'focus:ring-secondary-300 dark:focus:ring-secondary-300/50',
          { 'text-secondary-600 dark:text-secondary-400': props.text || props.outlined },
          { 'border-secondary-600 hover:bg-secondary-600 hover:text-white': props.outlined },
          { 'dark:border-secondary-400 dark:hover:border-secondary-700 dark:hover:bg-secondary-700': props.outlined },
          { 'hover:bg-secondary-400/20': props.text },
        ];
        break;
      case 'other':
        severity = [
          {
            'bg-green-500 dark:bg-green-600 text-white': !(props.text || props.outlined || props.link),
            'hover:bg-green-600 dark:hover:bg-green-700': !(props.text || props.outlined || props.link),
          },
          'focus:ring-green-300 dark:focus:ring-green-300/50',
          { 'text-green-600 dark:text-green-400': props.text || props.outlined },
          { 'border-green-600 hover:bg-green-600 hover:text-white': props.outlined },
          { 'dark:border-green-400 dark:hover:border-green-700 dark:hover:bg-green-700': props.outlined },
          { 'hover:bg-green-400/20': props.text },
        ];
        break;
      case 'delete':
        severity = [
          {
            'bg-red-500 dark:bg-red-600 text-white': !(props.text || props.outlined || props.link),
            'hover:bg-red-600 dark:hover:bg-red-700': !(props.text || props.outlined || props.link),
          },
          'focus:ring-red-300 dark:focus:ring-red-300/50',
          { 'text-red-600 dark:text-red-400': props.text || props.outlined },
          { 'border-red-600 hover:bg-red-600 hover:text-white': props.outlined },
          { 'dark:border-red-400 dark:hover:border-red-700 dark:hover:bg-red-700': props.outlined },
          { 'hover:bg-red-400/20': props.text },
        ];
        break;
      case 'clear':
        severity = [
          {
            'bg-neutral-400 dark:bg-neutral-500 text-white': !(props.text || props.outlined || props.link),
            'hover:bg-neutral-500 dark:hover:bg-neutral-600': !(props.text || props.outlined || props.link),
          },
          'focus:ring-neutral-300 dark:focus:ring-neutral-300/50',
          { 'text-neutral-500 dark:text-neutral-200': props.text || props.outlined },
          { 'border-neutral-500 hover:bg-neutral-500 hover:text-white': props.outlined },
          { 'dark:border-neutral-200 dark:hover:border-neutral-500 dark:hover:bg-neutral-500': props.outlined },
          { 'hover:bg-neutral-200/20': props.text },
        ];
        break;
      case 'third':
        severity = [
          {
            'bg-primary-300 dark:bg-primary-dark-100 text-primary-700 dark:text-white': !(props.text || props.outlined || props.link),
            'hover:bg-primary-600 hover:text-white dark:hover:bg-primary-dark-200': !(props.text || props.outlined || props.link),
          },
          'focus:ring-primary-300 dark:focus:ring-primary-300/50',
          { 'text-primary-600 dark:text-primary-300': props.text || props.outlined },
          { 'border-primary-600 hover:bg-primary-600 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:hover:border-primary-600 dark:hover:bg-primary-600': props.outlined },
          { 'hover:bg-primary-300/20': props.text },
        ];
        break;
      case 'dg-primary':
        severity = [
          {
            'bg-primary-50 dark:bg-primary-dark-100 text-primary-600 dark:text-white border border-primary-200': !(props.text || props.outlined || props.link),
            'hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-dark-200': !(props.text || props.outlined || props.link),
          },
          'focus:ring-primary-200 dark:focus:ring-primary-200/50',
          { 'text-primary-600 dark:text-primary-300': props.text || props.outlined },
          { 'border-primary-600 hover:bg-primary-600 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:hover:border-primary-600 dark:hover:bg-primary-600': props.outlined },
          { 'hover:bg-primary-300/20': props.text },
        ];
        break;
      case 'dg-warning':
        severity = [
          {
            'bg-yellow-100 dark:bg-yellow-dark-100 text-yellow-700 dark:text-white border border-yellow-300': !(props.text || props.outlined || props.link),
            'hover:bg-yellow-200 hover:text-yellow-700 dark:hover:bg-yellow-dark-200': !(props.text || props.outlined || props.link),
          },
          'focus:ring-yellow-300 dark:focus:ring-yellow-200/50',
          { 'text-yellow-600 dark:text-yellow-300': props.text || props.outlined },
          { 'border-yellow-600 hover:bg-yellow-600 hover:text-white': props.outlined },
          { 'dark:border-yellow-300 dark:hover:border-yellow-600 dark:hover:bg-yellow-600': props.outlined },
          { 'hover:bg-yellow-300/20': props.text },
        ];
        break;
      case 'dg-secondary':
        severity = [
          {
            'bg-secondary-100 dark:bg-primary-dark-100 text-secondary-500 dark:text-white border border-secondary-500': !(props.text || props.outlined || props.link),
            'hover:bg-secondary-200 hover:text-secondary-500 dark:hover:bg-primary-dark-200': !(props.text || props.outlined || props.link),
          },
          'focus:ring-secondary-300 dark:focus:ring-secondary-200/50',
          { 'text-secondary-600 dark:text-primary-300': props.text || props.outlined },
          { 'border-secondary-500 hover:bg-secondary-500 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:hover:border-primary-600 dark:hover:bg-primary-600': props.outlined },
          { 'hover:bg-primary-300/20': props.text },
        ];
        break;
      case 'dg-danger':
        severity = [
          {
            'bg-danger-100 dark:bg-primary-dark-100 text-danger-600 dark:text-white border border-danger-300': !(props.text || props.outlined || props.link),
            'hover:bg-danger-100 hover:text-danger-600 dark:hover:bg-primary-dark-200': !(props.text || props.outlined || props.link),
          },
          'focus:ring-danger-300 dark:focus:ring-danger-300/50',
          { 'text-danger-600 dark:text-primary-300': props.text || props.outlined },
          { 'border-danger-300 hover:bg-danger-100': props.outlined },
          { 'dark:border-primary-300 dark:hover:border-primary-600 dark:hover:bg-primary-600': props.outlined },
          { 'hover:bg-danger-300/20': props.text },
        ];
        break;
      case 'table-blue-button':
        severity = [
          {
            'bg-table-blue-800 text-white': !(props.text || props.outlined || props.link),
            'hover:bg-table-blue-900': !(props.text || props.outlined || props.link),
          },
          'focus:ring-primary-300 dark:focus:ring-primary-300/50',
          { 'text-table-blue-800 dark:text-primary-300': props.text || props.outlined },
          { 'border-table-blue-300 hover:bg-table-blue-900 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:hover:bg-table-blue-900 dark:hover:bg-table-blue-900': props.outlined },
          { 'hover:bg-table-blue-900': props.text },
        ];
        break;
      case 'table-orange-button':
        severity = [
          {
            'bg-table-orange-800 text-white': !(props.text || props.outlined || props.link),
            'hover:bg-table-orange-900': !(props.text || props.outlined || props.link),
          },
          'focus:ring-table-orange-300 dark:focus:ring-primary-300/50',
          { 'text-table-orange-800 dark:text-primary-300': props.text || props.outlined },
          { 'border-table-orange-200 hover:bg-table-orange-900 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:hover:bg-table-orange-900 dark:hover:bg-table-orange-900': props.outlined },
          { 'hover:bg-table-orange-900': props.text },
        ];
        break;
      case 'table-green-button':
        severity = [
          {
            'bg-table-green-800 text-white': !(props.text || props.outlined || props.link),
            'hover:bg-table-green-900': !(props.text || props.outlined || props.link),
          },
          'focus:ring-table-green-200 dark:focus:ring-primary-300/50',
          { 'text-table-green-800 dark:text-primary-300': props.text || props.outlined },
          { 'border-table-green-200 hover:bg-table-green-900 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:hover:bg-table-green-900 dark:hover:bg-table-green-900': props.outlined },
          { 'hover:bg-table-green-900': props.text },
        ];
        break;
      case 'transparent-to-delete':
        severity = [
          {
            'text-surface-600 hover:text-danger-500': !(props.text || props.outlined || props.link),
            'bg-transparent hover:bg-danger-100 dark:hover:bg-red-700': !(props.text || props.outlined || props.link),
          },
          'focus:ring-danger-300 dark:focus:ring-red-300/50',
          { 'text-danger-400 dark:text-danger-400': props.text || props.outlined },
          { 'border-danger-500 hover:bg-danger-500 hover:text-white': props.outlined },
          { 'border-danger-400 dark:hover:border-danger-700 dark:hover:bg-danger-700': props.outlined },
          { 'hover:bg-danger-400/20': props.text },
        ];
        break;
      case 'arcgis':
        severity = [
          {
            'bg-white text-primary-700': !(props.text || props.outlined || props.link),
            'hover:bg-primary-100': !(props.text || props.outlined || props.link),
          },
          'focus:ring-primary-300 dark:focus:ring-primary-300/50',
          { 'text-primary-600 dark:text-primary-300': props.text || props.outlined },
          { 'border-primary-600 hover:bg-primary-600 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:hover:border-primary-600 dark:hover:bg-primary-600': props.outlined },
          { 'hover:bg-primary-300/20': props.text },
        ];
        break;
      default:
        severity = [
          {
            'bg-primary-600 text-white': !(props.text || props.outlined || props.link),
            'hover:bg-primary-700': !(props.text || props.outlined || props.link),
          },
          'focus:ring-primary-300 dark:focus:ring-primary-300/50',
          { 'text-primary-700 dark:text-primary-300': props.text || props.outlined },
          { 'border-primary-700 hover:bg-primary-700 hover:text-white': props.outlined },
          { 'dark:border-primary-300 dark:border-solid dark:hover:border-primary-600 dark:hover:bg-primary-600': props.outlined },
          { 'hover:bg-primary-300/20': props.text },
        ];
        break;
    }
    return {
      class: [
        'relative group',
        

        // Alignments
        'items-center inline-flex text-center align-bottom justify-center',

        // Sizes & Spacing
        'leading-[normal]',
        {
          'text-base py-2 px-3': props.size === null,
          'text-sm py-2 px-3': props.size === 'small',
          'text-xl py-2 px-3': props.size === 'large',
          'py-1 px-2': props.size === 'datagrid',
        },

        // Shapes
        { 'shadow-lg': props.raised },
        props.rounded ? 'rounded-full' : 'rounded-md',
        { 'rounded-none first:rounded-l-md last:rounded-r-md': parent.instance.$name == 'InputGroup' },

        // Severity
        ...severity,
        {
          'bg-transparent border-transparent': props.text,
          'bg-transparent border border-solid': props.outlined,
          'border-none':
            !(props.text || props.outlined || props.link) && props.severity !== 'dg-primary' && props.severity !== 'dg-secondary' && props.severity !== 'dg-danger' && props.severity !== 'dg-warning',
        },

        // --- Severity Button States ---
        'focus:outline-none focus:outline-offset-0 focus:ring',

        // Disabled
        { 'opacity-50 pointer-events-none cursor-default': context.disabled },

        // Transitions
        'transition duration-200 ease-in-out',

        // Misc
        'cursor-pointer overflow-hidden select-none',
      ],
    };
  },
  label: ({ props }) => ({
    class: [
      'font-normal',
      'pointer-events-none',
      {
        'group-hover:underline underline-offset-4': props.link,
      },
      // props.label ? 'flex-1' : 'invisible w-0',
      props.label ? '' : 'invisible w-0',
    ],
  }),
  icon: ({ props }) => ({
    class: [
      'pointer-events-none',
      'mx-0',
      props.label != null
        ? {
            'mr-2': props.iconPos == 'left',
            'ml-2 order-1': props.iconPos == 'right',
            'mb-2': props.iconPos == 'top',
            'mt-2': props.iconPos == 'bottom',
          }
        : '',
    ],
  }),
  loadingicon: ({ props }) => ({
    class: [
      'h-4 w-4',
      'mx-0',
      props.label != null
        ? {
            'mr-2': props.iconPos == 'left',
            'ml-2 order-1': props.iconPos == 'right',
            'mb-2': props.iconPos == 'top',
            'mt-2': props.iconPos == 'bottom',
          }
        : '',
      'animate-spin',
    ],
  }),
  badge: ({ props }) => ({
    class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }],
  }),
};
