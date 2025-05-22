import { useStopwatch } from 'react-timer-hook';
const useQuizzStopwatch = () => {
  const { minutes, seconds, start, reset, pause } = useStopwatch({
    autoStart: false,
  });

  return {
    minutes,
    seconds,
    start,
    reset,
    pause,
  };
};
export default useQuizzStopwatch;
