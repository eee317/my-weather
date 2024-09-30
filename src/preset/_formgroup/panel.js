import fg from "../_formgroup";
export default {
    panel: {
        class: [
            // Position
            'absolute top-0 left-0',

            // Shape
            'border-0 dark:border',
            'shadow-md rounded-md',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700',

            'overflow-hidden',
        ]
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'overflow-auto'
        ]
    },
    list: {
        class: 'py-2 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            // Font
            'font-normal',
            'leading-none',

            'flex items-center',

            // Position
            'relative',

            // Shape
            'border-0',
            'rounded-none',

            // Spacing
            'm-0',
            'py-3 px-5',

            // Color
            { 'text-surface-700 dark:text-white/80': !context.focused && !context.selected && !context.disabled },
            { 'text-surface-600 dark:text-white/70': !context.focused && !context.selected && context.disabled },
            { 'bg-surface-100 dark:bg-surface-600/60 text-surface-700 dark:text-white/80': context.focused && !context.selected },
            { 'bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': context.focused && context.selected },
            { 'bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': !context.focused && context.selected },

            //States
            !context.selected && (
                !context.focused ?
                    'hover:bg-primary-200 dark:hover:bg-surface-600/80' :
                    'hover:text-surface-700 hover:bg-primary-200 dark:hover:text-white dark:hover:bg-surface-600/80'
            ),
            'focus-visible:outline-none focus-visible:outline-offset-0',
            'focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-dark-100 dark:focus-visible:ring-primary-dark-100',

            // Transitions
            fg.transition,

            // Misc
            !context.disabled ? 'cursor-pointer' : 'pointer-events-none cursor-default',
            'overflow-hidden',
            'whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: [
            //Font
            'font-bold',

            // Spacing
            'm-0',
            'py-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'cursor-auto'
        ]
    },
    emptymessage: {
        class: [
            // Font
            'leading-none',

            // Spacing
            'py-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-transparent'
        ]
    },
    header: {
        class: [
            'flex items-center justify-between gap-2',
            // Spacing
            'py-2 px-5',
            'm-0',

            //Shape
            'border-b',
            'rounded-tl-md',
            'rounded-tr-md',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-700'
        ]
    },
    filtercontainer: {
        class: 'relative w-full'
    },
    filterinput: {
        class: [
            // Font
            fg.font,
            'leading-none',

            // Sizing
            fg.spacing(null),
            'pr-7',
            '-mr-7',
            'w-full',

            //Color
            fg.bg.normal,
            fg.text.normal,
            fg.border(false, false),

            // Shape
            fg.shape.normal,

            // Transitions
            fg.transition,

            // States
            fg.hover,
            fg.focus(true),

            // Misc
            'appearance-none'
        ]
    },
    filtericon: {
        class: ['absolute', 'top-1/2 right-3', '-mt-2']
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
}