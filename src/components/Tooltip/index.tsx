import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Props {
  main: string;
  hover: string;
}

const index: React.FC<Props> = ({ main, hover }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{main}</TooltipTrigger>
        <TooltipContent>
          <p>{hover}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default index;
