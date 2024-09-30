import fg from "../_formgroup";
export default {
    root: ({ props, parent }) => ({
        class: [
            // Flex
            'inline-flex',
            { 'flex-col': props.showButtons && props.buttonLayout == 'vertical' },

            // InputGroup
            parent.instance.$name == 'InputGroup' ? [
                'flex-1 w-[1%]',
                !props.showButtons && [
                    fg.shape.inputGroup,
                    'first:ml-0 -ml-px'
                ]
            ] : fg.shape.normal,

            //Sizing
            { '!w-16': props.showButtons && props.buttonLayout == 'vertical' }
        ]
    }),
    input: {
        root: ({ parent, context, attrs }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Font
                fg.font,
                'leading-none',
                {
                    'text-center': parent.props.buttonLayout == 'horizontal',
                },

                // Spacing
                fg.spacing(attrs?.size),

                // Shape
                parent.props.showButtons ? [
                    fg.shape.normal,
                    'rounded-tr-none rounded-br-none',
                    parent.props.buttonLayout == 'horizontal' && 'rounded-tl-none rounded-bl-none',
                    parent.props.buttonLayout == 'vertical' && 'rounded-none text-center'
                ] : [
                    parent.instance.$parentInstance?.$name == 'InputGroup' && 'border-0'
                ],

                // Colors
                !context.disabled ? [fg.text.normal, fg.bg.normal] : [fg.text.disabled, fg.bg.disabled],
                fg.placeholder,

                fg.border(context.disabled, parent.props.invalid),

                // States
                !(context.disabled || parent.props.readonly || parent.props.invalid) && fg.hover,
                fg.focus(!(context.disabled || parent.props.readonly)),
                'focus:z-10',

                // Filled State *for FloatLabel
                { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

                //Position
                { 'order-2': parent.props.buttonLayout == 'horizontal' || parent.props.buttonLayout == 'vertical' }
            ]
        })
    },
    buttongroup: ({ props }) => ({
        class: 'flex flex-col'
    }),
    incrementbutton: {
        root: ({ parent, context }) => ({
            class: [
                // Display
                'flex',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                parent.props.showButtons && {
                    'order-3': parent.props.buttonLayout == 'horizontal',
                    'order-1': parent.props.buttonLayout == 'vertical'
                },

                //Color
                !context.disabled ? [fg.text.normal, fg.bg.normal] : [fg.text.disabled, fg.bg.disabled],
                fg.border(context.disabled, parent.props.invalid),
                'border-l-transparent dark:border-l-transparent',

                // Sizing
                parent.props.showButtons && {
                    'flex-none w-11': parent.props.buttonLayout == 'horizontal',
                    'flex-auto px-4 py-3 w-10': parent.props.buttonLayout == 'vertical',
                    'flex-auto p-0 w-10': parent.props.buttonLayout == 'stacked'
                },

                // Shape
                fg.shape.normal,
                parent.props.showButtons && {
                    'rounded-bl-none rounded-tl-none': parent.props.buttonLayout == 'horizontal',
                    'rounded-bl-none rounded-br-none': parent.props.buttonLayout == 'vertical',
                    'rounded-tl-none rounded-br-none rounded-bl-none': parent.props.buttonLayout == 'stacked'
                },

                // States
                !(context.disabled || parent.props.readonly || parent.props.invalid) && fg.hover,
                fg.focus(!(context.disabled || parent.props.readonly)),

                //Misc
                'overflow-hidden select-none',
                !(context.disabled || parent.props.readonly) ? 'cursor-pointer' : 'pointer-events-none cursor-default',
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    },
    decrementbutton: {
        root: ({ parent, context, attrs }) => ({
            class: [
                // Display
                'flex',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                parent.props.showButtons && {
                    'order-1': parent.props.buttonLayout == 'horizontal',
                    'order-3': parent.props.buttonLayout == 'vertical'
                },

                //Color
                !context.disabled ? [fg.text.normal, fg.bg.normal] : [fg.text.disabled, fg.bg.disabled],
                fg.border(context.disabled, parent.props.invalid),
                {
                    'border-r-transparent dark:border-r-transparent': parent.props.buttonLayout == 'horizontal',
                    'border-t-transparent border-l-transparent dark:border-t-transparent dark:border-l-transparent': parent.props.buttonLayout == 'vertical',
                    'border-t-transparent border-l-transparent dark:border-t-transparent dark:border-l-transparent': parent.props.buttonLayout == 'stacked'
                },

                // Sizing
                parent.props.showButtons && {
                    'flex-none w-11': parent.props.buttonLayout == 'horizontal',
                    'flex-auto px-4 py-3 w-10': parent.props.buttonLayout == 'vertical',
                    'flex-auto p-0 w-10': parent.props.buttonLayout == 'stacked'
                },

                // Shape
                fg.shape.normal,
                parent.props.showButtons && {
                    'rounded-tr-none rounded-br-none': parent.props.buttonLayout == 'horizontal',
                    'rounded-tr-none rounded-tl-none': parent.props.buttonLayout == 'vertical',
                    'rounded-tr-none rounded-tl-none rounded-bl-none': parent.props.buttonLayout == 'stacked'
                },

                // States
                !(context.disabled || parent.props.readonly || parent.props.invalid) && fg.hover,
                fg.focus(!(context.disabled || parent.props.readonly)),

                //Misc
                'overflow-hidden select-none',
                !(context.disabled || parent.props.readonly) ? 'cursor-pointer' : 'pointer-events-none cursor-default',
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    }
};
