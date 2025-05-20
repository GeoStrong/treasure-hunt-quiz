import { Input } from '@/components/ui/input';

const QuizzQuestion = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl text-center text-[#3B2F2F] font-bold">
        The giant lizards of the past were called ___
      </h2>
      <Input
        type="text"
        placeholder="Type your answer here"
        className="mt-5 text-black placeholder:text-black border-amber-950 text-xl w-2/3 p-4"
      />
    </div>
  );
};
export default QuizzQuestion;
