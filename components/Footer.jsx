export default function Footer(){
    return(
        <>
        <footer className="bg-slate-900 text-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                   
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Nova Tech</h3>
                            <p className="text-sm text-slate-200">Everything you need <br />in seamless experience.</p>
                        </div>

                        {/* Nav Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors cursor-pointer">About</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Products</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Features</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}