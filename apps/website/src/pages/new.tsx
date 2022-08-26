import { useEffect } from 'react';

import { SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import SnippetBody from '@components/SnippetBody';
import { SnippetEditor } from '@components/SnippetEditor';
import SnippetPrefix from '@components/SnippetPrefix';
import NewSnippetLayout from '@layout/NewSnippetLayout';
import { trpc } from '@lib/trpc';

export default function New() {
  const { data: session } = trpc.useQuery(['session.getSession']);

  return (
    <NewSnippetLayout>
      <div className="w-1/2">
        <SnippetPrefix
          onChange={(prefix) => {
            console.log(prefix);
          }}
        />
        <SnippetBody
          onChange={(body) => {
            console.log(body);
          }}
        />
      </div>
      <SandpackProvider
        theme="dark"
        files={{
          'snippet.json': `{
  "For Loop": {
    "prefix": ["for", "for-const"],
    "body": ["for (const \${2:element} of \${1:array}) {", "\\t$0", "}"],
    "description": "A for loop."
  }
}`
        }}
        lang="json"
        customSetup={{
          entry: 'snippet.json'
        }}>
        <SnippetEditor />
      </SandpackProvider>
    </NewSnippetLayout>
  );
}
