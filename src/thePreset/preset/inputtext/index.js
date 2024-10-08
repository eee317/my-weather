import fg from "../_formgroup";
export default {
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
            ] : fg.shape.normal,

            // Colors
            !context.disabled ? [fg.text.normal, fg.bg.normal] : [fg.text.disabled, fg.bg.disabled],
            fg.placeholder,

            fg.border(context.disabled, props.invalid),

            // States
            !(context.disabled || attrs.readonly || props.invalid) && fg.hover,
            fg.focus(!(context.disabled || attrs.readonly)),
            { 'cursor-default': context.disabled || attrs.readonly },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

            // Misc
            'appearance-none',
            fg.transition,
        ]
    }),
    
};
