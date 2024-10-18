export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flexbox & Alignment
            'inline-flex',
            'align-bottom',

            // Size
            //'size-[1.625rem]',
            'size-4',

            // Misc
            'cursor-pointer',
            'select-none',
            {
                'pointer-events-none cursor-default': props.disabled || props.readonly
            }
        ]
    }),
    box: ({ props }) => ({
        class: [
            // Flexbox
            'flex justify-center items-center',

            // Size
            'size-full',

            // Shape
            'border-2 border-solid',
            'rounded-full',

            // Transition
            'transition duration-200 ease-in-out',

            // Colors
            {
                //checked
                'bg-primary-600 dark:bg-primary-600': !props.disabled && props.value === props.modelValue && props.value !== undefined,

                'bg-primary-600 dark:bg-primary-600/60': props.disabled && props.value === props.modelValue && props.value !== undefined,

                //no checked
                'bg-surface-0 dark:bg-primary-dark-300': !props.disabled && props.value !== props.modelValue && props.value !== undefined,

                //disabled
                'bg-surface-100 dark:bg-primary-dark-600': props.disabled && props.value !== props.modelValue && props.value !== undefined,
            },
            {
                //invalid
                'border-rose-600 dark:border-orange-400': props.invalid,

                //checked
                'border-primary-600 dark:border-primary-dark-300': !props.invalid && props.value === props.modelValue && props.value !== undefined,

                //no checked
                'border-surface-300 dark:border-primary-dark-400': !props.invalid && props.value !== props.modelValue && props.value !== undefined,

            },

            // States
            {
                'peer-hover:border-primary-600 dark:peer-hover:border-primary-dark-100': !props.disabled && !props.invalid,
                'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-0': !props.disabled,
            }
        ]
    }),
    input: ({ props }) => ({
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
            'rounded-full',
            'outline-none',
            'border-2 border-surface-200 dark:border-surface-700',

            // Misc
            'appearance-none',
            'cursor-pointer',
        ]
    }),
    icon: ({ props }) => ({
        class: [
            'block',

            // Shape
            'rounded-full',

            // Size
            //'size-[0.875rem]',
            'size-2',

            // Colors
            {
                'bg-surface-0 dark:bg-primary-dark-300': !props.disabled,
                'bg-primary-100 dark:bg-primary-dark-600': props.disabled,
            },

            // Conditions
            {
                'invisible': props.value !== props.modelValue,
                'visible': props.value == props.modelValue
            },

            // Transition
            'transition duration-200'
        ]
    })
};
