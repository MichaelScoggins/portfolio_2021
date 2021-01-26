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
        {
          name: "alt",
          type: "string",
          title: "Alt",
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
