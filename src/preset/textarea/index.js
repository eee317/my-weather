import fg from "../_formgroup";
export default {
    root: ({ context, props, attrs }) => ({
        class: [
            fg.font,
            'leading-relaxed',
            fg.spacing(attrs?.size),

            fg.shape.normal,

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
};
