import { Chips, Chip } from './StockChips.styles';
import { useCallback } from 'react';

interface StockChipsProps {
  stocks: { name: string; ticker: string; percentage: number }[];
  showTicker: boolean;
}

const StockChips = ({ stocks, showTicker }: StockChipsProps) => {
  // NOTE: 메모이제이션 처리를 이렇게 할 수 있음. 다만 할 수 있다만 알고 실제로는 안쓰는게 좋은 경우가 많음.
  // 들어오는 인자가 한정된 경우에 좋음. 이 예제 처럼 무한히 들어올수 있다면, 무한한 수가 캐싱 되기 때문에
  // 오히려 메모리를 잡아먹는 안좋은 함수가 될 것이다.
  const StockType = useCallback((percentage: number) => {
    // 메모이제이션이란 함수를 실행시켜서 값을 얻는 것이 아닌 "인자"를 키 값으로 두어
    // 이전에 받은 "파람" 값이면 바로 이전의 리턴 값을 반환 한다.
    return percentage > 0 ? 'up' : 'down';
  }, []);

  return (
    <Chips>
      {stocks.map((stock) => {
        return (
          <Chip key={stock.ticker}>
            <div className="name-ticker">
              <span className="name">{stock.name}</span>
              {showTicker && <span className="ticker">{stock.ticker}</span>}
            </div>
            <span className={`percentage ${StockType(stock.percentage)}`}>
              {StockType(stock.percentage) === 'up' && '+'}
              {stock.percentage} %
            </span>
          </Chip>
        );
      })}
    </Chips>
  );
};

export { StockChips };
