import React from 'react';

type Props = {
    name: string
}

const CharData: React.FC<Props> = ({ name }) => {
    return (
        <div className="CharData" >
            お名前: {name}
        </div>
    );
}

export default CharData;
