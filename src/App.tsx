import { Named, NamedSpec, default as Default } from "./B";
import { default as TsxDefault } from "./A";

export default function App() {
    return (
        <>
            <Named />
            <NamedSpec />
            <Default />
            <TsxDefault />
        </>
    );
}
