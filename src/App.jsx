import Button from "./components/Button";
import Input from "./components/Input";
import './App.css';

const App = () => {
    
    let userName = "Adil Khosa";
    
    const firstHeading = {
        color: "purple",
    };

    const secondHeading = {
        color: "orange",
    };

    return(

        <div>
            <Button name='Click Me' />
            <Button name='Submit' />
            <Button name='Send' />
            <Button name='Find' />
            <br />
            <Input />
        </div>

        // <div>
        //     <h1 style={firstHeading}>Welcome {userName}</h1>
        //     <h2 style={secondHeading}>Danger Ahead!</h2>
        //     <p style={{ color: "blue", backgroundColor: "lightblue" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum cum tempore ipsam officia quibusdam autem modi reiciendis recusandae aut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, sequi obcaecati? Hic repellat, necessitatibus iure accusantium sit quod vero, voluptatem nostrum culpa possimus reiciendis adipisci laboriosam perferendis molestiae mollitia voluptatum ducimus molestias sint totam quisquam, optio ad illum consequuntur. Optio quaerat vitae molestiae sit ad accusamus hic repellendus totam quia?</p>
        //     <Button />
        // </div>
    
    );

};

export default App;
