import Layout from "./components/layout";
import Metroneme from "./components/metroneme";
import { GlobalStyles } from "./utils/global";
import { darkTheme } from "./utils/theme";

function App() {
  return (
    <>
      <GlobalStyles theme={darkTheme} />
      <Layout>
        <main
          className={`w-[90%] lg:w-[740px] min-h-[720px] shadow-primary bg-second rounded-sm relative`}
        >
          <Metroneme />
        </main>
      </Layout>
    </>
  );
}

export default App;
