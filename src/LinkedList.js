import "./LinkedList.css"
function Arrow(){
    return(
      <div className="arrow">--------{">"}</div>
    );
}
function Node(){
    return (
       <div className="node" >
       <div >data</div>
       <div >next</div>
       <Arrow></Arrow>
       </div>
    );
}


function LinkedList() {
    return (
      <div className="container">
       <Node></Node>
       <Node></Node>
      </div>
    );
  }
  
  export default LinkedList;