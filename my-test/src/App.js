import VariableDisplay from "./component/variableDisplay";

function App() {
  return (
    <div className="App">
      <VariableDisplay/>
    </div>
  );
}

export default App;


///exercise

// what is the output of the following code?
// if Math.random() returns a value greater than 0.5, it will display "welcome to react course"
//what is the 0.5 in the code?
// 0.5 is a threshold value used to determine which message to display based on the random number generated.
// if put bolean true or false or undifine value the output not change
////////////
// function App() {
//   let var1 = 'welcome to IT course';
//   if(Math.random() > 0.5) {
//     var1= 'welcome to react course';
// }
// return <h1>{var1}</h1>

// }

// export default App;

//////////////////////////

// function App() {
//   let var1 = [1.2, 3, 4, 5];//just printing this number as string
// return <h1>{var1}</h1>

// }

// export default App;

////////////////////

// function App() {
//   const obj1 = {emid: '12345', empdept: 'IT'};

// return (<div>EMP Department: {obj1.emid}</div>) //is important to print the ubject shoud put inside the curly braces and need refrence like {var.name}

// }

// export default App;