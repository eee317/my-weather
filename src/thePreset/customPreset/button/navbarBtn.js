/**
*處理navbar的按鈕狀態
* @description 主要是 props.outlined 時候，不能有 bg-transparent
*/
export const btnNavbarClass = {
  root: ({ props, context, parent }) => {
    return { class:
    [
        'relative group',
        // Alignments
        'items-center inline-flex text-center align-bottom justify-center',
        // Sizes & Spacing
        'leading-[normal]',
        {
          'text-base py-2 px-3': props.size === null,
          'text-sm py-2 px-3': props.size === 'small',
          'text-xl py-2 px-3': props.size === 'large',
          'py-1 px-2': props.size === 'datagrid',
        },
        // Shapes
        { 'shadow-lg': props.raised },
        props.rounded ? 'rounded-full' : 'rounded-md',
        { 'rounded-none first:rounded-l-md last:rounded-r-md': parent.instance.$name == 'InputGroup' },
        {
          'bg-transparent border-transparent': props.text,
          ' border': props.outlined,
          'border-none':
            !(props.text || props.outlined || props.link) && props.severity !== 'dg-primary' && props.severity !== 'dg-secondary' && props.severity !== 'dg-danger' && props.severity !== 'dg-warning',
        },

        // --- Severity Button States ---
        'focus:outline-none focus:outline-offset-0 focus:ring',

        // Disabled
        { 'opacity-50 pointer-events-none cursor-default': context.disabled },

        // Transitions
        'transition duration-200 ease-in-out',
        // Misc
        'cursor-pointer overflow-hidden select-none',
      ],
    }
  }
}
