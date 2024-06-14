import { NavBar } from "@/components/ui/NavBar";
import { HomePage } from "./_components/HomePage";
import { AboutMe } from "./_components/AboutMe";

export default function Home() {
  return (
    <div className = "flex items-start gap-[1rem] w-[97%] m-auto">
      <div className = "w-[20%] lg:block hidden rounded-md">
        <NavBar/>
      </div>
      <div className = "lg:w-[80%] w-[98%] m-auto">
        <HomePage/>
        <AboutMe/>
      </div>
    </div>
  );
}
