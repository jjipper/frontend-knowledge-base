import { Card } from './StockCard.styles';
import type { StockCardProps } from 'features/types/types';
import {
  TrendingUpIcon,
  TrendingDownIcon,
} from 'features/shared/ui/Icons/Icons';
import { useNavigate } from 'react-router-dom';

export const StockCard = ({
  name,
  ticker,
  mainIssue,
  price,
  percentage,
}: StockCardProps) => {
  const navigate = useNavigate();
  // NOTE: 함수는 handle~ 로 시작해야 한다. 왜냐며는 이벤트를 "핸들링" 하기 때문
  const handleCardClick = () => {
    navigate('/stock');
  };

  return (
    <Card onClick={handleCardClick}>
      <dl className="stock-info">
        <dt>
          <span className="name">{name}</span>
          <span className="ticker">{ticker}</span>
        </dt>
        <dd className="main-issue">{mainIssue}</dd>
      </dl>
      <div className="stock-price">
        <span className="price">{price}원</span>
        <span className={`percentage ${percentage > 0 ? 'up' : 'down'}`}>
          {percentage > 0 ? (
            <>
              <TrendingUpIcon sx={{ fontSize: 16 }} />+
            </>
          ) : (
            <TrendingDownIcon sx={{ fontSize: 16 }} />
          )}
          {percentage}%
        </span>
      </div>
    </Card>
  );
};
