const richText = {
  name: "richText",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
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
