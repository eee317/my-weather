import fg from "../_formgroup";
import panel from "../_formgroup/panel";
export default {
    root: ({ props, state, attrs }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            fg.shape.normal,

            // Colors
            !props.disabled ? fg.bg.normal : fg.bg.disabled,
            fg.border(props.disabled, props.invalid),

            fg.transition,

            // States
            !(props.disabled || attrs.readonly || props.invalid) && fg.hover,
            state.focused && fg.ring,

            // Misc
            props.disabled || attrs.readonly ? 'cursor-default' : 'cursor-pointer',
            attrs.readonly && 'pointer-events-none'
        ]
    }),
    labelContainer: {
        class: 'overflow-hidden flex flex-auto cursor-pointer '
    },
    label: ({ props }) => ({
        class: [
            'leading-none',
            'block',

            // Spacing
            {
                'p-3': props.display !== 'chip',
                'py-3 px-3': props.display === 'chip' && !props?.modelValue?.length,
                'py-1.5 px-3': props.display === 'chip' && props?.modelValue?.length > 0
            },

            // Color
            { 'text-surface-800 dark:text-white/80': props.modelValue, 'text-surface-400 dark:text-surface-500': !props.modelValue },
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',

            // Transitions
            'transition duration-200',

            // Misc
            'overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis'
        ]
    }),
    token: ({ props }) => ({
        class: [
            // Flex
            'inline-flex items-center',

            // Spacings
            'py-1.5 px-3 mr-2',

            // Shape
            'rounded-[1.14rem]',

            // Colors
            props.disabled ? 'bg-primary-300 dark:bg-primary-dark-300' : 'bg-surface-200 dark:bg-surface-800',
            'text-surface-700 dark:text-white/70',

            // Misc
            'cursor-default'
        ]
    }),
    removeTokenIcon: {
        class: [
            // Shape
            'rounded-md leading-6',

            // Spacing
            'ml-2',

            // Size
            'w-4 h-4',

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer'
        ]
    },
    trigger: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-12',

            // Shape
            'rounded-tr-md',
            'rounded-br-md'
        ]
    },
    ...panel,
    headerCheckboxContainer: {
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'w-6',
            'h-6',

            // Misc
            'cursor-pointer',
            'select-none'
        ]
    },
    headerCheckbox: {
        root: {
            class: [
                'relative',

                // Alignment
                'inline-flex',
                'align-bottom',

                // Size
                'w-6',
                'h-6',

                // Spacing
                'mr-2',

                // Misc
                'cursor-pointer',
                'select-none'
            ]
        },
        box: ({ props, context }) => ({
            class: [
                // Alignment
                'flex',
                'items-center',
                'justify-center',

                // Size
                'w-6',
                'h-6',

                // Shape
                'rounded-md',
                'border-2',

                // Colors
                {
                    'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                    'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
                },

                // States
                {
                    'peer-hover:border-primary-500 dark:peer-hover:border-primary-400': !props.disabled && !context.checked,
                    'peer-hover:bg-primary-600 dark:peer-hover:bg-primary-300 peer-hover:border-primary-700 dark:peer-hover:border-primary-300': !props.disabled && context.checked,
                    'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                },

                // Transitions
                'transition-colors',
                'duration-200'
            ]
        }),
        input: {
            class: [
                'peer',

                // Size
                'w-full ',
                'h-full',

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
                'cursor-pointer'
            ]
        },
        icon: {
            class: [
                // Font
                'text-base leading-none',

                // Size
                'w-4',
                'h-4',

                // Colors
                'text-white dark:text-surface-900',

                // Transitions
                'transition-all',
                'duration-200'
            ]
        }
    },
    itemCheckbox: {
        root: {
            class: [
                'relative',

                // Alignment
                'inline-flex',
                'align-bottom',

                // Size
                'w-6',
                'h-6',

                // Spacing
                'mr-2',

                // Misc
                'cursor-pointer',
                'select-none'
            ]
        },
        box: ({ props, context }) => ({
            class: [
                // Alignment
                'flex',
                'items-center',
                'justify-center',

                // Size
                'w-6',
                'h-6',

                // Shape
                'rounded-md',
                'border-2',

                // Colors
                {
                    'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                    'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
                },

                // States
                {
                    'peer-hover:border-primary-500 dark:peer-hover:border-primary-400': !props.disabled && !context.checked,
                    'peer-hover:bg-primary-600 dark:peer-hover:bg-primary-300 peer-hover:border-primary-700 dark:peer-hover:border-primary-300': !props.disabled && context.checked,
                    'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                },

                // Transitions
                'transition-colors',
                'duration-200'
            ]
        }),
        input: {
            class: [
                'peer',

                // Size
                'w-full ',
                'h-full',

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
                'cursor-pointer'
            ]
        },
        icon: {
            class: [
                // Font
                'text-base leading-none',

                // Size
                'w-4',
                'h-4',

                // Colors
                'text-white dark:text-surface-900',

                // Transitions
                'transition-all',
                'duration-200'
            ]
        }
    },
    closeButton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Spacing
            'mr-2',
            'last:mr-0',
            'w-8 h-8',

            // Shape
            'border-0',
            'rounded-full',

            // Colors
            'text-surface-500',
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset',
            'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'overflow-hidden'
        ]
    },
    closeButtonIcon: {
        class: 'w-4 h-4 inline-block'
    },
    clearicon: {
        class: [
            // Color
            'text-surface-500',

            // Position
            'absolute',
            'top-1/2',
            'right-12',

            // Spacing
            '-mt-2'
        ]
    },
};
