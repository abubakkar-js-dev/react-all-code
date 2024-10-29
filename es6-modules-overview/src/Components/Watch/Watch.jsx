

const Watch = ({watch}) => {
    const {name,price} = watch;
    return (
        <div>
            <h3>Brand: {name}</h3>
            <h5>Price: {price} tk</h5>
        </div>
    );
};

export default Watch;