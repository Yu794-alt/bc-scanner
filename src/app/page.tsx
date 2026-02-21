import InputSearch from "@/app/_components/InputSearch";

export default function Home() {
    return (
        <div className={'text-center mb-12 '}>
            <h1 className={"text-4xl font-bold mb-4 "}>
                Explore the <span
                className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Blockchain</span>
            </h1>
            <p className={'mb-8 text-prim-text'}>Search transactions, addresses, blocks, and tokens on the Ethereum network</p>
            <InputSearch/>
        </div>
    );
}
