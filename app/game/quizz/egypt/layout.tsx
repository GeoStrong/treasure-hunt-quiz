import AncientEgyptCanvas from '@/components/canvas/AncientEgyptCanvas';
import { GiEgyptianSphinx } from 'react-icons/gi';
import EraTemplate from '@/components/quizz/EraTemplate';

const AncientEgyptLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EraTemplate
      eraTitle="EGYPT"
      titleIcon={<GiEgyptianSphinx />}
      currentEraQuizz="egyptQuizz"
      canvas={<AncientEgyptCanvas />}
      previousEraQuizz="prehistoricQuizz"
    >
      {children}
    </EraTemplate>
  );
};
export default AncientEgyptLayout;
