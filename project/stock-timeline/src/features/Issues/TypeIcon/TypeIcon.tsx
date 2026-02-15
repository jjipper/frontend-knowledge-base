import { IconWrapper } from './TypeIcon.styles';
import {
  MemoryIcon,
  BatterySaverIcon,
  AutoAwesomeIcon,
  ShowChartIcon,
  AttachMoneyIcon,
} from 'features/shared/ui/Icons/Icons';

interface TypeIconProps {
  type: 'memory' | 'battery' | 'ai' | 'chart' | 'money';
  fontSize?: number;
}

const IconType: Record<TypeIconProps['type'], React.ElementType> = {
  memory: MemoryIcon,
  battery: BatterySaverIcon,
  ai: AutoAwesomeIcon,
  chart: ShowChartIcon,
  money: AttachMoneyIcon,
};

const TypeIcon = ({ type, fontSize = 28 }: TypeIconProps) => {
  // 👍 아이콘 매핑(히트맵). -> 팩토리 패턴 이라고 많이 함.
  const IconComponent = IconType[type];

  return (
    <IconWrapper type={type}>
      <IconComponent sx={{ fontSize }} />
    </IconWrapper>
  );
};

export { TypeIcon };
