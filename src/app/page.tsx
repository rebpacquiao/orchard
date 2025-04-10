import BlockCards from "./components/BlockCards/index";
import BlockImage from "./components/BlockImage/index";

export default function Home() {
  return (
     <>
     <div className="container mx-auto px-4">
      <BlockImage />
     <BlockCards />
     </div>
     </>
  );
}
