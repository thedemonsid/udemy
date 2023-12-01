import { useState } from "react";

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
    "Music",
  ];

  return (
    <>
      {items.map((item) => (
        <div className="mx-5" key={item}>
          {item}
        </div>
      ))}
    </>
  );
}
function Navbar() {
  return (
    <nav>
      <div className="flex justify-around items-center py-2">
        <div className="text-xl">udemy</div>
        <div>categories</div>
        <div className="flex border border-slate-600 rounded-xl w-250">
          <input
            className=" w-[40em] px-3"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>Udemy Business</div>
        <div>Teach on Udemy</div>
        <div>My Learning</div>
        <div>L</div>
        <div>S</div>
        <div>B</div>
        <div className="bg-black-400">SS</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <SecondNav />
      </div>
      <hr />
    </nav>
  );
}

function Carousel() {
  const images = [
    "https://jbsoftware.ca/wp-content/uploads/web-design.jpg",
    "https://img.freepik.com/premium-vector/isometric-landing-page-template-web-development_9209-2328.jpg?w=1800",
  ];

  const [count, setCount] = useState(0);

  const handleLeftClick = () => {
    setCount((prevCount) => (prevCount - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCount((prevCount) => (prevCount + 1) % images.length);
  };

  return (
    <div className="flex justify-center items-center relative">
      <button className="w-10 text-center text-white bg-black rounded-full hover:bg-slate-700 text-2xl" onClick={handleLeftClick}>
        {"<"}
      </button>
      <img className="w-[120em] h-[30em] border" src={images[count]} alt="tech" />
      <button className="w-10 text-center text-white bg-black rounded-full hover:bg-slate-700 text-2xl" onClick={handleRightClick}>
        {">"}
      </button>
    </div>
  );
}
function LearningBox() {
  return (
    <div className="flex h-full mt-1 w-2/5 border border-slate-300 mr-3">
      <img
        className="h-[11em]"
        src="https://th.bing.com/th/id/OIP.Kn4W0UHHnPph4sYp4cHM8gHaHa?rs=1&pid=ImgDetMain"
        alt="web development"
      />
      <div className="flex flex-col justify-between m-2">
        <div>
          <h1 className="text-sm">
            The Complete 2023 Web Development Boo..
          </h1>
          <h1 className="text-lg font-extrabold mt-0">
            45.CSS Positioning
          </h1>
        </div>
        <h3 className="text-sm text-slate-600">
          <span className="font-semibold text-black">Lecture</span>* 9m left
        </h3>
      </div>
    </div>
  );
}
function MyLearning() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-3/4 border border-slate-400 h-[23em]">
        <div className="flex items-center justify-between p-5">
          <h1 className="text-4xl font-semibold font-serif">
            Let's Start Learning, Siddhesh Rahul
          </h1>
          <a
            href="https://github.com/thedemonsid"
            className="text-lg font-bold underline text-blue-800"
          >
            My Learning
          </a>
        </div>
        <div className="flex">
          <LearningBox />
          <LearningBox />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <br></br>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <MyLearning></MyLearning>
    </>
  );
}