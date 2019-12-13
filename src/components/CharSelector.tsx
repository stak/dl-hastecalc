import React from 'react';

type Props = {
  onChange: (char: string) => void
}

const CharSelector: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="CharSelector" >
      選べ:
            <button onClick={() => onChange('王子')}>王子</button>
      <button onClick={() => onChange('フルル')}>フルル</button>
    </div>
  );
}

export default CharSelector;
