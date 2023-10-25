import { Header } from "./components/header";

import styles from "./app.module.css";
import { Sidebar } from "./components/sidebar";
import { Post, ContentType } from "./components/post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/luanc14.png",
      name: "Luan Chrystian",
      role: "Developer analyst at SysMap Solutions",
    },
    content: [
      {
        type: ContentType.Header,
        value: "Fala galeraa 👋",
      },
      {
        type: ContentType.Paragraph,
        value:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laboriosam, sint possimus officia vero deleniti corrupti quod temporibus debitis animi tenetur voluptatum quia unde dicta veniam, iusto aliquam tempore libero?",
      },
      {
        type: ContentType.Paragraph,
        value: "https://github.com/LuanC14",
      },
    ],
    publishedAt: new Date("2023-10-18 13:30:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
