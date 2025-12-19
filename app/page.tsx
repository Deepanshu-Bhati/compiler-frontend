import Navbar from "./Components/Navbar";
import Code from "./Components/Code";
import Provider from "./Provider";
export default function Home() {
  return (
    <div className="">
      <Provider>
      <Navbar/>
      <Code></Code>
      </Provider>
    </div>
  );
}
