//define type aliass
type blogPost = {
  title: string;
  content: string;
  author: string;
  published: boolean;
  publishedDate?: string;
};
//create a blog post
const myPost: blogPost = {
  title: "Learning TypeScript",
  content: "Typescript is a superset of Javascript that adds statics typeing.",
  author: "Ekhlasur Rhaman",
  published: true,
  //   publishedDate: "2025-11-17",
};
function printBlogPost(post: blogPost) {
  console.log(`Title: ${post.title}`);
  console.log(`content: ${post.content}`);
  console.log(`author: ${post.author}`);
  console.log(`published: ${post.published}`);
  if (post.publishedDate) {
    console.log(`published Date: ${post.publishedDate}`);
  }
}

printBlogPost(myPost);
