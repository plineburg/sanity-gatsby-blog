export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6371b0f942049a51f3369c52",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mtvdpsrm",
                  apiId: "b4c49158-4e0c-4642-8708-453410c5986a",
                },
                {
                  buildHookId: "6371b0f9528c784d364659f2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-312y175b",
                  apiId: "9be379a2-406b-4330-89bc-95678a3bd8ef",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/plineburg/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-312y175b.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
