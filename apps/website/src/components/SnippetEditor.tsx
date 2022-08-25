import { useEffect } from 'react';

import {
  FileTabs,
  SandpackLayout,
  SandpackStack,
  useActiveCode,
  useSandpack
} from '@codesandbox/sandpack-react';
import Editor, { useMonaco } from '@monaco-editor/react';

export function SnippetEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems: (model, position) => {
          return {
            suggestions: [
              {
                label: 'Async Block',
                kind: monaco.languages.CompletionItemKind.Snippet,
                documentation: 'Add an async block',
                insertText: ['(async () => {', '\t', '})()'].join('\n')
              }
            ]
          };
        }
      });
      monaco.languages.register;
    }
  }, [monaco]);

  return (
    <SandpackLayout>
      <SandpackStack className="!h-[calc(100vh-80px)]">
        <FileTabs />
        <div style={{ flex: 1, paddingTop: 8, background: '#1e1e1e' }}>
          <Editor
            width="100%"
            height="100%"
            language="javascript"
            theme="vs-dark"
            key={sandpack.activeFile}
            options={{
              
            }}
            defaultValue={code}
            onChange={(value) => updateCode(value || '')}
          />
        </div>
      </SandpackStack>
    </SandpackLayout>
  );
}
