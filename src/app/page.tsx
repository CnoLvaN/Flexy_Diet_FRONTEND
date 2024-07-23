import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      <div id="home" className={styles.start}>
        <div className={styles.beginning}>
          <h3>this is</h3>
          <h1 className={styles.tittle_Flexy}>FLEXY</h1>
          <h1 className={styles.tittle}>your way to be better</h1>
          <p className={styles.small_description}>
            {" "}
            We want you to thrive and feel your best with every meal – fuel your
            body, delight your taste buds, and embrace a healthier lifestyle
            with our nutritious and delicious food choices every day!
          </p>
          <a className={styles.signIn} href="/sign-in">
            Try out
          </a>
        </div>
        <div className={styles.startImage}>
          <Image
            src="/002apple.png"
            width={380}
            height={380}
            alt=""
            className={styles.TopImg}
          />
          <div className={styles.animation_point}></div>
          <div className={styles.animation_point}></div>
          <div className={styles.animation_point}></div>
        </div>
      </div>

      <div className={styles.about}>
        <h2 className={styles.aboutLabel}>How it's work?</h2>

        <div className={styles.plan}>
          <div className={styles.card}>
            <h2>Registration</h2>
            <p>You register and enter yor data</p>
          </div>
          <div className={styles.card}>
            <h2>Generation</h2>
            <p>We generate you personal plan</p>
          </div>
          <div className={styles.card}>
            <h2>Recommendations</h2>
            <p>We support you and give recommendations</p>
          </div>
        </div>
      </div>

      {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
