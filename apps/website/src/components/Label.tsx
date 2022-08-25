export const Label: React.FC<{ slug?: string; children: string }> = (props) => (
	<label className="text-sm font-bold" htmlFor={props.slug}>
		{props.children}
	</label>
);