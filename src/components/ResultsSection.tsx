const ResultsSection = () => {
    return (
        <div className="bg-very-dark-cyan p-8 h-full rounded-xl flex flex-col flex-wrap">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <p className="text-white">Tip Amount</p>
                    <p className="text-xs text-white/60">/ person</p>
                </div>
                <div>
                    <p className="text-strong-cyan text-3xl text-right font-bold">$4.27</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-10">
                <div>
                    <p className="text-white">Total</p>
                    <p className="text-xs text-white/60">/ person</p>
                </div>
                <div>
                    <p className="text-strong-cyan text-3xl text-right font-bold">$32.79</p>
                </div>
            </div>

            <button className="rounded-md mt-auto bg-strong-cyan hover:bg-teal-200 w-full py-2 text-very-dark-cyan font-bold">RESET</button>
        </div>
    )
}

export default ResultsSection;