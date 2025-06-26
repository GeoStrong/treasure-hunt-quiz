import FutureCanvas from '@/components/canvas/FutureCanvas';
import { GiMonoWheelRobot } from 'react-icons/gi';
import EraTemplate from '@/components/quizz/EraTemplate';

const FutureLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EraTemplate
      eraTitle="FUTURE"
      titleIcon={<GiMonoWheelRobot />}
      currentEraQuizz="futureQuizz"
      previousEraQuizz="1980Quizz"
      canvas={<FutureCanvas />}
    >
      {children}
    </EraTemplate>
  );
};
export default FutureLayout;
