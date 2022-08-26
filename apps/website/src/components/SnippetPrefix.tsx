import { Input } from 'ui';

interface Props {
  onChange: (prefix: string) => void;
}

export default function SnippetPrefix({ onChange }: Props) {
  return (
    <div className="">
      <form>
        <Input />
        <button>
          
        </button>
      </form>
    </div>
  );
}
