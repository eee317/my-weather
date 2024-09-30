const iconBtn = [
  'z-20',

  // Flexbox & Alignment
  'flex justify-center items-center',

  // Size
  'size-12',

  // Spacing
  'mr-2',

  // Shape
  'rounded-full',

  // Color
  'text-white bg-black/25',

  // States
  'hover:bg-black/50',
  'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

  // Transition
  'transition duration-200 ease-in-out',
];

const icon = ['drop-shadow', 'size-6'];

export default {
  root: {
    class: 'relative inline-flex justify-center items-center',
  },
  image: {
    class: 'object-contain object-center',
  },
  button: {
    class: [
      // Flexbox & Alignment
      'flex items-center justify-center',

      // Positioning
      'absolute',

      // Shape
      'inset-0 opacity-0 transition-opacity duration-300',

      // Color
      'bg-transparent text-surface-100',

      // States
      'hover:opacity-100 hover:cursor-pointer hover:bg-black/50 hover:bg-opacity-50',
    ],
  },
  mask: {
    class: [
      // Flexbox & Alignment
      'flex items-center justify-center',

      // Positioning
      'fixed top-0 left-0',

      // Sizing
      'w-full h-full',

      // Color
      'bg-black/80',
    ],
  },
  toolbar: {
    class: [
      // Flexbox
      'flex',

      // Positioning
      'absolute top-0 right-0',

      // Spacing
      'p-4',
    ],
  },
  rotaterightbutton: {
    class: iconBtn,
  },
  rotaterighticon: {
    class: icon,
  },
  rotateleftbutton: {
    class: iconBtn,
  },
  rotatelefticon: {
    class: icon,
  },
  zoomoutbutton: {
    class: iconBtn,
  },
  zoomouticon: {
    class: icon,
  },
  zoominbutton: {
    class: iconBtn,
  },
  zoominicon: {
    class: icon,
  },
  closebutton: {
    class: iconBtn,
  },
  closeicon: {
    class: icon,
  },
  transition: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass: 'transition-all duration-150 ease-in-out',
    leaveActiveClass: 'transition-all duration-150 ease-in',
    leaveToClass: 'opacity-0 scale-75',
  },
};
