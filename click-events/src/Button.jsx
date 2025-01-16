function Button(){
    let count = 0
    const handleClick = (e) => {
        count = count + 1;
        e.target.textContent = `You clicked ${count} times.`;
    }
    return(
        <button className = "button" onClick={(e) => handleClick(e)}>Click me 😍</button>
    )
}

export default Button