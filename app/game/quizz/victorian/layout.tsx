import VictorianCanvas from '@/components/canvas/VictorianCanvas';
import { GiRailway } from 'react-icons/gi';
import EraTemplate from '@/components/quizz/EraTemplate';

const VictorianLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EraTemplate
      eraTitle="VICTORIAN"
      titleIcon={<GiRailway />}
      currentEraQuizz="victorianQuizz"
      previousEraQuizz="medievalQuizz"
      canvas={<VictorianCanvas />}
    >
      {children}
    </EraTemplate>
  );
};
export default VictorianLayout;
