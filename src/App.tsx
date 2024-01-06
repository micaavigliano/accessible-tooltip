import CopyToClipboard from "./components/CopyToClipboard";

function App() {
  return (
    <div className="flex flex-row items-center justify-center h-screen ">
      <CopyToClipboard text="micaela.avigliano@gmail.com" type="text" />
    </div>
  );
}

export default App;
