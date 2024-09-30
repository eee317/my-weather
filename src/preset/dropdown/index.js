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
    input: ({ props, attrs }) => ({
        class: [
            fg.font,

            // Display
            'block',
            'flex-auto',

            // Color and Background
            'bg-transparent',
            'border-0',
            !props.disabled ?
                [
                    props.modelValue ? fg.text.normal : fg.text.placeholder
                ] :
                [
                    props.modelValue ? fg.text.disabled : fg.text.placeholder
                ],

            // Sizing and Spacing
            'w-[1%] h-10',
            fg.spacing(attrs.size),
            { 'pr-7': props.showClear },

            //Shape
            'rounded-none',

            // Transitions
            fg.transition,

            // States
            'focus:outline-none',

            // Misc
            'relative',
            'overflow-hidden overflow-ellipsis',
            'whitespace-nowrap',
            'appearance-none'
        ]
    }),
    trigger: ({ props }) => ({
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            !props.disabled ? fg.text.normal : fg.text.disabled,

            // Size
            'w-10',

            // Shape
            'rounded-r-md',
        ]
    }),
    clearicon: ({ props }) => ({
        class: [
            'flex items-center justify-center',
            !props.disabled ? fg.text.normal : fg.text.disabled,
            'absolute',
            'top-1/2 -translate-y-1/2',
            'right-9',
            'w-8 h-8',
            'rounded-full',
            'hover:bg-surface-800/10 dark:hover:bg-surface-0/10',
            'transition duration-300',
        ]
    }),
    ...panel,
};
