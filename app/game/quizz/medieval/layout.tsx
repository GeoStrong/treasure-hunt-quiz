import MedievalCanvas from '@/components/canvas/MedievalCanvas';
import { GiMedievalGate } from 'react-icons/gi';
import EraTemplate from '@/components/quizz/EraTemplate';

const MedievalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EraTemplate
      eraTitle="MEDIEVAL"
      titleIcon={<GiMedievalGate />}
      currentEraQuizz="medievalQuizz"
      previousEraQuizz="egyptQuizz"
      canvas={<MedievalCanvas />}
    >
      {children}
    </EraTemplate>
  );
};
export default MedievalLayout;
