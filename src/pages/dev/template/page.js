import UI from "@ui";
import LinkItem from "@/appx/dev/template/linkItem";

export default function App(props) {
  return (
    <UI.Col className="flex flex-col p-2 gap-2">
      <LinkItem label="taiwind" value="https://tailwindcss.com/docs/installation/using-vite" />
      <LinkItem label="shadcn bloks" value="https://ui.shadcn.com/blocks/sidebar" />
      <LinkItem label="shadcn template" value="https://www.shadcn.io/template" />
      <LinkItem label="tailwindflex" value="https://tailwindflex.com/" />
      <LinkItem label="readymadeui" value="https://readymadeui.com/" />
      <LinkItem label="flowbite" value="https://flowbite.com/docs/components/card/" />
      <LinkItem label="prebuiltui" value="https://prebuiltui.com/components/form" />
      <LinkItem label="ytube ref" value=" https://www.youtube.com/watch?v=LPBLnS_iOho" />
      <LinkItem label="tweeker" value=" https://tweakcn.com/editor/theme" />
    </UI.Col>
  );
}
