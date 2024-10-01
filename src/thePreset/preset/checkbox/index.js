export default {
    root: ({ props, context }) => ({
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'size-[1.625rem]',

            // Misc
            'cursor-pointer',
            'select-none',
            {
                'pointer-events-none cursor-default': props.disabled || props.readonly
            }
        ]
    }),
    box: ({ props, context }) => ({
        class: [
            // Alignment
            'flex',
            'items-center',
            'justify-center',

            // Size
            'size-full',

            // Shape
            'rounded-md',
            'border-2',

            // Transitions
            'transition duration-200 ease-in-out',

            // Colors
            {
                //checked
                'bg-primary-500 dark:bg-primary-600': !props.disabled && context.checked,

                'bg-primary-500 dark:bg-primary-600/60': props.disabled && context.checked,

                //no checked
                'bg-surface-0 dark:bg-primary-dark-300': !props.disabled && !context.checked,

                //disabled
                'bg-surface-100 dark:bg-primary-dark-600': props.disabled && !context.checked,
            },
            {
                'border-red-500 dark:border-red-400': props.invalid,
                //checked
                'border-primary-500 dark:border-primary-dark-300': !props.invalid && context.checked,
                //no checked
                'border-surface-300 dark:border-primary-dark-400': !props.invalid && !context.checked,
            },

            // States
            {
                'peer-hover:border-primary-500 dark:peer-hover:border-primary-dark-100': !props.disabled && !props.invalid,
                'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-0': !props.disabled,
            },
        ]
    }),
    input: {
        class: [
            'peer',

            // Size
            'size-full',

            // Position
            'absolute',
            'top-0 left-0',
            'z-10',

            // Spacing
            'p-0',
            'm-0',

            // Shape
            'opacity-0',
            'rounded-md',
            'outline-none',
            'border-2 border-surface-200 dark:border-surface-700',

            // Misc
            'appearance-none',
        ]
    },
    icon: ({ props }) => ({
        class: [
            // Font
            'text-base leading-none',

            // Size
            'size-4',

            // Colors
            {
                'text-surface-0 dark:text-primary-dark-300': !props.disabled,
                'text-primary-100 dark:text-primary-dark-600': props.disabled,
            },

            // Transitions
            'transition-all',
            'duration-200'
        ]
    })
};
