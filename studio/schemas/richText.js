const richText = {
  name: "richText",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
    },
    {
      type: "code",
      options: {
        theme: "monokai",
      },
    },
  ],
};
export default richText;
