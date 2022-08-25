import { useEffect } from 'react';

import { SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { SnippetEditor } from '@components/SnippetEditor';
import NewSnippetLayout from '@layout/NewSnippetLayout';
import { trpc } from '@lib/trpc';

export default function New() {
  const { data: session } = trpc.useQuery(['session.getSession']);
  // const monaco = useMonaco();

  // const handleEditorChange: OnChange = (value, event) => {
  //   console.log('here is the current model value:', value);
  // };

  // useEffect(() => {
  //   if (monaco) {
  //            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
  //       allowComments: true,
  //     });
  //          monaco.editor.setModelLanguage(
  //       model,
  //       fileTypes[file_path.split["."].pop()]
  //     );
  //   }
  // }, [monaco]);

  return (
    <NewSnippetLayout>
      <SandpackProvider
        theme="dark"
        files={{
          'package.json': '{}',
          'index.tsx': `export default function App() {
            return <h1>Hello Sandpack</h1>
          }`,
        }}
        customSetup={{
          entry: "/package.json",
        }}>
          
        <SnippetEditor />
      </SandpackProvider>
    </NewSnippetLayout>
  );
}
