/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navbar from "../islands/Navbar.tsx"
export default function Home() {
  return (
    <div>
      <Navbar/>

      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
    </div>
  );
}
