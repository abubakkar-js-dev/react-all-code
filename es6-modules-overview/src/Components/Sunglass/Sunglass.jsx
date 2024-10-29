import { add,colorCodes, multiply as multiplication } from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass'



const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first,second);
    const multiply = multiplication(first,second);
    // const magneta = colorCodes.darkmagenta;
;
    return (
        <div style={{
            backgroundColor: colorCodes.darkgoldenrod,
            padding: '15px', margin: '15px',
            borderRadius: '15px'}}>
            <Watch></Watch>
           <p> SUM:{sum}</p>
            <p>Muliply:{multiply}</p>
        </div>
    );
};

export default Sunglass;