function App() {
    return (
        <section className="w-[90vw] max-w-4xl h-[80vh] flex justify-between items-center flex-col md:flex-row bg-white md:p-5 rounded-md">
            <section
                id="steps"
                className="w-full md:w-1/3 h-1/3 md:h-full bg-mobile md:bg-desktop bg-no-repeat bg-cover bg-center md:rounded-xl pt-10 md:pl-5 lg:pl-10"
            >
                <ul id="stepList">
                    <li id="step">
                        <span>1</span>
                        <aside>
                            <p>step 1</p>
                            <p>your info</p>
                        </aside>
                    </li>
                    <li id="step">
                        <span>2</span>
                        <aside>
                            <p>step 2</p>
                            <p>select plan</p>
                        </aside>
                    </li>
                    <li id="step">
                        <span>3</span>
                        <aside>
                            <p>step 3</p>
                            <p>add-ons</p>
                        </aside>
                    </li>
                    <li id="step">
                        <span>4</span>
                        <aside>
                            <p>step 4</p>
                            <p>summary</p>
                        </aside>
                    </li>
                </ul>
            </section>
            <section id="form" className="w-full md:w-1/3 h-2/3 md:h-full md:pl-5">
                form
            </section>
        </section>
    );
}

export default App;
