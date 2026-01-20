import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode }) {
  return (
    <Editor
      // height="300px"
      defaultLanguage="javascript"
      value={code}
      onChange={setCode}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
      }}
    />
  );
}
