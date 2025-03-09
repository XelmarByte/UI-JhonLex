import "./App.css";
import Nav from "./components/nav";
import { ThemeProvider } from "./components/ThemeProvider";


function App() {
  return (
    <>
      <ThemeProvider>
        <main className="h-svh text-center bg-background p-4">
          <Nav/>
          
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
