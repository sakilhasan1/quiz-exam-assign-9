import React from 'react';
import Option from '../Option/Option';

const Ans = ({ ans }) => {

    const options = ans.options;
    return (
        <div>
            {/* {
                options.map(option => <Option
                    option={option}
                ></Option>)
            } */}
            {/* <p>{ans}</p> */}
        </div>
    );
};

export default Ans;