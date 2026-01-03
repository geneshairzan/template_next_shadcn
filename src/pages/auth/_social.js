import UI from "@ui";
import Google from "./_google";

export default function App(props) {
  return (
    <>
      <div className="flex items-center gap-4 w-full my-4">
        <div className="w-full h-px bg-gray-300/90"></div>
        <p className="w-full text-nowrap text-sm text-gray-500/90">Continue with social </p>
        <div className="w-full h-px bg-gray-300/90"></div>
      </div>
      <Google />
    </>
  );
}
