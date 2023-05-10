import {getPosts} from "../pages/mock-api/data"
import styles from "../styles/Home.module.css"
import Link from "next/link";
import axios from "axios";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Title</th>
              <th className={styles.th}>Slug</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Content</th>
              <th className={styles.th}>UpdatedAt</th>

            </tr>
          </thead>
          <tbody>
            {getPosts().map(post => (
              <tr className={styles.tr} key={post.id}>
                <td className={styles.td}>{post.id}</td>
                <td className={styles.td}>{post.title}</td>
                <td className={styles.td}>{post.slug}</td>
                <td className={styles.td}>{post.category}</td>
                <td className={styles.td}>{post.content}</td>
                <td className={styles.td}>{post.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}