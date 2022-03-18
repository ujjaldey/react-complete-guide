import './Card.css';

function Card(props) {
    // this is to receive the className parameter so that we can add custom css to the custom tag <Card>
    const classes = 'card ' + props.className;

    // props.children is a reserve name. we dont pass children property for the component.
    // custom react component cannot have any children inside the tag <Card></Card>.
    // but adding this {props.children}, we can now add children elements inside the <Card></Card>.
    return <div className={classes}>{props.children}</div>;
}

export default Card;