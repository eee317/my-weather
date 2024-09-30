export default {
  display: ({ props }) => ({
    class: [props.disabled ? 'cursor-default' : 'cursor-pointer'],
  }),
};
