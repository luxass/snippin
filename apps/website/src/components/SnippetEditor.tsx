
import {
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackLayout,
  SandpackStack,
} from '@codesandbox/sandpack-react';
export function SnippetEditor() {
  return (
    <SandpackLayout>
      <SandpackStack className="!h-[calc(100vh-80px)]">
        <SandpackCodeViewer/>
      </SandpackStack>
    </SandpackLayout>
  );
}
