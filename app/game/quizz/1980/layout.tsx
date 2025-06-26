import Era1980Canvas from '@/components/canvas/1980Canvas';
import { ImPacman } from 'react-icons/im';
import EraTemplate from '@/components/quizz/EraTemplate';

const Era1980Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EraTemplate
      eraTitle="1980"
      titleIcon={<ImPacman />}
      currentEraQuizz="1980Quizz"
      previousEraQuizz="victorianQuizz"
      canvas={<Era1980Canvas />}
    >
      {children}
    </EraTemplate>
  );
};
export default Era1980Layout;
