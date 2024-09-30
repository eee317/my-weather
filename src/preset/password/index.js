import fg from "../_formgroup";
import panel from "../_formgroup/panel";
export default {
    root: ({ props }) => ({
        class: [
            'inline-flex relative',
        ]
    }),
    panel: {
        class: [
            // Spacing
            'p-5',

            // Shape
            'border-0 dark:border',
            'shadow-md rounded-md',

            // Colors
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700',
        ]
    },
    meter: {
        class: [
            // Position and Overflow
            'overflow-hidden',
            'relative',

            // Shape and Size
            'border-0',
            'h-3',

            // Spacing
            'mb-2',

            // Colors
            'bg-surface-100 dark:bg-surface-700'
        ]
    },
    meterlabel: ({ instance }) => ({
        class: [
            // Size
            'h-full',

            // Colors
            {
                'bg-red-500 dark:bg-red-400/50': instance?.meter?.strength == 'weak',
                'bg-orange-500 dark:bg-orange-400/50': instance?.meter?.strength == 'medium',
                'bg-green-500 dark:bg-green-400/50': instance?.meter?.strength == 'strong'
            },

            // Transitions
            'transition-all duration-1000 ease-in-out'
        ]
    }),
    showicon: {
        class: ['absolute top-1/2 right-3 -mt-2', 'text-surface-600 dark:text-white/70']
    },
    hideicon: {
        class: ['absolute top-1/2 right-3 -mt-2', 'text-surface-600 dark:text-white/70']
    },
    input: {
        root: ({ props, context, parent, attrs }) => ({
            class: [
                fg.font,
                'leading-none',

                fg.spacing(props.size),

                // InputGroup
                parent.instance.$name == 'InputGroup' ? [
                    'flex-1 w-[1%]',
                    fg.shape.inputGroup,
                    !props.showButtons && 'first:ml-0 -ml-px'
                ] : [fg.shape.normal, 'flex-1 w-full'],

                // Color
                !context.disabled ? [fg.text.normal, fg.bg.normal] : [fg.text.disabled, fg.bg.disabled],
                fg.placeholder,

                fg.border(context.disabled, props.invalid),

                // States
                !(context.disabled || attrs.readonly || props.invalid) && fg.hover,
                fg.focus(!(context.disabled || attrs.readonly)),
                { 'cursor-default': context.disabled || attrs.readonly },


                // Misc
                'appearance-none',
                fg.transition,
            ]
        })
    },
    transition: panel.transition,
};
