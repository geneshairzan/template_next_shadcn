import UI from "@ui";

export default function App(props) {
  return (
    <>
      <div className="flex items-center gap-4 w-full my-4">
        <div className="w-full h-px bg-gray-300/90"></div>
        <p className="w-full text-nowrap text-sm text-gray-500/90">Continue with social </p>
        <div className="w-full h-px bg-gray-300/90"></div>
      </div>
      <button type="button" className="w-full bg-gray-500/10 flex items-center justify-center h-12 rounded-full">
        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
      </button>
    </>
  );
}
