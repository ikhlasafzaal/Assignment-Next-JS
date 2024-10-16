export default function Blogs() {
    const blogPosts = [
      {
        title: "Understanding",
        description: "A deep dive into React hooks",
      },
      {
        title: "Getting Started",
        description: "An introductory guide",
      },
      {
        title: "JavaScript",
        description: "Explore the new features.",
      },
      {
        title: "CSS Grid",
        description: "A comparison between CSS Grid",
      },
    ];
  
    return (
      <div className="parentContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="childContainer bounce-in-right border rounded shadow-md p-4">
            <div className="imageContainer mb-4">

            </div>
            <h1 className="title text-xl font-semibold">{post.title}</h1>
            <p className="description text-white-700">{post.description}</p>
            <button className="readMore mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        ))}
      </div>
    );
  }
  