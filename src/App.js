function SecondNav() {
    const items = [
        "Developement",
        "Business",
        "Finance & Accounting",
        "IT & Software",
        "Office Productivity",
        "Personel Developement",
        "Design",
        "Marketing",
        "Health & Fitness",
        "Music"
    ];

    return (
        <>
            {items.map(item => (
                <div className="mx-5" key={item}>{item}</div>
            ))}
        </>
    );
}
function Navbar() {
    return (
        <>
            <nav>
                <div className="flex justify-around ">
                    <div className=" text-xl">udemy</div>
                    <div>categories</div>
                    <div><input className="px-3 border border-slate-700 w-150 "type="text" placeholder="Search"></input></div>
                    <div>Udemy Business</div>
                    <div>Teach on Udemy</div>
                    <div>My Learning</div>
                    <div>L</div>
                    <div>S</div>
                    <div>B</div>
                    <div className="bg-black-400 ">SS</div>
                </div>
                <hr></hr>
                 <div className="flex justify-center">
                 <SecondNav></SecondNav>
                 </div>
                <hr></hr>
            </nav>

        </>
    )
}
export default function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Navbar></Navbar>
        </>
    )
}