export default {
    font: 'font-sans',
    spacing: (size) => [
        'm-0',
        {
            'px-4 py-4': size == 'large',
            'px-2 py-2': size == 'small',
            'px-3 py-2': size == null
        },
    ],
    shape: {
        normal: 'rounded-md',
        inputGroup: 'first:rounded-l-md rounded-none last:rounded-r-md border-0 border-y border-l last:border-r',
    },
    bg: {
        normal: 'bg-surface-0',
        disabled: 'bg-surface-200'
    },
    text: {
        normal: 'text-surface-900',
        disabled: 'text-surface-900',
        placeholder: 'text-surface-400'
    },
    border: (disabled, invalid) => [
        'border',
        {
            //Normal (不知為啥要加dark才能正常顯示)
            'border-surface-300 dark:border-surface-300': !invalid && !disabled,

            //Invalid
            'border-red-500': invalid,

            //Disabled
            'border-surface-300': disabled,
        },
    ],
    placeholder: 'placeholder:text-surface-400',
    hover: 'hover:border-primary-400',
    focus: (enable) => [
        'focus:outline-none focus:outline-offset-0',
        {
            'focus:ring focus:ring-primary-400/25': enable,
        },
    ],
    ring: 'ring ring-primary-400/25',
    transition: 'transition duration-200',
}