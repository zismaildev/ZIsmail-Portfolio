const Item = (porps) => {
    const { title, amout, img } = porps
    return (
        <li>{img} {title} <span>- {amout} </span> </li>
    );
}

export default Item