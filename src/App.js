import { useState } from 'react';
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
                    <div><input className="px-3 border border-slate-700 w-150 " type="text" placeholder="Search"></input></div>
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

function Carasaul() {
    const images = [
        "https://jbsoftware.ca/wp-content/uploads/web-design.jpg",
        "https://img.freepik.com/premium-vector/isometric-landing-page-template-web-development_9209-2328.jpg?w=1800",
    ];
    const left = "<";
    const right = ">";
    const num = images.length;

    const [count, setCount] = useState(0);

    const handleLeftClick = () => {
        setCount((prevCount) => (prevCount - 1 + num) % num);
    };

    const handleRightClick = () => {
        setCount((prevCount) => (prevCount + 1) % num);
    };

    return (
        <>
            <br></br>
            <div className="flex justify-center items-center relative">
                <div className="w-10 text-center text-white bg-black rounded-full hover:bg-slate-700">
                    <button className="text-2xl" onClick={handleLeftClick}>
                        {left}
                    </button>
                </div>
                <img className="w-1/3" src={images[count]} alt="tech"></img>
                <div className="w-10 text-center text-white bg-black rounded-full hover:bg-slate-700">
                    <button className="text-2xl" onClick={handleRightClick}>
                        {right}
                    </button>
                </div>
            </div>
        </>
    );
}
export default function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Navbar></Navbar>
            <Carasaul></Carasaul>
        </>
    )
}