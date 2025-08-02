function VariableDisplay () {
    let string = 'welcome to React';
    let number = 123;
    let boolean = true;
    let array = ['kami', 'Yousef', 'Shaikhan'];
    let obj = {name: 'k', number: 321, role: 'IT'};

    if (Math.random () > 0.5) {
        string = 'Welcome to advance React';
        number = 789;
        boolean = false;
        array = ['k', 'y', 'sh'];
        obj = {name: 'B', number: 582, role: 'Developer' };
    }

    return(
        <div>
            <h1>{string}</h1>
            <h2>{number}</h2>
            <h3>{boolean.toString()}</h3>
            <h4>{array.join(', ')}</h4>
            <h5>{obj.name}, {obj.number}, {obj.role}</h5>

        </div>
    )
}

export default VariableDisplay;

