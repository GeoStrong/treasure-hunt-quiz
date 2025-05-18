import React from 'react';
const QuizzQuestion: React.FC<{ params: { quizzId: string } }> = ({
  params: { quizzId },
}) => {
  return (
    <div>
      <h1 className="">Question Id {quizzId}</h1>
    </div>
  );
};
export default QuizzQuestion;
