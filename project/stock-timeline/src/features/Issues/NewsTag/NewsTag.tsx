import { Tag } from './NewsTag.styles';
import { TrendingUpIcon } from 'features/shared/ui/Icons/Icons';

interface NewsTagProps {
  newsCount: number;
  mention: boolean;
}

const NewsTag = ({ newsCount, mention }: NewsTagProps) => {
  return (
    <Tag>
      <TrendingUpIcon sx={{ fontSize: 12 }} />
      <span className="tag-text">
        {newsCount} related news items
        {/* NOTE: 대부분의 마크업 작업에서 순수 "스트링"만 존재하는 경우는 없는게 좋다. */}
        {/* div 든 span 이든 태그를 감싸는 것이 정석 */}
        {mention && ', surge in mentions'}
      </span>
    </Tag>
  );
};

export { NewsTag };
