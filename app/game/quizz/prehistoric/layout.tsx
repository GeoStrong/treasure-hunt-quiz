import PrehistoricCanvas from '@/components/canvas/PrehistoricCanvas';
import { GiDinosaurRex } from 'react-icons/gi';
import EraTemplate from '@/components/quizz/EraTemplate';

const PrehistoricLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EraTemplate
      eraTitle="PREHISTORIC"
      titleIcon={<GiDinosaurRex className="text-[#3B2F2F]" />}
      currentEraQuizz="prehistoricQuizz"
      canvas={<PrehistoricCanvas />}
    >
      {children}
    </EraTemplate>
  );
};
export default PrehistoricLayout;
