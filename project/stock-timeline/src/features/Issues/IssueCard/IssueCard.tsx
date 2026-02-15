import { TypeIcon } from '../TypeIcon/TypeIcon';
import { StockChips } from '../StockChips/StockChips';
import { NewsTag } from '../NewsTag/NewsTag';
import { EffectTag } from '../EffectTag/EffectTag';
import { Card, CardContent } from './IssueCard.styles';
import type { IssueCardProps } from 'features/types/types';
import { useNavigate } from 'react-router-dom';

const IssueCard = ({
  type,
  title,
  description,
  stocks,
  effect,
  newsCount,
  mention,
}: IssueCardProps) => {
  const navigate = useNavigate();
  const goToIssueDetail = () => {
    navigate('/issue');
  };
  // function asdf() {}
  // 1. 호이스팅
  // 2. this 문제가 있어
  // 3. 쉐도잉이 가능한 변수가 됨.
  // function asdf() {}
  // function asdf() {}

  return (
    <Card onClick={goToIssueDetail}>
      <TypeIcon type={type} />

      <CardContent>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>

        <StockChips showTicker={false} stocks={stocks} />

        <div className="EffectWrapper">
          <NewsTag newsCount={newsCount} mention={mention} />
          <EffectTag effect={effect} />
        </div>
      </CardContent>
    </Card>
  );
};

export { IssueCard };
