"use client";
import React, { useEffect, useRef } from "react";
import Wrapper from "./_wraper";

export default function WysiwygEditor({ label, helperText, value = "", onChange, placeholder = "Write something...", className = "" }) {
  const editorRef = useRef(null);

  // Initialize content once or when value changes externally
  useEffect(() => {
    const el = editorRef.current;
    if (el && el.innerHTML !== value) {
      el.innerHTML = value || "";
    }
  }, [value]);

  const exec = (command, val = null) => {
    document.execCommand(command, false, val);
    triggerChange();
    editorRef.current.focus();
  };

  const triggerChange = () => {
    const newHtml = editorRef.current.innerHTML;
    onChange?.(newHtml);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData("text");
    document.execCommand("insertText", false, text);
    triggerChange();
  };

  const insertLink = () => {
    const url = prompt("Enter URL");
    if (url) exec("createLink", url);
  };

  return (
    <Wrapper label={label} helperText={helperText}>
      <div className={`rounded-md border border-gray-200 bg-white focus-within:ring-2 focus-within:ring-blue-500 ${className}`}>
        {/* Toolbar */}
        <div className="flex items-center gap-1 border-b border-gray-100 px-2 py-1 bg-gray-50 rounded-t-md">
          <button type="button" onClick={() => exec("bold")} className="px-2 py-1 text-sm rounded hover:bg-gray-200" title="Bold">
            <b>B</b>
          </button>
          <button type="button" onClick={() => exec("italic")} className="px-2 py-1 text-sm rounded hover:bg-gray-200 italic" title="Italic">
            I
          </button>
          <button type="button" onClick={() => exec("underline")} className="px-2 py-1 text-sm rounded hover:bg-gray-200 underline" title="Underline">
            U
          </button>

          {/* <div className="w-px h-5 bg-gray-300 mx-1" />

        <button type="button" onClick={() => exec("insertUnorderedList")} className="px-2 py-1 text-sm rounded hover:bg-gray-200" title="Bullet list">
          • List
        </button>
        <button type="button" onClick={() => exec("insertOrderedList")} className="px-2 py-1 text-sm rounded hover:bg-gray-200" title="Numbered list">
          1. List
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <button type="button" onClick={insertLink} className="px-2 py-1 text-sm rounded hover:bg-gray-200" title="Insert link">
          🔗
        </button>
        <button type="button" onClick={() => exec("removeFormat")} className="px-2 py-1 text-sm rounded hover:bg-gray-200" title="Clear formatting">
          ⌫
        </button> */}
        </div>

        {/* Editable area */}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={triggerChange}
          onPaste={handlePaste}
          data-placeholder={placeholder}
          className="min-h-[120px] px-3 py-2 text-sm focus:outline-none prose max-w-none
          empty:before:content-[attr(data-placeholder)] before:text-gray-400 before:pointer-events-none before:select-none"
        />
      </div>
    </Wrapper>
  );
}
